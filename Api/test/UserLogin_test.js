var expect = require('chai').expect;

describe("UserLogin", () => {
  describe("UserNameField", () => {
    it("UserNameField should allow the user to input and be click able", () => {
      expect(InputFieldClick).to.be.true;
    });

    it("UserNameField should allow the user to input only vaild a username longer then 5 chars", () => {
      expect(UserName).to.be.a("string");
      expect(UserName).to.have.lengthOf.above(5);
    });
  });

  describe("PasswordField", () => {
    it("PasswordField should allow the user to input and be click able", () => {
      expect(InputFieldClick).to.be.true;
    });

    it("PasswordField should allow the user to input and only vaild if longer then 8 chars", () => {
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

    it("Submit should only allow a vaild user to log into the app", () => {
      expect(Auth0User).to.a('String');
      expect(Auth0Pwd).to.a('String');
      expect(UserVaild).to.be.true;
    });

    it("Submit should not allow a none vaild user to log into the app", () => {
      expect(UserVaild).to.be.false;
    });
  });
});
