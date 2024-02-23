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
  })
})
