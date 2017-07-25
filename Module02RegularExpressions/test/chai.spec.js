var assert = require("chai").assert;
var expect = require("chai").expect;
var should = require("chai").should();

describe("Chai: A suite is just a function", function() {
  var a;

  it("and so is a spec", function() {
    a = true;

    //expect(a).toBe(true);
    assert.equal(a, true);
    expect(a).to.equal(true);
    a.should.equal(true);
  });
});