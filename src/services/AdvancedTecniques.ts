import { _array } from '../helpers/_array'
import { _number } from '../helpers/_number'
import { _tec } from '../helpers/_tec'
import { AchievementsT, AffectivePractice, ConquestsT, Cycle, CycleInterpretationT, CycleInterpretationVns, CycleType, ExpressionVibrationT, LanguageStyleT, MissingPositiveVibration, MultiplicitesT, MultiplicityT, OwnersAndPractitionersDataT, OwnersAndPractitionersT, PercentageResultExtraT, PercentageResultT, PercentageT, PyramidT, RebirthT, Relation, RiskT, SingleDigitVN, StrongDecisiveMomementPositionT, StrongOpositionItemT, StrongOpositionT, VN, VicesAndReciclerDataT, VnPositionCycleT } from '../helpers/types'
import { NumericMap } from './NumericMap'

export class AdvancedTecniques {
  constructor (map: NumericMap) {
    this.#map = map

    this.tec1Piramide = this.#tec1Piramide()
    this.tec2Ausencia = this.#tec2Ausencia()
    this.tec4Multiplicidades = this.#tec4Multiplicidades()
    this.tec5PotenciaisComoReagem = this.#tec5PotenciaisComoReagem()
    this.tec6PotenciaisComoSentem = this.#tec6PotenciaisComoSentem()
    this.tec7Riscos1aLeitura = this.#tec7Riscos1aLeitura()
    this.tec7Riscos2aLeitura = this.#tec7Riscos2aLeitura(this.tec7Riscos1aLeitura)
    this.tec9VibracaoDaExpressao = this.#tec9VibracaoDaExpressao()
    this.tec10InterpretacaoDoPrimeiroCiclo = this.#tec10InterpretacaoDoPrimeiroCiclo(this.tec2Ausencia)
    this.tec11DonosPraticantes = this.#tec11DonosPraticantes(this.tec2Ausencia)
    this.tec12ConjuncaoCdMoOuMoCd = this.#tec12ConjuncaoCdMoOuMoCd()
    this.tec13PotenciaisViciosReciclador1aLeitura = this.#tec13PotenciaisViciosReciclador1aLeitura()
    this.tec13PotenciaisViciosReciclador2aLeitura = this.#tec13PotenciaisViciosReciclador2aLeitura()
    this.tec13PotenciaisViciosReciclador3aLeitura = this.#tec13PotenciaisViciosReciclador3aLeitura()
    this.tec14Pureza = this.#tec14Pureza()
    this.tec8AdequacaoDaLinguagem = this.#tec8AdequacaoDaLinguagem(this.tec14Pureza)
    this.tec15RealizacaoEspontanea = this.#tec15RealizacaoEspontanea()
    this.tec16ConquistaEspontanea = this.#tec16ConquistaEspontanea()
    this.tec17Renascimento = this.#tec17Renascimento()
    this.tec18MomentoDecisivoForte = this.#tec18MomentoDecisivoForte()
    this.tec19AusenciaDeVibracaoPositiva = this.#tec19AusenciaDeVibracaoPositiva()
    this.tec20OposicoesFortes = this.#tec20OposicoesFortes()
    this.tec23PraticaAfetiva = this.#tec23PraticaAfetiva(this.tec2Ausencia)
  }

  /**
   * Pyramid tecnique
   * @returns Pyramid tecnique results
   */
  #tec1Piramide () {
    // DONE #tec1Piramide
    const pyramid: PyramidT[] = [
      {
        position: 'CD',
        results:  _tec.piramide(this.#map.CD),
      },
      {
        position: 'MO',
        results:  _tec.piramide(this.#map.MO),
      },
      {
        position: 'DM',
        results:  _tec.piramide(this.#map.DM),
      },
      {
        position: 'EU',
        results:  _tec.piramide(this.#map.EU),
      },
    ]

    return pyramid
  }

  /**
   * Ausency tecnique
   * @returns Ausency tecnique results
   */
  #tec2Ausencia () {
    // DONE #tec2Ausencia
    const unique = this.#map.uniqueVNs
    const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9]

    return _array.notInArray(numbers, unique) as SingleDigitVN[]
  }

  /**
   * Multiplicity tecnique
   * @returns Multiplicity tecnique results
   */
  #tec4Multiplicidades () {
    // DONE #tec4Multiplicidades

    // Creates the array with all cycles
    const data: MultiplicityT[] = [
      {
        type:      Cycle.FIXED,
        multiples: _tec.multiples(this.#map, Cycle.FIXED),
      },
      {
        type:      Cycle.FIRST,
        multiples: _tec.multiples(this.#map, Cycle.FIRST),
      },
      {
        type:      Cycle.SECOND,
        multiples: _tec.multiples(this.#map, Cycle.SECOND),
      },
      {
        type:      Cycle.THIRD,
        multiples: _tec.multiples(this.#map, Cycle.THIRD),
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
    // DONE #tec5PotenciaisComoReagem
    const percentage: PercentageT[] = [
      {
        name:  'Possuir',
        value: this.#map.vnCount([1, 4, 22, 8]).count * 7,
      },
      {
        name:  'Compartilhar',
        value: this.#map.vnCount([2, 11, 6]).count * 7,
      },
      {
        name:  'Vivenciar',
        value: this.#map.vnCount([3, 5]).count * 7,
      },
      {
        name:  'Espiritualidade',
        value: this.#map.vnCount([7, 9, 11, 22]).count * 7,
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
    // DONE #tec6PotenciaisComoSentem
    const percentage: PercentageT[] = [
      {
        name:  'Emoção',
        value: this.#map.vnCount([2, 11, 3, 5, 6, 9]).count * 7,
      },
      {
        name:  'Razão',
        value: this.#map.vnCount([1, 4, 22, 7, 8]).count * 7,
      },
    ]
      .sort((a, b) => b.value - a.value)

    const result = percentage[0].value - percentage[1].value > 10
      ? percentage[0].name
      : `${percentage[0].name} e ${percentage[1].name}`

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
    // DONE #tec7Riscos1aLeitura
    const percentage: PercentageT[] = [
      {
        name:  'Exigência / solidão / violência / agressão',
        value: this.#map.vnCount([1, 4, 22, 7, 8]).count * 7,
      },
      {
        name:  'Desprendimento / incerteza / insegurança',
        value: this.#map.vnCount([3, 5, 9]).count * 7,
      },
      {
        name:  'Acomodação / dependência / depressão',
        value: this.#map.vnCount([2, 11, 4, 22, 6]).count * 7,
      },
    ]

    const result = _array.join(_tec.getPercentageResults(percentage).map(r => r.name))

    return {
      percentage,
      result,
    }
  }

  /**
   * First reading risks tecnique
   * @param tec7Riscos1aLeitura - The first reading
   * @returns First reading risks tecnique results
   */
  #tec7Riscos2aLeitura (tec7Riscos1aLeitura: PercentageResultT) {
    // DONE #tec7Riscos2aLeitura
    const firstReadingPercentage = tec7Riscos1aLeitura.percentage
    const percentage: PercentageT[] = [
      {
        name:  'CP',
        value: firstReadingPercentage[0].value + firstReadingPercentage[2].value,
      },
      {
        name:  'SC',
        value: firstReadingPercentage[0].value + firstReadingPercentage[1].value,
      },
      // {
      //   name:  'VG',
      //   value: firstReadingPercentage[1].value + firstReadingPercentage[2].value,
      // },
    ]

    const result = _array.join(_tec.getPercentageResults(percentage).map(r => r.name))

    const sixAlert = this.#map.uniqueVNs.includes(6)
      ? '⚠️ ATENÇÃO: este mapa tem VN 6'
      : ''

    return {
      percentage,
      result,
      sixAlert,
    }
  }

  /**
   * Reading style
   * @param tec14Pureza - Result from tec 14
   * @returns Reading style results
   */
  #tec8AdequacaoDaLinguagem (tec14Pureza: false | SingleDigitVN): LanguageStyleT[] {
    // DONE #tec8AdequacaoDaLinguagem

    // Has purity
    if (tec14Pureza !== false) {
      return [
        {
          reason:  'Pureza de',
          vn:      tec14Pureza,
          content: _tec.styleFromTec14(tec14Pureza),
        },
      ]
    }

    // Fixed Multiplicity
    const fixedMultiples = _array.duplicatedFinalSingleDigitT(this.#map.fixedMainVNs)
    if (fixedMultiples.length > 0) {
      return fixedMultiples.map(vn => ({
        reason:  'Multiplicidade fixa de',
        vn,
        content: _tec.styleFromTec14(vn),
      }))
    }

    // Cycle multiplicity
    const age = this.#map.age
    const cycleVns = this.#map.cycle.vnNumbers
      .filter(c => c.start <= age && c.end > age)
      .map(c => c.vn)
    const cycleMultiples = _array.duplicatedFinalSingleDigitT(cycleVns)
    if (cycleMultiples.length > 0) {
      return cycleMultiples.map(vn => ({
        reason:  'Multiplicidade de',
        vn,
        content: _tec.styleFromTec14(vn),
      }))
    }

    // CD
    return [
      {
        reason:  'CD ',
        vn:      this.#map.CD,
        content: _tec.styleFromTec14(this.#map.CD),
      },
    ]
  }

  /**
   * Expression vibration
   * @returns Expression vibration results
   */
  #tec9VibracaoDaExpressao () {
    //  CHECK #tec9VibracaoDaExpressao

    const exIs3 = this.#map.EX === 3
    if ([1, 4, 22, 7, 8].includes(this.#map.EX)) {
      return {
        title: 'Bons ouvintes',
        more:  'Veio na vida muito mais para ouvir que falar. Quando fala, o faz com objetividade e clareza, mas deve ter cuidado pra não falar com frieza.',
        exIs3,
      }
    } else if ([3, 5, 9].includes(this.#map.EX)) {
      return {
        title: 'Bons falantes',
        more:  'Veio na vida pra falar, domina o ato de expressão oral, fala com criatividade, desprendimento. Convence pela fala. Mas deve ter cuidado pra não falar demais.',
        exIs3,
      }
    } else {
      return {
        title: 'Calma e delicadeza',
        more:  'Veio na vida para falar com calma e delicadeza, como é doce, é difícil ser interrompido e pode se alongar, entrar em muitos detalhes, e acaba divagando e dispersando, portanto deve evitar ser confuso.',
        exIs3,
      }
    }
  }

  /**
   * First Cycle interpretation
   * @param tec2Ausencia - Result from tec 2
   * @returns First Cycle interpretation results
   */
  #tec10InterpretacaoDoPrimeiroCiclo (tec2Ausencia: SingleDigitVN[]) {
    // TODO #tec10InterpretacaoDoPrimeiroCiclo
    const int: CycleInterpretationT[] = []

    for (const vn of CycleInterpretationVns) {
      if (this.#map.EU === vn.vn) {
        int.push({
          person:   vn.person,
          relation: Relation.ADORACAO_EU,
        })
      }
      if (this.#map.C1 === vn.vn) {
        int.push({
          person:   vn.person,
          relation: Relation.FORTISSIMA_C1,
        })
      }
      if (this.#map.MO === vn.vn) {
        int.push({
          person:   vn.person,
          relation: Relation.FORTE_MO,
        })
      }
      if (this.#map.CD === vn.vn || this.#map.achievements.R1.vn === vn.vn) {
        int.push({
          person:   vn.person,
          relation: Relation.MEDIA_CD_R1,
        })
      }
      if (this.#map.D1 === vn.vn || this.#map.DM === vn.vn) {
        int.push({
          person:   vn.person,
          relation: Relation.DIFICULDADE_D1_DM,
        })
      }
      if (tec2Ausencia.includes(vn.vn)) {
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
   * @param tec2Ausencia - Result from tec 2
   * @returns Owners and practitioners interpretation results
   */
  #tec11DonosPraticantes (tec2Ausencia: SingleDigitVN[]) {
    // DONE #tec11DonosPraticantes
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
      normal.push(_tec.ownerAndPractitionersSupport(this.#map, vn))
    }

    if (hasZero) {
      const zeroAge: OwnersAndPractitionersDataT[] = []

      for (const vn of tec2Ausencia) {
        if (!unique.includes(vn)) {
          zeroAge.push(_tec.ownerAndPractitionersSupport(this.#map, vn))
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
    // DONE #tec12ConjuncaoCdMoOuMoCd
    const small = Math.min(this.#map.CD, this.#map.MO).toString()
    const big = Math.max(this.#map.CD, this.#map.MO).toString()

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
    // DONE #tec13PotenciaisViciosReciclador1aLeitura
    const percentage: PercentageT[] = [
      {
        name:  'Honestidade',
        value: this.#map.vnCount([1, 4, 22, 7, 8]).count * 7,
      },
      {
        name:  'Colaboração / participação',
        value: this.#map.vnCount([2, 11, 3, 5, 6, 9]).count * 7,
      },
      {
        name:  'Trabalho',
        value: this.#map.vnCount([1, 4, 22, 8]).count * 7,
      },
      {
        name:  'Espiritualidade',
        value: this.#map.vnCount([7, 9, 11, 22]).count * 7,
      },
    ]

    const hasEspiritualityOnFixes = this.#map.fixedMainVNs
      .filter(fixed => [7, 9, 11, 22].includes(fixed))
      .length > 0

    const resultList = _tec.getPercentageResults(percentage).map(r => r.name)

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
    // DONE #tec13PotenciaisViciosReciclador2aLeitura
    const percentage = this.#map.vnCount([1, 3, 4, 5, 7, 8, 9]).count * 7

    return percentage >= 80
      ? `Conquistas diversas é potencial com ${percentage}%`
      : 'Conquistas diversas não é potencial'
  }

  /**
   * Potentials, vices and recicler 3rd reading interpretation
   * @returns Potentials, vices and recicler 2nd reading interpretation results
   */
  #tec13PotenciaisViciosReciclador3aLeitura () {
    // DONE #tec13PotenciaisViciosReciclador3aLeitura
    const percentage = this.#map.vnCount([7, 9, 11, 22]).count * 7
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
    // DONE #tec14Pureza
    const cd = _number.sum(this.#map.CD)
    const mo = _number.sum(this.#map.MO)
    const dm = _number.sum(this.#map.DM)

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
    // TODO #tec15RealizacaoEspontanea
    const result: AchievementsT[] = []

    const positions = ['CD', 'MO', 'EU'] as ('CD' | 'MO' | 'EU')[]

    for (const position of positions) {
      const vn = position === 'MO'
        ? this.#map.MO
        : position === 'CD'
          ? this.#map.CD
          : this.#map.EU

      for (const achievement of this.#map.achievementsArray) {
        if (achievement.vn === vn) {
          const existing = result.find(r => r.position === position)

          if (typeof existing !== 'undefined' && existing.end === achievement.start) {
            existing.end = achievement.end
          } else {
            result.push({
              position,
              start: achievement.start,
              end:   achievement.end,
            })
          }
        }
      }
    }

    return result
  }

  /**
   * Spontaneous Achievements interpretation
   * @returns Spontaneous Achievements interpretation results
   */
  #tec16ConquistaEspontanea () {
    // TODO #tec16ConquistaEspontanea
    const result: ConquestsT[] = []
    const positions = ['D1', 'D2', 'DM'] as ['D1', 'D2', 'DM']

    for (const position of positions) {
      const challenge = this.#map.challenges[position]

      for (const achievement of this.#map.achievementCycleList(challenge.start, challenge.end)) {
        if (_number.vnToSingleVn(achievement.vn) === challenge.vn) {
          const existing = result.find(r => r.position === position)

          if (typeof existing !== 'undefined' && existing.end === achievement.start) {
            existing.end = achievement.end
          } else {
            result.push({
              position,
              start: Math.max(achievement.start, challenge.start),
              end:   Math.min(achievement.end, challenge.end),
            })
          }
        }
      }
    }

    return result
  }

  /**
   * Rebirth interpretation
   * @returns Rebirth interpretation results
   */
  #tec17Renascimento () {
    // DONE #tec17Renascimento
    const result: RebirthT[] = []
    const positions = ['R2', 'R3', 'R4'] as ['R2', 'R3', 'R4']

    for (const position of positions) {
      const achievement = this.#map.achievements[position]

      if (achievement.vn === 1) {
        result.push({
          position,
          age: achievement.start,
        })
      }
    }

    return result
  }

  /**
   * Strong Decisive Momement
   * @returns Strong Decisive Momement results
   */
  #tec18MomentoDecisivoForte () {
    // DONE #tec18MomentoDecisivoForte
    const result: StrongDecisiveMomementPositionT[] = []

    if (this.#map.CD === 7 || this.#map.CD === 8 || this.#map.CD === 9) {
      result.push({
        position: 'CD',
        vn:       this.#map.CD,
      })
    }

    if (this.#map.D1 === 0) {
      result.push({
        position: 'D1',
        vn:       this.#map.D1,
      })
    }
    if (this.#map.D2 === 0) {
      result.push({
        position: 'D2',
        vn:       this.#map.D2,
      })
    }

    return result
  }

  /**
   * Missing Positive Vibration
   * @returns Missing Positive Vibration results
   */
  #tec19AusenciaDeVibracaoPositiva () {
    // TODO #tec19AusenciaDeVibracaoPositiva
    const allReceivedVns: VnPositionCycleT[] = _tec.tec19AllReceivedVns(this.#map)
    const avp: MissingPositiveVibration[] = []

    for (const c in this.#map.challenges) {
      const ch = this.#map.challenges[c as 'D1' | 'D2' | 'DM']
      for (const rec of allReceivedVns) {
        if (_number.match(rec.vn, ch.vn) && rec.start > ch.start) {
          avp.push({
            position:    c as 'D1' | 'D2' | 'DM',
            vn:          rec.vn,
            receivedAge: rec.start,
          })
        }
      }
    }

    return avp
  }

  /**
   * Strong Oposition
   * @returns Strong Oposition results
   */
  #tec20OposicoesFortes () {
    // TODO #tec20OposicoesFortes
    const ofList: StrongOpositionT[] = []
    const mapVns = this.#map.uniqueVNs
    const strongOpositionsList: StrongOpositionItemT[] = [
      { pair: [1, 2], message: 'Independência x Associar-se' },
      { pair: [1, 11], message: 'Independência x Associar-se' },
      { pair: [1, 9], message: 'Para si X Doar' },
      { pair: [2, 8], message: 'Dar (compartilhar) x Possuir' },
      { pair: [11, 8], message: 'Dar (compartilhar) x Possuir' },
      { pair: [4, 5], message: 'Manter x Vivenciar' },
      { pair: [22, 5], message: 'Manter x Vivenciar' },
      { pair: [4, 9], message: 'Manter x Doar' },
      { pair: [22, 9], message: 'Manter x Doar' },
      { pair: [7, 8], message: 'Espiritualidade x Posses materiais' },
      { pair: [8, 9], message: 'Posses materiais x Espiritualidade' },
    ]

    for (const oposition of strongOpositionsList) {
      const hasStrongOposition = _array.intersect(oposition.pair, mapVns).length === 2

      if (hasStrongOposition) {
        /**
         * List of positions with the first number of the pair, with the fixed ones first and ordered by the cycle start
         */
        const num1List = _tec.tec20PairNumList(this.#map, oposition.pair[0])

        /**
         * List of positions with the second number of the pair, with the fixed ones first and ordered by the cycle start
         */
        const num2List = _tec.tec20PairNumList(this.#map, oposition.pair[1])

        let done1 = false
        let done2 = false
        for (const n1 of num1List) {
          if (done1) break
          for (const n2 of num2List) {
            if (done2) break
            if (n1.type === CycleType.FIXED && n2.type === CycleType.FIXED) {
              ofList.push({
                pair:    oposition.pair,
                message: oposition.message,
                type:    CycleType.FIXED,
                start:   0,
                end:     Infinity,
              })
              done1 = true
              done2 = true
            } else if (
              // n1 started before
              (n1.start <= n2.start && n1.end >= n2.start) ||
              // n2 started before
              (n2.start <= n1.start && n2.end >= n1.start)) {
              ofList.push({
                pair:    oposition.pair,
                message: oposition.message,
                type:    CycleType.CYCLE,
                start:   Math.max(n1.start, n2.start),
                end:     Math.min(n1.end, n2.end),
              })
            }
          }
        }
        console.log(done1)
      }
    }

    return ofList
  }

  #tec23PraticaAfetiva (tec2Ausencia: SingleDigitVN[]) {
    console.log(tec2Ausencia)

    return {} as any
    /*
     * const difficulties = this.#map.challenges
     * if (tec2Ausencia.filter(item => [2, 6].indexOf(item) === -1))
     */
  }

  /**
   * The numeric map
   */
  #map: NumericMap

  /**
   * TÉCNICA 1 – PIRAMIDE
   */
  tec1Piramide: PyramidT[]

  /**
   * TÉCNICA 2 – AUSÊNCIAS – AUS
   */
  tec2Ausencia: SingleDigitVN[]
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
  tec7Riscos2aLeitura: PercentageResultExtraT

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
  tec14Pureza: VN | false

  /**
   * TÉCNICA 15 – REALIZAÇÃO ESPONTÂNEA
   */
  tec15RealizacaoEspontanea: AchievementsT[]

  /**
   * TÉCNICA 16 – CONQUISTA ESPONTÂNEA
   */
  tec16ConquistaEspontanea: ConquestsT[]
  /**
   * TÉCNICA 17 – RENASCIMENTO
   */
  tec17Renascimento: RebirthT[]

  /**
   * TÉCNICA 18 – MOMENTO DECISIVO FORTE
   */
  tec18MomentoDecisivoForte: StrongDecisiveMomementPositionT[]
  /**
   * TÉCNICA 19 – AVP (AUSÊNCIA DE VIBRAÇÃO POSITIVA) – RISCOS
   */
  tec19AusenciaDeVibracaoPositiva: MissingPositiveVibration[]
  /**
   * TÉCNICA 20 – OPOSIÇÕES FORTES – RISCOS
   */
  tec20OposicoesFortes: StrongOpositionT[]
  /**
   * TÉCNICA 23 – PRÁTICA AFETIVA
   */
  tec23PraticaAfetiva: AffectivePractice
  /**
   * TÉCNICA 24 – FERTILIDADE E FILHOS – PAIS E PROVEDORES – FORMAÇÃO DOS FILHOS
   */

  /**
   * TÉCNICA 25 – SEXUALIDADE
   */
}
