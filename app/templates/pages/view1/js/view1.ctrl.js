seedApp.controller('view1Controller', function($scope, $http){

    initCtrl();

    $scope.testFunc = function () {
        return testFunc();
    };

    function initCtrl () {

        $scope.test = '123';

        //getMessage();
    }

    function testFunc () {
        return 'testFunc';
    }

    function getMessage () {

        $http.get('/api/test.json')
            .then(function(res){
                $scope.message = res.data.data.message;
            })
            .catch(function(res){
                $scope.res = res;
            });

    }

});