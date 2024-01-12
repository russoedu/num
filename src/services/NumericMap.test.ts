import { describe, expect, test } from 'vitest'
import { NumericMap } from './NumericMap'

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

      expect(nm).toEqual(expect.objectContaining({
        name:     'EDUARDO RUSSO',
        age:      44,
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

        mo: 6,
        eu: 1,
        ex: 7,

        cd: 1,
        
        c1: 3,
        c2: 8,
        c3: 8,
        
        d1: 5,
        d2: 5,
        dm: 0,

        achievements: {
          r1: {
            vn:    11,
            start: 0,
            end:   35,
          },
          r2: {
            vn:    7,
            start: 35,
            end:   45,
          },
          r3: {
            vn:    9,
            start: 45,
            end:   55,
          },
          r4: {
            vn:    11,
            start: 55,
            end:   Infinity,
          },
        },

        personalYear: {
          vn:    9,
          start: new Date('2023-03-17'),
          end:   new Date('2024-03-17'),
        },

        tec0Cycles: {
          age: 44,
          
          c1End: 28,
          c2End: 56,
          c3End: 88,

          r1End: 35,
          r2End: 45,
          r3End: 55,
          
          cycle: 2,
          
          cycles: [
            {
              name: 'Fixas',
              vns:  [
                {
                  position: 'MO',
                  vn:       6,
                },
                {
                  position: 'EU',
                  vn:       1,
                },
                {
                  position: 'CD',
                  vn:       1,
                },
                {
                  position: 'EX',
                  vn:       7,
                },
                {
                  position: 'DM',
                  vn:       0,
                },
              ],
            },
            {
              name: '1º Ciclo (0/28 anos)',
              vns:  [
                {
                  position: 'D1',
                  vn:       5,
                },
                {
                  position: 'C1',
                  vn:       3,
                },
                {
                  position: 'R1',
                  vn:       11,
                },
              ],
            },
            {
              name: '2º Ciclo (28/56 anos)',
              vns:  [
                {
                  position: 'D2',
                  vn:       5,
                },
                {
                  position: 'C2',
                  vn:       8,
                },
                {
                  position: 'R1',
                  vn:       11,
                },
                {
                  position: 'R2',
                  vn:       7,
                },
                {
                  position: 'R3',
                  vn:       9,
                },
                {
                  position: 'R4',
                  vn:       11,
                },
              ],
            },
            {
              name: '3º Ciclo (+ 56 anos)',
              vns:  [
                {
                  position: 'C3',
                  vn:       8,
                },
                {
                  position: 'R4',
                  vn:       11,
                },
              ],
            },
          ],
        },
      }))
    })
    test('map 2', () => {
      const nm = new NumericMap('DINAURA MOZZI', '1950-12-26', '2024-01-02')
      
      expect(nm).toEqual(expect.objectContaining({
        name:     'DINAURA MOZZI',
        age:      73,
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

        mo: 11,
        eu: 11,
        ex: 22,
        
        cd: 8,
        
        c1: 3,
        c2: 8,
        c3: 6,
        
        d1: 5,
        d2: 3,
        dm: 2,
        
        achievements: {
          r1: {
            vn:    11,
            start: 0,
            end:   28,
          },
          r2: {
            vn:    5,
            start: 28,
            end:   38,
          },
          r3: {
            vn:    7,
            start: 38,
            end:   48,
          },
          r4: {
            vn:    9,
            start: 48,
            end:   Infinity,
          },
        },
        
        personalYear: {
          vn:    9,
          start: new Date('2023-12-26'),
          end:   new Date('2024-12-26'),
        },
        
        tec0Cycles: {
          c1End:  28,
          c2End:  56,
          c3End:  146,
          r1End:  28,
          r2End:  38,
          r3End:  48,
          age:    73,
          cycle:  3,
          cycles: [
            {
              name: 'Fixas',
              vns:  [
                {
                  position: 'MO',
                  vn:       11,
                },
                {
                  position: 'EU',
                  vn:       11,
                },
                {
                  position: 'CD',
                  vn:       8,
                },
                {
                  position: 'EX',
                  vn:       22,
                },
                {
                  position: 'DM',
                  vn:       2,
                },
              ],
            },
            {
              name: '1º Ciclo (0/28 anos)',
              vns:  [
                {
                  position: 'D1',
                  vn:       5,
                },
                {
                  position: 'C1',
                  vn:       3,
                },
                {
                  position: 'R1',
                  vn:       11,
                },
              ],
            },
            {
              name: '2º Ciclo (28/56 anos)',
              vns:  [
                {
                  position: 'D2',
                  vn:       3,
                },
                {
                  position: 'C2',
                  vn:       8,
                },
                {
                  position: 'R2',
                  vn:       5,
                },
                {
                  position: 'R3',
                  vn:       7,
                },
                {
                  position: 'R4',
                  vn:       9,
                },
              ],
            },
            {
              name: '3º Ciclo (+ 56 anos)',
              vns:  [
                {
                  position: 'C3',
                  vn:       6,
                },
                {
                  position: 'R4',
                  vn:       9,
                },
              ],
            },
          ],
        },
      }))
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
        { position: 'MO', vn: 6 },
        { position: 'EU', vn: 1 },
        { position: 'CD', vn: 1 },
        { position: 'EX', vn: 7 },
        { position: 'DM', vn: 0 },
      ])
    })
    test('fixedMainVNsPosition', () => {
      const nm = new NumericMap('EDUARDO RUSSO', '1979-03-17', '2024-01-02')

      expect(nm.fixedMainVNsPosition).toEqual([
        { position: 'MO', vn: 6 },
        { position: 'EU', vn: 1 },
        { position: 'CD', vn: 1 },
        { position: 'DM', vn: 0 },
      ])
    })
    test('firstCycleVNsPosition', () => {
      const nm = new NumericMap('EDUARDO RUSSO', '1979-03-17', '2024-01-02')

      expect(nm.firstCycleVNsPosition).toEqual([
        { position: 'MO', vn: 6 },
        { position: 'EU', vn: 1 },
        { position: 'CD', vn: 1 },
        { position: 'EX', vn: 7 },
        { position: 'DM', vn: 0 },
        { position: 'D1', vn: 5 },
        { position: 'C1', vn: 3 },
        { position: 'R1', vn: 11 },
      ])
    })
    test('firstCycleOnlyVNsPosition', () => {
      const nm = new NumericMap('EDUARDO RUSSO', '1979-03-17', '2024-01-02')

      expect(nm.firstCycleOnlyVNsPosition).toEqual([
        { position: 'D1', vn: 5 },
        { position: 'C1', vn: 3 },
        { position: 'R1', vn: 11 },
      ])
    })
    test('firstCycleVNs', () => {
      const nm = new NumericMap('EDUARDO RUSSO', '1979-03-17', '2024-01-02')

      expect(nm.firstCycleVNs).toEqual([6, 1, 1, 7, 0, 5, 3, 11])
    })
    test('secondCycleVNsPosition', () => {
      const nm = new NumericMap('EDUARDO RUSSO', '1979-03-17', '2024-01-02')

      expect(nm.secondCycleVNsPosition).toEqual([
        { position: 'MO', vn: 6 },
        { position: 'EU', vn: 1 },
        { position: 'CD', vn: 1 },
        { position: 'EX', vn: 7 },
        { position: 'DM', vn: 0 },
        { position: 'D2', vn: 5 },
        { position: 'C2', vn: 8 },
        { position: 'R1', vn: 11 },
        { position: 'R2', vn: 7 },
        { position: 'R3', vn: 9 },
        { position: 'R4', vn: 11 },
      ])
    })
    test('secondCycleOnlyVNsPosition', () => {
      const nm = new NumericMap('EDUARDO RUSSO', '1979-03-17', '2024-01-02')

      expect(nm.secondCycleOnlyVNsPosition).toEqual([
        { position: 'D2', vn: 5 },
        { position: 'C2', vn: 8 },
        { position: 'R1', vn: 11 },
        { position: 'R2', vn: 7 },
        { position: 'R3', vn: 9 },
        { position: 'R4', vn: 11 },
      ])
    })
    test('secondCycleVNs', () => {
      const nm = new NumericMap('EDUARDO RUSSO', '1979-03-17', '2024-01-02')

      expect(nm.secondCycleVNs).toEqual([6, 1, 1, 7, 0, 5, 8, 11, 7, 9, 11])
    })
    test('thirdCycleVNsPosition', () => {
      const nm = new NumericMap('EDUARDO RUSSO', '1979-03-17', '2024-01-02')

      expect(nm.thirdCycleVNsPosition).toEqual([
        { position: 'MO', vn: 6 },
        { position: 'EU', vn: 1 },
        { position: 'CD', vn: 1 },
        { position: 'EX', vn: 7 },
        { position: 'DM', vn: 0 },
        { position: 'C3', vn: 8 },
        { position: 'R4', vn: 11 },
      ])
    })
    test('thirdCycleOnlyVNsPosition', () => {
      const nm = new NumericMap('EDUARDO RUSSO', '1979-03-17', '2024-01-02')

      expect(nm.thirdCycleOnlyVNsPosition).toEqual([
        { position: 'C3', vn: 8 },
        { position: 'R4', vn: 11 },
      ])
    })
    test('thirdCycleVNs', () => {
      const nm = new NumericMap('EDUARDO RUSSO', '1979-03-17', '2024-01-02')

      expect(nm.thirdCycleVNs).toEqual([6, 1, 1, 7, 0, 8, 11])
    })
    test('cycle - first limit', () => {
      const nm = new NumericMap('EDUARDO RUSSO', '1979-03-17', '2007-03-16')

      expect(nm.cycle).toEqual({
        cycle:     '1º Ciclo - 0/28 anos',
        index:     1,
        vnNumbers: [
          { position: 'MO', vn: 6 },
          { position: 'EU', vn: 1 },
          { position: 'CD', vn: 1 },
          { position: 'EX', vn: 7 },
          { position: 'DM', vn: 0 },
          { position: 'D1', vn: 5 },
          { position: 'C1', vn: 3 },
          { position: 'R1', vn: 11 },
        ],
      })
    })
    test('cycle - after first limit', () => {
      const nm = new NumericMap('EDUARDO RUSSO', '1979-03-17', '2007-03-17')

      expect(nm.cycle).toEqual({
        cycle:     '2º Ciclo - 28/56 anos',
        index:     2,
        vnNumbers: [
          { position: 'MO', vn: 6 },
          { position: 'EU', vn: 1 },
          { position: 'CD', vn: 1 },
          { position: 'EX', vn: 7 },
          { position: 'DM', vn: 0 },
          { position: 'D2', vn: 5 },
          { position: 'C2', vn: 8 },
          { position: 'R1', vn: 11 },
          { position: 'R2', vn: 7 },
          { position: 'R3', vn: 9 },
          { position: 'R4', vn: 11 },
        ],
      })
    })
    test('cycle - second limit', () => {
      const nm = new NumericMap('EDUARDO RUSSO', '1979-03-17', '2035-03-16')

      expect(nm.cycle).toEqual({
        cycle:     '2º Ciclo - 28/56 anos',
        index:     2,
        vnNumbers: [
          { position: 'MO', vn: 6 },
          { position: 'EU', vn: 1 },
          { position: 'CD', vn: 1 },
          { position: 'EX', vn: 7 },
          { position: 'DM', vn: 0 },
          { position: 'D2', vn: 5 },
          { position: 'C2', vn: 8 },
          { position: 'R1', vn: 11 },
          { position: 'R2', vn: 7 },
          { position: 'R3', vn: 9 },
          { position: 'R4', vn: 11 },
        ],
      })
    })
    test('cycle - after second limit', () => {
      const nm = new NumericMap('EDUARDO RUSSO', '1979-03-17', '2035-03-17')

      expect(nm.cycle).toEqual({
        cycle:     '3º Ciclo - + 56 anos',
        index:     3,
        vnNumbers: [
          { position: 'MO', vn: 6 },
          { position: 'EU', vn: 1 },
          { position: 'CD', vn: 1 },
          { position: 'EX', vn: 7 },
          { position: 'DM', vn: 0 },
          { position: 'C3', vn: 8 },
          { position: 'R4', vn: 11 },
        ],
      })
    })
    test('cycle - third', () => {
      const nm = new NumericMap('EDUARDO RUSSO', '1979-03-17', '2055-10-17')

      expect(nm.cycle).toEqual({
        cycle:     '3º Ciclo - + 56 anos',
        index:     3,
        vnNumbers: [
          { position: 'MO', vn: 6 },
          { position: 'EU', vn: 1 },
          { position: 'CD', vn: 1 },
          { position: 'EX', vn: 7 },
          { position: 'DM', vn: 0 },
          { position: 'C3', vn: 8 },
          { position: 'R4', vn: 11 },
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
