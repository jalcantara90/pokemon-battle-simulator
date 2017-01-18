pokeBattle.config(['$routeProvider', function($routeProvider) {

  $routeProvider.when('/', {
    templateUrl: 'views/battle.html',
    controller: 'battleCtrl'
  })
  .otherwise({
    redirectTo: '/'
  })
}])
