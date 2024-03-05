import { _number } from './_number'
import { MultiplicityMultipleT, PositionT, SingleDigitVN, VN, VnPositionCycleT } from './types'

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
   * Filters a SingleDigitVN array, returning a new array with all the values not present in the filter array
   * @param arrToFilter - The SingleDigitVN array to be filtered
   * @param filter - The VNs array with the values to be filtered (excluded)
   * @returns The SingleDigitVN array filtered
   */
  vnNotInArray (arrToFilter: SingleDigitVN[], filter: VN[]): SingleDigitVN[] {
    const singleDigitVnFilter = filter.map(f => _number.vnToSingleVn(f))

    return arrToFilter.filter(item => singleDigitVnFilter.indexOf(item) === -1)
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
  duplicatedFinalSingleDigitT (arr: VN[]): VN[] {
    const converted = arr
      .map(d => _number.vnToSingleVn(d))

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

  /**
   * Finds the intersection of two lists and returns the Single Digit VN intersection
   * @param a - List of Single Digit VN
   * @param b - List of VNs
   * @returns The intersection (converting the VNs to SingleDigit)
   */
  intersect (a: VN[], b: VN[]) {
    const setA = new Set(a)
    const setB = new Set(b)

    const intersection = new Set([...setA].filter(x => setB.has(x)))

    return Array.from(intersection)
  }

  /**
   * Sorts the array (in place) by VN and age
   * @param list - The VnPositionCycle list to be sorted by age and VN
   * @returns The sorted list
   */
  sortVnAge (list: VnPositionCycleT[]|MultiplicityMultipleT[]) {
    const sorted = list
      .sort((a, b) => a.start === b.start ? a.end - b.end : a.start - b.start)
      .sort((a, b) => {
        const aConv = _number.vnToSingleVn(a.vn)
        const bConv = _number.vnToSingleVn(b.vn)

        if (aConv < bConv) return -1
        if (aConv > bConv) return 1

        return a.vn - b.vn
      })

    return sorted
  }

  /**
   * Creates a new array with unique values and sorts by the 2normal2 map position
   * @param positions - The list of VN positions
   * @returns A new array sorted and with unique values
   */
  sortUniquePosition (positions: PositionT[]) {
    const order = ['MO', 'EU', 'CD', 'DM', 'EX', 'C1', 'C2', 'C3', 'D1', 'D2', 'R1', 'R2', 'R3', 'R4']
    const unique = _array.unique(positions)

    const sorted = unique.sort((a, b) => order.indexOf(a) - order.indexOf(b))

    return sorted
  }
}

const _array = new ArrayHelper()
export { _array }
