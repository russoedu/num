import { NumericMap } from './NumericMap'
import { AdvancedTecniques } from './AdvancedTecniques'

describe('AdvancedTecniques', () => {
  describe('tec1Piramide', () => {
    test('map 1', () => {
      const map = new NumericMap('DAINARI MOZZU', '1950-12-26', '2021-01-07')
      const am = new AdvancedTecniques(map)
      expect(am.tec1Piramide).toEqual([
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
      const map = new NumericMap('ODRAUDE USSOR', '1979-03-17', '2021-01-07')
      const am = new AdvancedTecniques(map)

      expect(am.tec1Piramide).toEqual([
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
              vn:          3,
              description: 'imaginação / criatividade / comunicação / sociabilidade / crescimento / expansão / valorização da estética / beleza',
            },
            {
              vn:          4,
              description: 'ordem / disciplina / dedicação / resistência / honestidade / estabilidade / persistência / trabalho intenso / segurança',
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
      const map = new NumericMap('DAINARI MOZZU', '1950-12-26', '2021-01-07')
      const am = new AdvancedTecniques(map)

      expect(am.tec2Ausencia).toEqual([1, 4])
    })
    test('map 2', () => {
      const map = new NumericMap('ODRAUDE USSOR', '1979-03-17', '2021-01-07')
      const am = new AdvancedTecniques(map)

      expect(am.tec2Ausencia).toEqual([2, 4])
    })
  })
  describe('tec4Multiplicidades', () => {
    test('map 1', () => {
      const map = new NumericMap('fioab dolfogan veriseno', '1964-10-08', '2021-01-07')
      const am = new AdvancedTecniques(map)

      expect(am.tec4Multiplicidades).toEqual({
        data: [
          {
            type:      'Fixas',
            multiples: [
              {
                vn:        7,
                positions: [
                  'EU',
                  'EX',
                ],
                type:  'D',
                start: 0,
                end:   Infinity,
              },
            ],
          },
          {
            type:      '1º Ciclo (0/28 anos)',
            multiples: [
              {
                vn:        1,
                positions: [
                  'C1',
                  'R2',
                ],
                type:  'D',
                start: 25,
                end:   28,
              },
              {
                vn:        7,
                positions: [
                  'EU',
                  'EX',
                  'D1',
                ],
                type:  'T',
                start: 0,
                end:   28,
              },
              {
                vn:        9,
                positions: [
                  'MO',
                  'R1',
                ],
                type:  'D',
                start: 0,
                end:   25,
              },
            ],
          },
          {
            type:      '2º Ciclo (28/56 anos)',
            multiples: [
              {
                vn:        1,
                positions: [
                  'D2',
                  'R2',
                ],
                type:  'D',
                start: 28,
                end:   35,
              },
              {
                vn:        1,
                positions: [
                  'D2',
                  'R3',
                ],
                type:  'D',
                start: 35,
                end:   45,
              },
              {
                vn:        7,
                positions: [
                  'EU',
                  'EX',
                ],
                type:  'D',
                start: 28,
                end:   56,
              },
            ],
          },
          {
            type:      '3º Ciclo (+ 56 anos)',
            multiples: [
              {
                vn:        2,
                positions: [
                  'CD',
                  'C3',
                ],
                type:  'D',
                start: 56,
                end:   Infinity,
              },
              {
                vn:        7,
                positions: [
                  'EU',
                  'EX',
                ],
                type:  'D',
                start: 56,
                end:   Infinity,
              },
            ],
          },
        ],
        comments: 'Quando tem Duplicidades ou mais deve ser mais reforçado. De Triplicidade em diante deve procurar ajuda e viver a multiplicidade e o número seguinte.',
      })
    })
    test('map 2', () => {
      const map = new NumericMap('IBA Ossur Cheool', '1995-12-24', '2021-01-07')
      const am = new AdvancedTecniques(map)

      expect(am.tec4Multiplicidades).toEqual({
        data: [
          {
            type:      'Fixas',
            multiples: [
              {
                vn:        9,
                positions: [
                  'MO',
                  'EU',
                  'EX',
                ],
                type:  'T',
                start: 0,
                end:   Infinity,
              },
            ],
          },
          {
            type:      '1º Ciclo (0/28 anos)',
            multiples: [
              {
                vn:        3,
                positions: [
                  'C1',
                  'D1',
                ],
                type:  'D',
                start: 0,
                end:   28,
              },
              {
                vn:        9,
                positions: [
                  'MO',
                  'EU',
                  'EX',
                  'R1',
                ],
                type:  'Qd',
                start: 0,
                end:   28,
              },
            ],
          },
          {
            type:      '2º Ciclo (28/56 anos)',
            multiples: [
              {
                vn:        3,
                positions: [
                  'D2',
                  'R2',
                ],
                type:  'D',
                start: 30,
                end:   40,
              },
              {
                vn:        3,
                positions: [
                  'D2',
                  'R3',
                ],
                type:  'D',
                start: 40,
                end:   50,
              },
              {
                vn:        6,
                positions: [
                  'CD',
                  'C2',
                ],
                type:  'D',
                start: 28,
                end:   56,
              },
              {
                vn:        9,
                positions: [
                  'MO',
                  'EU',
                  'EX',
                  'R1',
                ],
                type:  'Qd',
                start: 28,
                end:   30,
              },
              {
                vn:        9,
                positions: [
                  'MO',
                  'EU',
                  'EX',
                ],
                type:  'T',
                start: 28,
                end:   56,
              },
              {
                vn:        9,
                positions: [
                  'MO',
                  'EU',
                  'EX',
                  'R4',
                ],
                type:  'Qd',
                start: 50,
                end:   56,
              },
            ],
          },
          {
            type:      '3º Ciclo (+ 56 anos)',
            multiples: [
              {
                vn:        6,
                positions: [
                  'CD',
                  'C3',
                ],
                type:  'D',
                start: 56,
                end:   Infinity,
              },
              {
                vn:        9,
                positions: [
                  'MO',
                  'EU',
                  'EX',
                  'R4',
                ],
                type:  'Qd',
                start: 56,
                end:   Infinity,
              },
            ],
          },
        ],
        comments: 'Quando tem Duplicidades ou mais deve ser mais reforçado. De Triplicidade em diante deve procurar ajuda e viver a multiplicidade e o número seguinte.',
      })
    })
    test('map 3', () => {
      const map = new NumericMap('VIALOI ICIATROC DO CISMENNATO', '1961-06-24', '2021-01-07')
      const am = new AdvancedTecniques(map)

      expect(am.tec4Multiplicidades).toEqual({
        data: [
          {
            type:      'Fixas',
            multiples: [
              {
                vn:        2,
                positions: [
                  'CD',
                  'DM',
                ],
                type:  'D',
                start: 0,
                end:   Infinity,
              },
            ],
          },
          {
            type:      '1º Ciclo (0/28 anos)',
            multiples: [
              {
                vn:        2,
                positions: [
                  'CD',
                  'DM',
                ],
                type:  'D',
                start: 0,
                end:   28,
              },
              {
                vn:        3,
                positions: [
                  'EU',
                  'R1',
                ],
                type:  'D',
                start: 0,
                end:   28,
              },
            ],
          },
          {
            type:      '2º Ciclo (28/56 anos)',
            multiples: [
              {
                vn:        2,
                positions: [
                  'CD',
                  'DM',
                  'D2',
                ],
                type:  'T',
                start: 28,
                end:   56,
              },
              {
                vn:        3,
                positions: [
                  'EU',
                  'R1',
                ],
                type:  'D',
                start: 28,
                end:   34,
              },
              {
                vn:        5,
                positions: [
                  'MO',
                  'R2',
                ],
                type:  'D',
                start: 34,
                end:   44,
              },
              {
                vn:        5,
                positions: [
                  'MO',
                  'R4',
                ],
                type:  'D',
                start: 54,
                end:   56,
              },
              {
                vn:        8,
                positions: [
                  'EX',
                  'R3',
                ],
                type:  'D',
                start: 44,
                end:   54,
              },
            ],
          },
          {
            type:      '3º Ciclo (+ 56 anos)',
            multiples: [
              {
                vn:        2,
                positions: [
                  'CD',
                  'DM',
                ],
                type:  'D',
                start: 56,
                end:   Infinity,
              },
              {
                vn:        5,
                positions: [
                  'MO',
                  'R4',
                ],
                type:  'D',
                start: 56,
                end:   Infinity,
              },
              {
                vn:        8,
                positions: [
                  'EX',
                  'C3',
                ],
                type:  'D',
                start: 56,
                end:   Infinity,
              },
            ],
          },
        ],
        comments: 'Quando tem Duplicidades ou mais deve ser mais reforçado. De Triplicidade em diante deve procurar ajuda e viver a multiplicidade e o número seguinte.',
      })
    })
    test('map 4', () => {
      const map = new NumericMap('COLAR OSSUR CHEOOL', '1997-07-16', '2021-01-07')
      const am = new AdvancedTecniques(map)

      expect(am.tec4Multiplicidades).toEqual({
        data: [
          {
            type:      'Fixas',
            multiples: [
              {
                vn:        1,
                positions: [
                  'DM',
                  'EX',
                ],
                type:  'D',
                start: 0,
                end:   Infinity,
              },
              {
                vn:        4,
                positions: [
                  'EU',
                  'CD',
                ],
                type:  'D',
                start: 0,
                end:   Infinity,
              },
            ],
          },
          {
            type:      '1º Ciclo (0/28 anos)',
            multiples: [
              {
                vn:        1,
                positions: [
                  'DM',
                  'EX',
                ],
                type:  'D',
                start: 0,
                end:   28,
              },
              {
                vn:        4,
                positions: [
                  'EU',
                  'CD',
                ],
                type:  'D',
                start: 0,
                end:   28,
              },
              {
                vn:        6,
                positions: [
                  'MO',
                  'R2',
                ],
                type:  'D',
                start: 14,
                end:   24,
              },
            ],
          },
          {
            type:      '2º Ciclo (28/56 anos)',
            multiples: [
              {
                vn:        1,
                positions: [
                  'DM',
                  'EX',
                  'D2',
                ],
                type:  'T',
                start: 28,
                end:   56,
              },
              {
                vn:        4,
                positions: [
                  'EU',
                  'CD',
                ],
                type:  'D',
                start: 28,
                end:   56,
              },
              {
                vn:        6,
                positions: [
                  'MO',
                  'R4',
                ],
                type:  'D',
                start: 34,
                end:   56,
              },
            ],
          },
          {
            type:      '3º Ciclo (+ 56 anos)',
            multiples: [
              {
                vn:        1,
                positions: [
                  'DM',
                  'EX',
                ],
                type:  'D',
                start: 56,
                end:   Infinity,
              },
              {
                vn:        4,
                positions: [
                  'EU',
                  'CD',
                ],
                type:  'D',
                start: 56,
                end:   Infinity,
              },
              {
                vn:        6,
                positions: [
                  'MO',
                  'R4',
                ],
                type:  'D',
                start: 56,
                end:   Infinity,
              },
            ],
          },
        ],
        comments: 'Quando tem Duplicidades ou mais deve ser mais reforçado. De Triplicidade em diante deve procurar ajuda e viver a multiplicidade e o número seguinte.',
      })
    })
  })
  describe('tec5PotenciaisComoReagem', () => {
    test('map 1', () => {
      const map = new NumericMap('DAINARI MOZZU', '1950-12-26', '2021-01-07')
      const am = new AdvancedTecniques(map)

      expect(am.tec5PotenciaisComoReagem).toEqual({
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
      const map = new NumericMap('ODRAUDE USSOR', '1979-03-17', '2021-01-07')
      const am = new AdvancedTecniques(map)

      expect(am.tec5PotenciaisComoReagem).toEqual({
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
    test('map 3', () => {
      const map = new NumericMap('', '1973-03-17', '2021-01-07')
      map.MO = 1
      map.EU = 2
      map.CD = 3
      map.EX = 1
      map.C1 = 2
      map.C2 = 3
      map.C3 = 1
      map.D1 = 2
      map.D2 = 3
      map.DM = 1
      map.R1 = 2
      map.R2 = 3
      map.R3 = 7
      map.R4 = 7

      const am = new AdvancedTecniques(map)

      expect(am.tec5PotenciaisComoReagem).toEqual({
        percentage: [
          {
            name:  'Possuir',
            value: 28,
          },
          {
            name:  'Compartilhar',
            value: 28,
          },
          {
            name:  'Vivenciar',
            value: 28,
          },
          {
            name:  'Espiritualidade',
            value: 14,
          },
        ],
        result: 'Possuir, Compartilhar e Vivenciar',
      })
    })
  })
  describe('tec6PotenciaisComoSentem', () => {
    test('map 1', () => {
      const map = new NumericMap('DAINARI MOZZU', '1950-12-26', '2021-01-07')
      const am = new AdvancedTecniques(map)

      expect(am.tec6PotenciaisComoSentem).toEqual({
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
      const map = new NumericMap('ODRAUDE USSOR', '1979-03-17', '2021-01-07')
      const am = new AdvancedTecniques(map)

      expect(am.tec6PotenciaisComoSentem).toEqual({
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
      const map = new NumericMap('DAINARI MOZZU', '1950-12-26', '2021-01-07')
      const am = new AdvancedTecniques(map)

      expect(am.tec7Riscos1aLeitura).toEqual({
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
      const map = new NumericMap('ODRAUDE USSOR', '1979-03-17', '2021-01-07')
      const am = new AdvancedTecniques(map)

      expect(am.tec7Riscos1aLeitura).toEqual({
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
      const map = new NumericMap('DAINARI MOZZU', '1950-12-26', '2021-01-07')
      const am = new AdvancedTecniques(map)

      expect(am.tec7Riscos2aLeitura).toEqual({
        percentage: [
          {
            name:  'SC',
            value: 77,
          },
          {
            name:  'CP',
            value: 70,
          },
          // {
          //   name:  'VG',
          //   value: 63,
          // },
        ],
        result:   'SC e CP',
        sixAlert: '⚠️ ATENÇÃO: este mapa tem VN 6',
      })
    })
    test('map 2', () => {
      const map = new NumericMap('ODRAUDE USSOR', '1979-03-17', '2021-01-07')
      const am = new AdvancedTecniques(map)

      expect(am.tec7Riscos2aLeitura).toEqual({
        percentage: [
          {
            name:  'SC',
            value: 70,
          },
          {
            name:  'CP',
            value: 63,
          },
          // {
          //   name:  'VG',
          //   value: 49,
          // },
        ],
        sixAlert: '⚠️ ATENÇÃO: este mapa tem VN 6',
        result:   'SC e CP',
      })
    })
  })
  describe('tec8AdequacaoDaLinguagem', () => {
    test('map 1 - purity', () => {
      const map = new NumericMap('DAINARI MOZZU', '1950-12-26', '2021-01-07')
      const am = new AdvancedTecniques(map)

      expect(am.tec8AdequacaoDaLinguagem).toEqual([
        {
          reason:  'Pureza de',
          vn:      2,
          content: 'Calma / pausadamente / revelar com cuidado',
        },
      ])
    })
    test('map 2 - fixed multiplicity', () => {
      const map = new NumericMap('ODRAUDE USSOR', '1979-03-17', '2021-01-07')
      const am = new AdvancedTecniques(map)

      expect(am.tec8AdequacaoDaLinguagem).toEqual([
        {
          reason:  'Multiplicidade fixa de',
          vn:      1,
          content: 'Rapidez, não se prender a detalhes',
        },
      ])
    })
    test('map 3 - cycle multiplicity', () => {
      const map = new NumericMap('', '1979-03-17', '2021-01-07')
      map.MO = 1
      map.EU = 2
      map.CD = 3
      map.EX = 4
      map.C1 = 5
      map.C2 = 6
      map.C3 = 7
      map.D1 = 5
      map.D2 = 5
      map.DM = 0
      map.R1 = 6
      map.R2 = 6
      map.R3 = 6
      map.R4 = 6
      const am = new AdvancedTecniques(map)

      expect(am.tec8AdequacaoDaLinguagem).toEqual([{
        reason:  'Multiplicidade de',
        vn:      6,
        content: 'Calma / pausadamente / revelar com cuidado',
      }])
    })
    test('map 4 - cd', () => {
      const map = new NumericMap('', '1979-03-17', '2021-01-07')
      map.MO = 1
      map.EU = 2
      map.CD = 3
      map.EX = 4
      map.C1 = 5
      map.C2 = 5
      map.C3 = 5
      map.D1 = 6
      map.D2 = 6
      map.DM = 7
      map.R1 = 8
      map.R2 = 8
      map.R3 = 8
      map.R4 = 8
      const am = new AdvancedTecniques(map)

      expect(am.tec8AdequacaoDaLinguagem).toEqual([
        {
          reason:  'CD ',
          vn:      3,
          content: 'Bom humor / criatividade',
        },
      ])
    })
  })
  describe('tec9VibracaoDaExpressao', () => {
    test('ex type 1', () => {
      const map = new NumericMap('amari omum', '1950-12-26', '2021-01-07')
      map.EX = 22
      const am = new AdvancedTecniques(map)

      expect(am.tec9VibracaoDaExpressao).toEqual({
        title: 'Bons ouvintes',
        more:  'Veio na vida muito mais para ouvir que falar. Quando fala, o faz com objetividade e clareza, mas deve ter cuidado pra não falar com frieza.',
        exIs3: false,
      })
    })
    test('ex type 2, but not 3', () => {
      const map = new NumericMap('ODRAUDE USSOR', '1979-03-17', '2021-01-07')
      map.EX = 9
      const am = new AdvancedTecniques(map)

      expect(am.tec9VibracaoDaExpressao).toEqual({
        title: 'Bons falantes',
        more:  'Veio na vida pra falar, domina o ato de expressão oral, fala com criatividade, desprendimento. Convence pela fala. Mas deve ter cuidado pra não falar demais.',
        exIs3: false,
      })
    })
    test('ex type 2, is 3', () => {
      const map = new NumericMap('ODRAUDE USSOR', '1979-03-17', '2021-01-07')
      map.EX = 3
      const am = new AdvancedTecniques(map)

      expect(am.tec9VibracaoDaExpressao).toEqual({
        title: 'Bons falantes',
        more:  'Veio na vida pra falar, domina o ato de expressão oral, fala com criatividade, desprendimento. Convence pela fala. Mas deve ter cuidado pra não falar demais.',
        exIs3: true,
      })
    })
    test('ex type 3', () => {
      const map = new NumericMap('ODRAUDE USSOR', '1979-03-17', '2021-01-07')
      map.EX = 11
      const am = new AdvancedTecniques(map)

      expect(am.tec9VibracaoDaExpressao).toEqual({
        title: 'Calma e delicadeza',
        more:  'Veio na vida para falar com calma e delicadeza, como é doce, é difícil ser interrompido e pode se alongar, entrar em muitos detalhes, e acaba divagando e dispersando, portanto deve evitar ser confuso.',
        exIs3: false,
      })
    })
  })
  describe('tec10InterpretacaoDoPrimeiroCiclo', () => {
    test('map 1', () => {
      const map = new NumericMap('DANUIRA ZIMOZ', '1950-12-26', '2021-01-07')
      const am = new AdvancedTecniques(map)

      expect(am.tec10InterpretacaoDoPrimeiroCiclo).toEqual({
        relations: [
          {
            person:   'da mãe',
            relation: 'Adoração e identificação',
          },
          {
            person:   'dos irmãos e/ou irmãs, tios e/ou tias e primos e/ou primas',
            relation: 'Fortíssima identificação',
          },
          {
            person:   'da mãe',
            relation: 'Igualdade, grande aproximação',
          },
          {
            person:   'da mãe',
            relation: 'Aproximação',
          },
          {
            person:   'da mãe',
            relation: 'Dificuldade',
          },
          {
            person:   'do pai',
            relation: 'Não previsto convívio significativo',
          },
          {
            person:   'dos avôs e/ou avós',
            relation: 'Não previsto convívio significativo',
          },
        ],
        extra: [
          {
            position:    'DM',
            vn:          2,
            description: 'Com sua mãe deveria aprender união e parceria, praticando concessão, flexibilidade, colaboração e adaptação.',
          },
          {
            position:    'C1',
            vn:          3,
            description: 'Era previsto que fosse uma criança agitada, alegre, comunicativa.',
          },
          {
            position:    'C1',
            vn:          5,
            description: 'Momento de mudanças, alterações de vida sem dificuldades.',
          },
          {
            position:    'D1',
            vn:          5,
            description: 'Momento de mudanças, alterações de vida com dificuldades. Deveria aprender a ter liberdade, independência, mudanças, desprendimento e transformações.',
            obs:         'Obs.: Acentuadas, pois possui 3 no primeiro ciclo.',
          },
          {
            position:    'D1',
            vn:          0,
            description: 'É uma vida atribulada, agitada e movimentada com acentuada intensidade de acontecimentos.',
          },
        ],
        espirituality: 'Período marcado por inquietações intensificadas (multiplicidade de números de espiritualidade no primeiro ciclo).',
      })
    })
    test('map 2', () => {
      const map = new NumericMap('ODRAUDE USSOR', '1979-03-17', '2021-01-07')
      const am = new AdvancedTecniques(map)

      expect(am.tec10InterpretacaoDoPrimeiroCiclo).toEqual({
        relations: [
          {
            person:   'do pai',
            relation: 'Adoração e identificação',
          },
          {
            person:   'dos irmãos e/ou irmãs, tios e/ou tias e primos e/ou primas',
            relation: 'Fortíssima identificação',
          },
          {
            person:   'do pai',
            relation: 'Aproximação',
          },
          {
            person:   'da mãe',
            relation: 'Aproximação',
          },
          {
            person:   'dos avôs e/ou avós',
            relation: 'Não previsto convívio significativo',
          },
        ],
        extra: [
          {
            position:    'C1',
            vn:          3,
            description: 'Era previsto que fosse uma criança agitada, alegre, comunicativa.',
          },
          {
            position:    'C1',
            vn:          5,
            description: 'Momento de mudanças, alterações de vida sem dificuldades.',
          },
          {
            position:    'D1',
            vn:          5,
            description: 'Momento de mudanças, alterações de vida com dificuldades. Deveria aprender a ter liberdade, independência, mudanças, desprendimento e transformações.',
            obs:         'Obs.: Acentuadas, pois possui 3 no primeiro ciclo.',
          },
          {
            position:    'D1',
            vn:          0,
            description: 'É uma vida atribulada, agitada e movimentada com acentuada intensidade de acontecimentos.',
          },
        ],
        espirituality: 'Período marcado por inquietações (presença de números de espiritualidade no primeiro ciclo).',
      })
    })
  })
  describe('tec11DonosPraticantes', () => {
    test('map 1', () => {
      const map = new NumericMap('DAINARI MOZZU', '1950-12-26', '2021-01-07')
      const am = new AdvancedTecniques(map)

      expect(am.tec11DonosPraticantes).toEqual({
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
      const map = new NumericMap('ODRAUDE USSOR', '1979-03-17', '2021-01-07')
      const am = new AdvancedTecniques(map)

      expect(am.tec11DonosPraticantes).toEqual({
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
    describe('1', () => {
      test('1 X 1', () => {
        const map = new NumericMap('', '1950-12-26', '2021-01-07')
        map.CD = 1
        map.MO = 1
        const am = new AdvancedTecniques(map)

        expect(am.tec12ConjuncaoCdMoOuMoCd).toBe('Pureza de coragem / líder nato')
      })
      test('1 X 2', () => {
        const map = new NumericMap('', '1950-12-26', '2021-01-07')
        map.CD = 2
        map.MO = 1
        const am = new AdvancedTecniques(map)

        expect(am.tec12ConjuncaoCdMoOuMoCd).toBe('Líder da união / só lidera na união / nunca sozinho')
      })
      test('1 X 3', () => {
        const map = new NumericMap('', '1950-12-26', '2021-01-07')
        map.CD = 1
        map.MO = 3
        const am = new AdvancedTecniques(map)

        expect(am.tec12ConjuncaoCdMoOuMoCd).toBe('Para crescer e desenvolver-se é preciso coragem / força / determinação com criatividade e comunicabilidade')
      })
      test('1 X 4', () => {
        const map = new NumericMap('', '1950-12-26', '2021-01-07')
        map.CD = 1
        map.MO = 4
        const am = new AdvancedTecniques(map)

        expect(am.tec12ConjuncaoCdMoOuMoCd).toBe('Lutar e conquistar mantendo estabilidade / segurança /  confiar em seus potenciais')
      })
      test('1 X 5', () => {
        const map = new NumericMap('', '1950-12-26', '2021-01-07')
        map.CD = 5
        map.MO = 1
        const am = new AdvancedTecniques(map)

        expect(am.tec12ConjuncaoCdMoOuMoCd).toBe('Liderança com liberdade / desprendimento / múltiplas vivências')
      })
      test('1 X 6', () => {
        const map = new NumericMap('', '1950-12-26', '2021-01-07')
        map.CD = 1
        map.MO = 6
        const am = new AdvancedTecniques(map)

        expect(am.tec12ConjuncaoCdMoOuMoCd).toBe('Liderança com afetividade / emoção / conciliação')
      })
      test('1 X 7', () => {
        const map = new NumericMap('', '1950-12-26', '2021-01-07')
        map.CD = 7
        map.MO = 1
        const am = new AdvancedTecniques(map)

        expect(am.tec12ConjuncaoCdMoOuMoCd).toBe('Liderança com perfeição / exigência / sabedoria')
      })
      test('1 X 8', () => {
        const map = new NumericMap('', '1950-12-26', '2021-01-07')
        map.CD = 1
        map.MO = 8
        const am = new AdvancedTecniques(map)

        expect(am.tec12ConjuncaoCdMoOuMoCd).toBe('Liderança com justiça / retidão / verdade')
      })
      test('1 X 9', () => {
        const map = new NumericMap('', '1950-12-26', '2021-01-07')
        map.CD = 9
        map.MO = 1
        const am = new AdvancedTecniques(map)

        expect(am.tec12ConjuncaoCdMoOuMoCd).toBe('Ter força / coragem para amparar / auxiliar o próximo')
      })
      test('1 X 11', () => {
        const map = new NumericMap('', '1950-12-26', '2021-01-07')
        map.CD = 11
        map.MO = 1
        const am = new AdvancedTecniques(map)

        expect(am.tec12ConjuncaoCdMoOuMoCd).toBe('Líder da união / só lidera na união / nunca sozinho / prática da espiritualidade')
      })
      test('1 X 22', () => {
        const map = new NumericMap('', '1950-12-26', '2021-01-07')
        map.CD = 22
        map.MO = 1
        const am = new AdvancedTecniques(map)

        expect(am.tec12ConjuncaoCdMoOuMoCd).toBe('Lutar e conquistar mantendo estabilidade / segurança / confiar em seus potenciais / prática da espiritualidade')
      })
    })
    describe('2', () => {
      test('2 X 2', () => {
        const map = new NumericMap('', '1950-12-26', '2021-01-07')
        map.CD = 2
        map.MO = 2
        const am = new AdvancedTecniques(map)

        expect(am.tec12ConjuncaoCdMoOuMoCd).toBe('Pureza de união / flexibilidade / viver sempre unido ')
      })
      test('2 X 3', () => {
        const map = new NumericMap('', '1950-12-26', '2021-01-07')
        map.CD = 2
        map.MO = 3
        const am = new AdvancedTecniques(map)

        expect(am.tec12ConjuncaoCdMoOuMoCd).toBe('União patrocina o crescimento / a expansão')
      })
      test('2 X 4', () => {
        const map = new NumericMap('', '1950-12-26', '2021-01-07')
        map.CD = 2
        map.MO = 4
        const am = new AdvancedTecniques(map)

        expect(am.tec12ConjuncaoCdMoOuMoCd).toBe('União proporciona segurança / estabilidade')
      })
      test('2 X 5', () => {
        const map = new NumericMap('', '1950-12-26', '2021-01-07')
        map.CD = 5
        map.MO = 2
        const am = new AdvancedTecniques(map)

        expect(am.tec12ConjuncaoCdMoOuMoCd).toBe('União com liberdade / desprendimento / múltiplas vivências')
      })
      test('2 X 6', () => {
        const map = new NumericMap('', '1950-12-26', '2021-01-07')
        map.CD = 2
        map.MO = 6
        const am = new AdvancedTecniques(map)

        expect(am.tec12ConjuncaoCdMoOuMoCd).toBe('Prática afetiva perfeita / união com afetividade')
      })
      test('2 X 7', () => {
        const map = new NumericMap('', '1950-12-26', '2021-01-07')
        map.CD = 7
        map.MO = 2
        const am = new AdvancedTecniques(map)

        expect(am.tec12ConjuncaoCdMoOuMoCd).toBe('União patrocina o autoconhecimento')
      })
      test('2 X 8', () => {
        const map = new NumericMap('', '1950-12-26', '2021-01-07')
        map.CD = 2
        map.MO = 8
        const am = new AdvancedTecniques(map)

        expect(am.tec12ConjuncaoCdMoOuMoCd).toBe('União baseada na justiça / retidão / verdade')
      })
      test('2 X 9', () => {
        const map = new NumericMap('', '1950-12-26', '2021-01-07')
        map.CD = 9
        map.MO = 2
        const am = new AdvancedTecniques(map)

        expect(am.tec12ConjuncaoCdMoOuMoCd).toBe('União de almas / união profunda com solicitação de acentuado companheirismo')
      })
      test('2 X 11', () => {
        const map = new NumericMap('', '1950-12-26', '2021-01-07')
        map.CD = 11
        map.MO = 2
        const am = new AdvancedTecniques(map)

        expect(am.tec12ConjuncaoCdMoOuMoCd).toBe('Pureza de união / flexibilidade / viver sempre unido / prática da espiritualidade')
      })
      test('2 X 22', () => {
        const map = new NumericMap('', '1950-12-26', '2021-01-07')
        map.CD = 22
        map.MO = 2
        const am = new AdvancedTecniques(map)

        expect(am.tec12ConjuncaoCdMoOuMoCd).toBe('União proporciona segurança / estabilidade / prática da espiritualidade')
      })
    })
    describe('3', () => {
      test('3 X 3', () => {
        const map = new NumericMap('', '1950-12-26', '2021-01-07')
        map.CD = 3
        map.MO = 3
        const am = new AdvancedTecniques(map)

        expect(am.tec12ConjuncaoCdMoOuMoCd).toBe('Pureza de criação / talentos / expansão ')
      })
      test('3 X 4', () => {
        const map = new NumericMap('', '1950-12-26', '2021-01-07')
        map.CD = 3
        map.MO = 4
        const am = new AdvancedTecniques(map)

        expect(am.tec12ConjuncaoCdMoOuMoCd).toBe('Crescimento proporciona segurança / estabilidade')
      })
      test('3 X 5', () => {
        const map = new NumericMap('', '1950-12-26', '2021-01-07')
        map.CD = 5
        map.MO = 3
        const am = new AdvancedTecniques(map)

        expect(am.tec12ConjuncaoCdMoOuMoCd).toBe('Crescimento / expansão sem fronteiras / diversificação / multiplicidade')
      })
      test('3 X 6', () => {
        const map = new NumericMap('', '1950-12-26', '2021-01-07')
        map.CD = 3
        map.MO = 6
        const am = new AdvancedTecniques(map)

        expect(am.tec12ConjuncaoCdMoOuMoCd).toBe('Prática efetiva com criatividade e desenvolvimento')
      })
      test('3 X 7', () => {
        const map = new NumericMap('', '1950-12-26', '2021-01-07')
        map.CD = 7
        map.MO = 3
        const am = new AdvancedTecniques(map)

        expect(am.tec12ConjuncaoCdMoOuMoCd).toBe('Crescimento para desenvolvimento de espiritualidade / autoconhecimento / sabedoria')
      })
      test('3 X 8', () => {
        const map = new NumericMap('', '1950-12-26', '2021-01-07')
        map.CD = 3
        map.MO = 8
        const am = new AdvancedTecniques(map)

        expect(am.tec12ConjuncaoCdMoOuMoCd).toBe('Crescimento justo / correto / verdadeiro')
      })
      test('3 X 9', () => {
        const map = new NumericMap('', '1950-12-26', '2021-01-07')
        map.CD = 9
        map.MO = 3
        const am = new AdvancedTecniques(map)

        expect(am.tec12ConjuncaoCdMoOuMoCd).toBe('Crescimento da alma / pessoa com interesses diversificados (acentuada curiosidade)')
      })
      test('3 X 11', () => {
        const map = new NumericMap('', '1950-12-26', '2021-01-07')
        map.CD = 11
        map.MO = 3
        const am = new AdvancedTecniques(map)

        expect(am.tec12ConjuncaoCdMoOuMoCd).toBe('União patrocina o crescimento / a expansão / prática da espiritualidade')
      })
      test('3 X 22', () => {
        const map = new NumericMap('', '1950-12-26', '2021-01-07')
        map.CD = 22
        map.MO = 3
        const am = new AdvancedTecniques(map)

        expect(am.tec12ConjuncaoCdMoOuMoCd).toBe('Crescimento proporciona segurança / estabilidade / prática da espiritualidade')
      })
    })
    describe('4', () => {
      test('4 X 4', () => {
        const map = new NumericMap('', '1950-12-26', '2021-01-07')
        map.CD = 4
        map.MO = 4
        const am = new AdvancedTecniques(map)

        expect(am.tec12ConjuncaoCdMoOuMoCd).toBe('Pureza de estabilidade / segurança / trabalhador nato')
      })
      test('4 X 5', () => {
        const map = new NumericMap('', '1950-12-26', '2021-01-07')
        map.CD = 5
        map.MO = 4
        const am = new AdvancedTecniques(map)

        expect(am.tec12ConjuncaoCdMoOuMoCd).toBe('Segurança / estabilidade é adquirida pela liberdade / vivências')
      })
      test('4 X 6', () => {
        const map = new NumericMap('', '1950-12-26', '2021-01-07')
        map.CD = 4
        map.MO = 6
        const am = new AdvancedTecniques(map)

        expect(am.tec12ConjuncaoCdMoOuMoCd).toBe('Segurança nos sentimentos afetivos')
      })
      test('4 X 7', () => {
        const map = new NumericMap('', '1950-12-26', '2021-01-07')
        map.CD = 7
        map.MO = 4
        const am = new AdvancedTecniques(map)

        expect(am.tec12ConjuncaoCdMoOuMoCd).toBe('Estabilidade na prática do autoconhecimento e da espiritualidade')
      })
      test('4 X 8', () => {
        const map = new NumericMap('', '1950-12-26', '2021-01-07')
        map.CD = 4
        map.MO = 8
        const am = new AdvancedTecniques(map)

        expect(am.tec12ConjuncaoCdMoOuMoCd).toBe('Segurança no julgar / alto grau de correção / confiabilidade')
      })
      test('4 X 9', () => {
        const map = new NumericMap('', '1950-12-26', '2021-01-07')
        map.CD = 9
        map.MO = 4
        const am = new AdvancedTecniques(map)

        expect(am.tec12ConjuncaoCdMoOuMoCd).toBe('Controle da alma /  acentuada necessidade de controlar diversos aspectos da vida ')
      })
      test('4 X 11', () => {
        const map = new NumericMap('', '1950-12-26', '2021-01-07')
        map.CD = 11
        map.MO = 4
        const am = new AdvancedTecniques(map)

        expect(am.tec12ConjuncaoCdMoOuMoCd).toBe('União proporciona segurança / estabilidade / prática da espiritualidade ')
      })
      test('4 X 22', () => {
        const map = new NumericMap('', '1950-12-26', '2021-01-07')
        map.CD = 22
        map.MO = 4
        const am = new AdvancedTecniques(map)

        expect(am.tec12ConjuncaoCdMoOuMoCd).toBe('Pureza de estabilidade / segurança / trabalhador nato / prática da espiritualidade')
      })
    })
    describe('5', () => {
      test('5 X 5', () => {
        const map = new NumericMap('', '1950-12-26', '2021-01-07')
        map.CD = 5
        map.MO = 5
        const am = new AdvancedTecniques(map)

        expect(am.tec12ConjuncaoCdMoOuMoCd).toBe('Pureza de liberdade / vivências / desprendimento para mudanças')
      })
      test('5 X 6', () => {
        const map = new NumericMap('', '1950-12-26', '2021-01-07')
        map.CD = 5
        map.MO = 6
        const am = new AdvancedTecniques(map)

        expect(am.tec12ConjuncaoCdMoOuMoCd).toBe('Afetividade com liberdade / vivências / mudanças ')
      })
      test('5 X 7', () => {
        const map = new NumericMap('', '1950-12-26', '2021-01-07')
        map.CD = 7
        map.MO = 5
        const am = new AdvancedTecniques(map)

        expect(am.tec12ConjuncaoCdMoOuMoCd).toBe('Necessidade de liberdade / vivências para se autoconhecer')
      })
      test('5 X 8', () => {
        const map = new NumericMap('', '1950-12-26', '2021-01-07')
        map.CD = 5
        map.MO = 8
        const am = new AdvancedTecniques(map)

        expect(am.tec12ConjuncaoCdMoOuMoCd).toBe('Prática da justiça / retidão, considerando múltiplos aspectos (mediador)')
      })
      test('5 X 9', () => {
        const map = new NumericMap('', '1950-12-26', '2021-01-07')
        map.CD = 9
        map.MO = 5
        const am = new AdvancedTecniques(map)

        expect(am.tec12ConjuncaoCdMoOuMoCd).toBe('Alma livre / a mais intensa liberdade / desprendimento acentuado em todos os aspectos da vida')
      })
      test('5 X 11', () => {
        const map = new NumericMap('', '1950-12-26', '2021-01-07')
        map.CD = 11
        map.MO = 5
        const am = new AdvancedTecniques(map)

        expect(am.tec12ConjuncaoCdMoOuMoCd).toBe('União com liberdade /desprendimento / múltiplas vivências / prática da espiritualidade')
      })
      test('5 X 22', () => {
        const map = new NumericMap('', '1950-12-26', '2021-01-07')
        map.CD = 22
        map.MO = 5
        const am = new AdvancedTecniques(map)

        expect(am.tec12ConjuncaoCdMoOuMoCd).toBe('Segurança / estabilidade é adquirida pela liberdade / vivências / prática da espiritualidade')
      })
    })
    describe('6', () => {
      test('6 X 6', () => {
        const map = new NumericMap('', '1950-12-26', '2021-01-07')
        map.CD = 6
        map.MO = 6
        const am = new AdvancedTecniques(map)

        expect(am.tec12ConjuncaoCdMoOuMoCd).toBe('Pureza de emoção / harmonia / alto potencial afetivo')
      })
      test('6 X 7', () => {
        const map = new NumericMap('', '1950-12-26', '2021-01-07')
        map.CD = 7
        map.MO = 6
        const am = new AdvancedTecniques(map)

        expect(am.tec12ConjuncaoCdMoOuMoCd).toBe('Amor com sabedoria / profundidade e exigências')
      })
      test('6 X 8', () => {
        const map = new NumericMap('', '1950-12-26', '2021-01-07')
        map.CD = 6
        map.MO = 8
        const am = new AdvancedTecniques(map)

        expect(am.tec12ConjuncaoCdMoOuMoCd).toBe('Amor com justiça / verdade / honestidade / retidão')
      })
      test('6 X 9', () => {
        const map = new NumericMap('', '1950-12-26', '2021-01-07')
        map.CD = 9
        map.MO = 6
        const am = new AdvancedTecniques(map)

        expect(am.tec12ConjuncaoCdMoOuMoCd).toBe('Amor de almas / amor com entrega total e duradouro')
      })
      test('6 X 11', () => {
        const map = new NumericMap('', '1950-12-26', '2021-01-07')
        map.CD = 11
        map.MO = 6
        const am = new AdvancedTecniques(map)

        expect(am.tec12ConjuncaoCdMoOuMoCd).toBe('Prática afetiva perfeita / união com afetividade / prática da espiritualidade')
      })
      test('6 X 22', () => {
        const map = new NumericMap('', '1950-12-26', '2021-01-07')
        map.CD = 22
        map.MO = 6
        const am = new AdvancedTecniques(map)

        expect(am.tec12ConjuncaoCdMoOuMoCd).toBe('Segurança nos sentimentos afetivos / prática da espiritualidade')
      })
    })
    describe('7', () => {
      test('7 X 7', () => {
        const map = new NumericMap('', '1950-12-26', '2021-01-07')
        map.CD = 7
        map.MO = 7
        const am = new AdvancedTecniques(map)

        expect(am.tec12ConjuncaoCdMoOuMoCd).toBe('Pureza de autoconhecimento / espiritualidade / conhecimentos ')
      })
      test('7 X 8', () => {
        const map = new NumericMap('', '1950-12-26', '2021-01-07')
        map.CD = 7
        map.MO = 8
        const am = new AdvancedTecniques(map)

        expect(am.tec12ConjuncaoCdMoOuMoCd).toBe('Sabedoria justa / correta / verdadeira')
      })
      test('7 X 9', () => {
        const map = new NumericMap('', '1950-12-26', '2021-01-07')
        map.CD = 7
        map.MO = 9
        const am = new AdvancedTecniques(map)

        expect(am.tec12ConjuncaoCdMoOuMoCd).toBe('Sabedoria da alma / pessoa sábia e conceituado conhecimento')
      })
      test('7 X 11', () => {
        const map = new NumericMap('', '1950-12-26', '2021-01-07')
        map.CD = 11
        map.MO = 7
        const am = new AdvancedTecniques(map)

        expect(am.tec12ConjuncaoCdMoOuMoCd).toBe('União patrocina o autoconhecimento / prática da espiritualidade')
      })
      test('7 X 22', () => {
        const map = new NumericMap('', '1950-12-26', '2021-01-07')
        map.CD = 22
        map.MO = 7
        const am = new AdvancedTecniques(map)

        expect(am.tec12ConjuncaoCdMoOuMoCd).toBe('Estabilidade na prática do autoconhecimento e da espiritualidade')
      })
    })
    describe('8', () => {
      test('8 X 8', () => {
        const map = new NumericMap('', '1950-12-26', '2021-01-07')
        map.CD = 8
        map.MO = 8
        const am = new AdvancedTecniques(map)

        expect(am.tec12ConjuncaoCdMoOuMoCd).toBe('Pureza de correção / alto grau de confiabilidade / excessivamente verdadeiro ')
      })
      test('8 X 9', () => {
        const map = new NumericMap('', '1950-12-26', '2021-01-07')
        map.CD = 8
        map.MO = 9
        const am = new AdvancedTecniques(map)

        expect(am.tec12ConjuncaoCdMoOuMoCd).toBe('Alma justa / correta / verdadeira ')
      })
      test('8 X 11', () => {
        const map = new NumericMap('', '1950-12-26', '2021-01-07')
        map.CD = 11
        map.MO = 8
        const am = new AdvancedTecniques(map)

        expect(am.tec12ConjuncaoCdMoOuMoCd).toBe('União baseada na justiça / retidão / verdade / prática da espiritualidade')
      })
      test('8 X 22', () => {
        const map = new NumericMap('', '1950-12-26', '2021-01-07')
        map.CD = 22
        map.MO = 8
        const am = new AdvancedTecniques(map)

        expect(am.tec12ConjuncaoCdMoOuMoCd).toBe('Segurança no julgar / alto grau de correção / confiabilidade / prática da espiritualidade')
      })
    })
    describe('9', () => {
      test('9 X 9', () => {
        const map = new NumericMap('', '1950-12-26', '2021-01-07')
        map.CD = 9
        map.MO = 9
        const am = new AdvancedTecniques(map)

        expect(am.tec12ConjuncaoCdMoOuMoCd).toBe('Pureza da alma / pessoa autêntica / cristalina ')
      })
      test('9 X 11', () => {
        const map = new NumericMap('', '1950-12-26', '2021-01-07')
        map.CD = 11
        map.MO = 9
        const am = new AdvancedTecniques(map)

        expect(am.tec12ConjuncaoCdMoOuMoCd).toBe('União de almas / união profunda com solicitação de acentuado companheirismo / prática da espiritualidade')
      })
      test('9 X 22', () => {
        const map = new NumericMap('', '1950-12-26', '2021-01-07')
        map.CD = 22
        map.MO = 9
        const am = new AdvancedTecniques(map)

        expect(am.tec12ConjuncaoCdMoOuMoCd).toBe('Controle da alma /acentuada necessidade de controlar diversos aspectos da vida / prática da espiritualidade')
      })
    })
    describe('11', () => {
      test('11 X 11', () => {
        const map = new NumericMap('', '1950-12-26', '2021-01-07')
        map.CD = 11
        map.MO = 11
        const am = new AdvancedTecniques(map)

        expect(am.tec12ConjuncaoCdMoOuMoCd).toBe('Pureza de união / intuição / sensibilidade / prática da espiritualidade / reciclar energias ')
      })
      test('11 X 22', () => {
        const map = new NumericMap('', '1950-12-26', '2021-01-07')
        map.CD = 22
        map.MO = 11
        const am = new AdvancedTecniques(map)

        expect(am.tec12ConjuncaoCdMoOuMoCd).toBe('União proporciona segurança / estabilidade / intuição / sabedoria / prática da espiritualidade')
      })
    })
    describe('22', () => {
      test('22 X 22', () => {
        const map = new NumericMap('', '1950-12-26', '2021-01-07')
        map.CD = 22
        map.MO = 22
        const am = new AdvancedTecniques(map)

        expect(am.tec12ConjuncaoCdMoOuMoCd).toBe('Pureza de estabilidade / sabedoria / magia / maestria / prática da espiritualidade')
      })
    })
  })
  describe('tec13PotenciaisViciosReciclador1aLeitura', () => {
    test('map 1', () => {
      const map = new NumericMap('DAINARI MOZZU', '1950-12-26', '2021-01-07')
      const am = new AdvancedTecniques(map)

      expect(am.tec13PotenciaisViciosReciclador1aLeitura).toEqual({
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
      const map = new NumericMap('ODRAUDE USSOR', '1979-03-17', '2021-01-07')
      const am = new AdvancedTecniques(map)

      expect(am.tec13PotenciaisViciosReciclador1aLeitura).toEqual({
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
      const map = new NumericMap('DAINARI MOZZU', '1950-12-26', '2021-01-07')
      const am = new AdvancedTecniques(map)

      expect(am.tec13PotenciaisViciosReciclador2aLeitura).toBe('Conquistas diversas não é potencial')
    })
    test('map 2', () => {
      const map = new NumericMap('ODRAUDE USSOR', '1979-03-17', '2021-01-07')
      const am = new AdvancedTecniques(map)

      expect(am.tec13PotenciaisViciosReciclador2aLeitura).toBe('Conquistas diversas não é potencial')
    })
    test('map 3', () => {
      const map3 = new NumericMap('AS', '0025-12-02', '2021-01-07')
      const am3 = new AdvancedTecniques(map3)

      expect(am3.tec13PotenciaisViciosReciclador2aLeitura).toBe('Conquistas diversas é potencial com 84%')
    })
  })
  describe('tec13PotenciaisViciosReciclador3aLeitura', () => {
    test('map 1', () => {
      const map = new NumericMap('DAINARI MOZZU', '1950-12-26', '2021-01-07')
      const am = new AdvancedTecniques(map)

      expect(am.tec13PotenciaisViciosReciclador3aLeitura).toEqual([
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
      const map = new NumericMap('ODRAUDE USSOR', '1979-03-17', '2021-01-07')
      const am = new AdvancedTecniques(map)

      expect(am.tec13PotenciaisViciosReciclador3aLeitura).toEqual([
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
      const map = new NumericMap('DAINARI MOZZU', '1950-12-26', '2021-01-07')
      const am = new AdvancedTecniques(map)

      expect(am.tec14Pureza).toBe(2)
    })
    test('map 2', () => {
      const map = new NumericMap('ODRAUDE USSOR', '1979-03-17', '2021-01-07')
      const am = new AdvancedTecniques(map)

      expect(am.tec14Pureza).toBeFalsy()
    })
  })
  describe('tec15RealizacaoEspontanea', () => {
    test('map 1', () => {
      const map = new NumericMap('DAINARI MOZZU', '1950-12-26', '2021-01-07')
      const am = new AdvancedTecniques(map)

      expect(am.tec15RealizacaoEspontanea).toEqual([
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
      const map = new NumericMap('ODRAUDE USSOR', '1979-03-17', '2021-01-07')
      const am = new AdvancedTecniques(map)

      expect(am.tec15RealizacaoEspontanea).toEqual([
      ])
    })
  })
  describe('tec16ConquistaEspontanea', () => {
    test('map 1 with', () => {
      const map = new NumericMap('DAINARI MOZZU', '1950-12-26', '2021-01-07')
      const am = new AdvancedTecniques(map)

      expect(am.tec16ConquistaEspontanea).toEqual([
        { position: 'DM', start: 0, end: 28 },
      ])
    })
    test('map 2 without', () => {
      const map = new NumericMap('ODRAUDE USSOR', '1979-03-17', '2021-01-07')
      const am = new AdvancedTecniques(map)

      expect(am.tec16ConquistaEspontanea).toEqual([])
    })
    test('map with', () => {
      const m = new NumericMap('', '1979-03-17', '2021-01-07')
      m.CD = 6
      m.D1 = 1
      m.D2 = 2
      m.DM = 3

      m.R1 = 1
      m.R2 = 2
      m.R3 = 2
      m.R4 = 3

      const am = new AdvancedTecniques(m)
      expect(am.tec16ConquistaEspontanea).toEqual([
        { position: 'D1', start: 0, end: 28 },
        { position: 'D2', start: 30, end: 50 },
        { position: 'DM', start: 50, end: Infinity },
      ])
    })
  })
  describe('tec17Renascimento', () => {
    test('map without', () => {
      const map = new NumericMap('DAINARI MOZZU', '1950-12-26', '2021-01-07')
      const am = new AdvancedTecniques(map)

      expect(am.tec17Renascimento).toEqual([])
    })
    test('map with', () => {
      const m = new NumericMap('', '1979-03-17', '2021-01-07')

      m.R1 = 1
      m.R2 = 2
      m.R3 = 1
      m.R4 = 1

      const am = new AdvancedTecniques(m)
      expect(am.tec17Renascimento).toEqual([
        { position: 'R3', age: 45 },
        { position: 'R4', age: 55 },
      ])
    })
  })
  describe('tec18MomentoDecisivoForte', () => {
    test('map without', () => {
      const map = new NumericMap('ODRAUDE USSOR', '1979-03-17', '2021-01-07')
      const am = new AdvancedTecniques(map)

      expect(am.tec18MomentoDecisivoForte).toEqual([])
    })
    test('map with CD 8', () => {
      const map = new NumericMap('DAINARI MOZZU', '1950-12-26', '2021-01-07')
      const am = new AdvancedTecniques(map)

      expect(am.tec18MomentoDecisivoForte).toEqual([
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
  describe('tec19AusenciaDeVibracaoPositiva', () => {
    test('map 1', () => {
      const map = new NumericMap('', '1979-03-17', '2021-01-07')

      map.MO = 11
      map.EU = 11
      map.CD = 8
      map.EX = 22
      map.C1 = 3
      map.C2 = 8
      map.C3 = 6
      map.D1 = 5
      map.D2 = 3
      map.DM = 2
      map.R1 = 11
      map.R2 = 5
      map.R3 = 7
      map.R4 = 9
      const am = new AdvancedTecniques(map)
      expect(am.tec19AusenciaDeVibracaoPositiva).toEqual([
        {
          position:    'D1',
          vn:          5,
          receivedAge: 28,
        },
      ])
    })
    test('map 2', () => {
      const map = new NumericMap('', '1979-03-17', '2021-01-07')

      map.MO = 5
      map.EU = 22
      map.CD = 4
      map.EX = 9
      map.C1 = 3
      map.C2 = 8
      map.C3 = 2
      map.D1 = 5
      map.D2 = 1
      map.DM = 4
      map.R1 = 11
      map.R2 = 1
      map.R3 = 3
      map.R4 = 5
      const am = new AdvancedTecniques(map)
      expect(am.tec19AusenciaDeVibracaoPositiva).toEqual([
        {
          position:    'D2',
          vn:          1,
          receivedAge: 32,
        },
      ])
    })
    test('map 3', () => {
      const map = new NumericMap('', '1979-03-17', '2021-01-07')

      map.MO = 9
      map.EU = 9
      map.CD = 6
      map.EX = 9
      map.C1 = 3
      map.C2 = 6
      map.C3 = 6
      map.D1 = 3
      map.D2 = 3
      map.DM = 0
      map.R1 = 9
      map.R2 = 3
      map.R3 = 3
      map.R4 = 9
      const am = new AdvancedTecniques(map)
      expect(am.tec19AusenciaDeVibracaoPositiva).toEqual([
        {
          position:    'DM',
          vn:          1,
          receivedAge: Infinity,
        },
        {
          position:    'DM',
          vn:          2,
          receivedAge: Infinity,
        },
        {
          position:    'DM',
          vn:          4,
          receivedAge: Infinity,
        },
        {
          position:    'DM',
          vn:          5,
          receivedAge: Infinity,
        },
        {
          position:    'DM',
          vn:          7,
          receivedAge: Infinity,
        },
        {
          position:    'DM',
          vn:          8,
          receivedAge: Infinity,
        },
      ])
    })
    test('map 4', () => {
      const map = new NumericMap('', '1979-03-17', '2021-01-07')

      map.MO = 6
      map.EU = 1
      map.CD = 1
      map.EX = 7
      map.C1 = 3
      map.C2 = 8
      map.C3 = 8
      map.D1 = 5
      map.D2 = 5
      map.DM = 0
      map.R1 = 11
      map.R2 = 7
      map.R3 = 9
      map.R4 = 11
      const am = new AdvancedTecniques(map)
      expect(am.tec19AusenciaDeVibracaoPositiva).toEqual([
        {
          position:    'D1',
          vn:          5,
          receivedAge: Infinity,
        },
        {
          position:    'D2',
          vn:          5,
          receivedAge: Infinity,
        },
        {
          position:    'DM',
          vn:          4,
          receivedAge: Infinity,
        },
        {
          position:    'DM',
          vn:          5,
          receivedAge: Infinity,
        },
        {
          position:    'DM',
          vn:          8,
          receivedAge: 28,
        },
        {
          position:    'DM',
          vn:          9,
          receivedAge: 45,
        },
      ])
    })
    test('map 5', () => {
      const map = new NumericMap('', '1979-03-17', '2021-01-07')

      map.MO = 6
      map.EU = 4
      map.CD = 22
      map.EX = 1
      map.C1 = 7
      map.C2 = 7
      map.C3 = 8
      map.D1 = 0
      map.D2 = 1
      map.DM = 1
      map.R1 = 5
      map.R2 = 6
      map.R3 = 11
      map.R4 = 6
      const am = new AdvancedTecniques(map)
      expect(am.tec19AusenciaDeVibracaoPositiva).toEqual([
        {
          position:    'D1',
          vn:          2,
          receivedAge: 24,
        },
        {
          position:    'D1',
          vn:          3,
          receivedAge: Infinity,
        },
        {
          position:    'D1',
          vn:          8,
          receivedAge: 56,
        },
        {
          position:    'D1',
          vn:          9,
          receivedAge: Infinity,
        },
      ])
    })
  })
  describe('tec20OposicoesFortes', () => {
    test('map 1', () => {
      const map = new NumericMap('', '1979-03-17', '2021-01-07')

      map.MO = 11
      map.EU = 11
      map.CD = 8
      map.EX = 22
      map.C1 = 3
      map.C2 = 8
      map.C3 = 6
      map.D1 = 5
      map.D2 = 3
      map.DM = 2
      map.R1 = 11
      map.R2 = 5
      map.R3 = 7
      map.R4 = 9
      const am = new AdvancedTecniques(map)
      expect(am.tec20OposicoesFortes).toEqual([
        {
          pair: [
            2,
            8,
          ],
          message: 'Dar (compartilhar) x Possuir',
          type:    'fixas',
          start:   0,
          end:     Infinity,
        },
        {
          pair: [
            11,
            8,
          ],
          message: 'Dar (compartilhar) x Possuir',
          type:    'fixas',
          start:   0,
          end:     Infinity,
        },
        {
          pair: [
            22,
            5,
          ],
          message: 'Manter x Vivenciar',
          type:    'ciclos',
          start:   0,
          end:     38,
        },
        {
          pair: [
            22,
            9,
          ],
          message: 'Manter x Doar',
          type:    'ciclos',
          start:   48,
          end:     Infinity,
        },
        {
          pair: [
            7,
            8,
          ],
          message: 'Espiritualidade x Posses materiais',
          type:    'ciclos',
          start:   38,
          end:     48,
        },
        {
          pair: [
            8,
            9,
          ],
          message: 'Posses materiais x Espiritualidade',
          type:    'ciclos',
          start:   48,
          end:     Infinity,
        },
      ])
    })
    test('map 2', () => {
      const map = new NumericMap('', '1946-07-10', '2021-01-07')

      map.MO = 2
      map.EU = 4
      map.CD = 1
      map.EX = 6
      map.C1 = 7
      map.C2 = 1
      map.C3 = 2
      map.D1 = 6
      map.D2 = 5
      map.DM = 1
      map.R1 = 8
      map.R2 = 3
      map.R3 = 11
      map.R4 = 9
      const am = new AdvancedTecniques(map)
      expect(am.tec20OposicoesFortes).toEqual([
        {
          pair: [
            1,
            2,
          ],
          message: 'Independência x Associar-se',
          type:    'fixas',
          start:   0,
          end:     Infinity,
        },
        {
          pair: [
            1,
            11,
          ],
          message: 'Independência x Associar-se',
          type:    'ciclos',
          start:   45,
          end:     55,
        },
        {
          pair: [
            1,
            9,
          ],
          message: 'Para si X Doar',
          type:    'ciclos',
          start:   55,
          end:     Infinity,
        },
        {
          pair: [
            2,
            8,
          ],
          message: 'Dar (compartilhar) x Possuir',
          type:    'ciclos',
          start:   0,
          end:     35,
        },
        {
          pair: [
            4,
            5,
          ],
          message: 'Manter x Vivenciar',
          type:    'ciclos',
          start:   28,
          end:     56,
        },
        {
          pair: [
            4,
            9,
          ],
          message: 'Manter x Doar',
          type:    'ciclos',
          start:   55,
          end:     Infinity,
        },
        {
          pair: [
            7,
            8,
          ],
          message: 'Espiritualidade x Posses materiais',
          type:    'ciclos',
          start:   0,
          end:     28,
        },
      ])
    })
    test.skip('map 3', () => {
      const map = new NumericMap('', '1979-03-17', '2021-01-07')

      map.MO = 9
      map.EU = 9
      map.CD = 6
      map.EX = 9
      map.C1 = 3
      map.C2 = 6
      map.C3 = 6
      map.D1 = 3
      map.D2 = 3
      map.DM = 0
      map.R1 = 9
      map.R2 = 3
      map.R3 = 3
      map.R4 = 9
      const am = new AdvancedTecniques(map)
      expect(am.tec19AusenciaDeVibracaoPositiva).toEqual([
        {
          position:    'DM',
          vn:          1,
          receivedAge: Infinity,
        },
        {
          position:    'DM',
          vn:          2,
          receivedAge: Infinity,
        },
        {
          position:    'DM',
          vn:          4,
          receivedAge: Infinity,
        },
        {
          position:    'DM',
          vn:          5,
          receivedAge: Infinity,
        },
        {
          position:    'DM',
          vn:          7,
          receivedAge: Infinity,
        },
        {
          position:    'DM',
          vn:          8,
          receivedAge: Infinity,
        },
      ])
    })
    test.skip('map 4', () => {
      const map = new NumericMap('', '1979-03-17', '2021-01-07')

      map.MO = 6
      map.EU = 1
      map.CD = 1
      map.EX = 7
      map.C1 = 3
      map.C2 = 8
      map.C3 = 8
      map.D1 = 5
      map.D2 = 5
      map.DM = 0
      map.R1 = 11
      map.R2 = 7
      map.R3 = 9
      map.R4 = 11
      const am = new AdvancedTecniques(map)
      expect(am.tec19AusenciaDeVibracaoPositiva).toEqual([
        {
          position:    'D1',
          vn:          5,
          receivedAge: Infinity,
        },
        {
          position:    'D2',
          vn:          5,
          receivedAge: Infinity,
        },
        {
          position:    'DM',
          vn:          4,
          receivedAge: Infinity,
        },
        {
          position:    'DM',
          vn:          5,
          receivedAge: Infinity,
        },
        {
          position:    'DM',
          vn:          8,
          receivedAge: 28,
        },
        {
          position:    'DM',
          vn:          9,
          receivedAge: 45,
        },
      ])
    })
    test.skip('map 5', () => {
      const map = new NumericMap('', '1979-03-17', '2021-01-07')

      map.MO = 6
      map.EU = 4
      map.CD = 22
      map.EX = 1
      map.C1 = 7
      map.C2 = 7
      map.C3 = 8
      map.D1 = 0
      map.D2 = 1
      map.DM = 1
      map.R1 = 5
      map.R2 = 6
      map.R3 = 11
      map.R4 = 6
      const am = new AdvancedTecniques(map)
      expect(am.tec19AusenciaDeVibracaoPositiva).toEqual([
        {
          position:    'D1',
          vn:          2,
          receivedAge: 24,
        },
        {
          position:    'D1',
          vn:          3,
          receivedAge: Infinity,
        },
        {
          position:    'D1',
          vn:          8,
          receivedAge: 56,
        },
        {
          position:    'D1',
          vn:          9,
          receivedAge: Infinity,
        },
      ])
    })
  })
})
