angular.module('app').factory('nameCalc', function(nameNormalizer, lodash, summer) {
  // private vars and functions
  var
    self = this,
    fullName          = name,
    vowelsInName      = [],
    consonantsInName  = [],

    vowelsSum         = '',
    consonantsSum     = '',

    letterValues = {
      'A': 1, 'B': 2, 'C': 3, 'D': 4, 'E': 5, 'F': 6, 'G': 7, 'H': 8, 'I': 9,
      'J': 1, 'K': 2, 'L': 3, 'M': 4, 'N': 5, 'O': 6, 'P': 7, 'Q': 8, 'R': 9,
      'S': 1, 'T': 2, 'U': 3, 'V': 4, 'W': 5, 'X': 6, 'Y': 7, 'Z': 8, ' ': 0
    };

  function normalizeName(name) {
    self.fullName = nameNormalizer.normalize(name.toUpperCase());
  }

  /* Save the objects 'vowelsInName' and 'consonantsInName' with the valid chars, creating arrays with each name, spliting with space */
  function findLettersInName(name) {
    name = name.split(' ');

    for (var i = name.length - 1; i >= 0; i--) {
      self.vowelsInName[i] = lodash.without(name[i], 'B', 'C', 'D', 'F', 'G', 'H', 'J', 'K', 'L', 'M', 'N', 'P', 'Q', 'R', 'S', 'T', 'V', 'W', 'X', 'Y', 'Z');

      self.consonantsInName[i] = lodash.without(name[i], 'A', 'E', 'I', 'O', 'U');
    }
  }

  /* Convert each char to it's value. Saves it in the proper array and the final value in the propper variable*/
  function countName(fullNameArrayOfNames, type) {
    var fullNameSum = 0;
    var charSumArray = [];

    // fullNameArrayOfNames is an array of arrays. Each seapreted name is inside an array.
    // This loop iterates over each name to calculate the full name.
    // Each name has a separated sum to give the right value
    for (var i = 0; i < fullNameArrayOfNames.length; i++) {
      // The sum of one of the names
      var nameSum = 0;
      var nameArray = fullNameArrayOfNames[i];

      // console.log(null, '------------------------------------------');
      // console.log(type + ' nome[' + n(i) + ']    ', nameArray);

      for (var j = 0; j < nameArray.length; j++) {
        var ch = nameArray[j];
        var chValue = lodash.pick(letterValues, ch)[ch];

        // console.log('valor da letra ' + ch + '  ', chValue);
        // console.log('soma do nome[' + n(i) + ']  ', nameSum + ' + ' + chValue + ' = ' + (nameSum+chValue));

        nameSum += chValue;
      }
      // console.log('soma interna de ' + n(nameSum), summer.sumValues(nameSum));
      // console.log('soma completa     ', fullNameSum + ' + ' + summer.sumValues(nameSum) + ' = ' + (fullNameSum+summer.sumValues(nameSum)));
      fullNameSum += summer.sumValues(nameSum);
      // console.log(null, '------------------------------------------');
    }

    // console.log('fullNameSum before summer', fullNameSum);
    fullNameSum = summer.sumValues(fullNameSum, true);
    // console.log('fullNameSum after summer', fullNameSum);

    if (type == 'vowel') {
      self.vowelsSum = fullNameSum;

    } else {
      self.consonantsSum = fullNameSum;

    }
  }

  // public functions
  return {
    calculateNameValues : function(name) {
      // console.log('valor das letras', letterValues);

      self.fullName = name;

      // reste values
      self.vowelsInName = [];
      self.consonantsInName  = [];

      normalizeName(self.fullName);


      findLettersInName(self.fullName);

      // console.log('vowelsInName', self.vowelsInName);
      // // console.log('consonantsInName', self.consonantsInName);

      countName(self.vowelsInName, 'vowel');
      countName(self.consonantsInName, 'consonant');

      // console.log('vowelsSum (MO)', self.vowelsSum);
      // console.log('consonantsSum (EU)', self.consonantsSum);

    },

    mo: function(){
      return self.vowelsSum;
    },
    eu: function(){
      return self.consonantsSum;
    },
    ex: function(){
      var ex = self.vowelsSum + self.consonantsSum;
      return summer.sumValues(ex, true);
    }
  };
});
