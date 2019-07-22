const express = require("express");
const bodyParser = require("body-parser");
const graphQLHttp = require("express-graphql");
const { buildSchema } = require("graphql");
const mongoose = require("mongoose");

const User = require("./models/user");
const Item = require("./models/item");
// const Wallet = require("./models/wallet");
// const Basket = require("./models/Basket");

const app = express();
// bodyParser middle wear for json
app.use(bodyParser.json());

//#region mutation help
/*
mutation{ all the working mutations for creatation
  createUser(userInput:{userName:"Jeff"}){
    userName
    userId
    userBasket
  }
  createItem(itemInput:{itemName:"hat", itemPrice:5.0}){
    itemName
    itemPrice
  }
  createWallet(walletInput:{balance:100}){
    balance
  }
  createBasket(basketInput:{totalPrice:3.0}){
    basketItems{
    	itemName
      itemPrice
  }
    totalPrice
  }
}*/
//#endregion

app.use(
  "/graphql",
  graphQLHttp({
    schema: buildSchema(`
    type User {
        _id: ID!
        userName: String!
        userWallet: Float
        userBasket: Basket
    }

    type Basket {
      _id: ID
      basketItems: Item
      totalPrice: Float
    }

    type Item {
      _id: ID!
      itemName: String
      itemPrice: Float
    }

    input UserInput {
      userName: String!
    } 

    input ItemInput {
      itemName: String
      itemPrice: Float
    }

    input WalletInput {
      balance: Float!
      userName: String!
    }

    input BasketInput {
      userName: String!
      totalPrice: Float
    }

    type Mutation {
        createUser(userInput: UserInput): User
        createItem(itemInput: ItemInput): Item
    }

    schema {
        query: User
        mutation: Mutation
    }
    `),
    rootValue: {
      // Query
      User: () => {
        return user;
      },
      Item: () => {
        return item;
      },
      wallet: () => {
        return wallet;
      },
      Basket: () => {
        return basket;
      },
      // Mutations
      createUser: args => {
        const user = new User({
          userName: args.userInput.userName,
          userWallet: args.userInput.userWallet
        });
        return user
          .save()
          .then(result => {
            return { ...result._doc };
          })
          .catch(err => {
            throw err;
          });
      },
      createItem: args => {
        const item = new Item({
          itemName: args.itemInput.itemName,
          itemPrice: args.itemInput.itemPrice
        });
        return item
          .save()
          .then(result => {
            return { ...result._doc };
          })
          .catch(err => {
            throw err;
          });
      },
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
