angular.module('app').factory('birthCalc', function(summer) {
  // private vars and functions
  var
    self        = this,
    birthDate   = '',
    daySum      = '',
    monthSum    = '',
    yearSum     = '',
    cd          = '',
    d1          = '',
    d2          = '',
    r1          = '',
    r2          = '',
    r1End       = '',
    pyStart     = '',
    pyEnd       = '',
    age         = '';

  /* Save the objects 'vowelsInName' and 'consonantsInName' with the valid chars, creating arrays with each name, spliting with space */
  function calculateBirthSelfSums(date) {
    var d = date.split('/');

    self.daySum   = summer.sumValues(d[0]);
    self.monthSum = summer.sumValues(d[1]);
    self.yearSum  = summer.sumValues(d[2]);
  }

  function interestYear(date) {
    var
        dddddddxxxxxx         = date.split('/'),
        day       = parseInt(dddddddxxxxxx[0]),
        month     = parseInt(dddddddxxxxxx[1]) - 1,
        birthYear = parseInt(dddddddxxxxxx[2]),
        year      = new Date().getFullYear(),
        birthdayThisYear,
        today;

    birthdayThisYear = new Date(year, month, day);
    today = new Date();

    var timeDiff = birthdayThisYear.getTime() - today.getTime();
    var diffDays = Math.ceil(timeDiff / (1000 * 3600 * 24));
    // console.log(d);
    // console.log(birthYear);
    // console.log(today);
    // console.log(month);
    // console.log(timeDiff);
    // console.log(diffDays);
    var hasPassed = diffDays > 0 ? false : true;

    // log.info('diffDays', diffDays, hasPassed);
    var interestYear = hasPassed ? year : year - 1;

    self.pyStart = day + '/' + (month + 1) + '/' + interestYear;
    self.pyEnd = day + '/' + (month + 1) + '/' + (interestYear + 1);

    self.age = interestYear - birthYear;

    // log.info('interestYear', interestYear);
    return interestYear;
  }

  // public functions
  return {
    calculateBirthValues: function(date) {
      self.birthDate = date;

      calculateBirthSelfSums(date);

      // log.info('daySum', self.daySum);
      // log.info('monthSum', self.monthSum);
      // log.info('yearSum', self.yearSum);

    },
    cd: function() {
      var sum = self.daySum + self.monthSum + self.yearSum;

      self.cd = summer.sumValues(sum, true);

      return self.cd;
    },
    c1: function() {
      return summer.sumValues(self.monthSum);
    },
    c2: function() {
      return summer.sumValues(self.daySum);
    },
    c3: function() {
      return summer.sumValues(self.yearSum);
    },

    d1: function() {
      //soma do dia menos a soma do mês ou vice-versa
      var
        big = Math.max(self.daySum, self.monthSum),
        small = Math.min(self.daySum, self.monthSum);

      self.d1 = summer.sumValues(big - small);
      return self.d1;
    },
    d2: function() {
      var
        big = Math.max(self.yearSum, self.monthSum),
        small = Math.min(self.yearSum, self.monthSum);

      self.d2 = summer.sumValues(big - small);
      return self.d2;
    },
    dm: function() {
      var
        big = Math.max(self.d1, self.d2),
        small = Math.min(self.d1, self.d2);

      return summer.sumValues(big - small);
    },

    r1: function() {
      self.r1 = summer.sumValues(self.daySum + self.monthSum, true);

      return self.r1;
    },
    r2: function() {
      self.r2 = summer.sumValues(self.daySum + self.yearSum, true);

      return self.r2;
    },
    r3: function() {
      return summer.sumValues(self.r1 + self.r2, true);
    },
    r4: function() {
      return summer.sumValues(self.monthSum + self.yearSum, true);
    },

    r1End: function() {
      self.r1End = 36 - self.cd;
      return self.r1End;
    },
    r2End: function() {
      return self.r1End + 10;
    },
    r3End: function() {
      return self.r1End + 10 + 10;
    },

    ap: function() {
      // É a soma do dia de nascimento, mais a soma do mês de nascimento, mais o ano de interesse.
      // O ano de interesse é:
      // • O ano atual se a pessoa já fez aniversário este ano.
      // • O ano anterior se ela ainda não fez aniversário este ano.

      // log.info('self.birthDate', self.birthDate);

      var iy = summer.sumValues(interestYear(self.birthDate));
      // for (var i = 1800; i < 2030; i++) {
      //   ySum = summer.sumValues(i);
      //   console.log(i, self.daySum, self.monthSum, ySum, self.daySum + self.monthSum + ySum, summer.sumValues(self.daySum + self.monthSum + ySum, true));
      // }
      return summer.sumValues(self.daySum + self.monthSum + iy, true);
    },
    apStart: function() {
      return self.pyStart;
    },
    apEnd: function() {
      return self.pyEnd;
    },
    age: function () {
      return self.age;
    }
  };
});
