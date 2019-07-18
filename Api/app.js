const express = require("express");
const bodyParser = require("body-parser");
const graphQLHttp = require("express-graphql");
const  buildSchema  = require("graphql").buildSchema;

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
        users: [String!]

    }

    type RootMutation {
        createUsers(name:String): String
    }

    schema {
        query: RootQuery
        mutation: RootMutation
    }
    `),
    rootValue: {
      users: () => {
        return ["jeff", "tom"];
      },
      createUsers: (args) => {
        const userName = args.name;
        return userName;
      }
    },
    graphiql: true
  })
);

app.listen(3000);
