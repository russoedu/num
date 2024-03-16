import { _name } from './_name'

describe('_name.ts', () => {
  describe('map', () => {
    test('conversion of common chars and accents', () => {
      const res = [
        'A',
        'À',
        'Á',
        'Â',
        'Ä',
        'Ã',
        'Ç',
        'è',
        'é',
        'ê',
      ].map(char => _name.normalise(char))

      expect(res).toEqual([
        'A',
        'A',
        'A',
        'A',
        'A',
        'A',
        'C',
        'e',
        'e',
        'e',
      ])
    })
    test('skipped chars', () => {
      const res = [
        '1',
        '2',
        '3',
        '4',
        '5',
        '6',
        '7',
        '8',
        '9',
        '0',
        '!',
      ].map(char => _name.normalise(char))

      expect(res).toEqual([
        '1',
        '2',
        '3',
        '4',
        '5',
        '6',
        '7',
        '8',
        '9',
        '0',
        '!',
      ])
    })
  })
})
