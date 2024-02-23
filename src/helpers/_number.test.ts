import { describe, expect, test } from 'vitest'
import { _number } from './_number'

describe('_number', () => {
  describe('sum', () => {
    test('intermediate sum 11', () => {
      const res = _number.sum(92)

      expect(res).toBe(2)
    })
    test('intermediate sum 22', () => {
      const res = _number.sum(9292)

      expect(res).toBe(4)
    })
    test('final sum 11', () => {
      const res = _number.sum(92, true)

      expect(res).toBe(11)
    })
    test('final sum 22', () => {
      const res = _number.sum(9292, true)

      expect(res).toBe(22)
    })
  })
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
  describe('matchFull', () => {
    test('same number, not 11 or 22', () => {
      const res = _number.matchFull(4, 4)

      expect(res).toBeTruthy()
    })
    test('same number, 11 and 2', () => {
      const res = _number.matchFull(11, 2)

      expect(res).toBeTruthy()
    })
    test('same number, 2 and 11', () => {
      const res = _number.matchFull(2, 11)

      expect(res).toBeTruthy()
    })
    test('same number, 22', () => {
      const res = _number.matchFull(22, 4)

      expect(res).toBeTruthy()
    })
    test('different number, not 11 or 22', () => {
      const res = _number.matchFull(4, 6)

      expect(res).toBeFalsy()
    })
    test('different number, 11', () => {
      const res = _number.matchFull(11, 3)

      expect(res).toBeFalsy()
    })
    test('different number, 22', () => {
      const res = _number.matchFull(22, 5)

      expect(res).toBeFalsy()
    })
    test('0 with 4', () => {
      const res = _number.matchFull(0, 4)

      expect(res).toBeTruthy()
    })
    test('0 with 22', () => {
      const res = _number.matchFull(0, 22)

      expect(res).toBeTruthy()
    })
    test('4 with 0', () => {
      const res = _number.matchFull(4, 0)

      expect(res).toBeTruthy()
    })
    test('22 with 0', () => {
      const res = _number.matchFull(22, 0)

      expect(res).toBeTruthy()
    })
    test('0 with 0', () => {
      const res = _number.matchFull(0, 0)

      expect(res).toBeTruthy()
    })
  })
})
