import { _diacriticsMap } from './_diacriticsMap'

class Name {
  /**
   * Removes all accents and diacritics from the string
   * @param str - The name to be normalised
   * @returns The name with the accents and diacritics removed
   */
  normalise (str: string) {
    // eslint-disable-next-line no-control-regex
    return str.replace(/[^\u0000-\u007E]/g, function (a) {
      return _diacriticsMap.map[a] || a
    })
  }
}

/**
 * Name helper
 */
const _name = new Name()
export { _name }
