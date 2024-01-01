import { afterEach, describe, expect, test, vi } from 'vitest'
import { NumericMap } from './NumericMap'

describe('NumericMap', () => {
  describe('personal year', () => {
    test('today is birthday', () => {
      vi.useFakeTimers({ now: new Date('2023-12-17') })
      const nm = new NumericMap('VERA LETICIES DE AZEVEDO RUIZ', '1977-12-17')

      expect(nm.personalYear).toEqual({
        start: new Date('2023-12-17'),
        end:   new Date('2024-12-17'),
        value: 1,
      })
    })
    test('birthday passed', () => {
      vi.useFakeTimers({ now: new Date('2023-12-25') })
      const nm = new NumericMap('VERA LETICIES DE AZEVEDO RUIZ', '1977-12-17')

      expect(nm.personalYear).toEqual({
        start: new Date('2023-12-17'),
        end:   new Date('2024-12-17'),
        value: 1,
      })
    })
    test('birthday did not pass', () => {
      vi.useFakeTimers({ now: new Date('2023-12-16') })
      const nm = new NumericMap('VERA LETICIES DE AZEVEDO RUIZ', '1977-12-17')

      expect(nm.personalYear).toEqual({
        start: new Date('2022-12-17'),
        end:   new Date('2023-12-17'),
        value: 9,
      })
    })
    test('AP 11', () => {
      vi.useFakeTimers({ now: new Date('2024-12-25') })
      const nm = new NumericMap('VERA LETICIES DE AZEVEDO RUIZ', '1977-12-17')

      expect(nm.personalYear.value).toBe(11)
    })
    test('AP 4', () => {
      vi.useFakeTimers({ now: new Date('2001-03-01') })
      const nm = new NumericMap('EDUARDO RUSSO', '1979-03-16')

      expect(nm.personalYear.value).toBe(4)
    })
    test('AP 22', () => {
      vi.useFakeTimers({ now: new Date('2000-03-01') })
      const nm = new NumericMap('EDUARDO RUSSO', '1979-03-26')

      expect(nm.personalYear.value).toBe(4)
    })
  })
  afterEach(() => {
    vi.useRealTimers()
  })
})