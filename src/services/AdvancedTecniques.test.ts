import { describe, expect, test } from 'vitest'
import { NumericMap } from './NumericMap'
import { AdvancedTecniques } from './AdvancedTecniques'
import { beforeEach } from 'node:test'

describe('AdvancedTecniques', () => {
  describe('tec1Piramide', () => {
    test('map 1', () => {
      expect(am1.tec1Piramide).toEqual([
        {
          position: 'CD',
          results:  [
            {
              vn:          8,
              description: 'objetividade / organização / praticidade / retidão / honestidade / valorização das conquistas materiais / autoridade / justiça',
            },
          ],
        },
        {
          position: 'MO',
          results:  [
            {
              vn:          11,
              description: 'união / parceria / flexibilidade / concessão / facilidade de adaptação / colaboração / cooperação / praticar a espiritualidade / sabendo utilizar o potencial de reciclador de energias / intuição',
            },
          ],
        },
        {
          position: 'DM',
          results:  [
            {
              vn:          2,
              description: 'união / parceria / flexibilidade / concessão / facilidade de adaptação / colaboração / cooperação',
            },
          ],
        },
        {
          position: 'EU',
          results:  [
            {
              vn:          11,
              description: 'união / parceria / flexibilidade / concessão / facilidade de adaptação / colaboração / cooperação / praticar a espiritualidade / sabendo utilizar o potencial de reciclador de energias / intuição',
            },
          ],
        },
      ])
    })
    test('map 2', () => {
      expect(am2.tec1Piramide).toEqual([
        {
          position: 'CD',
          results:  [
            {
              vn:          1,
              description: 'força / determinação / autoconfiança / iniciativa / coragem / ousadia / liderança / conquistas / independência',
            },
          ],
        },
        {
          position: 'MO',
          results:  [
            {
              vn:          6,
              description: 'tranquilidade / calma / afetuosidade / valorização do lar / conciliação / cooperação / harmonia',
            },
          ],
        },
        {
          position: 'DM',
          results:  [
            {
              vn:          0,
              description: 'Terá uma vida atribulada, agidata e movimentada. Deverá aceitar a movimentação e atribulação, aproveitando esses fatos para produzir expansão, crescimentoe desenvolvimento na vida',
            },
            {
              vn:          1,
              description: 'força / determinação / autoconfiança / iniciativa / coragem / ousadia / liderança / conquistas / independência',
            },
            {
              vn:          2,
              description: 'união / parceria / flexibilidade / concessão / facilidade de adaptação / colaboração / cooperação',
            },
            {
              vn:          11,
              description: 'praticar a espiritualidade / sabendo utilizar o potencial de reciclador de energias / intuição',
            },
            {
              vn:          3,
              description: 'imaginação / criatividade / comunicação / sociabilidade / crescimento / expansão / valorização da estética / beleza',
            },
            {
              vn:          4,
              description: 'ordem / disciplina / dedicação / resistência / honestidade / estabilidade / persistência / trabalho intenso / segurança',
            },
            {
              vn:          22,
              description: 'praticar a espiritualidade / saber transmitir às pessoas aquilo que aprender e desenvolver / não reter ou ocultar nenhuma informação em qualquer área da vida / utilizar a magia de maneira correta / precocidade e sabedoria nata.',
            },
            {
              vn:          5,
              description: 'liberdade / independência / mudanças / versatilidade / desprendimento / ousadia / coragem / transformações',
            },
            {
              vn:          6,
              description: 'tranquilidade / calma / afetuosidade / valorização do lar / conciliação / cooperação / harmonia',
            },
            {
              vn:          7,
              description: 'introspecção / autocontrole / intelectualidade / perfeccionismo / seletividade / prática espiritual / intuição / exigências',
            },
            {
              vn:          8,
              description: 'objetividade / organização / praticidade / retidão / honestidade / valorização das conquistas materiais / autoridade / justiça',
            },
            {
              vn:          9,
              description: 'solícito / impessoal / compreensivo / prestativo / determinação / sem preconceitos / prática espiritual / intuição / sentimental / ajudar e amparar o próximo indistintamente',
            },
          ],
        },
        {
          position: 'EU',
          results:  [
            {
              vn:          1,
              description: 'força / determinação / autoconfiança / iniciativa / coragem / ousadia / liderança / conquistas / independência',
            },
          ],
        },
      ])
    })
  })
  describe('tec2Ausencia', () => {
    test('map 1', () => {
      expect(am1.tec2Ausencia).toEqual([1, 4])
    })
    test('map 2', () => {
      expect(am2.tec2Ausencia).toEqual([2, 4])
    })
  })
  describe('tec4Multiplicidades', () => {
    test('map 1', () => {
      expect(am1.tec4Multiplicidades).toEqual({
        data: [
          {
            type:      'Fixas',
            multiples: [
              {
                positions: [
                  'MO',
                  'EU',
                  'DM',
                ],
                vn:   2,
                type: 'T',
              },
              {
                positions: [
                  'MO',
                  'EU',
                ],
                vn:   11,
                type: 'D',
              },
            ],
          },
          {
            type:      '1º Ciclo (0/28 anos)',
            multiples: [
              {
                positions: [
                  'MO',
                  'EU',
                  'DM',
                  'R1',
                ],
                vn:   2,
                type: 'Qd',
              },
              {
                positions: [
                  'MO',
                  'EU',
                  'R1',
                ],
                vn:   11,
                type: 'T',
              },
            ],
          },
          {
            type:      '2º Ciclo (28/56 anos)',
            multiples: [
              {
                positions: [
                  'MO',
                  'EU',
                  'DM',
                ],
                vn:   2,
                type: 'T',
              },
              {
                positions: [
                  'CD',
                  'C2',
                ],
                vn:   8,
                type: 'D',
              },
              {
                positions: [
                  'MO',
                  'EU',
                ],
                vn:   11,
                type: 'D',
              },
            ],
          },
          {
            type:      '3º Ciclo (+ 56 anos)',
            multiples: [
              {
                positions: [
                  'MO',
                  'EU',
                  'DM',
                ],
                vn:   2,
                type: 'T',
              },
              {
                positions: [
                  'MO',
                  'EU',
                ],
                vn:   11,
                type: 'D',
              },
            ],
          },
        ],
        comments: 'Quando tem Duplicidades ou mais deve ser mais reforçado. De Triplicidade em diante deve procurar ajuda e viver a multiplicidade e o número seguinte.',
      })
    })
    test('map 2', () => {
      expect(am2.tec4Multiplicidades).toEqual({
        data: [
          {
            type:      'Fixas',
            multiples: [
              {
                positions: [
                  'EU',
                  'CD',
                ],
                vn:   1,
                type: 'D',
              },
            ],
          },
          {
            type:      '1º Ciclo (0/28 anos)',
            multiples: [
              {
                positions: [
                  'EU',
                  'CD',
                ],
                vn:   1,
                type: 'D',
              },
            ],
          },
          {
            type:      '2º Ciclo (28/56 anos)',
            multiples: [
              {
                positions: [
                  'EU',
                  'CD',
                ],
                vn:   1,
                type: 'D',
              },
              {
                positions: [
                  'EX',
                  'R2',
                ],
                vn:   7,
                type: 'D',
              },
            ],
          },
          {
            type:      '3º Ciclo (+ 56 anos)',
            multiples: [
              {
                positions: [
                  'EU',
                  'CD',
                ],
                vn:   1,
                type: 'D',
              },
            ],
          },
        ],
        comments: 'Quando tem Duplicidades ou mais deve ser mais reforçado.',
      })
    })
  })
  describe('tec5PotenciaisComoReagem', () => {
    test('map 1', () => {
      expect(am1.tec5PotenciaisComoReagem).toEqual({
        percentage: [
          {
            name:  'Espiritualidade',
            value: 42,
          },
          {
            name:  'Compartilhar',
            value: 35,
          },
          {
            name:  'Vivenciar',
            value: 28,
          },
          {
            name:  'Possuir',
            value: 21,
          },
        ],
        result: 'Espiritualidade e Compartilhar',
      })
    })
    test('map 2', () => {
      expect(am2.tec5PotenciaisComoReagem).toEqual({
        percentage: [
          {
            name:  'Espiritualidade',
            value: 35,
          },
          {
            name:  'Possuir',
            value: 28,
          },
          {
            name:  'Compartilhar',
            value: 21,
          },
          {
            name:  'Vivenciar',
            value: 21,
          },
        ],
        result: 'Espiritualidade e Possuir',
      })
    })
  })
  describe('tec6PotenciaisComoSentem', () => {
    test('map 1', () => {
      expect(am1.tec6PotenciaisComoSentem).toEqual({
        percentage: [
          {
            name:  'Emoção',
            value: 70,
          },
          {
            name:  'Razão',
            value: 28,
          },
        ],
        result: 'Emoção',
      })
    })
    test('map 2', () => {
      expect(am2.tec6PotenciaisComoSentem).toEqual({
        percentage: [
          {
            name:  'Emoção',
            value: 49,
          },
          {
            name:  'Razão',
            value: 42,
          },
        ],
        result: 'Emoção e Razão',
      })
    })
  })
  describe('tec7Riscos1aLeitura', () => {
    test('map 1', () => {
      expect(am1.tec7Riscos1aLeitura).toEqual({
        percentage: [
          {
            name:  'Acomodação / dependência / depressão',
            value: 42,
          },
          {
            name:  'Desprendimento / incerteza / insegurança',
            value: 35,
          },
          {
            name:  'Exigência / solidão / violência / agressão',
            value: 28,
          },
        ],
        result: 'Acomodação / dependência / depressão e Desprendimento / incerteza / insegurança',
      })
    })
    test('map 2', () => {
      expect(am2.tec7Riscos1aLeitura).toEqual({
        percentage: [
          {
            name:  'Exigência / solidão / violência / agressão',
            value: 42,
          },
          {
            name:  'Desprendimento / incerteza / insegurança',
            value: 28,
          },
          {
            name:  'Acomodação / dependência / depressão',
            value: 21,
          },
        ],
        result: 'Exigência / solidão / violência / agressão',
      })
    })
  })
  describe('tec7Riscos2aLeitura', () => {
    test('map 1', () => {
      expect(am1.tec7Riscos2aLeitura).toEqual({
        percentage: [
          {
            name:  'SC',
            value: 77,
          },
          {
            name:  'CP',
            value: 70,
          },
          {
            name:  'VG',
            value: 63,
          },
        ],
        result: 'SC e CP',
      })
    })
    test('map 2', () => {
      expect(am2.tec7Riscos2aLeitura).toEqual({
        percentage: [
          {
            name:  'SC',
            value: 70,
          },
          {
            name:  'CP',
            value: 63,
          },
          {
            name:  'VG',
            value: 49,
          },
        ],
        result: 'SC e CP',
      })
    })
  })
  describe('tec8AdequacaoDaLinguagem', () => {
    test('map 1', () => {
      expect(am1.tec8AdequacaoDaLinguagem).toEqual([
        {
          reason:  'Pureza de',
          vn:      2,
          content: 'Calma / pausadamente / revelar com cuidado',
        },
      ])
    })
    test('map 2', () => {
      expect(am2.tec8AdequacaoDaLinguagem).toEqual([
        {
          reason:  'Multiplicidade fixa de',
          vn:      1,
          content: 'Rapidez, não se prender a detalhes',
        },
      ])
    })
  })
  describe('tec9VibracaoDaExpressao', () => {
    test('map 1', () => {
      expect(am1.tec9VibracaoDaExpressao).toEqual({
        title: 'Calma e delicadeza',
        more:  '',
      })
    })
    test('map 2', () => {
      expect(am2.tec9VibracaoDaExpressao).toEqual({
        title: 'Bons ouvintes',
        more:  'Falam pouco, com objetividade e clareza',
      })
    })
  })
  describe('tec10InterpretacaoDoPrimeiroCiclo', () => {
    test('map 1', () => {
      expect(am1.tec10InterpretacaoDoPrimeiroCiclo).toEqual([
        {
          person:   'do pai',
          relation: 'Não previsto convívio significativo',
        },
        {
          person:   'da mãe',
          relation: 'Dificuldade',
        },
        {
          person:   'dos irmãos e/ou irmãs, tios e/ou tias e primos e/ou primas',
          relation: 'Fortíssima identificação',
        },
        {
          person:   'dos avôs e/ou avós',
          relation: 'Não previsto convívio significativo',
        },
      ])
    })
    test('map 2', () => {
      expect(am2.tec10InterpretacaoDoPrimeiroCiclo).toEqual([
        {
          person:   'do pai',
          relation: 'Adoração e identificação',
        },
        {
          person:   'do pai',
          relation: 'Aproximação',
        },
        {
          person:   'da mãe',
          relation: 'Não previsto convívio significativo',
        },
        {
          person:   'dos irmãos e/ou irmãs, tios e/ou tias e primos e/ou primas',
          relation: 'Fortíssima identificação',
        },
        {
          person:   'dos avôs e/ou avós',
          relation: 'Não previsto convívio significativo',
        },
      ])
    })
  })
  describe('tec11DonosPraticantes', () => {
    test('map 1', () => {
      expect(am1.tec11DonosPraticantes).toEqual({
        normal: [
          {
            vn:         2,
            percentage: 42,
            support:    'média',
          },
          {
            vn:         3,
            percentage: 35,
            support:    'média',
          },
          {
            vn:         4,
            percentage: 28,
            support:    'média',
          },
          {
            vn:         5,
            percentage: 42,
            support:    'média',
          },
          {
            vn:         6,
            percentage: 84,
            support:    'muita',
          },
          {
            vn:         7,
            percentage: 42,
            support:    'média',
          },
          {
            vn:         8,
            percentage: 35,
            support:    'média',
          },
          {
            vn:         9,
            percentage: 42,
            support:    'média',
          },
          {
            vn:         11,
            percentage: 42,
            support:    'média',
          },
          {
            vn:         22,
            percentage: 42,
            support:    'média',
          },
        ],
      })
    })
    test('map 2', () => {
      expect(am2.tec11DonosPraticantes).toEqual({
        normal: [
          {
            vn:         1,
            percentage: 42,
            support:    'média',
          },
          {
            vn:         2,
            percentage: 28,
            support:    'média',
          },
          {
            vn:         3,
            percentage: 42,
            support:    'média',
          },
          {
            vn:         5,
            percentage: 56,
            support:    'média',
          },
          {
            vn:         6,
            percentage: 63,
            support:    'muita',
          },
          {
            vn:         7,
            percentage: 35,
            support:    'média',
          },
          {
            vn:         8,
            percentage: 49,
            support:    'média',
          },
          {
            vn:         9,
            percentage: 35,
            support:    'média',
          },
          {
            vn:         11,
            percentage: 35,
            support:    'média',
          },
        ],
        zeroAge: [
          {
            vn:         4,
            percentage: 42,
            support:    'média',
          },
        ],
      })
    })
  })
  describe('tec12ConjuncaoCdMoOuMoCd', () => {
    test('map 1', () => {
      expect(am1.tec12ConjuncaoCdMoOuMoCd).toBe('União baseada na justiça / retidão / verdade / prática da espiritualidade')
    })
    test('map 2', () => {
      expect(am2.tec12ConjuncaoCdMoOuMoCd).toBe('Liderança com afetividade / emoção / conciliação')
    })
  })
  describe('tec13PotenciaisViciosReciclador1aLeitura', () => {
    test('map 1', () => {
      expect(am1.tec13PotenciaisViciosReciclador1aLeitura).toEqual({
        percentage: [
          {
            name:  'Colaboração / participação',
            value: 70,
          },
          {
            name:  'Espiritualidade',
            value: 42,
          },
          {
            name:  'Honestidade',
            value: 28,
          },
          {
            name:  'Trabalho',
            value: 21,
          },
        ],
        result: 'Colaboração / participação e Espiritualidade',
      })
    })
    test('map 2', () => {
      expect(am2.tec13PotenciaisViciosReciclador1aLeitura).toEqual({
        percentage: [
          {
            name:  'Colaboração / participação',
            value: 49,
          },
          {
            name:  'Honestidade',
            value: 42,
          },
          {
            name:  'Espiritualidade',
            value: 35,
          },
          {
            name:  'Trabalho',
            value: 28,
          },
        ],
        result: 'Colaboração / participação e Honestidade',
      })
    })
  })
  describe('tec13PotenciaisViciosReciclador2aLeitura', () => {
    test('map 1', () => {
      expect(am1.tec13PotenciaisViciosReciclador2aLeitura).toBe('Conquistas diversas não é potencial')
    })
    test('map 2', () => {
      expect(am2.tec13PotenciaisViciosReciclador2aLeitura).toBe('Conquistas diversas não é potencial')
    })
    test('map 3', () => {
      expect(am3.tec13PotenciaisViciosReciclador2aLeitura).toBe('Conquistas diversas é potencial com 84%')
    })
  })
  describe('tec13PotenciaisViciosReciclador3aLeitura', () => {
    test('map 1', () => {
      expect(am1.tec13PotenciaisViciosReciclador3aLeitura).toEqual([
        {
          name:       'Vícios',
          percentage: 42,
          risk:       'forte',
        },
        {
          name:       'Reciclador',
          percentage: 42,
          risk:       'forte',
        },
      ])
    })
    test('map 2', () => {
      expect(am2.tec13PotenciaisViciosReciclador3aLeitura).toEqual([
        {
          name:       'Vícios',
          percentage: 35,
          risk:       'médio',
        },
        {
          name:       'Reciclador',
          percentage: 35,
          risk:       'forte - VN 11 presente',
        },
      ])
    })
  })
  describe('tec14Pureza', () => {
    test('map 1', () => {
      expect(am1.tec14Pureza).toBe(2)
    })
    test('map 2', () => {
      expect(am2.tec14Pureza).toBeFalsy()
    })
  })
  describe('tec15RealizacaoEspontanea', () => {
    test('map 1', () => {
      expect(am1.tec15RealizacaoEspontanea).toEqual([
        {
          position: 'MO',
          start:    0,
          end:      28,
        },
        {
          position: 'EU',
          start:    0,
          end:      28,
        },
      ])
    })
    test('map 2', () => {
      expect(am2.tec15RealizacaoEspontanea).toEqual([
      ])
    })
  })
  describe('tec16ConquistaEspontanea', () => {
    test('map 1 with', () => {
      expect(am1.tec16ConquistaEspontanea).toEqual([
        { position: 'DM', start: 0, end: 28 },
      ])
    })
    test('map 2 without', () => {
      expect(am2.tec16ConquistaEspontanea).toEqual([])
    })
    test('map with', () => {
      const m = new NumericMap('', '1979-03-17', '2021-01-07')
      m.challenges = {
        D1: { vn: 1, start: 0, end: 28 },
        D2: { vn: 2, start: 28, end: 56 },
        DM: { vn: 3, start: 56, end: Infinity },
      }
      m.achievements = {
        R1: { vn: 1, start: 0, end: 30 },
        R2: { vn: 2, start: 30, end: 40 },
        R3: { vn: 2, start: 40, end: 50 },
        R4: { vn: 3, start: 50, end: Infinity },
      }
      const am = new AdvancedTecniques(m)
      expect(am.tec16ConquistaEspontanea).toEqual([
        { position: 'D1', start: 0, end: 28 },
        { position: 'D2', start: 30, end: 50 },
        { position: 'DM', start: 56, end: Infinity },
      ])
    })
  })
  describe('tec17Renascimento', () => {
    test('map without', () => {
      expect(am1.tec17Renascimento).toEqual([])
    })
    test('map with', () => {
      const m = new NumericMap('', '1979-03-17', '2021-01-07')

      m.achievements = {
        R1: { vn: 1, start: 0, end: 30 },
        R2: { vn: 2, start: 30, end: 40 },
        R3: { vn: 1, start: 40, end: 50 },
        R4: { vn: 1, start: 50, end: Infinity },
      }
      const am = new AdvancedTecniques(m)
      expect(am.tec17Renascimento).toEqual([
        { position: 'R3', age: 40 },
        { position: 'R4', age: 50 },
      ])
    })
  })
  describe('tec18MomentoDecisivoForte', () => {
    test('map without', () => {
      expect(am2.tec18MomentoDecisivoForte).toEqual([])
    })
    test('map with CD 8', () => {
      expect(am1.tec18MomentoDecisivoForte).toEqual([
        { position: 'CD', vn: 8 },
      ])
    })
    test('map with all possibilities', () => {
      const m = new NumericMap('', '1979-03-17', '2021-01-07')

      m.CD = 9
      m.D1 = 0
      m.D2 = 0
      const am = new AdvancedTecniques(m)
      expect(am.tec18MomentoDecisivoForte).toEqual([
        { position: 'CD', vn: 9 },
        { position: 'D1', vn: 0 },
        { position: 'D2', vn: 0 },
      ])
    })
  })


  let map1 = new NumericMap('DAINARI MOZZU', '1950-12-26', '2021-01-07')
  let am1 = new AdvancedTecniques(map1)
  let map2 = new NumericMap('ODRAUDE USSOR', '1979-03-17', '2021-01-07')
  let am2 = new AdvancedTecniques(map2)
  let map3 = new NumericMap('AS', '0025-12-02', '2021-01-07')
  let am3 = new AdvancedTecniques(map3)

  beforeEach(() => {
    map1 = new NumericMap('DAINARI MOZZU', '1950-12-26', '2021-01-07')
    am1 = new AdvancedTecniques(map1)
    map2 = new NumericMap('ODRAUDE USSOR', '1979-03-17', '2021-01-07')
    am2 = new AdvancedTecniques(map2)
    map3 = new NumericMap('AS', '0025-12-02', '2021-01-07')
    am3 = new AdvancedTecniques(map3)
  })
})