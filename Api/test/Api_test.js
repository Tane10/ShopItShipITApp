var chai = require("chai"),
  expect = require("chai").expect,
  chaiHttp = require("chai-http");

chai.use(chaiHttp);

describe("Api Tests", () => {
  describe("Http calls and requests", () => {
    it("Once connect to api, you should receivce a status code of 200", () => {
      chai
        .request(server)
        .get("/")
        .end((err, res) => {
          expect(res).to.have.a.property("code");
          expect(res).to.have.status(200);
          expect(res).to.not.have.status(404);
        });
    });

    // it("You should be able to send a get request, and retrive JSON back", () => {
    //   expect(Response).to.equal;
    // });
  });
});
