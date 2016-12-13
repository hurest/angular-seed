describe('view1 controller 테스트 시나리오', function () {

  beforeEach(module('seedApp'));

  var $httpBackend, $rootScope;
  var api = {};

  beforeEach(inject(function ($injector) {

    $httpBackend = $injector.get('$httpBackend');
    //$controller = $injector.get('$controller');

    api['GET:/test.json'] = $httpBackend.when('GET', '/api/test.json');

  }));

  it('1. 컨트롤러 $scope 테스트', inject(function($controller, $timeout){

    var $scope = {}; 
    
    $controller('view1Controller', { $scope: $scope });

    $scope.test();
    $timeout.flush();

    console.log( $scope );

    expect($scope.test).toEqual('123');

    

  }));
/*
  it('2. $http.get 테스트', inject(function () {

    var $scope = {};

    api['GET:/test.json'].respond(200, { result: 'fail' });

    //console.log( api );

    var a = $httpBackend.expectGET('/api/test.json');

    $controller('view1Controller', { $scope: $scope });

    //console.log( $scope );

    $httpBackend.flush();

    //console.log( $scope );

  }));
*/

});
