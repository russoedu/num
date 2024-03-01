import { NumericMap } from '../services/NumericMap'
import { _array } from './_array'
import { _number } from './_number'
import { VN, PyramidResultT, Cycle, VnPositionCycleT, MultiplicityMultipleT, SingleDigitVN, MultiplicityType, vnOwnerPractitioner, OwnersAndPractitionersDataT, PercentageT, SingleDigitVnPositionCycleT, CycleType } from './types'

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
          vn:          11,
          description: index[11],
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
          vn:          22,
          description: index[22],
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
    let multiplicityData: VN[] = []
    let vnPositions: VnPositionCycleT[] = []

    const multiples: MultiplicityMultipleT[] = []

    switch (cycle) {
    case Cycle.FIXED:
      multiplicityData = map.fixedVNs
      vnPositions = map.fixedVNsPosition
      break
    case Cycle.FIRST:
      multiplicityData = map.firstCycleVNs
      vnPositions = map.firstCycleVNsPosition
      break
    case Cycle.SECOND:
      multiplicityData = map.secondCycleVNs
      vnPositions = map.secondCycleVNsPosition
      break
    case Cycle.THIRD:
      multiplicityData = map.thirdCycleVNs
      vnPositions = map.thirdCycleVNsPosition
      break
    }

    const multipleVns = _array.duplicatedFinalSingleDigitT(multiplicityData).sort()

    for (const vn of multipleVns) {
      const potentialMultiplicities = vnPositions
        .filter(vnp => _number.match(vnp.vn, vn as SingleDigitVN))
        .sort((a, b) => a.start === b.start ? a.end - b.end : a.start - b.start)

      /*
       * const cycleMultiple: MultiplicityMultipleT[] = []
       * for (const potentialMultiplicity of potentialMultiplicities) {
       */

      // }

      const positions = potentialMultiplicities.map(m => m.position)
      const difCycles = (positions.includes('R1') && (positions.includes('R2') || positions.includes('R3') || positions.includes('R4'))) ||
      (positions.includes('R2') && (positions.includes('R3') || positions.includes('R4'))) ||
      (positions.includes('R3') && positions.includes('R4'))
        ? 1
        : 0
      const count = Math.min(MultiplicityType.length, potentialMultiplicities.length - 2 - difCycles)

      if (count >= 0) {
        multiples.push({
          positions: potentialMultiplicities.map(vnp => vnp.position),
          vn,
          type:      MultiplicityType[count],
          start:     0,
          end:       Infinity,
        })
      }
    }

    return multiples
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
  getResults (percentage: PercentageT[]) {
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
}

/**
 * Techniques and Advanced techniques support functions
 */
const _tec = new TecniquesHelper()
export { _tec }
