import { FinalSingleDigitT } from './types'

class Vn {
  piramide (num: FinalSingleDigitT) {
    const index: { [key in FinalSingleDigitT]: string } = {
      0:  '',
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
      return `${index[2]} / ${index[num]}`
    } else if (num === 22) {
      return `${index[4]} / ${index[num]}`
    } else if (num === 0) {
      return `${index[1]} / ${index[2]} / ${index[11]} / ${index[3]} / ${index[4]} / ${index[22]} / ${index[5]} / ${index[6]} / ${index[7]} / ${index[8]} / ${index[9]} / `
    } else {
      return index[num]
    }
  }
}

const _vn = new Vn()
export { _vn }
