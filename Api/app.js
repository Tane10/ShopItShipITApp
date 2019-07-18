const express = require("express");
const bodyParser = require("body-parser");
const graphQLHttp = require("express-graphql");
const { buildSchema } = require("graphql");

const app = express();

// bodyParser middle wear for json
app.use(bodyParser.json());

// setting the grapthql endpoint and bulding schemea
// query is fetch, mutation is to chage data
app.use(
  "/graphql",
  graphQLHttp({
    schema: buildSchema(`

    type RootQuery {

    }

    type RootMutation {

    }

    schema : {
        query: RootQuery
        mutation: RootMutation
    }
    `),
    rootValue: {}
  })
);

app.listen(3000);
