
// Initialiser le controlleur CalcController
moduleCalc.controller('CalcController', ['$scope','CalFactory', 'CalService', 
    function ($scope, Calculate, CalService) {
    // Le resultat de l'addition
    $scope.resultat = 0;
    $scope.nombre1 = 0;
    $scope.nombre2 = 0;

    // Methode de calcul
    $scope.calculer = function () {

        console.log('calcule de : '+$scope.nombre1+' + '+$scope.nombre2);
        $scope.resultat = Calculate($scope.nombre1, $scope.nombre2);
        console.log('resultat = '+$scope.resultat);

    };

    // Methode de calcul2, qui utilise le service et non pas le factory.
    $scope.calculer2 = function() {
        $scope.resultat = CalService.calculer($scope.nombre1 , $scope.nombre2);
    };
}]);