import { NumericMap } from '../services/NumericMap'
import { _array } from './_array'
import { _number } from './_number'
import { VN, PyramidResultT, Cycle, VnPositionCycleT, MultiplicityMultipleT, SingleDigitVN, MultiplicityType, vnOwnerPractitioner, OwnersAndPractitionersDataT, PercentageT, SingleDigitVnPositionCycleT, CycleType, CycleInterpretationVns, Relation, relationSortOrder, FirstCycleRelationsT, FirstCycleExtraT, espiritualityNumbers } from './types'

class TecniquesHelper {
  piramide (num: VN): PyramidResultT[] {
    const index: { [key in VN]: string } = {
      0:  'Terá uma vida atribulada, agidata e movimentada. Deverá aceitar a movimentação e atribulação, aproveitando esses fatos para produzir expansão, crescimentoe desenvolvimento na vida',
      1:  'força / determinação / autoconfiança / iniciativa / coragem / ousadia / liderança / conquistas / independência',
      2:  'união / parceria / flexibilidade / concessão / facilidade de adaptação / colaboração / cooperação',
      3:  'imaginação / criatividade / comunicação / sociabilidade / crescimento / expansão / valorização da estética / beleza',
      4:  'ordem / disciplina / dedicação / resistência / honestidade / estabilidade / persistência / trabalho intenso / segurança',
      5:  'liberdade / independência / mudanças / versatilidade / desprendimento / ousadia / coragem / transformações',
      6:  'tranquilidade / calma / afetuosidade / valorização do lar / conciliação / cooperação / harmonia',
      7:  'introspecção / autocontrole / intelectualidade / perfeccionismo / seletividade / prática espiritual / intuição / exigências',
      8:  'objetividade / organização / praticidade / retidão / honestidade / valorização das conquistas materiais / autoridade / justiça',
      9:  'solícito / impessoal / compreensivo / prestativo / determinação / sem preconceitos / prática espiritual / intuição / sentimental / ajudar e amparar o próximo indistintamente',
      11: 'praticar a espiritualidade / sabendo utilizar o potencial de reciclador de energias / intuição',
      22: 'praticar a espiritualidade / saber transmitir às pessoas aquilo que aprender e desenvolver / não reter ou ocultar nenhuma informação em qualquer área da vida / utilizar a magia de maneira correta / precocidade e sabedoria nata.',
    }

    if (num === 11) {
      return [
        {
          vn:          11,
          description: `${index[2]} / ${index[11]}`,
        },
      ]
    } else if (num === 22) {
      return [
        {
          vn:          22,
          description: `${index[4]} / ${index[22]}`,
        },
      ]
    } else if (num === 0) {
      return [
        {
          vn:          0,
          description: index[0],
        },
        {
          vn:          1,
          description: index[1],
        },
        {
          vn:          2,
          description: index[2],
        },
        {
          vn:          3,
          description: index[3],
        },
        {
          vn:          4,
          description: index[4],
        },
        {
          vn:          5,
          description: index[5],
        },
        {
          vn:          6,
          description: index[6],
        },
        {
          vn:          7,
          description: index[7],
        },
        {
          vn:          8,
          description: index[8],
        },
        {
          vn:          9,
          description: index[9],
        },
      ]
    } else {
      return [
        {
          vn:          num,
          description: index[num],
        }]
    }
  }

  /* #region Support methods */
  /**
   * Calculates the multiplicity for the cycle
   * @param map - The full numeric map
   * @param cycle - The cycle to be calculated
   * @returns The VN, its positions and the multiplicity type
   */
  multiples (map: NumericMap, cycle: Cycle) {
    /**
     * Simple list of VNs that are in the cycle
     */
    let cycleVns: VN[] = []
    /**
     * Details of the VNs that are in the cycle
     */
    let cycleDetails: VnPositionCycleT[] = []
    /**
     * The start and end of the cycle
     */
    const { start: cycleStart, end: cycleEnd } = this.cycleStartEnd(cycle)

    /**
     * The result multiplicities
     */
    const multiples: MultiplicityMultipleT[] = []

    switch (cycle) {
    case Cycle.FIXED:
      cycleVns = map.fixedVNs
      cycleDetails = map.fixedVNsPosition
      break
    case Cycle.FIRST:
      cycleVns = map.firstCycleVNs
      cycleDetails = map.firstCycleVNsPosition
      break
    case Cycle.SECOND:
      cycleVns = map.secondCycleVNs
      cycleDetails = map.secondCycleVNsPosition
      break
    case Cycle.THIRD:
      cycleVns = map.thirdCycleVNs
      cycleDetails = map.thirdCycleVNsPosition
      break
    }

    /**
     * VNs that repeat in the chosen cycle
     */
    const multipleVns = _array.duplicatedFinalSingleDigitT(cycleVns).sort()

    // Iterate only over the vns that repeat
    for (const vn of multipleVns) {
      const matches: MultiplicityMultipleT[] = []

      /**
       * Details of the VN that has multiples sorted by start and end
       */
      const potentialMultiplicities = cycleDetails
        .filter(vnp => _number.match(vnp.vn, vn as SingleDigitVN))

      // Check each with each and if the ages match, add the pair to "matches"
      for (let i = 0; i < potentialMultiplicities.length - 1; i++) {
        const cur = potentialMultiplicities[i]
        for (let j = i + 1; j < potentialMultiplicities.length; j++) {
          const check = potentialMultiplicities[j]

          const start = Math.max(cur.start, check.start, cycleStart)
          const end = Math.min(cur.end, check.end, cycleEnd)

          if (start < end && start >= cur.start && end <= cur.end) {
            // Add the first match
            matches.push({
              vn,
              positions: _array.sortUniquePosition([cur.position, check.position]),
              type:      'D',
              start,
              end,
            })
          }
        }
      }

      // Sort matches so all ages are grouped for the next step
      _array.sortVnAge(matches)

      // From the end of the array, compare each pair with the previous pair. If they match,
      for (let i = matches.length - 1; i > 0; i--) {
        const cur = matches[i]
        const prev = matches[i - 1]

        if (cur.start === prev.start && cur.end === prev.end) {
          prev.positions.push(...cur.positions)
          prev.positions = _array.sortUniquePosition(prev.positions)
          prev.type = this.#multiplicityType(prev.positions)
          matches.splice(i, 1)
        }
      }

      multiples.push(...matches)
    }

    return multiples
  }

  #multiplicityType (matches: any[]) {
    const t = Math.min(MultiplicityType.length, matches.length - 2)

    return MultiplicityType[t]
  }

  /**
   * The content for each VN
   * @param vn - The number to retrieve the content
   * @returns The content
   */
  styleFromTec14 (vn: VN): string {
    const style = [
      {
        numbers: [1],
        style:   'Rapidez, não se prender a detalhes',
      },
      {
        numbers: [2, 6],
        style:   'Calma / pausadamente / revelar com cuidado',
      },
      {
        numbers: [3, 5],
        style:   'Bom humor / criatividade',
      },
      {
        numbers: [4, 8],
        style:   'Segurança / precisão e clareza',
      },
      {
        numbers: [7, 9, 11, 22],
        style:   'Profundidade / qualidade / holisticamente',
      },
    ]

    const result: string = style
      .find(st => st.numbers.includes(vn as VN))
      ?.style as string

    return result
  }

  /**
   * Calculates the percentage and support for a VN
   * @param map - The full numeric map
   * @param vn - The VN to be checked
   * @returns The VN, the percentage and the support level
   */
  ownerAndPractitionersSupport (map: NumericMap, vn: VN) {
    const numbers = vnOwnerPractitioner[vn]
    const percentage = map.vnCount(numbers).count * 7

    const support = percentage <= 21
      ? 'pouca'
      : percentage <= 56
        ? 'média'
        : 'muita'

    return {
      vn,
      percentage,
      support,
    } as OwnersAndPractitionersDataT
  }

  /**
   * Compares the percetages with the highest value and extract the list of the ones that are less than 10% smaller
   * @param percentage - The list of percetages sum and name
   * @returns The percetages that should be considered
   */
  getPercentageResults (percentage: PercentageT[]) {
    percentage
      .sort((a, b) => b.value - a.value)

    const resultList: PercentageT[] = [percentage[0]]

    for (let i = 1; i < percentage.length; i++) {
      if (percentage[0].value - percentage[i].value < 10) {
        resultList.push(percentage[i])
      }
    }

    return resultList
  }

  /**
   * Retrieves the relations for tecnique 10
   * @param map - The full numeric map
   * @param firstCycleVNs - The list of VNs from the first cycle, excluding EX
   */
  tec10Relations (map: NumericMap, firstCycleVNs: SingleDigitVN[]) {
    const relations: FirstCycleRelationsT[] = []

    for (const vn of CycleInterpretationVns) {
      if (_number.match(map.EU, vn.vn)) {
        relations.push({
          person:   vn.person,
          relation: Relation.ADORACAO_EU,
        })
      }
      if (_number.match(map.C1, vn.vn)) {
        relations.push({
          person:   vn.person,
          relation: Relation.FORTISSIMA_C1,
        })
      }
      if (_number.match(map.MO, vn.vn)) {
        relations.push({
          person:   vn.person,
          relation: Relation.FORTE_MO,
        })
      }
      if (_number.match(map.CD, vn.vn) ||
        _number.match(map.achievements.R1.vn, vn.vn)) {
        relations.push({
          person:   vn.person,
          relation: Relation.MEDIA_CD_R1,
        })
      }
      if (_number.match(map.D1, vn.vn) ||
        _number.match(map.DM, vn.vn)) {
        relations.push({
          person:   vn.person,
          relation: Relation.DIFICULDADE_D1_DM,
        })
      }
      if (!firstCycleVNs.includes(vn.vn)) {
        relations.push({
          person:   vn.person,
          relation: Relation.AUSENCIA,
        })
      }
    }

    relations.sort((a, b) => {
      const aIndex = relationSortOrder.indexOf(a.relation)
      const bIndex = relationSortOrder.indexOf(b.relation)

      return aIndex - bIndex
    })

    return relations
  }

  /**
   * Retrieves the relations for tecnique 10
   * @param map - The full numeric map
   * @param firstCycleVNs - The list of VNs from the first cycle, excluding EX
   */
  tec10Extra (map: NumericMap, firstCycleVNs: SingleDigitVN[]) {
    const extra: FirstCycleExtraT[] = []

    const dm1 = _number.match(map.DM, 1)
    const d11 = _number.match(map.D1, 1)
    // Challenges
    if (dm1 || d11) {
      const d = dm1 && d11
        ? 'D1 e DM'
        : dm1
          ? 'DM'
          : 'D1'
      extra.push({
        position:    d,
        vn:          1,
        description: 'Com seu pai deveria aprender a independência, ousadia, coragem, autoconfiança e determinação.',
      })
    }

    const dm2 = _number.match(map.DM, 2)
    const d12 = _number.match(map.D1, 2)
    if (dm2 || d12) {
      const d = dm2 && d12
        ? 'D1 e DM'
        : dm2
          ? 'DM'
          : 'D1'
      extra.push({
        position:    d,
        vn:          2,
        description: 'Com sua mãe deveria aprender união e parceria, praticando concessão, flexibilidade, colaboração e adaptação.',
      })
    }

    const dm4 = _number.match(map.DM, 4)
    const d14 = _number.match(map.D1, 4)
    if (dm4 || d14) {
      const d = dm4 && d14
        ? 'D1 e DM'
        : dm4
          ? 'DM'
          : 'D1'
      extra.push({
        position:    d,
        vn:          4,
        description: 'Com seus avós deveria aprender estrutura, estabilidade e segurança.',
      })
    }

    // VN 3
    if (_number.match(map.C1, 3)) {
      extra.push({
        position:    'C1',
        vn:          3,
        description: 'Era previsto que fosse uma criança agitada, alegre, comunicativa.',
      })
    }
    if (_number.match(map.D1, 3)) {
      extra.push({
        position:    'D1',
        vn:          3,
        description: 'Era previsto que fosse uma criança agitada, inquieta, impaciente.',
      })
    }

    // VN 4
    if (_number.match(map.C1, 4)) {
      extra.push({
        position:    'C1',
        vn:          4,
        description: 'Provavelmente começou a trabalhar cedo. Quer trabalhar cedo em trabalho remunerado, sem marcas. Sendo que essa atividade não pode ultrapassar 6 h diárias e que não comprometa a formação do adolescente.',
      })
    }
    if (_number.match(map.D1, 4)) {
      extra.push({
        position:    'D1',
        vn:          4,
        description: 'Provavelmente foi forçada a trabalhar cedo em trabalho remunerado, por necessidades financeiras da família que podem atrapalhar a formação.',
      })
    }

    // VN 5
    if (_number.match(map.D1, 5)) {
      extra.push({
        position:    'C1',
        vn:          5,
        description: 'Momento de mudanças, alterações de vida sem dificuldades.',
      })
    }
    if (_number.match(map.D1, 5)) {
      extra.push({
        position:    'D1',
        vn:          5,
        description: 'Momento de mudanças, alterações de vida com dificuldades. Deveria aprender a ter liberdade, independência, mudanças, desprendimento e transformações.',
        obs:         firstCycleVNs.includes(3)
          ? 'Obs.: Acentuadas, pois possui 3 no primeiro ciclo.'
          : undefined,
      })
    }

    // VN 6
    if (_number.match(map.D1, 6)) {
      extra.push({
        position:    'C1',
        vn:          6,
        description: 'Você deve ter tendência de apego excessivo ao lar, familiares.',
      })
    }
    if (_number.match(map.D1, 6)) {
      extra.push({
        position:    'D1',
        vn:          6,
        description: 'Você deve ter tido dificuldades no relacionamento com todos os membros da família. Com a família deveria aprender a harmonia, afetuosidade, conciliação, cooperação e valorização do lar.',
        obs:         firstCycleVNs.includes(2)
          ? 'Obs.: Acentuadas, pois possui 2 no primeiro ciclo.'
          : undefined,
      })
    }

    // VN 7
    const c17 = _number.match(map.C1, 7)
    const d17 = _number.match(map.D1, 7)
    if (c17 || d17) {
      const position = c17 && d17
        ? 'C1 e D1'
        : c17
          ? 'C1'
          : 'D1'
      extra.push({
        position,
        vn:          7,
        description: 'Período marcado por inquietações difíceis de serem compreendidas pela família, essas inquietações seriam aliviadas com a prática da espiritualidade.',
      })
    }

    // VN 8
    const c18 = _number.match(map.C1, 8)
    const d18 = _number.match(map.D1, 8)
    if (c18 || d18) {
      const position = c18 && d18
        ? 'C1 e D1'
        : c18
          ? 'C1'
          : 'D1'
      extra.push({
        position,
        vn:          8,
        description: 'Evite envolvimento com ilegalidade até os 28 anos completos.',
      })
    }

    // VN 9
    if (_number.match(map.C1, 9)) {
      extra.push({
        position:    'C1',
        vn:          9,
        description: 'Período marcado por inquietações difíceis de serem compreendidas pela família, essas inquietações seriam aliviadas com a prática da espiritualidade.',
      })
    }

    // VN 0
    if (_number.match(map.D1, 0)) {
      extra.push({
        position:    'D1',
        vn:          0,
        description: 'É uma vida atribulada, agitada e movimentada com acentuada intensidade de acontecimentos.',
      })
    }

    // extra.sort((a, b) => {
    //   const aIndex = relationSortOrder.indexOf(a.relation)
    //   const bIndex = relationSortOrder.indexOf(b.relation)

    //   return aIndex - bIndex
    // })

    return extra
  }

  /**
   * Retrieves the espirituality for tecnique 10
   * @param map - The full numeric map
   * @param firstCycleVnsPositions - The list of VNs and positions from the first cycle, excluding EX
   */
  tec10Espirituality (firstCycleVnsPositions: VnPositionCycleT[]) {
    // Espirituality numbers
    const filtered = firstCycleVnsPositions
      .filter(vnp => espiritualityNumbers.includes(vnp.vn))

    // The map doesn't have any spirituality number
    if (filtered.length === 0) return undefined

    let hasMultiple = false

    for (const espNumber of espiritualityNumbers) {
      hasMultiple ||= filtered
        .filter(vnp => espNumber === vnp.vn)
        .length > 1
    }

    return hasMultiple
      ? 'Período marcado por inquietações intensificadas (multiplicidade de números de espiritualidade no primeiro ciclo).'
      : 'Período marcado por inquietações (presença de números de espiritualidade no primeiro ciclo).'
  }

  /**
   * List of all VNs and when it was received
   * @param map - The full numeric map
   */
  tec19AllReceivedVns (map: NumericMap) {
    const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9] as [1, 2, 3, 4, 5, 6, 7, 8, 9]

    // List of VNs (11 and 22 are converted) in the map at a certain age
    const receivedVns: SingleDigitVnPositionCycleT[] = map.allCyclesVNsPosition
      .map(arv => ({ ...arv, vn: _number.vnToSingleVn(arv.vn) }))
      .filter(received => !(['D1', 'D2', 'DM'].includes(received.position)))

    // List of VNs that are not in the map, (11 and 22 are converted for this check)
    const neverReceivedVns: SingleDigitVnPositionCycleT[] = _array
      .vnNotInArray(numbers, receivedVns.map(rv => rv.vn))
      .map(vn => ({
        position: '' as any,
        vn,
        type:     CycleType.FIXED,
        start:    Infinity,
        end:      Infinity,
      }))

    // Push both arrays and sort by VN and start
    const allReceivedVns = [
      ...neverReceivedVns,
      ...receivedVns,
    ]
      .sort((a, b) => a.vn === b.vn ? a.start - b.start : a.vn - b.vn)

    // Removes all but the first entry of each VN
    for (let i = allReceivedVns.length - 1; i >= 0; i--) {
      const receivedVnM = allReceivedVns[i]
      if (i > 0) {
        const receivedVnMPrev = allReceivedVns[i - 1]
        if (receivedVnMPrev.vn === receivedVnM.vn) {
          allReceivedVns.splice(i, 1)
        }
      }
    }

    return allReceivedVns
  }

  /**
   * Filters the list of positions by the number
   * @param map - The full numeric map
   * @param num - The number of the pair to be found
   * @returns The list of matching positions. If any of them is fixed, just this one, else, the list ordered by cycle start
   */
  tec20PairNumList (map: NumericMap, num: number) {
    const vnsPositionType = map.allCyclesVNsPosition

    const pairNumList = vnsPositionType
      .filter(vpt => num === vpt.vn)
      .sort((a, b) => {
        if (a.type === CycleType.FIXED && b.type === CycleType.CYCLE) {
          return -1
        } else if (a.type === CycleType.CYCLE && b.type === CycleType.FIXED) {
          return 1
        }

        return a.start - b.start !== 0
          ? a.start - b.start
          : a.end - b.end
      })

    // If there's a fixed value, removes the rest
    if (pairNumList[0].type === CycleType.FIXED) {
      pairNumList.splice(1, pairNumList.length - 1)
    } else {
      // Group the entries with overlapping ends and starts
      for (let i = pairNumList.length - 1; i >= 1; i--) {
        if (pairNumList[i].start <= pairNumList[i - 1].end) {
          pairNumList[i - 1].end = Math.max(pairNumList[i].end, pairNumList[i - 1].end)
          pairNumList.pop()
        }
      }
    }

    return pairNumList
  }

  /**
   * Retrieves the cycle start and end
   * @param cycle - The cycle to be checked
   * @returns The start and end in an object
   */
  cycleStartEnd (cycle: Cycle) {
    /**
     * The start of the cycle
     */
    let start: number = 0
    /**
     * The emd of the cycle
     */
    let end: number = 0

    switch (cycle) {
    case Cycle.FIXED:
      start = 0
      end = Infinity
      break
    case Cycle.FIRST:
      start = 0
      end = 28
      break
    case Cycle.SECOND:
      start = 28
      end = 56
      break
    case Cycle.THIRD:
      start = 56
      end = Infinity
      break
    }

    return {
      start,
      end,
    }
  }
}

/**
 * Techniques and Advanced techniques support functions
 */
const _tec = new TecniquesHelper()
export { _tec }
