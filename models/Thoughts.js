const { Schema, Types, model } = require('mongoose');


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

const thoughtSchema = new Schema ({
    thoughtText: {
      type: String,
      required: true,
      maxLength: 280,
      minLength: 1,
    },
    createdAt: {
      type: Date,
      default: Date.now,
    },
    username: {
      type: String,
      required: true,
    },

    reactions: [reactionSchema]

});

thoughtSchema.virtual('reactionCount').get(function(){
    return `${this.reactions}`;
  }).set(function(value) {
    const reactionNumber = value.split(' ');
    this.reactions = reactionNumber;
  });
  
  const Thoughts = model('thought', thoughtSchema);
  
  module.exports = Thoughts;