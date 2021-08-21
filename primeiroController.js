var app = angular.module('loja', []);


app.controller('primeiroController', ['$scope', function($scope) {

    $scope.bt_subtrai = document.querySelector('.bt-subtrai');
    console.log($scope.bt_subtrai);

    $scope.user = [
                    { id : 1, meuNome : 'Marcelo Neri da Silva'},
                    { id : 2, meuNome : 'Heliane Medeiros da Silveira e Silva'}
                ];

    $scope.obj = {};
    $scope.contador = 2;

    $scope.soma = function(){
        $scope.obj.id = $scope.contador;
        $scope.obj.meuNome = "Helena Medeiros da Silveira";
        $scope.user.push($scope.obj);
        console.log('Objeto temporário: '+$scope.obj);
        $scope.obj = {};
        if($scope.contador > -1){
            $scope.bt_subtrai.removeAttribute('disabled');
        }        
        $scope.contador++;
    }

    

    $scope.subtrai = function(){
        if($scope.contador == 0){
            $scope.bt_subtrai.setAttribute('disabled', true);
            return;
        } else {
            $scope.contador--;
        }
    }

}]);