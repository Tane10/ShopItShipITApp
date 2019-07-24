const Event = require("../models/event");
const User = require("../models/user");
const Item = require("../models/item");

const events = async eventIds => {
  try {
    const events = await Event.find({ _id: { $in: eventIds } });
    events.map(event => {
      return {
        ...event._doc,
        _id: event.id,
        date: new Date(event._doc.date).toISOString(),
        creator: user.bind(this, event.creator)
      };
    });
    return events;
  } catch (err) {
    throw err;
  }
};

const user = async () => {
  try {
    const user = await User.find();
    user.map(user => {
      return {
        ...user._doc,
        _id: user.id
      };
    });
    return user;
  } catch (err) {
    throw err;
  }
};

const item = async () => {
    try {
      const item = await Item.find();
      item.map(item => {
        return {
          ...item._doc,
          _id: item.id
        };
      });
      return item;
    } catch (err) {
      throw err;
    }
  };

//mutations
module.exports = {
  events: async () => {
    try {
      const events = await Event.find();
      return events.map(event => {
        return {
          ...event._doc,
          _id: event.id,
          date: new Date(event._doc.date).toISOString(),
          creator: user.bind(this, event._doc.creator)
        };
      });
    } catch (err) {
      throw err;
    }
  },
  createEvent: async args => {
    const event = new Event({
      title: args.eventInput.title,
      description: args.eventInput.description,
      price: +args.eventInput.price,
      date: new Date(args.eventInput.date),
      creator: "5c0fbd06c816781c518e4f3e"
    });
    let createdEvent;
    try {
      const result = await event.save();
      createdEvent = {
        ...result._doc,
        _id: result._doc._id.toString(),
        date: new Date(event._doc.date).toISOString(),
        creator: user.bind(this, result._doc.creator)
      };
      const creator = await User.findById("5c0fbd06c816781c518e4f3e");

      if (!creator) {
        throw new Error("User not found.");
      }
      creator.createdEvents.push(event);
      await creator.save();

      return createdEvent;
    } catch (err) {
      console.log(err);
      throw err;
    }
  },
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
  //#TODO: add item to the users basket
  addItemsToBasket: args => {
    return Item.find({
      userName: args.addItemsToBasket.userName,
      itemName: args.addItemsToBasket.itemName
    });
  }
};
