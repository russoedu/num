import { afterEach, describe, expect, test, vi } from 'vitest'
import { NumericMap } from './NumericMap'

describe('NumericMap', () => {
  describe('personal year', () => {
    test('today is birthday', () => {
      vi.useFakeTimers({ now: new Date('2023-12-18') })
      const nm = new NumericMap('NAME LAST', '1977-12-17')

      expect(nm.personalYear).toEqual({
        start: new Date('2023-12-17'),
        end:   new Date('2024-12-17'),
        value: 9,
      })
    })
    test('birthday passed', () => {
      vi.useFakeTimers({ now: new Date('2023-12-25') })
      const nm = new NumericMap('NAME LAST', '1977-12-17')

      expect(nm.personalYear).toEqual({
        start: new Date('2023-12-17'),
        end:   new Date('2024-12-17'),
        value: 9,
      })
    })
    test('birthday did not pass', () => {
      vi.useFakeTimers({ now: new Date('2023-12-16') })
      const nm = new NumericMap('NAME LAST', '1977-12-17')

      expect(nm.personalYear).toEqual({
        start: new Date('2022-12-17'),
        end:   new Date('2023-12-17'),
        value: 8,
      })
    })
    test('AP 2', () => {
      vi.useFakeTimers({ now: new Date('2023-01-01') })
      const nm = new NumericMap('NAME LAST', '2018-06-26')

      expect(nm.personalYear.value).toBe(2)
    })
    test('AP 11', () => {
      vi.useFakeTimers({ now: new Date('2024-01-01') })
      const nm = new NumericMap('NAME LAST', '1979-11-20')

      expect(nm.personalYear.value).toBe(11)
    })
    test('AP 4', () => {
      vi.useFakeTimers({ now: new Date('2010-03-01') })
      const nm = new NumericMap('EDUARDO RUSSO', '1979-03-26')
      
      expect(nm.personalYear.value).toBe(4)
    })
    test('AP 22', () => {
      vi.useFakeTimers({ now: new Date('2014-03-01') })
      const nm = new NumericMap('EDUARDO RUSSO', '1979-08-26')

      expect(nm.personalYear.value).toBe(22)
    })
  })
  afterEach(() => {
    vi.useRealTimers()
  })
})