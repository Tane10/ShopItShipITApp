var chai = require("chai"),
  expect = require("chai").expect,
  chaiHttp = require("chai-http");

// use Chai Http
chai.use(chaiHttp);

describe("Api HTTP async Tests", () => {
  describe("Http calls and requests", () => {
    it("Once connect to api, you should receivce a status code of 200", done => {
      chai
        .request(server)
        .get("/")
        .auth("user", "")
        .end(res => {
          expect(res).to.have.a.property("code");
          expect(res).to.have.status(200);
          expect(res).to.not.have.status(404);
          done();
        })
        .catch(err => {
          throw err;
        });
    });

    it("Api should return a 401 if the user doesn't have a correct auth token", done => {
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

    it("Should allow user to GET all recent transactions", done => {
      chai
        .request(server)
        .get("/transactions")
        .end(res => {
          expect(res).to.have.a.property("transactions");
          expect(res).to.have.a.property("price");
          expect(res).to.be.json;
          done();
        })
        .catch(err => {
          throw err;
        });
    });

    it("User should be able to POST transactions", done => {
      chai
        .post("/transactions")
        .type("form")
        .send({
          _method: "put",
          ItemId: 1,
          ItemName: "GG Vest",
          Price: "10"
        });
    });
  });
});
