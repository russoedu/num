angular.module('app').factory('calcService', function(nameCalc, birthCalc) {
  return {
    constructor: function(name, birth, cb) {
      nameCalc.calculateNameValues(name);
      birthCalc.calculateBirthValues(birth);

      json = {
        "eu": nameCalc.eu(),
        "ex": nameCalc.ex(),
        "mo": nameCalc.mo(),
        "cd": birthCalc.cd(),
        "c1": birthCalc.c1(),
        "c2": birthCalc.c2(),
        "c3": birthCalc.c3(),
        "d1": birthCalc.d1(),
        "d2": birthCalc.d2(),
        "dm": birthCalc.dm(),
        "r1": birthCalc.r1(),
        "r1Start": 0,
        "r1End": birthCalc.r1End(),
        "r2": birthCalc.r2(),
        "r2Start": birthCalc.r1End(),
        "r2End": birthCalc.r2End(),
        "r3": birthCalc.r3(),
        "r3Start": birthCalc.r2End(),
        "r3End": birthCalc.r3End(),
        "r4": birthCalc.r4(),
        "r4Start": birthCalc.r3End(),
        "ap": birthCalc.ap(),
        "apStart": birthCalc.apStart(),
        "apEnd": birthCalc.apEnd(),
        "age": birthCalc.age(),
        "start1": 0,
        "end1": 28,
        "end2": 56,
      };
      cb(json);
    }
  };
});
