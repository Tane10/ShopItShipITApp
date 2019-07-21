const express = require("express");
const bodyParser = require("body-parser");
const graphQLHttp = require("express-graphql");
const buildSchema = require("graphql").buildSchema;

const app = express();

// bodyParser middle wear for json
app.use(bodyParser.json());

/* 
query
{
  userName
  userId(id: 1){
    walletId
    balance
  }
  userBasket(id: 1){
    basketId
    basketItems{
      itemId
      itemName
    }
    totalPrice
  }
}
*/

// setting the grapthql endpoInt and bulding schemea
// query is fetch, mutation is to chage data
app.use(
  "/graphql",
  graphQLHttp({
    schema: buildSchema(`
    type Query {
        userName: [String!]
        userId(id: ID!): Wallet!
        userBasket(id: ID!): Basket
    }

    type Wallet {
        walletId: ID
        balance: Int
    }

    type Item {
      itemId: ID
      itemName: String
    }

    type Basket {
        basketId: ID
        basketItems: [Item]
        totalPrice: Int
    }

    type RootMutation {
        createUsers(name:String): String
    }

    schema {
        query: Query
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
      },
      userBasket: () => {
        return 1;
      },
      walletId: () => {
        return "2eecc345p";
      },
      balance: () => {
        return 10;
      },
      itemId: () => {
        return "3hh333ecb";
      },
      itemName: () => {
        return "White Vest";
      },
      basketId: () => {
        return 1;
      },
      basketItems: () => {
        return ["White Vest", "jumper", "sandles"];
      },
      totalPrice: () => {
        return 10;
      }
    },
    graphiql: true
  })
);

app.listen(3000);
