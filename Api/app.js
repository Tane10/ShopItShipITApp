const express = require("express");
const bodyParser = require("body-parser");
const graphQLHttp = require("express-graphql");
const buildSchema = require("graphql").buildSchema;
const mongoose = require("mongoose");

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
        balance: Float
    }

    type Item {
      itemId: ID
      itemName: String
    }

    type Basket {
        basketId: ID
        basketItems: [Item]
        totalPrice: Float
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
      // Resolver functions
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
mongoose
  .connect(
    `mongodb+srv://${process.env.MONGO_USER}:${
      process.env.MONGO_PASSWORD
    }@shopitshipit-e3qmq.mongodb.net/test?retryWrites=true&w=majority`
  )
  .then(() => {
    app.listen(3000);
    console.log("connected")
  })
  .catch(err => {
    console.log(err);
  });
