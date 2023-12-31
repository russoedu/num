import { FinalSingleDigitT } from './types'

class ArrayHelper {
  /**
   * Returns an array with the unique values of the original array
   * @param arr - An array of any primitive
   * @returns The array with only unique values
   */
  unique <T> (arr: T[]): T[] {
    return [...new Set(arr)]
  }

  /**
   * Filters an array, returning a new array with all the values not present in the filter array
   * @param arrToFilter - The array to be filtered
   * @param filter - The array with the values to be filtered (excluded)
   * @returns The array filtered
   */
  notInArray <T> (arrToFilter: T[], filter: T[]): T[] {
    return arrToFilter.filter(item => filter.indexOf(item) === -1)
  }

  /**
   * Returns a new array with the values in the array that occurs more than once
   * @param arr - The array to be checked
   * @returns A new array with the list of duplicated values
   */
  duplicated <T> (arr: T[]): T[] {
    return arr
      .filter((itm, i) => arr.lastIndexOf(itm) === i && arr.indexOf(itm) !== i)
  }

  /**
   * Returns a new array with the FinalSingleDigitT in the array that occurs more than once. 2 also counts 11 and 4 also counts 22 
   * @param arr - The array to be checked
   * @returns A new array with the list of duplicated values
   */
  duplicatedFinalSingleDigitT (arr: FinalSingleDigitT[]): FinalSingleDigitT[] {
    const converted = arr
      .map(d => d === 11
        ? 2
        : d === 22
          ? 4
          : d,
      )

    return [...new Set([...this.duplicated(converted), ...this.duplicated(arr)])]
  }

  /**
   * Joins an array with comma and "e" before the last
   * @param arr - The array to be joined
   * @returns The array separated by comma and "e" before the last
   */
  join <T> (arr: T[], surroundStart = '', surroundEnd = ''): string {
    if (arr.length === 1) return String(arr[0])

    const copy = arr.map(entry => surroundStart + entry + surroundEnd)
    const last = copy.pop()

    const joinned = copy.join(', ') + ' e ' + last

    return joinned
  }
}

const _array = new ArrayHelper()
export { _array }
