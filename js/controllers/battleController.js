pokeBattle.controller('battleCtrl',['$scope', function ($scope) {
      $scope.pokemon =
      [
        {"nombre": 'Pikachu',
          "tipo": 'Eléctrico'},
        {"nombre": 'Charmander',
          "tipo": 'Fuego'},
        {"nombre": 'bulbasaur',
          "tipo": 'Planta'}];

      $scope.visible = true;

      $scope.toogleTabs = function (){
          $scope.visible = !$scope.visible;

      }

}])
