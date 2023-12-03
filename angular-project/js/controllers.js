angular.module('app').controller('CopyRightController', function($scope) {
  $scope.copyRightYear = function() {
    var
      start = 2015,
      now = new Date().getFullYear();

    return now > start ? start + ' - ' + now : start;
  };
});

angular.module('app').controller('CalcController', function($scope, calcService) {

  // Called by the FORM
  $scope.calculate = function(data) {
    var
      name = data.name,
      birth = data.birth.substring(0, 2) + '/' + data.birth.substring(2, 4) + '/' + data.birth.substring(4, 8);

    // $scope.result = calcService.send(data);
    calcService.constructor(name, birth, function(response) {
      // nameCalc.calculateValues(name);
      // birthCalc.calculateValues(birth);
      $scope.result = response;
    });
  };
});

angular.module('app').controller('CacheController', function($scope) {
  $scope.appCache = function() {
    var appCache = window.applicationCache;

    switch (appCache.status) {
      case appCache.UNCACHED: // UNCACHED == 0
        return 'warning-sign';
        break;
      case appCache.IDLE: // IDLE == 1
        return 'saved';
        break;
      case appCache.CHECKING: // CHECKING == 2
        return 'open';
        break;
      case appCache.DOWNLOADING: // DOWNLOADING == 3
        return 'save';
        break;
      case appCache.UPDATEREADY:  // UPDATEREADY == 4
        return 'save';
        break;
      case appCache.OBSOLETE: // OBSOLETE == 5
        return 'save';
        break;
      default:
        return 'warning-sign';
        break;
    }
  };
});
