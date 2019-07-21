const express = require("express");
const bodyParser = require("body-parser");
const graphQLHttp = require("express-graphql");
const buildSchema = require("graphql").buildSchema;

const app = express();

// bodyParser middle wear for json
app.use(bodyParser.json());

/* query
{
  userName
  userId
}
Working Query
*/

// setting the grapthql endpoint and bulding schemea
// query is fetch, mutation is to chage data
app.use(
  "/graphql",
  graphQLHttp({
    schema: buildSchema(`
    type RootQuery {
        userName: [String!]
        userId: ID!
    }

    type Wallet {
        usersWallet: ID!
        balance: int

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
      userName: () => {
        return ["jeff", "tom"];
      },
      userId: () => {
        return 1;
      },
      createUsers: args => {
        const userName = args.name;
        return userName;
      }
    },
    graphiql: true
  })
);

app.listen(3000);
