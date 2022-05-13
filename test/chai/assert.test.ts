import { assert } from "chai";
import { describe, it } from "mocha";

describe("测试chai的断言Api", function () {
  it("断言Api", function () {
    const name = "joy";
    const userInfo = {
      username: "wyj",
      password: "like",
      hobby: ["girl", "play"],
    };
    assert.equal(name, "joy", "姓名相等");
    assert.lengthOf(userInfo.hobby, 2);
  });
});
