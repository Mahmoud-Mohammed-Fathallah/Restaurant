import { expect } from "chai";
import { CustomerServices } from "../../services/CustomerService";

describe("Customer Service Tests", () => {
  const obj = new CustomerServices();

  it("shoud return void", () => {
    expect(obj.get_Available_Items()).to.be.a("promise");
  });

  it("check length of item returned", async () => {
    let result: any;
    await obj.get_Available_Items().then(
      (accepted) => result = accepted,
      (rejected) => console.log("Erron" + rejected));
    console.log(result);
    expect(result.length).to.equals(1);
  });
  it
});