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
        const thought = await Thoughts.findOne({ _id: req.params.thoughtId })
            .select('-__v');
        if (!thought) {
            return res.status(404).json({ message: 'No comment found' });
        }
        res.status(200).json(thought);
    } catch (err) {
        res.status(500).json(err);
    }
 }
}

async createThought(req, res) {
    try {
        const thought = await Thoughts.create(req.body)
        const userInputs = await User.findOneAndUpdate(
            {
                _id: req.body.userId
            },
            {
                
            }
        )
    }
}