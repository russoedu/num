angular.module('app').factory('summer', function() {
  return {
    /** Summ the number until you get 1 - 9 || 11 || 22
    * final needs to be true so result can be 11 or 22
    **/
    sumValues (num: number, final: boolean) {
      num = Number(num);
      if (num > 9 && (final !== true || (num != 11 && num != 22))) {
        var splittedNum = num.toString().split('');

        for (var i = splittedNum.length - 1; i >= 0; i--) {
          sum += Number(splittedNum[i]);
        }

        sum = this.sumValues(sum);

      } else {
        sum = num;
      }
      return sum;
    }
  };
});
