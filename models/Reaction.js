const { Timestamp } = require('bson');
const { Schema, Types } = require('mongoose');

const reactionSchema = new Schema(
    {
      reactionId: {
        type: Schema.Types.ObjectId,
        default: () => new Types.ObjectId(),
      },
      reactionBody: {
        type: String,
        required: true,
        maxlength: 480,
      },
      username: {
        Type: String,
        required: true,
      },
      createdAt: {
        type: Date,
        defualt: Date.now,
      },
    },
    {
        toJSON: {
            getters: true,
        },
        id: false,
    }

);

module.exports = reactionSchema;