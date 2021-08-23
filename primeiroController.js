var app = angular.module('app', []);


app.controller('primeiroController', ['$scope', function($scope) {

    $scope.bt_subtrai = document.querySelector('.bt-subtrai');
    //console.log($scope.bt_subtrai);

    $scope.user = [];

    $scope.obj = {};
    $scope.contador = 1;

    $scope.add = function(){
        $scope.obj.id = $scope.contador;
        $scope.obj.nome = $scope.nome;
        $scope.user.push($scope.obj);
        console.log('Objeto temporário: '+$scope.obj);
        $scope.obj = {};
        $scope.nome = '';
        if($scope.contador > -1){
            //$scope.bt_subtrai.removeAttribute('disabled');
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