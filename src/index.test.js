var
  expect = require('chai').expect,
  assert = require('chai').assert,
  NgAnnotateCleaner = require('./index');

describe('ng-annotate-cleaner', function () {
  it('should have apply function', function () {
    var instance = new NgAnnotateCleaner();
    assert.isFunction(instance.apply, 'cool its function');
  });

  it('should be a instance of class NgAnnotateCleaner', function () {
    var inst = new NgAnnotateCleaner();
    expect(inst).to.be.an.instanceof(NgAnnotateCleaner)
  });
});

