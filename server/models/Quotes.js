const { Schema, model } = require('mongoose');
const dateFormat = require('../utils/dateFormat');

const quoteSchema = new Schema(
  {
    quoteText: {
      type: String,
      required: 'no quotes!',
      minlength: 1,
      maxlength: 280,
    },
    createdAt: {
      type: Date,
      default: Date.now,
      get: (timestamp) => dateFormat(timestamp),
    },
  },
  {
    toJSON: {
      getters: true,
    },
  }
);

const Quotes = model('Quotes', quoteSchema);

module.exports = Quotes;
