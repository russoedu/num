import { describe, expect, test } from 'vitest'
import { _number } from './_number'

describe('_number', () => {
  describe('match', () => {
    test('same number, not 11 or 22', () => {
      const res = _number.match(4, 4)

      expect(res).toBeTruthy()
    })
    test('same number, 11', () => {
      const res = _number.match(11, 2)

      expect(res).toBeTruthy()
    })
    test('same number, 22', () => {
      const res = _number.match(22, 4)

      expect(res).toBeTruthy()
    })
    test('different number, not 11 or 22', () => {
      const res = _number.match(4, 6)

      expect(res).toBeFalsy()
    })
    test('different number, 11', () => {
      const res = _number.match(11, 3)

      expect(res).toBeFalsy()
    })
    test('different number, 22', () => {
      const res = _number.match(22, 5)

      expect(res).toBeFalsy()
    })
    test('0 with 4', () => {
      const res = _number.match(4, 0)

      expect(res).toBeTruthy()
    })
    test('0 with 22', () => {
      const res = _number.match(22, 0)

      expect(res).toBeTruthy()
    })
  })
})
