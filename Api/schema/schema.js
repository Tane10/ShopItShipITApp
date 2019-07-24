const { buildSchema } = require("graphql");

module.exports = buildSchema(`type Root {
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
`);
