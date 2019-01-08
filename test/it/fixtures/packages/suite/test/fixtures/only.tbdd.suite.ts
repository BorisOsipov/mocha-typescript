import { suite, test } from "mocha-typescript";

suite("vanila tdd suite", () => {
    test("vanila test", () => {});
    test.only("only", () => {});
});

describe("vanila bdd suite", () => {
    it("vanila test", () => {});
    it.only("only", () => {});
});
