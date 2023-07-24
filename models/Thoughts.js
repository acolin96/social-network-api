const { Schema, model } = require('mongoose');
const reactionSchema = require('./Reaction')


const thoughtSchema = new Schema ({
    thoughtText: {
      type: String,
      required: true,
      maxLength: 480,
      minLength: 1,
    },
    createdAt: {
      type: Date,
      default: Date.now,
      get: (date) => date.toLocaleDateString()
    },
    username: {
      type: String,
      required: true,
    },

    reactions: [reactionSchema],
},
{

    toJson: {
      getters: true,
      virtuals:true
    },
    id:false
}

);

thoughtSchema.virtual('reactionCount').get(function(){
    return this.reactions.length;
});
  
  const Thoughts = model('thought', thoughtSchema);
  
  module.exports = Thoughts;