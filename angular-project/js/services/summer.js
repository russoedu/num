angular.module('app').factory('summer', function() {
  return {
    /** Summ the number until you get 1 - 9 || 11 || 22
    * final needs to be true so result can be 11 or 22
    **/
    sumValues: function(num, final) {
      num = Number(num);
      var sum = 0;
      if (num > 9 && (final !== true || (num != 11 && num != 22))) {
        var splitedNum = num.toString().split('');

        for (var i = splitedNum.length - 1; i >= 0; i--) {
          sum += Number(splitedNum[i]);
        }

        sum = this.sumValues(sum);

      } else {
        sum = num;
      }
      return sum;
    }
  };
});
