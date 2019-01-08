import { suite, test } from "mocha-typescript";

@suite class Suite1 {
    @test public test1() {}
    @test.only public test2() {}
}
