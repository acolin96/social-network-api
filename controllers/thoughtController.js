const {User, Thoughts} = require('../models/');

module.exports = {
    async gatherThoughts(req, res) {
        try {
            const thoughts = await Thoughts.find();
            res.status(200).json(thoughts);
        } catch (error) {
            res.status(500).json(error);
        }
    },

    async gatherOneThought(req, res) {
        try {
        const thought = await Thoughts.findOne({ _id: req.params.thoughtId });
            
        if (!thought) {
            return res.status(404).json({ message: 'No thought found' });
        }
        res.status(200).json(thought);
    } catch (err) {
        res.status(500).json(err);
    }
 },

 async createThought(req, res) {
    try {
        const thought = await Thought.create(req.body);
        const user = await User.findOneAndUpdate(
            { _id: req.body.userId },
            { $push: { thoughts: thought._id } },
            { new: true }
        );
        if (!user) {
            return res.status(404).json({ message: 'No user found' });
        }
        res.json(thought);
    } catch (err) {
        res.status(400).json(err);
    }
},

async updateThought(req, res) {
    try {
        const thought = await Thought.findOneAndUpdate({ _id: req.params.thoughtId },
            req.body, { new: true, runValidators: true });
            res.json(thought);
    } catch (err) {
        res.status(400).json(err);
    }
},

async deleteThought(req, res) {
    try {
        const thought = await Thought.findOneAndDelete({ _id: req.params.thoughtId });

        if (!thought) {
            return res.status(404).json({ message: 'No thought found' });
        }
        res.json(thought);
    } catch (err) {
        res.status(400).json(err);
    }
},

async addReaction(req, res) {
    try {
        const thought = await Thought.findOneAndUpdate({ _id: req.params.thoughtId },
            { $push: { reactions: req.body } },
            { new: true, runValidators: true }
        );
        if (!thought) {
            return res.status(404).json({ message: 'No thought found' });
        }
        res.json(thought);
    } catch (err) {
        res.status(400).json(err);
    }
},

async removeReaction(req, res) {
    try {
        const thought = await Thought.findOneAndUpdate({ _id: req.params.thoughtId },
            { $pull: { reactions: { reactionId: req.params.reactionId } } },
            { new: true }
        );
        if (!thought) {
            return res.status(404).json({ message: 'No thought found' });
        }
        res.json(thought);
    } catch (err) {
        res.status(400).json(err);
    }
}

}