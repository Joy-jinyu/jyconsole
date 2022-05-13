const asserts = require("assert")
const jyConsole = require("../src/index")

describe("array", function () { 
    describe("empty array", function () { 
        it("should return undefined", function () { 
            asserts.equal(jyConsole([], 'test'), undefined)
        })
    })
})