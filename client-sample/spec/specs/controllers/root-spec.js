/* global describe, beforeEach, module, */

describe('root', function () {

  var scope, ctrl, $httpBackend;

  beforeEach(module('developer-toolkit'));

  beforeEach(
    inject(function (_$httpBackend_, $rootScope, $controller) {
      $httpBackend = _$httpBackend_;
      scope = $rootScope.$new();

      try {
        ctrl = $controller('Root', {$scope: scope});
      } catch (e) {
        throw("Error with the controller: " + e);
      }
    })
  );

  it('should work', function () {
    expect(ctrl).not.toBe(undefined);
  });

});