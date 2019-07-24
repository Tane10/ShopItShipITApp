const express = require("express");
const bodyParser = require("body-parser");
const graphQLHttp = require("express-graphql");
const { buildSchema } = require("graphql");
const mongoose = require("mongoose");

const User = require("./models/user");
const Item = require("./models/item");

const app = express();
// bodyParser middle wear for json
app.use(bodyParser.json());

/*TODO: 
create mutations:
- buyItems 
- sellItems

*/

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
    type Root {
      user: User
      items: Items!
    }

    type User {
        _id: ID!
        userName: String!
        userWallet: Float 
        userBasket: Basket
    }

    type Basket {
      basketItems: Items
      totalPrice: Float!
    }

    type Items {
      _id: ID!
      itemName: String
      itemPrice: Float
    }

    input UserInput {
      userName: String!
      userWallet: Float = 0.0
    } 

    input ItemInput {
      itemName: String
      itemPrice: Float
    }

    input AddItemsToBasket {
      userName: String!
      itemsName: [String!]
    }

    input WalletInput {
      balance: Float! = 0.0
      userName: String!
    }

    input BasketInput {
      userName: String!
      totalPrice: Float = 0.0
    }

    type Mutation {
        createUser(userInput: UserInput): User
        createItem(itemInput: ItemInput): Items
        addItemsToBasket(addItemsToBasket: AddItemsToBasket): [String]
    }

    schema {
        query: Root
        mutation: Mutation
    }
    `),
    rootValue: {
      // Query
      User: () => {
        return User.find()
          .then(user => {
            return console.log(user);
          })
          .catch(err => {
            throw err;
          });
      },
      Items: () => {
        return Item.find({_id:"5d35d8f692a3d8759e72c2bf"})
          .then(items => {
            return items.map(item => {
              console.log(item);
            });
            console.log(items);
          })
          .catch(err => {
            throw err;
          });
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
      addItemsToBasket: args => {
        return Item.find({
          userName: args.addItemsToBasket.userName,
          itemName: args.addItemsToBasket.itemName
        });
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
