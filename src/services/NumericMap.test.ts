import { NumericMap } from './NumericMap'
import { CycleType } from '../helpers/types'

describe('NumericMap', () => {
  describe('constructor', () => {
    test('invalid birthday date', () => {
      let map: any
      let err: any

      try {
        map = new NumericMap('E', 'a', '2017-11-14')
      } catch (error) {
        err = error
      }

      expect(map).toBeUndefined()
      expect(err).toBeInstanceOf(Error)
      expect(err.message).toBe('birthday is not a valid date')
    })
    test('invalid today date', () => {
      let map: any
      let err: any

      try {
        map = new NumericMap('E', '2017-11-14', 'a')
      } catch (error) {
        err = error
      }

      expect(map).toBeUndefined()
      expect(err).toBeInstanceOf(Error)
      expect(err.message).toBe('today is not a valid date')
    })
  })
  describe('map', () => {
    test('map 1', () => {
      const nm = new NumericMap('EDUARDÓ RUSSO', '1979-03-17', '2024-01-02')

      expect(nm).toEqual({
        name:     'EDUARDO RUSSO',
        birthday: {
          year:  1979,
          month: 3,
          day:   17,
        },
        today: {
          year:  2024,
          month: 1,
          day:   2,
        },
        MO:           6,
        CD:           1,
        EU:           1,
        EX:           7,
        D1:           5,
        D2:           5,
        DM:           0,
        C1:           3,
        C2:           8,
        C3:           8,
        R1:           11,
        R2:           7,
        R3:           9,
        R4:           11,
        age:          44,
        personalYear: {
          vn:    9,
          start: new Date('2023-03-17T00:00:00.000Z'),
          end:   new Date('2024-03-17T00:00:00.000Z'),
        },
        tec0Cycles: {
          C1End:  28,
          C2End:  56,
          C3End:  88,
          R1End:  35,
          R2End:  45,
          R3End:  55,
          age:    44,
          cycle:  2,
          cycles: [
            {
              name: 'Fixas',
              vns:  [
                {
                  position: 'DM',
                  vn:       0,
                  start:    0,
                  end:      Infinity,
                  type:     'fixas',
                },
                {
                  position: 'EU',
                  vn:       1,
                  start:    0,
                  end:      Infinity,
                  type:     'fixas',
                },
                {
                  position: 'CD',
                  vn:       1,
                  start:    0,
                  end:      Infinity,
                  type:     'fixas',
                },
                {
                  position: 'MO',
                  vn:       6,
                  start:    0,
                  end:      Infinity,
                  type:     'fixas',
                },
                {
                  position: 'EX',
                  vn:       7,
                  start:    0,
                  end:      Infinity,
                  type:     'fixas',
                },
              ],
            },
            {
              name: '1º Ciclo (0/28 anos)',
              vns:  [
                {
                  position: 'R1',
                  vn:       11,
                  start:    0,
                  end:      28,
                  type:     'ciclos',
                },
                {
                  position: 'C1',
                  vn:       3,
                  start:    0,
                  end:      28,
                  type:     'ciclos',
                },
                {
                  position: 'D1',
                  vn:       5,
                  start:    0,
                  end:      28,
                  type:     'ciclos',
                },
              ],
            },
            {
              name: '2º Ciclo (28/56 anos)',
              vns:  [
                {
                  position: 'R1',
                  vn:       11,
                  start:    28,
                  end:      35,
                  type:     'ciclos',
                },
                {
                  position: 'R4',
                  vn:       11,
                  start:    55,
                  end:      56,
                  type:     'ciclos',
                },
                {
                  position: 'D2',
                  vn:       5,
                  start:    28,
                  end:      56,
                  type:     'ciclos',
                },
                {
                  position: 'R2',
                  vn:       7,
                  start:    35,
                  end:      45,
                  type:     'ciclos',
                },
                {
                  position: 'C2',
                  vn:       8,
                  start:    28,
                  end:      56,
                  type:     'ciclos',
                },
                {
                  position: 'R3',
                  vn:       9,
                  start:    45,
                  end:      55,
                  type:     'ciclos',
                },
              ],
            },
            {
              name: '3º Ciclo (+ 56 anos)',
              vns:  [
                {
                  position: 'R4',
                  vn:       11,
                  start:    56,
                  end:      Infinity,
                  type:     'ciclos',
                },
                {
                  position: 'C3',
                  vn:       8,
                  start:    56,
                  end:      Infinity,
                  type:     'ciclos',
                },
              ],
            },
          ],
        },
      })
      expect(nm.challenges).toEqual({
        D1: {
          vn:    5,
          start: 0,
          end:   28,
        },
        D2: {
          vn:    5,
          start: 28,
          end:   56,
        },
        DM: {
          vn:    0,
          start: 0,
          end:   Infinity,
        },
      })
      expect(nm.achievements).toEqual({
        R1: {
          vn:    11,
          start: 0,
          end:   35,
        },
        R2: {
          vn:    7,
          start: 35,
          end:   45,
        },
        R3: {
          vn:    9,
          start: 45,
          end:   55,
        },
        R4: {
          vn:    11,
          start: 55,
          end:   Infinity,
        },
      })
    })
    test('map 2', () => {
      const nm = new NumericMap('DINAURA MOZZI', '1950-12-26', '2024-01-02')

      expect(nm).toEqual({
        name:     'DINAURA MOZZI',
        birthday: {
          year:  1950,
          month: 12,
          day:   26,
        },
        today: {
          year:  2024,
          month: 1,
          day:   2,
        },
        MO:           11,
        CD:           8,
        EU:           11,
        EX:           22,
        D1:           5,
        D2:           3,
        DM:           2,
        C1:           3,
        C2:           8,
        C3:           6,
        R1:           11,
        R2:           5,
        R3:           7,
        R4:           9,
        age:          73,
        personalYear: {
          vn:    9,
          start: new Date('2023-12-26T00:00:00.000Z'),
          end:   new Date('2024-12-26T00:00:00.000Z'),
        },
        tec0Cycles: {
          C1End:  28,
          C2End:  56,
          C3End:  146,
          R1End:  28,
          R2End:  38,
          R3End:  48,
          age:    73,
          cycle:  3,
          cycles: [
            {
              name: 'Fixas',
              vns:  [
                {
                  position: 'DM',
                  vn:       2,
                  start:    0,
                  end:      Infinity,
                  type:     'fixas',
                },
                {
                  position: 'MO',
                  vn:       11,
                  start:    0,
                  end:      Infinity,
                  type:     'fixas',
                },
                {
                  position: 'EU',
                  vn:       11,
                  start:    0,
                  end:      Infinity,
                  type:     'fixas',
                },
                {
                  position: 'EX',
                  vn:       22,
                  start:    0,
                  end:      Infinity,
                  type:     'fixas',
                },
                {
                  position: 'CD',
                  vn:       8,
                  start:    0,
                  end:      Infinity,
                  type:     'fixas',
                },
              ],
            },
            {
              name: '1º Ciclo (0/28 anos)',
              vns:  [
                {
                  position: 'R1',
                  vn:       11,
                  start:    0,
                  end:      28,
                  type:     'ciclos',
                },
                {
                  position: 'C1',
                  vn:       3,
                  start:    0,
                  end:      28,
                  type:     'ciclos',
                },
                {
                  position: 'D1',
                  vn:       5,
                  start:    0,
                  end:      28,
                  type:     'ciclos',
                },
              ],
            },
            {
              name: '2º Ciclo (28/56 anos)',
              vns:  [
                {
                  position: 'D2',
                  vn:       3,
                  start:    28,
                  end:      56,
                  type:     'ciclos',
                },
                {
                  position: 'R2',
                  vn:       5,
                  start:    28,
                  end:      38,
                  type:     'ciclos',
                },
                {
                  position: 'R3',
                  vn:       7,
                  start:    38,
                  end:      48,
                  type:     'ciclos',
                },
                {
                  position: 'C2',
                  vn:       8,
                  start:    28,
                  end:      56,
                  type:     'ciclos',
                },
                {
                  position: 'R4',
                  vn:       9,
                  start:    48,
                  end:      56,
                  type:     'ciclos',
                },
              ],
            },
            {
              name: '3º Ciclo (+ 56 anos)',
              vns:  [
                {
                  position: 'C3',
                  vn:       6,
                  start:    56,
                  end:      Infinity,
                  type:     'ciclos',
                },
                {
                  position: 'R4',
                  vn:       9,
                  start:    56,
                  end:      Infinity,
                  type:     'ciclos',
                },
              ],
            },
          ],
        },
      })
      expect(nm.challenges).toEqual({
        D1: {
          vn:    5,
          start: 0,
          end:   28,
        },
        D2: {
          vn:    3,
          start: 28,
          end:   56,
        },
        DM: {
          vn:    2,
          start: 0,
          end:   Infinity,
        },
      })
      expect(nm.achievements).toEqual({
        R1: {
          vn:    11,
          start: 0,
          end:   28,
        },
        R2: {
          vn:    5,
          start: 28,
          end:   38,
        },
        R3: {
          vn:    7,
          start: 38,
          end:   48,
        },
        R4: {
          vn:    9,
          start: 48,
          end:   Infinity,
        },
      })
    })
    test('map 3', () => {
      const nm = new NumericMap('EILO PILOERPAO OSSUR', '1946-07-10', '2024-01-02')

      expect(nm).toEqual(expect.objectContaining({
        name:     'EILO PILOERPAO OSSUR',
        birthday: {
          year:  1946,
          month: 7,
          day:   10,
        },
        today: {
          year:  2024,
          month: 1,
          day:   2,
        },
        MO:           2,
        CD:           1,
        EU:           4,
        EX:           6,
        D1:           6,
        D2:           5,
        DM:           1,
        C1:           7,
        C2:           1,
        C3:           2,
        R1:           8,
        R2:           3,
        R3:           11,
        R4:           9,
        age:          77,
        personalYear: {
          vn:    6,
          start: new Date(2023, 6, 10),
          end:   new Date(2024, 6, 10),
        },
        tec0Cycles: {
          C1End:  28,
          C2End:  56,
          C3End:  154,
          R1End:  35,
          R2End:  45,
          R3End:  55,
          age:    77,
          cycle:  3,
          cycles: [
            {
              name: 'Fixas',
              vns:  [
                {
                  position: 'CD',
                  vn:       1,
                  start:    0,
                  end:      Infinity,
                  type:     'fixas',
                },
                {
                  position: 'DM',
                  vn:       1,
                  start:    0,
                  end:      Infinity,
                  type:     'fixas',
                },
                {
                  position: 'MO',
                  vn:       2,
                  start:    0,
                  end:      Infinity,
                  type:     'fixas',
                },
                {
                  position: 'EU',
                  vn:       4,
                  start:    0,
                  end:      Infinity,
                  type:     'fixas',
                },
                {
                  position: 'EX',
                  vn:       6,
                  start:    0,
                  end:      Infinity,
                  type:     'fixas',
                },
              ],
            },
            {
              name: '1º Ciclo (0/28 anos)',
              vns:  [
                {
                  position: 'D1',
                  vn:       6,
                  start:    0,
                  end:      28,
                  type:     'ciclos',
                },
                {
                  position: 'C1',
                  vn:       7,
                  start:    0,
                  end:      28,
                  type:     'ciclos',
                },
                {
                  position: 'R1',
                  vn:       8,
                  start:    0,
                  end:      28,
                  type:     'ciclos',
                },
              ],
            },
            {
              name: '2º Ciclo (28/56 anos)',
              vns:  [
                {
                  position: 'C2',
                  vn:       1,
                  start:    28,
                  end:      56,
                  type:     'ciclos',
                },
                {
                  position: 'R3',
                  vn:       11,
                  start:    45,
                  end:      55,
                  type:     'ciclos',
                },
                {
                  position: 'R2',
                  vn:       3,
                  start:    35,
                  end:      45,
                  type:     'ciclos',
                },
                {
                  position: 'D2',
                  vn:       5,
                  start:    28,
                  end:      56,
                  type:     'ciclos',
                },
                {
                  position: 'R1',
                  vn:       8,
                  start:    28,
                  end:      35,
                  type:     'ciclos',
                },
                {
                  position: 'R4',
                  vn:       9,
                  start:    55,
                  end:      56,
                  type:     'ciclos',
                },
              ],
            },
            {
              name: '3º Ciclo (+ 56 anos)',
              vns:  [
                {
                  position: 'C3',
                  vn:       2,
                  start:    56,
                  end:      Infinity,
                  type:     'ciclos',
                },
                {
                  position: 'R4',
                  vn:       9,
                  start:    56,
                  end:      Infinity,
                  type:     'ciclos',
                },
              ],
            },
          ],
        },
      }))
      expect(nm.challenges).toEqual({
        D1: {
          vn:    6,
          start: 0,
          end:   28,
        },
        D2: {
          vn:    5,
          start: 28,
          end:   56,
        },
        DM: {
          vn:    1,
          start: 0,
          end:   Infinity,
        },
      })
      expect(nm.achievements).toEqual({
        R1: {
          vn:    8,
          start: 0,
          end:   35,
        },
        R2: {
          vn:    3,
          start: 35,
          end:   45,
        },
        R3: {
          vn:    11,
          start: 45,
          end:   55,
        },
        R4: {
          vn:    9,
          start: 55,
          end:   Infinity,
        },
      })
    })
  })
  describe('personal year', () => {
    test('today is birthday', () => {
      const nm = new NumericMap('NAME LAST', '1977-12-17', '2023-12-18')

      expect(nm.personalYear).toEqual({
        start: new Date('2023-12-17'),
        end:   new Date('2024-12-17'),
        vn:    9,
      })
    })
    test('birthday passed', () => {
      const nm = new NumericMap('NAME LAST', '1977-12-17', '2023-12-25')

      expect(nm.personalYear).toEqual({
        start: new Date('2023-12-17'),
        end:   new Date('2024-12-17'),
        vn:    9,
      })
    })
    test('birthday did not pass', () => {
      const nm = new NumericMap('NAME LAST', '1977-12-17', '2023-12-16')

      expect(nm.personalYear).toEqual({
        start: new Date('2022-12-17'),
        end:   new Date('2023-12-17'),
        vn:    8,
      })
    })
    test('AP 2', () => {
      const nm = new NumericMap('NAME LAST', '2018-06-26', '2023-01-01')

      expect(nm.personalYear.vn).toBe(2)
    })
    test('AP 11', () => {
      const nm = new NumericMap('NAME LAST', '1979-11-20', '2024-01-01')

      expect(nm.personalYear.vn).toBe(11)
    })
    test('AP 4', () => {
      const nm = new NumericMap('NAME LAST', '1979-03-26', '2010-03-01')

      expect(nm.personalYear.vn).toBe(4)
    })
    test('AP 22', () => {
      const nm = new NumericMap('NAME LAST', '1979-08-26', '2014-03-01')

      expect(nm.personalYear.vn).toBe(22)
    })
  })
  describe('personal year', () => {
    test('number', () => {
      let nm = new NumericMap('EDUARDO RUSSO', '1979-03-17', '2024-01-02')

      expect(nm.vnCount(0)).toEqual({ positions: ['DM'], count: 1 })
      expect(nm.vnCount(1)).toEqual({ positions: ['EU', 'CD'], count: 2 })
      expect(nm.vnCount(2)).toEqual({ positions: [], count: 0 })
      expect(nm.vnCount(11)).toEqual({ positions: ['R1', 'R4'], count: 2 })
      expect(nm.vnCount(3)).toEqual({ positions: ['C1'], count: 1 })
      expect(nm.vnCount(4)).toEqual({ positions: [], count: 0 })
      expect(nm.vnCount(22)).toEqual({ positions: [], count: 0 })
      expect(nm.vnCount(5)).toEqual({ positions: ['D1', 'D2'], count: 2 })
      expect(nm.vnCount(6)).toEqual({ positions: ['MO'], count: 1 })
      expect(nm.vnCount(7)).toEqual({ positions: ['EX', 'R2'], count: 2 })
      expect(nm.vnCount(8)).toEqual({ positions: ['C2', 'C3'], count: 2 })
      expect(nm.vnCount(9)).toEqual({ positions: ['R3'], count: 1 })

      nm = new NumericMap('DINAURA MOZZI', '1950-12-26', '2024-01-02')

      expect(nm.vnCount(0)).toEqual({ positions: [], count: 0 })
      expect(nm.vnCount(1)).toEqual({ positions: [], count: 0 })
      expect(nm.vnCount(2)).toEqual({ positions: ['DM'], count: 1 })
      expect(nm.vnCount(11)).toEqual({ positions: ['MO', 'EU', 'R1'], count: 3 })
      expect(nm.vnCount(3)).toEqual({ positions: ['D2', 'C1'], count: 2 })
      expect(nm.vnCount(4)).toEqual({ positions: [], count: 0 })
      expect(nm.vnCount(22)).toEqual({ positions: ['EX'], count: 1 })
      expect(nm.vnCount(5)).toEqual({ positions: ['D1', 'R2'], count: 2 })
      expect(nm.vnCount(6)).toEqual({ positions: ['C3'], count: 1 })
      expect(nm.vnCount(7)).toEqual({ positions: ['R3'], count: 1 })
      expect(nm.vnCount(8)).toEqual({ positions: ['CD', 'C2'], count: 2 })
      expect(nm.vnCount(9)).toEqual({ positions: ['R4'], count: 1 })
    })
    test('array of numbers', () => {
      let nm = new NumericMap('EDUARDO RUSSO', '1979-03-17', '2024-01-02')

      expect(nm.vnCount([2, 11])).toEqual({ positions: ['R1', 'R4'], count: 2 })
      expect(nm.vnCount([4, 22])).toEqual({ positions: [], count: 0 })

      nm = new NumericMap('DINAURA MOZZI', '1950-12-26', '2024-01-02')

      expect(nm.vnCount([2, 11])).toEqual({ positions: ['MO', 'EU', 'DM', 'R1'], count: 4 })
      expect(nm.vnCount([4, 22])).toEqual({ positions: ['EX'], count: 1 })
    })
  })
  describe('getters', () => {
    test('vns', () => {
      const nm = new NumericMap('EDUARDO RUSSO', '1979-03-17', '2024-01-02')

      expect(nm.vns).toEqual([6, 1, 1, 7, 5, 5, 0, 3, 8, 8, 11, 7, 9, 11])
    })
    test('vnsPosition', () => {
      const nm = new NumericMap('EDUARDO RUSSO', '1979-03-17', '2024-01-02')

      expect(nm.vnsPosition).toEqual([
        { position: 'MO', vn: 6 },
        { position: 'EU', vn: 1 },
        { position: 'CD', vn: 1 },
        { position: 'EX', vn: 7 },
        { position: 'D1', vn: 5 },
        { position: 'D2', vn: 5 },
        { position: 'DM', vn: 0 },
        { position: 'C1', vn: 3 },
        { position: 'C2', vn: 8 },
        { position: 'C3', vn: 8 },
        { position: 'R1', vn: 11 },
        { position: 'R2', vn: 7 },
        { position: 'R3', vn: 9 },
        { position: 'R4', vn: 11 },
      ])
    })
    test('vnsPositionType', () => {
      const nm = new NumericMap('EDUARDO RUSSO', '1979-03-17', '2024-01-02')

      expect(nm.allCyclesVNsPosition).toEqual([
        { position: 'DM', vn: 0, type: CycleType.FIXED, start: 0, end: Infinity },
        { position: 'EU', vn: 1, type: CycleType.FIXED, start: 0, end: Infinity },
        { position: 'CD', vn: 1, type: CycleType.FIXED, start: 0, end: Infinity },
        { position: 'R1', vn: 11, type: CycleType.CYCLE, start: 0, end: 35 },
        { position: 'R4', vn: 11, type: CycleType.CYCLE, start: 55, end: Infinity },
        { position: 'C1', vn: 3, type: CycleType.CYCLE, start: 0, end: 28 },
        { position: 'D1', vn: 5, type: CycleType.CYCLE, start: 0, end: 28 },
        { position: 'D2', vn: 5, type: CycleType.CYCLE, start: 28, end: 56 },
        { position: 'MO', vn: 6, type: CycleType.FIXED, start: 0, end: Infinity },
        { position: 'EX', vn: 7, type: CycleType.FIXED, start: 0, end: Infinity },
        { position: 'R2', vn: 7, type: CycleType.CYCLE, start: 35, end: 45 },
        { position: 'C2', vn: 8, type: CycleType.CYCLE, start: 28, end: 56 },
        { position: 'C3', vn: 8, type: CycleType.CYCLE, start: 56, end: Infinity },
        { position: 'R3', vn: 9, type: CycleType.CYCLE, start: 45, end: 55 },
      ])
    })
    test('fixedVNs', () => {
      const nm = new NumericMap('EDUARDO RUSSO', '1979-03-17', '2024-01-02')

      expect(nm.fixedVNs).toEqual([6, 1, 1, 7, 0])
    })
    test('fixedMainVNs', () => {
      const nm = new NumericMap('EDUARDO RUSSO', '1979-03-17', '2024-01-02')

      expect(nm.fixedMainVNs).toEqual([6, 1, 1, 0])
    })
    test('fixedVNsPosition', () => {
      const nm = new NumericMap('EDUARDO RUSSO', '1979-03-17', '2024-01-02')

      expect(nm.fixedVNsPosition).toEqual([
        { position: 'DM', vn: 0, start: 0, end: Infinity, type: 'fixas' },
        { position: 'EU', vn: 1, start: 0, end: Infinity, type: 'fixas' },
        { position: 'CD', vn: 1, start: 0, end: Infinity, type: 'fixas' },
        { position: 'MO', vn: 6, start: 0, end: Infinity, type: 'fixas' },
        { position: 'EX', vn: 7, start: 0, end: Infinity, type: 'fixas' },
      ])
    })
    test('fixedMainVNsPosition', () => {
      const nm = new NumericMap('EDUARDO RUSSO', '1979-03-17', '2024-01-02')

      expect(nm.fixedMainVNsPosition).toEqual([
        { position: 'DM', vn: 0, start: 0, end: Infinity, type: 'fixas' },
        { position: 'EU', vn: 1, start: 0, end: Infinity, type: 'fixas' },
        { position: 'CD', vn: 1, start: 0, end: Infinity, type: 'fixas' },
        { position: 'MO', vn: 6, start: 0, end: Infinity, type: 'fixas' },
      ])
    })
    test('firstCycleVNsPosition', () => {
      const nm = new NumericMap('EDUARDO RUSSO', '1979-03-17', '2024-01-02')

      expect(nm.firstCycleVNsPosition).toEqual([
        { position: 'DM', vn: 0, start: 0, end: Infinity, type: 'fixas' },
        { position: 'EU', vn: 1, start: 0, end: Infinity, type: 'fixas' },
        { position: 'CD', vn: 1, start: 0, end: Infinity, type: 'fixas' },
        { position: 'R1', vn: 11, start: 0, end: 28, type: 'ciclos' },
        { position: 'C1', vn: 3, start: 0, end: 28, type: 'ciclos' },
        { position: 'D1', vn: 5, start: 0, end: 28, type: 'ciclos' },
        { position: 'MO', vn: 6, start: 0, end: Infinity, type: 'fixas' },
        { position: 'EX', vn: 7, start: 0, end: Infinity, type: 'fixas' },
      ])
    })
    test('firstCycleOnlyVNsPosition', () => {
      const nm = new NumericMap('EDUARDO RUSSO', '1979-03-17', '2024-01-02')

      expect(nm.firstCycleOnlyVNsPosition).toEqual([
        { position: 'R1', vn: 11, start: 0, end: 28, type: 'ciclos' },
        { position: 'C1', vn: 3, start: 0, end: 28, type: 'ciclos' },
        { position: 'D1', vn: 5, start: 0, end: 28, type: 'ciclos' },
      ])
    })
    test('firstCycleVNs', () => {
      const nm = new NumericMap('EDUARDO RUSSO', '1979-03-17', '2024-01-02')

      expect(nm.firstCycleVNs).toEqual([0, 1, 1, 11, 3, 5, 6, 7])
    })
    test('secondCycleVNsPosition', () => {
      const nm = new NumericMap('EDUARDO RUSSO', '1979-03-17', '2024-01-02')

      expect(nm.secondCycleVNsPosition).toEqual([
        { position: 'DM', vn: 0, start: 0, end: Infinity, type: 'fixas' },
        { position: 'EU', vn: 1, start: 0, end: Infinity, type: 'fixas' },
        { position: 'CD', vn: 1, start: 0, end: Infinity, type: 'fixas' },
        { position: 'R1', vn: 11, start: 28, end: 35, type: 'ciclos' },
        { position: 'R4', vn: 11, start: 55, end: 56, type: 'ciclos' },
        { position: 'D2', vn: 5, start: 28, end: 56, type: 'ciclos' },
        { position: 'MO', vn: 6, start: 0, end: Infinity, type: 'fixas' },
        { position: 'EX', vn: 7, start: 0, end: Infinity, type: 'fixas' },
        { position: 'R2', vn: 7, start: 35, end: 45, type: 'ciclos' },
        { position: 'C2', vn: 8, start: 28, end: 56, type: 'ciclos' },
        { position: 'R3', vn: 9, start: 45, end: 55, type: 'ciclos' },
      ])
    })
    test('secondCycleOnlyVNsPosition', () => {
      const nm = new NumericMap('EDUARDO RUSSO', '1979-03-17', '2024-01-02')

      expect(nm.secondCycleOnlyVNsPosition).toEqual([
        { position: 'R1', vn: 11, start: 28, end: 35, type: 'ciclos' },
        { position: 'R4', vn: 11, start: 55, end: 56, type: 'ciclos' },
        { position: 'D2', vn: 5, start: 28, end: 56, type: 'ciclos' },
        { position: 'R2', vn: 7, start: 35, end: 45, type: 'ciclos' },
        { position: 'C2', vn: 8, start: 28, end: 56, type: 'ciclos' },
        { position: 'R3', vn: 9, start: 45, end: 55, type: 'ciclos' },
      ])
    })
    test('secondCycleVNs', () => {
      const nm = new NumericMap('EDUARDO RUSSO', '1979-03-17', '2024-01-02')

      expect(nm.secondCycleVNs).toEqual([0, 1, 1, 11, 11, 5, 6, 7, 7, 8, 9])
    })
    test('thirdCycleVNsPosition', () => {
      const nm = new NumericMap('EDUARDO RUSSO', '1979-03-17', '2024-01-02')

      expect(nm.thirdCycleVNsPosition).toEqual([
        { position: 'DM', vn: 0, start: 0, end: Infinity, type: 'fixas' },
        { position: 'EU', vn: 1, start: 0, end: Infinity, type: 'fixas' },
        { position: 'CD', vn: 1, start: 0, end: Infinity, type: 'fixas' },
        { position: 'R4', vn: 11, start: 56, end: Infinity, type: 'ciclos' },
        { position: 'MO', vn: 6, start: 0, end: Infinity, type: 'fixas' },
        { position: 'EX', vn: 7, start: 0, end: Infinity, type: 'fixas' },
        { position: 'C3', vn: 8, start: 56, end: Infinity, type: 'ciclos' },
      ])
    })
    test('thirdCycleOnlyVNsPosition', () => {
      const nm = new NumericMap('EDUARDO RUSSO', '1979-03-17', '2024-01-02')

      expect(nm.thirdCycleOnlyVNsPosition).toEqual([
        { position: 'R4', vn: 11, start: 56, end: Infinity, type: 'ciclos' },
        { position: 'C3', vn: 8, start: 56, end: Infinity, type: 'ciclos'},
      ])
    })
    test('thirdCycleVNs', () => {
      const nm = new NumericMap('EDUARDO RUSSO', '1979-03-17', '2024-01-02')

      expect(nm.thirdCycleVNs).toEqual([0, 1, 1, 11, 6, 7, 8])
    })
    test('cycle - first limit', () => {
      const nm = new NumericMap('EDUARDO RUSSO', '1979-03-17', '2007-03-16')

      expect(nm.cycle).toEqual({
        cycle:     '1º Ciclo - 0/28 anos',
        index:     1,
        vnNumbers: [
          { position: 'DM', vn: 0, start: 0, end: Infinity, type: 'fixas' },
          { position: 'EU', vn: 1, start: 0, end: Infinity, type: 'fixas' },
          { position: 'CD', vn: 1, start: 0, end: Infinity, type: 'fixas' },
          { position: 'R1', vn: 11, start: 0, end: 28, type: 'ciclos' },
          { position: 'C1', vn: 3, start: 0, end: 28, type: 'ciclos' },
          { position: 'D1', vn: 5, start: 0, end: 28, type: 'ciclos' },
          { position: 'MO', vn: 6, start: 0, end: Infinity, type: 'fixas' },
          { position: 'EX', vn: 7, start: 0, end: Infinity, type: 'fixas' },
        ],
      })
    })
    test('cycle - after first limit', () => {
      const nm = new NumericMap('EDUARDO RUSSO', '1979-03-17', '2007-03-17')

      expect(nm.cycle).toEqual({
        cycle:     '2º Ciclo - 28/56 anos',
        index:     2,
        vnNumbers: [
          { position: 'DM', vn: 0, start: 0, end: Infinity, type: 'fixas' },
          { position: 'EU', vn: 1, start: 0, end: Infinity, type: 'fixas' },
          { position: 'CD', vn: 1, start: 0, end: Infinity, type: 'fixas' },
          { position: 'R1', vn: 11, start: 28, end: 35, type: 'ciclos' },
          { position: 'R4', vn: 11, start: 55, end: 56, type: 'ciclos' },
          { position: 'D2', vn: 5, start: 28, end: 56, type: 'ciclos' },
          { position: 'MO', vn: 6, start: 0, end: Infinity, type: 'fixas' },
          { position: 'EX', vn: 7, start: 0, end: Infinity, type: 'fixas' },
          { position: 'R2', vn: 7, start: 35, end: 45, type: 'ciclos' },
          { position: 'C2', vn: 8, start: 28, end: 56, type: 'ciclos' },
          { position: 'R3', vn: 9, start: 45, end: 55, type: 'ciclos' },
        ],
      })
    })
    test('cycle - second limit', () => {
      const nm = new NumericMap('EDUARDO RUSSO', '1979-03-17', '2035-03-16')

      expect(nm.cycle).toEqual({
        cycle:     '2º Ciclo - 28/56 anos',
        index:     2,
        vnNumbers: [
          { position: 'DM', vn: 0, start: 0, end: Infinity, type: 'fixas' },
          { position: 'EU', vn: 1, start: 0, end: Infinity, type: 'fixas' },
          { position: 'CD', vn: 1, start: 0, end: Infinity, type: 'fixas' },
          { position: 'R1', vn: 11, start: 28, end: 35, type: 'ciclos' },
          { position: 'R4', vn: 11, start: 55, end: 56, type: 'ciclos' },
          { position: 'D2', vn: 5, start: 28, end: 56, type: 'ciclos' },
          { position: 'MO', vn: 6, start: 0, end: Infinity, type: 'fixas' },
          { position: 'EX', vn: 7, start: 0, end: Infinity, type: 'fixas' },
          { position: 'R2', vn: 7, start: 35, end: 45, type: 'ciclos' },
          { position: 'C2', vn: 8, start: 28, end: 56, type: 'ciclos' },
          { position: 'R3', vn: 9, start: 45, end: 55, type: 'ciclos' },
        ],
      })
    })
    test('cycle - after second limit', () => {
      const nm = new NumericMap('EDUARDO RUSSO', '1979-03-17', '2035-03-17')

      expect(nm.cycle).toEqual({
        cycle:     '3º Ciclo - + 56 anos',
        index:     3,
        vnNumbers: [
          { position: 'DM', vn: 0, start: 0, end: Infinity, type: 'fixas' },
          { position: 'EU', vn: 1, start: 0, end: Infinity, type: 'fixas' },
          { position: 'CD', vn: 1, start: 0, end: Infinity, type: 'fixas' },
          { position: 'R4', vn: 11, start: 56, end: Infinity, type: 'ciclos' },
          { position: 'MO', vn: 6, start: 0, end: Infinity, type: 'fixas' },
          { position: 'EX', vn: 7, start: 0, end: Infinity, type: 'fixas' },
          { position: 'C3', vn: 8, start: 56, end: Infinity, type: 'ciclos' },
        ],
      })
    })
    test('cycle - third', () => {
      const nm = new NumericMap('EDUARDO RUSSO', '1979-03-17', '2055-10-17')

      expect(nm.cycle).toEqual({
        cycle:     '3º Ciclo - + 56 anos',
        index:     3,
        vnNumbers: [
          { position: 'DM', vn: 0, start: 0, end: Infinity, type: 'fixas' },
          { position: 'EU', vn: 1, start: 0, end: Infinity, type: 'fixas' },
          { position: 'CD', vn: 1, start: 0, end: Infinity, type: 'fixas' },
          { position: 'R4', vn: 11, start: 56, end: Infinity, type: 'ciclos' },
          { position: 'MO', vn: 6, start: 0, end: Infinity, type: 'fixas' },
          { position: 'EX', vn: 7, start: 0, end: Infinity, type: 'fixas' },
          { position: 'C3', vn: 8, start: 56, end: Infinity, type: 'ciclos'},
        ],
      })
    })
    test('achievementsArray', () => {
      const nm = new NumericMap('EDUARDO RUSSO', '1979-03-17', '2024-01-02')

      expect(nm.achievementsArray).toEqual([
        { vn: 11, start: 0, end: 35 },
        { vn: 7, start: 35, end: 45 },
        { vn: 9, start: 45, end: 55 },
        { vn: 11, start: 55, end: Infinity },
      ])
    })
    test('uniqueVNs', () => {
      let nm = new NumericMap('EDUARDO RUSSO', '1979-03-17', '2024-01-02')

      expect(nm.uniqueVNs.sort()).toEqual([0, 1, 11, 3, 5, 6, 7, 8, 9])

      nm = new NumericMap('DINAURA MOZZI', '1950-12-26', '2024-01-02')

      expect(nm.uniqueVNs.sort()).toEqual([11, 2, 22, 3, 5, 6, 7, 8, 9])
    })
    test('singleDigitCount', () => {
      let nm = new NumericMap('EDUARDO RUSSO', '1979-03-17', '2024-01-02')

      expect(nm.singleDigitCount).toEqual([
        { vn: 1, positions: ['EU', 'CD'], count: 2 },
        { vn: 2, positions: ['R1', 'R4'], count: 2 },
        { vn: 3, positions: ['C1'], count: 1 },
        { vn: 4, positions: [], count: 0 },
        { vn: 5, positions: ['D1', 'D2'], count: 2 },
        { vn: 6, positions: ['MO'], count: 1 },
        { vn: 7, positions: ['EX', 'R2'], count: 2 },
        { vn: 8, positions: ['C2', 'C3'], count: 2 },
        { vn: 9, positions: ['R3'], count: 1 },
      ])

      nm = new NumericMap('DINAURA MOZZI', '1950-12-26', '2024-01-02')

      expect(nm.singleDigitCount).toEqual([
        { vn: 1, positions: [], count: 0 },
        { vn: 2, positions: ['MO', 'EU', 'DM', 'R1'], count: 4 },
        { vn: 3, positions: ['D2', 'C1'], count: 2 },
        { vn: 4, positions: ['EX'], count: 1 },
        { vn: 5, positions: ['D1', 'R2'], count: 2 },
        { vn: 6, positions: ['C3'], count: 1 },
        { vn: 7, positions: ['R3'], count: 1 },
        { vn: 8, positions: ['CD', 'C2'], count: 2 },
        { vn: 9, positions: ['R4'], count: 1 },
      ])
    })
    test('finalDigitCount', () => {
      let nm = new NumericMap('EDUARDO RUSSO', '1979-03-17', '2024-01-02')

      expect(nm.finalDigitCount).toEqual([
        { vn: 1, positions: ['EU', 'CD'], count: 2 },
        { vn: 2, positions: [], count: 0 },
        { vn: 11, positions: ['R1', 'R4'], count: 2 },
        { vn: 3, positions: ['C1'], count: 1 },
        { vn: 4, positions: [], count: 0 },
        { vn: 22, positions: [], count: 0 },
        { vn: 5, positions: ['D1', 'D2'], count: 2 },
        { vn: 6, positions: ['MO'], count: 1 },
        { vn: 7, positions: ['EX', 'R2'], count: 2 },
        { vn: 8, positions: ['C2', 'C3'], count: 2 },
        { vn: 9, positions: ['R3'], count: 1 },
      ])

      nm = new NumericMap('DINAURA MOZZI', '1950-12-26', '2024-01-02')

      expect(nm.finalDigitCount).toEqual([
        { vn: 1, positions: [], count: 0 },
        { vn: 2, positions: ['DM'], count: 1 },
        { vn: 11, positions: ['MO', 'EU', 'R1'], count: 3 },
        { vn: 3, positions: ['D2', 'C1'], count: 2 },
        { vn: 4, positions: [], count: 0 },
        { vn: 22, positions: ['EX'], count: 1 },
        { vn: 5, positions: ['D1', 'R2'], count: 2 },
        { vn: 6, positions: ['C3'], count: 1 },
        { vn: 7, positions: ['R3'], count: 1 },
        { vn: 8, positions: ['CD', 'C2'], count: 2 },
        { vn: 9, positions: ['R4'], count: 1 },
      ])
    })
  })
})
