describe('view2 controller', function () {

  beforeEach(module('seedApp'));

  var $controller;

  beforeEach(inject(function (_$controller_) {
    // The injector unwraps the underscores (_) from around the parameter names when matching
    $controller = _$controller_;
  }));

  it('should ....', inject(function () {

    var $scope = {};
    var controller = $controller('view2Controller', { $scope: $scope });

    console.log( $scope );

  }));


});