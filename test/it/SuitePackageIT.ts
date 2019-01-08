import { params, skip, only, slow, suite, timeout } from "../../index";
import { AbstractPackageITBase, PackageTestParams } from "./AbstractPackageITBase";

@suite(timeout(90000), slow(10000))
@only
class SuitePackageIT extends AbstractPackageITBase {

  @params({ fixture: "suite", installTypesMocha: false }, "all suite integration tests")
  @params({ fixture: "suite", installTypesMocha: true }, "all suite integration tests with @types/mocha")
  runTest(params: PackageTestParams) {

    super.runTest(params);
  }
}
