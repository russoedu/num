import { FinalSingleDigitT } from './types'

class Tecniques {
  piramide (num: FinalSingleDigitT) {
    const index: { [key in FinalSingleDigitT]: string } = {
      0:  'Terá uma vida atribulada, agidata e movimentada. Deverá aceitar a movimentação e atribulação, aproveitando esses fatos para produzir expansão, crescimentoe desenvolvimento na vida',
      1:  'força / determinação / autoconfiança / iniciativa / coragem / ousadia / liderança / conquistas / independência',
      2:  'união / parceria/ flexibilidade / concessão / facilidade de adaptação / colaboração / cooperação',
      3:  'imaginação / criatividade / comunicação / sociabilidade / crescimento / expansão / valorização da estética / beleza',
      4:  'ordem / disciplina / dedicação / resistência / honestidade / estabilidade / persistência / trabalho intenso / segurança',
      5:  'liberdade / independência / mudanças / versatilidade / desprendimento / ousadia / coragem / transformações',
      6:  'tranquilidade / calma / afetuosidade / valorização do lar / conciliação / cooperação / harmonia',
      7:  'introspecção / autocontrole / intelectualidade / perfeccionismo / seletividade / prática espiritual / intuição / exigências',
      8:  'objetividade / organização / praticidade / retidão / honestidade / valorização das conquistas materiais / autoridade/ justiça',
      9:  'solícito / impessoal / compreensivo / prestativo / determinação / sem preconceitos / prática espiritual / intuição / sentimental / ajudar e amparar o próximo indistintamente',
      11: 'praticar a espiritualidade / sabendo utilizar o potencial de reciclador de energias / intuição',
      22: 'praticar a espiritualidade / saber transmitir às pessoas aquilo que aprender e desenvolver / não reter ou ocultar nenhuma informação em qualquer área da vida / utilizar a magia de maneira correta / precocidade e sabedoria nata.',
    }

    if (num === 11) {
      return [
        {
          number:      11,
          description: `${index[2]} / ${index[11]}`,
        },
      ]
    } else if (num === 22) {
      return [
        {
          number:      22,
          description: `${index[4]} / ${index[22]}`,
        },
      ]
    } else if (num === 0) {
      return [
        {
          number:      0,
          description: index[0],
        },
        {
          number:      1,
          description: index[1],
        },
        {
          number:      2,
          description: index[2],
        },
        {
          number:      11,
          description: index[11],
        },
        {
          number:      3,
          description: index[3],
        },
        {
          number:      4,
          description: index[4],
        },
        {
          number:      22,
          description: index[22],
        },
        {
          number:      5,
          description: index[5],
        },
        {
          number:      6,
          description: index[6],
        },
        {
          number:      7,
          description: index[7],
        },
        {
          number:      8,
          description: index[8],
        },
        {
          number:      9,
          description: index[9],
        },
      ]
    } else {
      return [
        {
          number:      num,
          description: index[num],
        }]
    }
  }
}

const _tec = new Tecniques()
export { _tec }
