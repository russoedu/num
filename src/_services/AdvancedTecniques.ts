import { _array } from '../_helpers/_array'
import { _number } from '../_helpers/_number'
import { _tec } from '../_helpers/_tec'
import { Cycle, CycleInterpretationT, CycleInterpretationVns, ExpressionVibrationT, FinalSingleDigitT, LanguageStyleT, MultiplicitesT, MultiplicityMultipleT, MultiplicityT, MultiplicityType, OwnersAndPractitionersDataT, OwnersAndPractitionersT, PercentageResultT, PercentageT, PyramidT, Relation, RiskT, SingleDigitT, SpontaneousAccomplishmentT as SpontaneousAchievementsT, VN, VicesAndReciclerDataT, vnOwnerPractitioner } from '../_helpers/types'
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
  tec2Ausencia: SingleDigitT[]
  /**
   * TÉCNICA 3 – NOSSO MAPA ATUAL
   */

  /**
   * TÉCNICA 4 – DUPLICIDADES OU MAIS 
   */
  tec4Multiplicidades: MultiplicitesT

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
  tec9VibracaoDaExpressao: ExpressionVibrationT

  /**
   * TÉCNICA 10 – INTERPRETANDO O 1º CICLO DE VIDA
   */
  tec10InterpretacaoDoPrimeiroCiclo: CycleInterpretationT[]
  /**
   * TÉCNICA 11 – DONOS E PRATICANTES – RISCOS 
   */
  tec11DonosPraticantes: OwnersAndPractitionersT

  /**
   * TÉCNICA 12 – CONJUNÇÃO CD X MO OU MO X CD
   */
  tec12ConjuncaoCdMoOuMoCd: string

  /**
   * TÉCNICA 13 – POTENCIAIS – VÍCIOS – RECICLADOR DE ENERGIAS E RISCOS - PRIMEIRA LEITURA 
   */
  tec13PotenciaisViciosReciclador1aLeitura: PercentageResultT
  /**
   * TÉCNICA 13 – POTENCIAIS – VÍCIOS – RECICLADOR DE ENERGIAS E RISCOS - SEGUNDA LEITURA 
   */
  tec13PotenciaisViciosReciclador2aLeitura: string
  /**
   * TÉCNICA 13 – POTENCIAIS – VÍCIOS – RECICLADOR DE ENERGIAS E RISCOS - TERCEIRA LEITURA 
   */
  tec13PotenciaisViciosReciclador3aLeitura: VicesAndReciclerDataT[]

  /**
   * TÉCNICA 14 – PUREZA
   */
  tec14Pureza: FinalSingleDigitT | false

  /**
   * TÉCNICA 15 – REALIZAÇÃO ESPONTÂNEA
   */
  tec15RealizacaoEspontanea: SpontaneousAchievementsT[]

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
    this.tec8AdequacaoDaLinguagem = this.#tec8AdequacaoDaLinguagem()
    this.tec9VibracaoDaExpressao = this.#tec9VibracaoDaExpressao()
    this.tec10InterpretacaoDoPrimeiroCiclo = this.#tec10InterpretacaoDoPrimeiroCiclo()
    this.tec11DonosPraticantes = this.#tec11DonosPraticantes()
    this.tec12ConjuncaoCdMoOuMoCd = this.#tec12ConjuncaoCdMoOuMoCd()
    this.tec13PotenciaisViciosReciclador1aLeitura = this.#tec13PotenciaisViciosReciclador1aLeitura()
    this.tec13PotenciaisViciosReciclador2aLeitura = this.#tec13PotenciaisViciosReciclador2aLeitura()
    this.tec13PotenciaisViciosReciclador3aLeitura = this.#tec13PotenciaisViciosReciclador3aLeitura()
    this.tec14Pureza = this.#tec14Pureza()
    this.tec15RealizacaoEspontanea = this.#tec15RealizacaoEspontanea()
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

    return _array.notInArray(numbers, unique) as SingleDigitT[]
  }

  /**
   * Multiplicity tecnique
   * @returns Multiplicity tecnique results
   */
  #tec4Multiplicidades () {
    // Creates the array with all cycles
    const data: MultiplicityT[] = [
      {
        type:      Cycle.FIXED,
        multiples: this.#multiples(Cycle.FIXED),
      },
      {
        type:      Cycle.FIRST,
        multiples: this.#multiples(Cycle.FIRST),
      },
      {
        type:      Cycle.SECOND,
        multiples: this.#multiples(Cycle.SECOND),
      },
      {
        type:      Cycle.THIRD,
        multiples: this.#multiples(Cycle.THIRD),
      },
    ]

    let hasMoreThanDuplicity = false

    // Removes the cycles where no multiplicity was found and checks if any has more than duplicity
    for (let i = data.length - 1; i >= 0; i--) {
      if (data[i].multiples.length <= 0) {
        data.splice(i, 1)
      } else {
        hasMoreThanDuplicity ||= data[i].multiples.reduce((p, c) => p || (c.type !== 'D'), false)
      }
    }

    let comments = 'Quando tem Duplicidades ou mais deve ser mais reforçado.'

    if (hasMoreThanDuplicity) {
      comments += ' De Triplicidade em diante deve procurar ajuda e viver a multiplicidade e o número seguinte.'
    }

    return {
      data,
      comments,
    }
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
        ? `${ percentage[0].name } e ${ percentage[1].name }`
        : percentage[2].value - percentage[3].value > 0
          ? `${ percentage[0].name }, ${ percentage[1].name } e ${ percentage[2].name }`
          : `${ percentage[0].name }, ${ percentage[1].name }, ${ percentage[2].name } e ${ percentage[2].name }`


    return {
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
      : `${ percentage[0].name } e ${ percentage[1].name }`


    return {
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

    const result = _array.join(this.#getResults(percentage).map(r => r.name))

    return {
      percentage,
      result,
    }
  }

  /**
   * First reading risks tecnique
   * @returns First reading risks tecnique results
   */
  #tec7Riscos2aLeitura () {
    const firstReadingPercentage = this.#tec7Riscos1aLeitura().percentage
    const percentage: PercentageT[] = [
      {
        name:  'CP',
        value: firstReadingPercentage[0].value + firstReadingPercentage[2].value,
      },
      {
        name:  'VG',
        value: firstReadingPercentage[1].value + firstReadingPercentage[2].value,
      },
      {
        name:  'SC',
        value: firstReadingPercentage[0].value + firstReadingPercentage[1].value,
      },
    ]

    const result = _array.join(this.#getResults(percentage).map(r => r.name))

    return {
      percentage,
      result,
    }
  }

  /**
   * Reading style
   * @returns Reading style results
   */
  #tec8AdequacaoDaLinguagem (): LanguageStyleT[] {
    const tec14 = this.#tec14Pureza()
    // Has purity
    if (tec14 !== false) {
      return [
        {
          reason:  'Pureza de',
          vn:      tec14,
          content: this.#styleFromTec14(tec14),
        },
      ]
    }

    // Fixed Multiplicity
    const fixedMultiples = _array.duplicatedFinalSingleDigitT(this.#map.fixedMainVNs)
    if (fixedMultiples.length > 0) {
      return fixedMultiples.map(vn => ({
        reason:  'Multiplicidade fixa de',
        vn,
        content: this.#styleFromTec14(vn),
      }))
    }

    // Cycle multiplicity
    const cycleVns = this.#map.cycle.vnNumbers.map(c => c.vn)
    const cycleMultiples = _array.duplicatedFinalSingleDigitT(cycleVns)
    if (cycleMultiples.length > 0) {
      return cycleMultiples.map(vn => ({
        reason:  'Multiplicidade de',
        vn,
        content: this.#styleFromTec14(vn),
      }))
    }

    // CD
    return [
      {
        reason:  'CD ',
        vn:      this.#map.cd,
        content: this.#styleFromTec14(this.#map.cd),
      },
    ]
  }

  /**
   * Expression vibration
   * @returns Expression vibration results
   */
  #tec9VibracaoDaExpressao () {
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

  /**
   * Owners and practitioners interpretation
   * @returns Owners and practitioners interpretation results
   */
  #tec11DonosPraticantes () {
    const normal: OwnersAndPractitionersDataT[] = []
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
      normal.push(this.#ownerAndPractitionersSupport(vn))
    }


    if (hasZero) {
      const zeroAge: OwnersAndPractitionersDataT[] = []

      for (const vn of this.#tec2Ausencia()) {
        if (!unique.includes(vn)) {
          zeroAge.push(this.#ownerAndPractitionersSupport(vn))
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

  /**
   * CD x MO or MO x CD conjuction
   * @returns CD x MO or MO x CD conjuction results
   */
  #tec12ConjuncaoCdMoOuMoCd () {
    const small = Math.min(this.#map.cd, this.#map.mo).toString()
    const big = Math.max(this.#map.cd, this.#map.mo).toString()

    const concat = small + big

    switch (concat) {
    case '11':
      return 'Pureza de coragem / líder nato'
    case '12':
      return 'Líder da união / só lidera na união / nunca sozinho'
    case '13':
      return 'Para crescer e desenvolver-se é preciso coragem / força / determinação com criatividade e comunicabilidade'
    case '14':
      return 'Lutar e conquistar mantendo estabilidade / segurança /  confiar em seus potenciais'
    case '15':
      return 'Liderança com liberdade / desprendimento / múltiplas vivências'
    case '16':
      return 'Liderança com afetividade / emoção / conciliação'
    case '17':
      return 'Liderança com perfeição / exigência / sabedoria'
    case '18':
      return 'Liderança com justiça / retidão / verdade'
    case '19':
      return 'Ter força / coragem para amparar / auxiliar o próximo'
    case '111':
      return 'Líder da união / só lidera na união / nunca sozinho / prática da espiritualidade'
    case '122':
      return 'Lutar e conquistar mantendo estabilidade / segurança / confiar em seus potenciais / prática da espiritualidade'
    case '22':
      return 'Pureza de união / flexibilidade / viver sempre unido '
    case '23':
      return 'União patrocina o crescimento / a expansão'
    case '24':
      return 'União proporciona segurança / estabilidade'
    case '25':
      return 'União com liberdade / desprendimento / múltiplas vivências'
    case '26':
      return 'Prática afetiva perfeita / união com afetividade'
    case '27':
      return 'União patrocina o autoconhecimento'
    case '28':
      return 'União baseada na justiça / retidão / verdade'
    case '29':
      return 'União de almas / união profunda com solicitação de acentuado companheirismo'
    case '211':
      return 'Pureza de união / flexibilidade / viver sempre unido / prática da espiritualidade'
    case '222':
      return 'União proporciona segurança / estabilidade / prática da espiritualidade'
    case '33':
      return 'Pureza de criação / talentos / expansão '
    case '34':
      return 'Crescimento proporciona segurança / estabilidade'
    case '35':
      return 'Crescimento / expansão sem fronteiras / diversificação / multiplicidade'
    case '36':
      return 'Prática efetiva com criatividade e desenvolvimento'
    case '37':
      return 'Crescimento para desenvolvimento de espiritualidade / autoconhecimento / sabedoria'
    case '38':
      return 'Crescimento justo / correto / verdadeiro'
    case '39':
      return 'Crescimento da alma / pessoa com interesses diversificados (acentuada curiosidade)'
    case '311':
      return 'União patrocina o crescimento / a expansão / prática da espiritualidade'
    case '322':
      return 'Crescimento proporciona segurança / estabilidade / prática da espiritualidade'
    case '44':
      return 'Pureza de estabilidade / segurança / trabalhador nato'
    case '45':
      return 'Segurança / estabilidade é adquirida pela liberdade / vivências'
    case '46':
      return 'Segurança nos sentimentos afetivos'
    case '47':
      return 'Estabilidade na prática do autoconhecimento e da espiritualidade'
    case '48':
      return 'Segurança no julgar / alto grau de correção / confiabilidade'
    case '49':
      return 'Controle da alma /  acentuada necessidade de controlar diversos aspectos da vida '
    case '411':
      return 'União proporciona segurança / estabilidade / prática da espiritualidade '
    case '422':
      return 'Pureza de estabilidade / segurança / trabalhador nato / prática da espiritualidade'
    case '55':
      return 'Pureza de liberdade / vivências / desprendimento para mudanças'
    case '56':
      return 'Afetividade com liberdade / vivências / mudanças '
    case '57':
      return 'Necessidade de liberdade / vivências para se autoconhecer'
    case '58':
      return 'Prática da justiça / retidão, considerando múltiplos aspectos (mediador)'
    case '59':
      return 'Alma livre / a mais intensa liberdade / desprendimento acentuado em todos os aspectos da vida'
    case '511':
      return 'União com liberdade /desprendimento / múltiplas vivências / prática da espiritualidade'
    case '522':
      return 'Segurança / estabilidade é adquirida pela liberdade / vivências / prática da espiritualidade'
    case '66':
      return 'Pureza de emoção / harmonia / alto potencial afetivo'
    case '67':
      return 'Amor com sabedoria / profundidade e exigências'
    case '68':
      return 'Amor com justiça / verdade / honestidade / retidão'
    case '69':
      return 'Amor de almas / amor com entrega total e duradouro'
    case '611':
      return 'Prática afetiva perfeita / união com afetividade / prática da espiritualidade'
    case '622':
      return 'Segurança nos sentimentos afetivos / prática da espiritualidade'
    case '77':
      return 'Pureza de autoconhecimento / espiritualidade / conhecimentos '
    case '78':
      return 'Sabedoria justa / correta / verdadeira'
    case '79':
      return 'Sabedoria da alma / pessoa sábia e conceituado conhecimento'
    case '711':
      return 'União patrocina o autoconhecimento / prática da espiritualidade'
    case '722':
      return 'Estabilidade na prática do autoconhecimento e da espiritualidade'
    case '88':
      return 'Pureza de correção / alto grau de confiabilidade / excessivamente verdadeiro '
    case '89':
      return 'Alma justa / correta / verdadeira '
    case '811':
      return 'União baseada na justiça / retidão / verdade / prática da espiritualidade'
    case '822':
      return 'Segurança no julgar / alto grau de correção / confiabilidade / prática da espiritualidade'
    case '99':
      return 'Pureza da alma / pessoa autêntica / cristalina '
    case '911':
      return 'União de almas / união profunda com solicitação de acentuado companheirismo / prática da espiritualidade'
    case '922':
      return 'Controle da alma /acentuada necessidade de controlar diversos aspectos da vida / prática da espiritualidade'
    case '1111':
      return 'Pureza de união / intuição / sensibilidade / prática da espiritualidade / reciclar energias '
    case '1122':
      return 'União proporciona segurança / estabilidade / intuição / sabedoria / prática da espiritualidade'
    case '2222':
      return 'Pureza de estabilidade / sabedoria / magia / maestria / prática da espiritualidade'
    default:
      return ''
    }
  }

  /**
   * Potentials, vices and recicler 1st reading interpretation
   * @returns Potentials, vices and recicler 1st reading interpretation results
   */
  #tec13PotenciaisViciosReciclador1aLeitura () {
    const percentage: PercentageT[] = [
      {
        name:  'Honestidade',
        value: this.#map.digitCount([1, 4, 22, 7, 8]).count * 7,
      },
      {
        name:  'Colaboração / participação',
        value: this.#map.digitCount([2, 11, 3, 5, 6, 9]).count * 7,
      },
      {
        name:  'Trabalho',
        value: this.#map.digitCount([1, 4, 22, 8]).count * 7,
      },
      {
        name:  'Espiritualidade',
        value: this.#map.digitCount([7, 9, 11, 22]).count * 7,
      },
    ]

    const hasEspiritualityOnFixes = this.#map.fixedMainVNs
      .filter(fixed => [7, 9, 11, 22].includes(fixed))
      .length > 0

    const resultList = this.#getResults(percentage).map(r => r.name)

    if (!resultList.includes('Espiritualidade') && hasEspiritualityOnFixes) {
      resultList.push('Espiritualidade')
    }

    return {
      percentage,
      result: _array.join(resultList),
    }
  }

  /**
   * Potentials, vices and recicler 2nd reading interpretation
   * @returns Potentials, vices and recicler 2nd reading interpretation results
   */
  #tec13PotenciaisViciosReciclador2aLeitura () {
    const percentage = this.#map.digitCount([1, 3, 4, 5, 7, 8, 9]).count * 7


    return percentage >= 80
      ? `Conquistas diversas é potencial com ${ percentage }%`
      : 'Conquistas diversas não é potencial'
  }

  /**
   * Potentials, vices and recicler 3rd reading interpretation
   * @returns Potentials, vices and recicler 2nd reading interpretation results
   */
  #tec13PotenciaisViciosReciclador3aLeitura () {
    const percentage = this.#map.digitCount([7, 9, 11, 22]).count * 7
    const risk: RiskT = percentage <= 15
      ? 'fraco'
      : percentage <= 40
        ? 'médio'
        : 'forte'

    const recyclingRisk: RiskT = risk !== 'forte' && this.#map.vns.includes(11)
      ? 'forte - VN 11 presente'
      : risk

    const data: VicesAndReciclerDataT[] = [
      {
        name: 'Vícios',
        percentage,
        risk,
      },
      {
        name: 'Reciclador',
        percentage,
        risk: recyclingRisk,
      },
    ]

    return data
  }
  /**
   * Purity interpretation
   * @returns Purity interpretation results
   */
  #tec14Pureza () {
    const cd = _number.sum(this.#map.cd)
    const mo = _number.sum(this.#map.mo)
    const dm = _number.sum(this.#map.dm)

    if (cd === mo) return cd
    if (cd === dm) return cd
    if (mo === dm) return mo
    

    return false
  }

  /**
   * Spontaneous Achievements interpretation
   * @returns Spontaneous Achievements interpretation results
   */
  #tec15RealizacaoEspontanea () {
    const result: SpontaneousAchievementsT[] = []

    const positions = ['CD', 'MO', 'EU'] as ('CD' | 'MO' | 'EU')[]

    for (const position of positions) {
      const p = position === 'MO'
        ? this.#map.mo
        : position === 'CD'
          ? this.#map.cd
          : this.#map.eu

      for (const achievement of this.#map.achievements) {
        if (achievement.vn === p) {
          const existing = result.find(r => r.position === position)
  
          if (typeof existing !== 'undefined' && existing.end === achievement.start) {
            existing.end = achievement.end
          } else {
            result.push({
              position: position,
              start:    achievement.start,
              end:      achievement.end,
            })
          }
        }
      }
    }
    

    return result
  }

  /* #region Support methods */
  /**
   * Calculates the multiplicity for the cycle
   * @param cycle - The cycle to be calculated
   * @returns The VN, its positions and the multiplicity type
   */
  #multiples (cycle: Cycle) {
    let multiplicityData: FinalSingleDigitT[] = []
    let vnPositions: VN[] = []

    const multiples: MultiplicityMultipleT[] = []

    switch (cycle) {
    case Cycle.FIXED:
      multiplicityData = this.#map.fixedVNs
      vnPositions = this.#map.fixedVNsPosition
      break
    case Cycle.FIRST:
      multiplicityData = this.#map.firstCycleVNs
      vnPositions = this.#map.firstCycleVNsPosition
      break
    case Cycle.SECOND:
      multiplicityData = this.#map.secondCycleVNs
      vnPositions = this.#map.secondCycleVNsPosition
      break
    case Cycle.THIRD:
      multiplicityData = this.#map.thirdCycleVNs
      vnPositions = this.#map.thirdCycleVNsPosition
      break
    }

    const multiplicity = _array.duplicatedFinalSingleDigitT(multiplicityData)

    for (const num of multiplicity) {
      const multiplicatedVNsPosition = vnPositions
        .filter(vnp => vnp.vn === num ||
          (vnp.vn === 11 && num === 2) ||
          (vnp.vn === 22 && num === 4))
        .map(vnp => vnp.position)

      multiples.push({
        positions: multiplicatedVNsPosition,
        vn:        num,
        type:      MultiplicityType[multiplicatedVNsPosition.length - 2],
      })
    }

    return multiples
  }

  /**
   * The content for each VN
   * @param vn - The number to retrieve the content
   * @returns The content
   */
  #styleFromTec14 (vn: FinalSingleDigitT): string {
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
      .find(st => st.numbers.includes(vn as FinalSingleDigitT))
      ?.style as string

    return result
  }

  /**
   * Calculates the percentage and support for a VN
   * @param vn - The VN to be checked
   * @returns The VN, the percentage and the support level
   */
  #ownerAndPractitionersSupport (vn: FinalSingleDigitT) {
    const numbers = vnOwnerPractitioner[vn]
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
    } as OwnersAndPractitionersDataT
  }

  /**
   * Compares the percetages with the highest value and extract the list of the ones that are less than 10% smaller
   * @param percentage - The list of percetages sum and name
   * @returns The percetages that should be considered
   */
  #getResults (percentage: PercentageT[]) {
    const resultList: PercentageT[] = [percentage[0]]

    percentage
      .sort((a, b) => b.value - a.value)

    for (let i = 1; i < percentage.length; i++) {
      if (percentage[0].value - percentage[i].value < 10) {
        resultList.push(percentage[i])
      }
    }

    return resultList
  }
  /* #endregion */
}