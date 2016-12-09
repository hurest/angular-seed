describe('view1 controller 테스트 시나리오', function () {

  

  beforeEach(module('seedApp'));

  var $httpBackend, $rootScope, $controller;
  var api = {};

  beforeEach(inject(function ($injector) {

    $httpBackend = $injector.get('$httpBackend');
    $controller = $injector.get('$controller');

    api['GET:/test.json'] = $httpBackend.when('GET', '/api/test.json');

  }));
/*
  afterEach(function () {
    $httpBackend.verifyNoOutstandingExpectation();
    $httpBackend.verifyNoOutstandingRequest();
  });
*/

  it('1. 컨트롤러 $scope 테스트', inject(function(){

    var $scope = {}, controller = $controller('view1Controller', { $scope: $scope });

    expect($scope.test).toEqual('123');

  }));

  it('2. $http.get 테스트', inject(function () {

    var $scope = {};

    api['GET:/test.json'].respond(200, { result: 'fail' });

    $httpBackend.expectGET('/api/test.json');

    $controller('view1Controller', { $scope: $scope });

    $httpBackend.flush();

    console.log( $scope );

  }));


});