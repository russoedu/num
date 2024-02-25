import { _diacriticsMap } from './_diacriticsMap'

class Name {
  /**
   * Removes all accents and diacritics from the string
   * @param char - The name to be normalised
   * @returns The name with the accents and diacritics removed
   */
  normalise (char: string) {
    // eslint-disable-next-line no-control-regex
    const res = char.replace(/[^\u0000-\u007E]/g, (a) => {
      const charConverted = _diacriticsMap.map[a] || a

      return charConverted
    })

    return res
  }
}

/**
 * Name helper
 */
const _name = new Name()
export { _name }
