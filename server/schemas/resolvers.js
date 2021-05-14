const { User, Quotes } = require('../models');

const resolvers = {
  Query: {
    users: async () => {
      return User.find().select('-__v -password');
    },
    user: async (parent, { username }) => {
      return User.findOne({ username }).select('-__v -password');
    },
    quote: async (parent, { _id }) => {
      return Quotes.findOne({ _id });
    },
  },
};

module.exports = resolvers;
