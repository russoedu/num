import { _array } from '../_helpers/_array'
import { _tec } from '../_helpers/_tec'
import { MultiplicityT as MultiplicityT, MultiplicityTypeT, FixedVns } from '../_helpers/types'
import { NumericMap } from './NumericMap'

export class AdvancedTecniques {
  #map: NumericMap
  /**
   * TÉCNICA 1 – PIRAMIDE
   */
  tec1Piramide: {
    title: string,
    results: {
        number: number,
        description: string,
      }[]
  }[]

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
  tec5PotenciaisComoReagem: {
    percentage: {
      name: 'Possuir'|'Compartilhar'|'Vivenciar'|'Espiritualidade',
      value: number
    }[],
    result: string
  }
  
  /**
   * TÉCNICA 6 – POTENCIAIS – COMO SENTEM
   */
  tec6PotenciaisComoSentem: {
    percentage: {
      name: 'Emoção'|'Razão',
      value: number
    }[],
    result: string
  }
  
  /**
   * TÉCNICA 7 – RISCOS - PRIMEIRA LEITURA
   */
  tec7Riscos1aLeitura: {
    percentage: {
      name: 'Exigência / solidão / violência / agressão'|
      'Desprendimento / incerteza / insegurança'|
      'Acomodação / dependência / depressão',
      value: number
    }[],
    result: string
  }

  /**
   * TÉCNICA 7 – RISCOS - SEGUNDA LEITURA
   */
  tec7Riscos2aLeitura: {
    percentage: {
      name: 'CP'|
      'VG'|
      'SC',
      value: number
    }[],
    result: string
  }
  
  /**
   * TÉCNICA 8 – ADEQUAÇÃO DA LINGUAGEM
   */
  
  /**
   * TÉCNICA 9 – VIBRAÇÃO DA EXPRESSÃO
   */
  
  /**
   * TÉCNICA 10 – INTERPRETANDO O 1º CICLO DE VIDA
   */
  
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
  }

  /**
   * Pyramid tecnique
   * @returns Pyramid tecnique results
   */
  #tec1Piramide () {
    return [
      {
        title:   'CD',
        results: _tec.piramide(this.#map.cd),
      },
      {
        title:   'MO',
        results: _tec.piramide(this.#map.mo),
      },
      {
        title:   'DM',
        results: _tec.piramide(this.#map.dm),
      },
      {
        title:   'EU',
        results: _tec.piramide(this.#map.eu),
      },
    ]
  }

  /**
   * Ausency tecnique
   * @returns Ausency tecnique results
   */
  #tec2Ausencia () {
    const unique = this.#map.uniqueNumbers
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
        type:      '1º Ciclo - 0/28 anos',
        multiples: [],
      },
      {
        type:      '2º Ciclo - 28/56 anos',
        multiples: [],
      },
      {
        type:      '3º Ciclo - + 56 anos',
        multiples: [],
      },
    ]

    const fixedMultiplicity = _array.duplicated(this.#map.fixedNumbers)
    if (fixedMultiplicity.length > 0) {
      for (const num of fixedMultiplicity) {
        const multiplicatedVns = this.#map.fixedVnNumbers
          .filter(vn => vn.number === num)
          .map(val => val.vn)

        allMultiplicities[0].multiples.push({
          vns:    multiplicatedVns,
          number: num,
          type:   MultiplicityTypeT[multiplicatedVns.length - 2],
        })
      }
    }

    const firstCycleMultiplicity = _array.duplicated(this.#map.firstCycleNumbers)
    if (firstCycleMultiplicity.length > 0) {
      for (const num of firstCycleMultiplicity) {
        const multiplicatedVns = this.#map.firstCycleVnNumbers
          .filter(vn => vn.number === num)
          .map(val => val.vn)

        if (_array.notInArray(multiplicatedVns, FixedVns).length > 0) {
          allMultiplicities[1].multiples.push({
            vns:    multiplicatedVns,
            number: num,
            type:   MultiplicityTypeT[multiplicatedVns.length - 2],
          })
        }
      }
    }

    const secondCycleMultiplicity = _array.duplicated(this.#map.secondCycleNumbers)
    if (secondCycleMultiplicity.length > 0) {
      for (const num of secondCycleMultiplicity) {
        const multiplicatedVns = this.#map.secondCycleVnNumbers
          .filter(vn => vn.number === num)
          .map(val => val.vn)

        if (_array.notInArray(multiplicatedVns, FixedVns).length > 0) {
          allMultiplicities[2].multiples.push({
            vns:    multiplicatedVns,
            number: num,
            type:   MultiplicityTypeT[multiplicatedVns.length - 2],
          })
        }
      }
    }

    const thirdCycleMultiplicity = _array.duplicated(this.#map.thirdCycleNumbers)
    if (thirdCycleMultiplicity.length > 0) {
      for (const num of thirdCycleMultiplicity) {
        const multiplicatedVns = this.#map.thirdCycleVnNumbers
          .filter(vn => vn.number === num)
          .map(val => val.vn)

        if (_array.notInArray(multiplicatedVns, FixedVns).length > 0) {
          allMultiplicities[3].multiples.push({
            vns:    multiplicatedVns,
            number: num,
            type:   MultiplicityTypeT[multiplicatedVns.length - 2],
          })
        }
      }
    }
    
    const multiplicity: MultiplicityT[] = []
    for (let i = 0; i < allMultiplicities.length; i++) {
      if(allMultiplicities[i].multiples.length > 0) {
        multiplicity.push(allMultiplicities[i])
      }
    }
    
    return multiplicity
  }

  /**
   * Reaction potentials tecnique
   * @returns Reaction potentials tecnique results
   */
  #tec5PotenciaisComoReagem () {
    const percentage: typeof this.tec5PotenciaisComoReagem.percentage = [
      {
        name:  'Possuir' as 'Possuir'|'Compartilhar'|'Vivenciar'|'Espiritualidade',
        value: this.#map.digitCount([1, 4, 22, 8]).count * 7,
      },
      {
        name:  'Compartilhar' as 'Possuir'|'Compartilhar'|'Vivenciar'|'Espiritualidade',
        value: this.#map.digitCount([2, 11, 6]).count * 7,
      },
      {
        name:  'Vivenciar' as 'Possuir'|'Compartilhar'|'Vivenciar'|'Espiritualidade',
        value: this.#map.digitCount([3, 5]).count * 7,
      },
      {
        name:  'Espiritualidade' as 'Possuir'|'Compartilhar'|'Vivenciar'|'Espiritualidade',
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
    const percentage: typeof this.tec6PotenciaisComoSentem.percentage = [
      {
        name:  'Emoção' as 'Emoção'|'Razão',
        value: this.#map.digitCount([2, 11, 3, 5, 6, 9]).count * 7,
      },
      {
        name:  'Razão' as 'Emoção'|'Razão',
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
    const percentage: typeof this.tec7Riscos1aLeitura.percentage = [
      {
        name: 'Exigência / solidão / violência / agressão' as 'Exigência / solidão / violência / agressão'|
      'Desprendimento / incerteza / insegurança'|
      'Acomodação / dependência / depressão',
        value: this.#map.digitCount([1, 4, 22, 7, 8]).count * 7,
      },
      {
        name: 'Desprendimento / incerteza / insegurança' as 'Exigência / solidão / violência / agressão'|
      'Desprendimento / incerteza / insegurança'|
      'Acomodação / dependência / depressão',
        value: this.#map.digitCount([3, 5, 9]).count * 7,
      },
      {
        name: 'Acomodação / dependência / depressão' as 'Exigência / solidão / violência / agressão'|
      'Desprendimento / incerteza / insegurança'|
      'Acomodação / dependência / depressão',
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
    const percentage: typeof this.tec7Riscos2aLeitura.percentage = [
      {
        name:  'CP' as 'CP'|'VG'|'SC',
        value: this.tec7Riscos1aLeitura.percentage[0].value + this.tec7Riscos1aLeitura.percentage[2].value,
      },
      {
        name:  'VG' as 'CP'|'VG'|'SC',
        value: this.tec7Riscos1aLeitura.percentage[1].value + this.tec7Riscos1aLeitura.percentage[2].value,
      },
      {
        name:  'SC' as 'CP'|'VG'|'SC',
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