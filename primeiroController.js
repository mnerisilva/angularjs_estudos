var app = angular.module('loja', []);


app.controller('primeiroController', ['$scope', function($scope) {

    $scope.bt_subtrai = document.querySelector('.bt-subtrai');
    console.log($scope.bt_subtrai);

    $scope.user = [
                    { meuNome : 'Marcelo Neri da Silva'},
                    { meuNome : 'Heliane Medeiros da Silveira e Silva'}
                ];

    $scope.contador = 0;

    $scope.soma = function(){
        if($scope.contador > -1){
            $scope.bt_subtrai.removeAttribute('disabled');
        }        
        $scope.contador++;
    }

    

    $scope.subtrai = function(){
        if($scope.contador < 2){
            $scope.bt_subtrai.setAttribute('disabled', true);
            return;
        } else {
            $scope.contador--;
        }
    }

}]);