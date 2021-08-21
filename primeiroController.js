var app = angular.module('loja', []);


app.controller('primeiroController', ['$scope', function($scope) {
    $scope.user = [
                    { meuNome : 'Marcelo Neri da Silva'},
                    { meuNome : 'Heliane Medeiros da Silveira e Silva'}
                ];

    $scope.contador = 0;

    $scope.soma = function(){
        $scope.contador++;
    }

    

    $scope.subtrai = function(){
        $scope.contador--;
    }

}]);