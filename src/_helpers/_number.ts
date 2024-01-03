import { FinalSingleDigitT, SingleDigitT } from './types'

class Num {
  /**
   * Sums the digits of the number until it is a single digit (1 - 9)
   * @param num - The number to be summed
   * @returns The sum of each number digit
   */
  sum (num: number): SingleDigitT
  /**
   * Sums the digits of the number until it is a single digit (1 - 9)
   * @param num - The number to be summed
   * @param final - If true, the results can also be 11 or 22, else, 11 and 22 wil be summed again (to 2 or 4)
   * @returns The sum of each number digit
   */
  sum (num: number, final: false): SingleDigitT
  /**
   * Sums the digits of the number until it is a single digit (1 - 9, 11 or 22)
   * @param num - The number to be summed
   * @param final - If true, the results can also be 11 or 22, else, 11 and 22 wil be summed again (to 2 or 4)
   * @returns The sum of each number digit
   */
  sum (num: number, final: true): FinalSingleDigitT
  
  /**
   * Sums the digits of the number until it is a single digit (1 - 9). If final is true, 11 and 22 are also possible
   * @param num - The number to be summed
   * @param final - If true, the results can also be 11 or 22, else, 11 and 22 wil be summed again (to 2 or 4)
   * @returns The sum of each number digit
   */
  sum (num: number, final: boolean): FinalSingleDigitT|SingleDigitT
  
  sum (num: number, final = false) {
    let sum: any = 0

    if (num > 9 && (final !== true || (num != 11 && num != 22))) {
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
}

const _number = new Num()
export { _number }