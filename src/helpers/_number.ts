import { VN, SingleDigitVN } from './types'

class Num {
  /**
   * Sums the digits of the number until it is a single digit (1 - 9)
   * @param num - The number to be summed
   * @returns The sum of each number digit
   */
  sum (num: number): SingleDigitVN
  /**
   * Sums the digits of the number until it is a single digit (1 - 9)
   * @param num - The number to be summed
   * @param final - If true, the results can also be 11 or 22, else, 11 and 22 wil be summed again (to 2 or 4)
   * @returns The sum of each number digit
   */
  sum (num: number, final: false): SingleDigitVN
  /**
   * Sums the digits of the number until it is a single digit (1 - 9, 11 or 22)
   * @param num - The number to be summed
   * @param final - If true, the results can also be 11 or 22, else, 11 and 22 wil be summed again (to 2 or 4)
   * @returns The sum of each number digit
   */
  sum (num: number, final: true): VN

  /**
   * Sums the digits of the number until it is a single digit (1 - 9). If final is true, 11 and 22 are also possible
   * @param num - The number to be summed
   * @param final - If true, the results can also be 11 or 22, else, 11 and 22 wil be summed again (to 2 or 4)
   * @returns The sum of each number digit
   */
  sum (num: number, final: boolean): VN|SingleDigitVN

  sum (num: number, final = false) {
    let sum: any = 0

    if (num > 9 && (final !== true || (num !== 11 && num !== 22))) {
      while (num) {
        sum += num % 10
        num = Math.floor(num / 10)
      }

      sum = this.sum(sum, final)
    } else {
      sum = num
    }

    return sum
  }

  /**
   * Checks if the VN matches the second, that is a single digit VN
   * @param n1 - The VN to be checked
   * @param n2 - The single digit VN to be checked
   * @returns True if the VNs are the same
   */
  match (n1: VN, n2: SingleDigitVN) {
    if (n2 === 0) return true
    const result = n1 === n2 ||
    (n1 === 11 && n2 === 2) ||
    (n1 === 22 && n2 === 4)

    return result
  }

  /**
   * Add leading zeroes until the total characters is the one set in chars
   * @param num - The number to be used
   * @param chars - How many total chars should we have
   * @returns - The number converted to string with leading zeroes
   */
  leadingZero (num: number|string, chars = 2) {
    return String(num).padStart(chars, '0')
  }

  /**
   * Checks if two VNs match (are the same). Either because they are the same number
   * or matches in case of 11 and 2 or 22 and 4
   * @param n1 - The first VN to be checked
   * @param n2 - The second VN to be checked
   * @returns True if the VNs are the same
   */
  matchFull (n1: VN, n2: VN) {
    if (n1 === 0 || n2 === 0) return true
    const result = n1 === n2 ||
    (n1 === 11 && n2 === 2) || (n1 === 2 && n2 === 11) ||
    (n1 === 22 && n2 === 4) || (n1 === 4 && n2 === 22)

    return result
  }

  /**
   * COnverts a VN (that might be 11 or 22) to a single digit VN
   * @param vn - The VN to be converted
   * @returns The single digit VN
   */
  vnToSingleVn (vn: VN): SingleDigitVN {
    return vn === 11
      ? 2
      : vn === 22
        ? 4
        : vn
  }
}

const _number = new Num()
export { _number }
