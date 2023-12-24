import { _array } from '../_helpers/_array'
import { _tec } from '../_helpers/_tec'
import { CycleInterpretationT, CycleInterpretationVns, FinalSingleDigitT, LanguageStyleT, MultiplicityMultipleT, MultiplicityT, MultiplicityTypeT, PercentageResultT, PercentageT, PyramidT, Relation, VN } from '../_helpers/types'
import { NumericMap } from './NumericMap'

export class AdvancedTecniques {
  #map: NumericMap
  /**
   * TÉCNICA 1 – PIRAMIDE
   */
  tec1Piramide: PyramidT[]

  /**
   * TÉCNICA 2 – AUSÊNCIAS – AUS 
   */
  tec2Ausencia: number[]
  /**
   * TÉCNICA 3 – NOSSO MAPA ATUAL
   */
  
  /**
   * TÉCNICA 4 – DUPLICIDADES OU MAIS 
   */
  tec4Multiplicidades: MultiplicityT[]

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
  tec10FirstCycleInterpretation: CycleInterpretationT[]
  /**
   * TÉCNICA 11 – DONOS E PRATICANTES – RISCOS 
   */
  
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

    this.tec1Piramide = this.#tec1Piramide()
    this.tec2Ausencia = this.#tec2Ausencia()
    this.tec4Multiplicidades = this.#tec4Multiplicidades()
    this.tec5PotenciaisComoReagem = this.#tec5PotenciaisComoReagem()
    this.tec6PotenciaisComoSentem = this.#tec6PotenciaisComoSentem()
    this.tec7Riscos1aLeitura = this.#tec7Riscos1aLeitura()
    this.tec7Riscos2aLeitura = this.#tec7Riscos2aLeitura()
    this.tec9ExpressionVibration = this.#tec9ExpressionVibration()
    this.tec10FirstCycleInterpretation = this.#tec10FirstCycleInterpretation()
    this.tec14Pureza = this.#tec14Pureza()

    // Must be the last calculated because it uses other tecniques
    this.tec8AdequacaoDaLinguagem = this.#tec8AdequacaoDaLinguagem()
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
  #tec2Ausencia () {
    const unique = this.#map.uniqueVNs
    const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9]

    return _array.notInArray(numbers, unique)
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
    
    return multiplicity
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
    if (this.tec14Pureza !== false) {
      return [
        {
          reason:  'Pureza de',
          vn:      this.tec14Pureza,
          content: this.#tec14Style(this.tec14Pureza),
        },
      ]
    }

    const multiples = _array.duplicatedFinalSingleDigitT(this.#map.fixedMainVNs)
    if (multiples.length > 0) {
      return multiples.map(vn => ({
        reason:  'Multiplicidade fixa de',
        vn,
        content: this.#tec14Style(vn),
      }))
    }
    
    return []
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
  #tec10FirstCycleInterpretation () {
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
  /**
   *mo
   *cd
   *eu
   *ex
   *d1
   *d2
   *dm
   *c1
   *c2
   *c3
   *r1
   *r2
   *r3
   *r4
   *rAges
   */
}