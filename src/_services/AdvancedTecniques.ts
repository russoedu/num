import { _array } from '../_helpers/_array'
import { _tec } from '../_helpers/_tec'
import { CycleInterpretationT, CycleInterpretationVns, FinalSingleDigitT, LanguageStyleT, MultiplicityMultipleT, MultiplicityT, MultiplicityTypeT, OwnersAndPractitionersT, PercentageResultT, PercentageT, PyramidT, Relation, SingleDigitT, VN, vnOwnerPractitioner } from '../_helpers/types'
import { NumericMap } from './NumericMap'

export class AdvancedTecniques {
  #map: NumericMap

  tec0Cycles: {
    c1End: number,
    c2End: number,
    c3End: number,
    r1End: number,
    r2End: number,
    r3End: number,
    age: number,
    cycle: number,
    cycles: {
      name: string,
      vns: VN[],
    }[]
  }

  /**
   * TÉCNICA 1 – PIRAMIDE
   */
  tec1Piramide: PyramidT[]

  /**
   * TÉCNICA 2 – AUSÊNCIAS – AUS 
   */
  tec2Ausencia: SingleDigitT[]
  /**
   * TÉCNICA 3 – NOSSO MAPA ATUAL
   */
  
  /**
   * TÉCNICA 4 – DUPLICIDADES OU MAIS 
   */
  tec4Multiplicidades: {
    data: MultiplicityT[],
    comments: string,
  }

  /**
   * TÉCNICA 5 – POTENCIAIS – COMO REAGEM
   */
  tec5PotenciaisComoReagem: PercentageResultT

  /**
   * TÉCNICA 6 – POTENCIAIS – COMO SENTEM
   */
  tec6PotenciaisComoSentem: PercentageResultT
  
  /**
   * TÉCNICA 7 – RISCOS - PRIMEIRA LEITURA
   */
  tec7Riscos1aLeitura: PercentageResultT

  /**
   * TÉCNICA 7 – RISCOS - SEGUNDA LEITURA
   */
  tec7Riscos2aLeitura: PercentageResultT
  
  /**
   * TÉCNICA 8 – ADEQUAÇÃO DA LINGUAGEM
   */
  tec8AdequacaoDaLinguagem: LanguageStyleT[]
  
  /**
   * TÉCNICA 9 – VIBRAÇÃO DA EXPRESSÃO
   */
  tec9ExpressionVibration: { title: string, more: string }
  
  /**
   * TÉCNICA 10 – INTERPRETANDO O 1º CICLO DE VIDA
   */
  tec10InterpretacaoDoPrimeiroCiclo: CycleInterpretationT[]
  /**
   * TÉCNICA 11 – DONOS E PRATICANTES – RISCOS 
   */
  tec11DonosPraticantes: {
    normal: OwnersAndPractitionersT[]
    zeroAge?: OwnersAndPractitionersT[]
  }

  /**
   * TÉCNICA 12 – CONJUNÇÃO CD X MO OU MO X CD
   */
  
  /**
   * TÉCNICA 13 – POTENCIAIS – VÍCIOS – RECICLADOR DE ENERGIAS E RISCOS  
   */
  
  /**
   * TÉCNICA 14 – PUREZA
   */
  tec14Pureza: FinalSingleDigitT|false
  
  /**
   * TÉCNICA 15 – REALIZAÇÃO ESPONTÂNEA
   */
  
  /**
   * TÉCNICA 16 – CONQUISTA ESPONTÂNEA
   */
  
  /**
   * TÉCNICA 17 – RENASCIMENTO
   */
  
  /**
   * TÉCNICA 18 – MOMENTO DECISIVO FORTE
   */

  /**
   * TÉCNICA 19 – AVP (AUSÊNCIA DE VIBRAÇÃO POSITIVA) – RISCOS 
   */

  /**
   * TÉCNICA 20 – OPOSIÇÕES FORTES – RISCOS 
   */

  /**
   * TÉCNICA 21 – BLOQUEIO VIBRACIONAL – RISCOS 
   */

  /**
   * TÉCNICA 22 – INTERFERÊNCIA NO MAPA – RISCOS 
   */

  /**
   * TÉCNICA 23 – PRÁTICA AFETIVA
   */

  /**
   * TÉCNICA 24 – FERTILIDADE E FILHOS – PAIS E PROVEDORES – FORMAÇÃO DOS FILHOS
   */

  /**
   * TÉCNICA 25 – SEXUALIDADE
   */

  
  


  /*
   *   cd: string,
   *   mo: string,
   *   dm: string,
   *   eu: string,
   * }
   */
  constructor (map: NumericMap) {
    this.#map = map

    this.tec0Cycles = this.#tec0Cycles()
    this.tec1Piramide = this.#tec1Piramide()
    this.tec2Ausencia = this.#tec2Ausencia()
    this.tec4Multiplicidades = this.#tec4Multiplicidades()
    this.tec5PotenciaisComoReagem = this.#tec5PotenciaisComoReagem()
    this.tec6PotenciaisComoSentem = this.#tec6PotenciaisComoSentem()
    this.tec7Riscos1aLeitura = this.#tec7Riscos1aLeitura()
    this.tec7Riscos2aLeitura = this.#tec7Riscos2aLeitura()
    this.tec9ExpressionVibration = this.#tec9ExpressionVibration()
    this.tec10InterpretacaoDoPrimeiroCiclo = this.#tec10InterpretacaoDoPrimeiroCiclo()
    this.tec11DonosPraticantes = this.#tec11DonosPraticantes()
    this.tec14Pureza = this.#tec14Pureza()

    // Must be the last calculated because it uses other tecniques
    this.tec8AdequacaoDaLinguagem = this.#tec8AdequacaoDaLinguagem()
  }

  /**
   * Cycles info
   * @returns Cycles info
   */
  #tec0Cycles () {
    return {
      c1End:  28,
      c2End:  56,
      c3End:  150,
      r1End:  this.#map.rAges.r1,
      r2End:  this.#map.rAges.r2,
      r3End:  this.#map.rAges.r3,
      age:    this.#map.age,
      cycle:  this.#map.cycle.index,
      cycles: [
        {
          name: 'Fixas',
          vns:  this.#map.fixedVNsPosition,
        },
        {
          name: '1º Ciclo (0/28 anos)',
          vns:  this.#map.firstCycleOnlyVNsPosition,
        },
        {
          name: '2º Ciclo (28/56 anos)',
          vns:  this.#map.secondCycleOnlyVNsPosition,
        },
        {
          name: '3º Ciclo (+ 56 anos)',
          vns:  this.#map.thirdCycleOnlyVNsPosition,
        },
      ],
    }
  }
  /**
   * Pyramid tecnique
   * @returns Pyramid tecnique results
   */
  #tec1Piramide () {
    const pyramid: PyramidT[] = [
      {
        position: 'CD',
        results:  _tec.piramide(this.#map.cd),
      },
      {
        position: 'MO',
        results:  _tec.piramide(this.#map.mo),
      },
      {
        position: 'DM',
        results:  _tec.piramide(this.#map.dm),
      },
      {
        position: 'EU',
        results:  _tec.piramide(this.#map.eu),
      },
    ]

    return pyramid
  }

  /**
   * Ausency tecnique
   * @returns Ausency tecnique results
   */
  #tec2Ausencia (): SingleDigitT[] {
    const unique = this.#map.uniqueVNs
    const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9]

    return _array.notInArray(numbers, unique) as SingleDigitT[]
  }

  /**
   * Multiplicity tecnique
   * @returns Multiplicity tecnique results
   */
  #tec4Multiplicidades () {
    const allMultiplicities: MultiplicityT[] = [
      {
        type:      'Fixas',
        multiples: [],
      },
      {
        type:      '1º Ciclo (0/28 anos)',
        multiples: [],
      },
      {
        type:      '2º Ciclo (28/56 anos)',
        multiples: [],
      },
      {
        type:      '3º Ciclo (+ 56 anos)',
        multiples: [],
      },
    ]

    const fixedMultiplicity = _array.duplicatedFinalSingleDigitT(this.#map.fixedVNs)
    allMultiplicities[0].multiples.push(...this.#multiples(fixedMultiplicity, this.#map.fixedVNsPosition))

    const firstCycleMultiplicity = _array.duplicatedFinalSingleDigitT(this.#map.firstCycleVNs)
    allMultiplicities[1].multiples.push(...this.#multiples(firstCycleMultiplicity, this.#map.firstCycleVNsPosition))

    const secondCycleMultiplicity = _array.duplicatedFinalSingleDigitT(this.#map.secondCycleVNs)
    allMultiplicities[2].multiples.push(...this.#multiples(secondCycleMultiplicity, this.#map.secondCycleVNsPosition))

    const thirdCycleMultiplicity = _array.duplicatedFinalSingleDigitT(this.#map.thirdCycleVNs)
    allMultiplicities[3].multiples.push(...this.#multiples(thirdCycleMultiplicity, this.#map.thirdCycleVNsPosition))
    
    const multiplicity: MultiplicityT[] = []
    for (let i = 0; i < allMultiplicities.length; i++) {
      if(allMultiplicities[i].multiples.length > 0) {
        multiplicity.push(allMultiplicities[i])
      }
    }
    
    let hasT = false
    for (const mm of multiplicity) {
      for (const m of mm.multiples) {
        if (m.type !== 'D') {
          hasT = true
          break
        }   
      }
    }

    let comments = 'Quando tem Duplicidades ou mais deve ser mais reforçado.'
    
    if (hasT) {
      comments += ' De Triplicidade em diante deve procurar ajuda e viver a multiplicidade e o número seguinte.'
    }

    return {
      data: multiplicity,
      comments,
    }
  }
  
  #multiples (multiplicity: FinalSingleDigitT[], vnPositions: VN[]) {
    const multiples: MultiplicityMultipleT[] = []

    for (const num of multiplicity) {
      const multiplicatedVNsPosition = vnPositions
        .filter(vnp => vnp.vn === num ||
            (vnp.vn === 11 && num === 2) ||
            (vnp.vn === 22 && num === 4))
        .map(vnp => vnp.position)

      multiples.push({
        positions: multiplicatedVNsPosition,
        vn:        num,
        type:      MultiplicityTypeT[multiplicatedVNsPosition.length - 2],
      })
    }
    
    return multiples
  }

  /**
   * Reaction potentials tecnique
   * @returns Reaction potentials tecnique results
   */
  #tec5PotenciaisComoReagem () {
    const percentage: PercentageT[] = [
      {
        name:  'Possuir',
        value: this.#map.digitCount([1, 4, 22, 8]).count * 7,
      },
      {
        name:  'Compartilhar',
        value: this.#map.digitCount([2, 11, 6]).count * 7,
      },
      {
        name:  'Vivenciar',
        value: this.#map.digitCount([3, 5]).count * 7,
      },
      {
        name:  'Espiritualidade',
        value: this.#map.digitCount([7, 9, 11, 22]).count * 7,
      },
    ]
      .sort((a, b) => b.value - a.value)

    const result = percentage[0].value - percentage[1].value > 10
      ? percentage[0].name
      : percentage[1].value - percentage[2].value > 0
        ? `${percentage[0].name} e ${percentage[1].name}`
        : percentage[2].value - percentage[3].value > 0
          ? `${percentage[0].name}, ${percentage[1].name} e ${percentage[2].name}`
          : `${percentage[0].name}, ${percentage[1].name}, ${percentage[2].name} e ${percentage[2].name}`
          

    return{
      percentage,
      result,
    }
  }

  /**
   * Feeling potential tecnique
   * @returns Feeling potential tecnique results
   */
  #tec6PotenciaisComoSentem () {
    const percentage: PercentageT[] = [
      {
        name:  'Emoção',
        value: this.#map.digitCount([2, 11, 3, 5, 6, 9]).count * 7,
      },
      {
        name:  'Razão',
        value: this.#map.digitCount([1, 4, 22, 7, 8]).count * 7,
      },
    ]
      .sort((a, b) => b.value - a.value)

    const result = percentage[0].value - percentage[1].value > 10
      ? percentage[0].name
      : `${percentage[0].name} e ${percentage[1].name}`
          

    return{
      percentage,
      result,
    }
  }

  /**
   * First reading risks tecnique
   * @returns First reading risks tecnique results
   */
  #tec7Riscos1aLeitura () {
    const percentage: PercentageT[] = [
      {
        name:  'Exigência / solidão / violência / agressão',
        value: this.#map.digitCount([1, 4, 22, 7, 8]).count * 7,
      },
      {
        name:  'Desprendimento / incerteza / insegurança',
        value: this.#map.digitCount([3, 5, 9]).count * 7,
      },
      {
        name:  'Acomodação / dependência / depressão',
        value: this.#map.digitCount([2, 11, 4, 22, 6]).count * 7,
      },
    ]
      .sort((a, b) => b.value - a.value)

    const result = percentage[0].value - percentage[1].value > 10
      ? percentage[0].name
      : percentage[1].value - percentage[2].value > 0
        ? `${percentage[0].name} e ${percentage[1].name}`
        : `${percentage[0].name}, ${percentage[1].name} e ${percentage[2].name}`
          

    return{
      percentage,
      result,
    }
  }

  /**
   * First reading risks tecnique
   * @returns First reading risks tecnique results
   */
  #tec7Riscos2aLeitura () {
    const percentage: PercentageT[] = [
      {
        name:  'CP',
        value: this.tec7Riscos1aLeitura.percentage[0].value + this.tec7Riscos1aLeitura.percentage[2].value,
      },
      {
        name:  'VG',
        value: this.tec7Riscos1aLeitura.percentage[1].value + this.tec7Riscos1aLeitura.percentage[2].value,
      },
      {
        name:  'SC',
        value: this.tec7Riscos1aLeitura.percentage[0].value + this.tec7Riscos1aLeitura.percentage[1].value,
      },
    ]
      .sort((a, b) => b.value - a.value)

    const result = percentage[0].value - percentage[1].value > 10
      ? percentage[0].name
      : percentage[1].value - percentage[2].value > 0
        ? `${percentage[0].name} e ${percentage[1].name}`
        : `${percentage[0].name}, ${percentage[1].name} e ${percentage[2].name}`
          

    return{
      percentage,
      result,
    }
  }
  
  /**
   * Reading style
   * @returns Reading style results
   */
  #tec8AdequacaoDaLinguagem (): LanguageStyleT[] {
    // Has purity
    if (this.tec14Pureza !== false) {
      return [
        {
          reason:  'Pureza de',
          vn:      this.tec14Pureza,
          content: this.#tec14Style(this.tec14Pureza),
        },
      ]
    }

    // Fixed Multiplicity
    const fixedMultiples = _array.duplicatedFinalSingleDigitT(this.#map.fixedMainVNs)
    if (fixedMultiples.length > 0) {
      return fixedMultiples.map(vn => ({
        reason:  'Multiplicidade fixa de',
        vn,
        content: this.#tec14Style(vn),
      }))
    }

    // Cycle multiplicity
    const cycleVns = this.#map.cycle.vnNumbers.map(c => c.vn)
    const cycleMultiples = _array.duplicatedFinalSingleDigitT(cycleVns)
    if (cycleMultiples.length > 0) {
      return cycleMultiples.map(vn => ({
        reason:  'Multiplicidade de',
        vn,
        content: this.#tec14Style(vn),
      }))
    }

    // CD
    return [
      {
        reason:  'CD ',
        vn:      this.#map.cd,
        content: this.#tec14Style(this.#map.cd),
      },
    ]
  }

  /**
   * The content for each VN
   * @param vn - The number to retrieve the content
   * @returns The content
   */
  #tec14Style (vn: FinalSingleDigitT): string {
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
    
    const result: string =  style
      .find(st => st.numbers.includes(vn as FinalSingleDigitT))
      ?.style as string

    return result
  }

  /**
   * Expression vibration
   * @returns Expression vibration results
   */
  #tec9ExpressionVibration () {
    const ex = this.#map.ex
    
    if ([1, 4, 7, 8].includes(ex)) {
      return {
        title: 'Bons ouvintes',
        more:  'Falam pouco, com objetividade e clareza',
      }

    } else if ([3, 5, 9].includes(ex)) {
      return {
        title: 'Bons falantes',
        more:  'Dominam o ato de expressão oral. Falam com criatividade e desprendimento',
      }
    } else {
      return {
        title: 'Calma e delicadeza',
        more:  '',
      }
    }
  }

  /**
   * First Cycle interpretation
   * @returns First Cycle interpretation results
   */
  #tec10InterpretacaoDoPrimeiroCiclo () {
    const int: CycleInterpretationT[] = []
    
    for (const vn of CycleInterpretationVns) {
      if (this.#map.eu === vn.vn) {
        int.push({
          person:   vn.person,
          relation: Relation.ADORACAO_EU,
        })
      }
      if (this.#map.c1 === vn.vn) {
        int.push({
          person:   vn.person,
          relation: Relation.FORTISSIMA_C1,
        })
      }
      if (this.#map.mo === vn.vn) {
        int.push({
          person:   vn.person,
          relation: Relation.FORTE_MO,
        })
      }
      if (this.#map.cd === vn.vn || this.#map.r1 === vn.vn) {
        int.push({
          person:   vn.person,
          relation: Relation.MEDIA_CD_R1,
        })
      }
      if (this.#map.d1 === vn.vn || this.#map.dm === vn.vn) {
        int.push({
          person:   vn.person,
          relation: Relation.DIFICULDADE_D1_DM,
        })
      }
      if (this.#tec2Ausencia().includes(vn.vn)) {
        int.push({
          person:   vn.person,
          relation: Relation.AUSENCIA,
        })
      }
    }

    return int
  }

  #tec11DonosPraticantes () {
    const normal: OwnersAndPractitionersT[] = []
    const unique = this.#map.uniqueVNs
    const hasZero = unique.includes(0)

    
    if (!unique.includes(2) && unique.includes(11)) {
      unique.push(2)
    }
    if (!unique.includes(4) && unique.includes(22)) {
      unique.push(4)
    }
    unique.sort((a, b) => a - b)
    if (hasZero) {
      unique.shift()
    }
    
    for (const vn of unique) {
      normal.push(this.#ownerAndPractitionersSupport(vn, vnOwnerPractitioner[vn]))
    }
    

    if (hasZero) {
      const zeroAge: OwnersAndPractitionersT[] = []
      
      for (const vn of this.tec2Ausencia) {
        if (!unique.includes(vn)) {
          zeroAge.push(this.#ownerAndPractitionersSupport(vn, vnOwnerPractitioner[vn]))
        }
      }

      return {
        normal,
        zeroAge,
      } 
    } else {
      return {
        normal,
      } 
    }
  }

  #ownerAndPractitionersSupport (vn: FinalSingleDigitT, numbers: FinalSingleDigitT[]) {
    const percentage = this.#map.digitCount(numbers).count * 7

    const support = percentage <= 21
      ? 'pouca'
      : percentage <= 56
        ? 'média'
        : 'muita'
    
    return {
      vn,
      percentage,
      support,
    } as OwnersAndPractitionersT
  }

  /**
   * Purity interpretation
   * @returns Purity interpretation results
   */
  #tec14Pureza () {
    if (this.#map.cd === this.#map.mo) return this.#map.cd
    if (this.#map.cd === this.#map.dm) return this.#map.cd
    if (this.#map.mo === this.#map.dm) return this.#map.mo
    
    return false
  }
}