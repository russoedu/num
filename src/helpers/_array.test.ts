import { _array } from './_array'
import { SingleDigitVN, VN } from './types'

describe('_array', () => {
  describe('unique', () => {
    test('strings', () => {
      const arr = ['test', 'new', 'ops', 'test', 'car', 'fly', 'new', 'test']

      const res = _array.unique(arr)

      expect(res).toEqual(['test', 'new', 'ops', 'car', 'fly'])
    })
    test('numbers', () => {
      const arr = [0, 10, 5, 0, 2, 3, 10, 0]

      const res = _array.unique(arr)

      expect(res).toEqual([0, 10, 5, 2, 3])
    })
  })
  describe('notInArray', () => {
    test('strings', () => {
      const arr1 = ['test', 'new', 'ops', 'test', 'car', 'fly', 'new', 'test']
      const arr2 = ['test', 'car', 'fly']

      const res = _array.notInArray(arr1, arr2)

      expect(res).toEqual(['new', 'ops', 'new'])
    })
    test('numbers', () => {
      const arr1 = [6, 8, 123, 6, 12, 36, 8, 6]
      const arr2 = [6, 12, 36]

      const res = _array.notInArray(arr1, arr2)

      expect(res).toEqual([8, 123, 8])
    })
  })
  describe('vnNotInArray', () => {
    test('11 and 22 found', () => {
      const arr1: SingleDigitVN[] = [1, 2, 3, 4, 5, 6, 8]
      const arr2: VN[] = [11, 3, 22, 6]

      const res = _array.vnNotInArray(arr1, arr2)

      expect(res).toEqual([1, 5, 8])
    })
  })
  describe('duplicated', () => {
    test('strings', () => {
      const arr = ['test', 'new', 'ops', 'test', 'car', 'fly', 'new', 'test']

      const res = _array.duplicated(arr)

      expect(res).toEqual(expect.arrayContaining(['test', 'new']))
      expect(res).toEqual(expect.not.arrayContaining(['ops', 'car', 'fly']))
    })
    test('numbers', () => {
      const arr = [6, 8, 123, 6, 12, 36, 8, 6]

      const res = _array.duplicated(arr)

      expect(res).toEqual(expect.arrayContaining([6, 8]))
      expect(res).toEqual(expect.not.arrayContaining([123, 12, 36]))
    })
  })
  describe('duplicatedFinalSingleDigitT', () => {
    test('numbers', () => {
      const arr: VN[] = [1, 2, 3, 4, 11, 5, 22, 6, 8, 3]

      const res = _array.duplicatedFinalSingleDigitT(arr)

      expect(res).toEqual(expect.arrayContaining([2, 4, 3]))
      expect(res).toEqual(expect.not.arrayContaining([1, 5, 6, 8]))
    })
  })
  describe('join', () => {
    test('default', () => {
      const arr = ['test', 'new', 'ops']

      const res = _array.join(arr)

      expect(res).toEqual('test, new e ops')
    })
    test('with params', () => {
      const arr = ['test', 'new', 'ops']

      const res = _array.join(arr, '<i>', '</i>')

      expect(res).toEqual('<i>test</i>, <i>new</i> e <i>ops</i>')
    })
  })
  describe('intersect', () => {
    test('happy path', () => {
      const arr1: VN[] = [1, 2, 3, 4, 5, 6, 8]
      const arr2: VN[] = [11, 3, 22, 6]

      const res = _array.intersect(arr1, arr2)

      expect(res).toEqual([3, 6])
    })
  })
})
