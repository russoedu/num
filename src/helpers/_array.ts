class ArrayHelper {
  /**
   * Returns an array with the unique values of the original array
   * @param arr - An array of any primitive
   * @returns The array with only unique values
   */
  unique <T> (arr: T[]): T[] {
    return [...new Set(arr)]
  }
}

const _array = new ArrayHelper()
export { _array }