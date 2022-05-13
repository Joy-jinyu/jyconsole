import { assert } from "chai";
import { describe, it } from "mocha";

describe("测试chai的断言Api", function () {
  const name = "joy";
  const userInfo = {
    username: "wyj",
    password: "like",
    hobby: ["girl", "play"],
  };

  it("断言Api equal", function () {
    assert.equal(name, "joy", "姓名相等");
  });

  it("断言Api typeOf", function () {
    assert.typeOf(name, "string", "姓名是个string类型");
    assert.typeOf(userInfo, "object", "用户信息是个对象");
  });

  it("断言Api lengthOf", function () {
    assert.lengthOf(userInfo.hobby, 2, "用户爱好长度为2");
  });
});
