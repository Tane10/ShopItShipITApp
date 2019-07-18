var chai = require("chai"),
  expect = require("chai").expect,
  mongoose = require("mongoose"),
  Schema = mongoose.Schema;

describe("Data base API queries", () => {Í
  describe("user should be able to add items to the DB via the basket", () => {
    it("User should be able to all items in basket from data base", done => {
      chai
        .request(server)
        .get("/")
        .end((err, res) => {
          expect(res).to.have.a.property("code");
          expect(res).to.have.status(401);
          done();
        })
        .catch(err => {
          throw err;
        });
    });
  });
});
