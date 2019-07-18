var expect = require('chai').expect;

describe("UserLogin", () => {
  describe("UserNameField", () => {
    it("UserNameField should allow the user to input only vaild a username longer then 5 chars", () => {
      expect(InputFieldClick).to.be.true;
      expect(UserName).to.be.a("string");
      expect(UserName).to.have.lengthOf.above(5);
    });
  });

  describe("PasswordField", () => {
    it("PasswordField should allow the user to input and only vaild if longer then 8 chars", () => {
      expect(InputFieldClick).to.be.true;
      expect(Password).to.be.a("string");
      expect(Password).to.have.lengthOf.above(8);
    });
  });

  describe("Submit", () => {
    it("Submit button should be clickable and submit user information", () => {
      expect(InputFieldClick).to.be.true;
      expect(SubmitBtn).to.be.true;
      expect(Atho0).to.be.true;
    });
  });
});
