/**
 * Created by Jon on 15-05-11.
 */

/// <reference path="../typings/jasmine/jasmine.d.ts"/>
/// <reference path="../typings/angularjs/angular.d.ts"/>
"use strict";

describe('directive: avid-direction', ()=> {
  var element;
  var scope;

  beforeEach(module('avid'));

  beforeEach(inject(($rootscope, $compile)=> {
    scope = $rootscope.new();
    element="";
    element = $compile(element)(scope);
    scope.$digest();
  }));


  it('should make sure true is true', ()=> {
    expect(6).toBeTruthy();
  });
});
