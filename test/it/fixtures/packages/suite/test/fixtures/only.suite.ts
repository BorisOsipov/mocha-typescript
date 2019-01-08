import { only, suite, test } from "mocha-typescript";

@suite @only class Suite1 {
    @test public test1() {}
}
@suite class Suite2 {
    @test public test1() {}
}
