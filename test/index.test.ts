import chai, { expect } from "chai";
import { describe, it } from "mocha";
import jyConsole from "../src/index";

const should = chai.should();

/**
 * use es6
 * babel-register babel-preset-env
 * mocha -r babel-register
 * 新建 .babelrc "presets": ["env"]
 */

/**
 * use typescript
 * typescript ts-node @types/mocha @types/chai
 * 解决console的问题: tslib @types/node
 * mocha -r ts-node/register
 */

describe("array", function () {
  describe("传入一个数组", function () {
    it("返回包含 数组 和 字符串为joy 的新数组", function () {
      const array: string[] = [];

      jyConsole(array)
        .should.have.lengthOf(2)
        .have.contain("joy")
        .has.contain(array);
    });
  });
});
