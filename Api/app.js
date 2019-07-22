const express = require("express");
const bodyParser = require("body-parser");
const graphQLHttp = require("express-graphql");
const { buildSchema } = require("graphql");
const mongoose = require("mongoose");

const User = require("./models/user");

const app = express();
// bodyParser middle wear for json
app.use(bodyParser.json());

// query is fetch, mutation is to chage data
app.use(
  "/graphql",
  graphQLHttp({
    schema: buildSchema(`
    type User {
        userName: String!
        userId: String
        userBasket: String
    }

    input UserInput {
      userName: String!
      userId: String
      userBasket: String
    } 

    type Mutation {
        createUser(input: UserInput): User
    }

    schema {
        query: User
        mutation: Mutation
    }
    `),
    rootValue: {
      User: () => {
        return user;
      },
      createUser: args => {
        const user = new User({
          userName: args.input.userName,
          userId: args.input.userId,
          userBasket: args.input.userBasket
        });
        return user
          .save()
          .then(result => {
            console.log(result);
            console.log(user);
            return result;
          })
          .catch(err => {
            console.log(err);
            throw err;
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
