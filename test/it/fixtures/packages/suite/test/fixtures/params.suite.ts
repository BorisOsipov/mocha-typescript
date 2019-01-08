import { assert } from "chai";
import { params, suite } from "mocha-typescript";

@suite
class ParamsSuite {

  @params({ a: "a", b: "b" })
  @params({ a: "a", b: "b" }, "custom test name")
  public "parameterised test with custom name"({ a, b }) {

    assert.equal("a", a, "a === 'a'");
    assert.equal("b", b, "b === 'b'");
  }
}
