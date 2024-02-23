import { _date } from './_date'

describe('_date', () => {
  describe('isValid', () => {
    test('valid date', () => {
      const res = _date.isValid('2023-07-11')

      expect(res).toBeTruthy()
    })
    test('weird but valid date', () => {
      const res = _date.isValid('2023-02-31')

      expect(res).toBeTruthy()
    })
    test('incomplete date', () => {
      const res = _date.isValid('07-11')

      expect(res).toBeFalsy()
    })
    test('empty date', () => {
      const res = _date.isValid('')

      expect(res).toBeFalsy()
    })
  })
})
