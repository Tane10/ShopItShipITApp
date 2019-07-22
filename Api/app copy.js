const express = require("express");
const bodyParser = require("body-parser");
const graphQLHttp = require("express-graphql");
const buildSchema = require("graphql").buildSchema;
const mongoose = require("mongoose");

const app = express();

const User = require("./models/user");
const Test = require("./models/test");
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
    type User {
        userName: String!
        userId: ID!
        userBasket: ID!
    }

    input UserInput {
      userName: String
      userId: ID
      userBasket: ID
    } 

    type Wallet {
        walletId: ID
        balance: Float
    }

    type Item {
      itemId: ID
      itemName: String
      price: Int
    }

    type Basket {
        basketId: ID
        basketItems: [Item]
        totalPrice: Float
    }

    type RootMutation {
        createUsers(userInput: UserInput): User
    }

    type TestQuery {
      name: String
    }

    input TestInput{
      name: String
    }

    type TestMutation{
        creationTest(testInputName: String): String
    }

    schema {
        query: User
        mutation: TestMutation
    }
    `),
    rootValue: {
      // Resolver functions
      // userName: () => {
      //   return "jeff";
      // },
      userId: () => {
        return 1;
      },
      creationTest: async args =>{
        const test = new Test({
          name: args.TestInput.name
        });
        return test
        .save().then( result => {
          console.log(result);
          return result
        }).catch(err => {
          throw err;
        })
      },
      createUsers: async args => {
        const user = new User({
          userName: args.UserInput.userName,
          userId: args.UserInput.userId,
          userBasket: args.UserInput.userBasket
        });
        try {
          const result = await user.save();
          console.log(result);
          return result;
        }
        catch (err) {
          console.log(err);
          throw err;
        }
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
      },
      price: () => {
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
    }@shopitshipit-e3qmq.mongodb.net/${
      process.env.MONGO_DB
    }?retryWrites=true&w=majority`
  )
  .then(() => {
    app.listen(3000);
    console.log("connected");
  })
  .catch(err => {
    console.log(err);
  });
