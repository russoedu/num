import { _array } from '../_helpers/_array'
import { _tec } from '../_helpers/_tec'
import { MultiplicityT as MultiplicityT, MultiplicityTypeT, FixedVns } from '../_helpers/types'
import { NumericMap } from './NumericMap'

export class AdvancedTecniques {
  #map: NumericMap
  /**
   * TÉCNICA 1 – PIRAMIDE
   */
  piramide: {
    title: string,
    results: {
        number: number,
        description: string,
      }[]
  }[]

  /**
   * TÉCNICA 2 – AUSÊNCIAS – AUS 
   */
  ausencia: number[]
  /**
   * TÉCNICA 3 – NOSSO MAPA ATUAL
   */
  
  /**
   * TÉCNICA 4 – DUPLICIDADES OU MAIS 
   */
  multiplicidades: MultiplicityT[]

  /**
   * REGRAS PARA AS TÉCNICAS COM PERCENTUAIS
   * REGRAS PARA AS TÉCNICAS COM PERCENTUAIS
   *
   *
   *As técnicas de percentuais são: 5, 6, 7, 11, 13 e 25.
   *
   *
   *Regras
   *
   *Tabular – contar quantas vezes cada VN aparece no MNN. 
   *
   *Encontrar o percentual – cada VN corresponde a 7% - multiplicar pela quantidade de VNs encontradas.
   *
   *Subtrair do maior % o segundo maior %.
   *
   *Considerar a diferença entre eles: 
   *Se a diferença for maior que 10% – concentrou. 
   *Se a diferença for menor que 10% – empatou. 
   *
   *
   *Exemplos
   *
   *63% - 28% = 35% é maior que 10 – concentrou.
   *
   *42% - 35% = 7% é menor que 10 – empatou.
   *
   *35% - 14% = 21% é maior que 10 – concentrou.
   *
   *21% - 14% = 7% é menor que 10 – empatou.
   *
   */
  
  /**
   * TÉCNICA 5 – POTENCIAIS – COMO REAGEM
   */
  potenciais: {
    percentage: {
      name: 'Possuir'|'Compartilhar'|'Vivenciar'|'Espiritualidade',
      value: number
    }[],
    result: string
  }
  
  /**
   * TÉCNICA 6 – POTENCIAIS – COMO SENTEM
   */
  
  /**
   * TÉCNICA 7 – RISCOS
   */
  
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

    this.piramide = this.#piramide()
    this.ausencia = this.#ausencia()
    this.multiplicidades = this.#multiplicidades()
    this.potenciais = this.#potenciais()
  }

  #piramide () {
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

  #ausencia () {
    const unique = this.#map.uniqueNumbers
    const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9]

    return _array.notInArray(numbers, unique)
  }

  #multiplicidades () {
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

  #potenciais () {
    const percentage: {
      name: 'Possuir'|'Compartilhar'|'Vivenciar'|'Espiritualidade',
      value: number
    }[] = [
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
      : percentage[1].value - percentage[2].value !== 0
        ? `${percentage[0].name} e ${percentage[1].name}`
        : percentage[2].value - percentage[3].value !== 0
          ? `${percentage[0].name}, ${percentage[1].name} e ${percentage[2].name}`
          : `${percentage[0].name}, ${percentage[1].name}, ${percentage[2].name} e ${percentage[2].name}`
          

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