const mongoose = require('mongoose');

const TaskSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Please add a name'],
        trim: true,
        maxLength: [20, 'Task name must be less than 20 characters']
    },
    // description: {
    //     type: String,
    //     required: true
    // },
    completed: {
        type: Boolean,
        default: false
    }
}, {
    timestamps: true
});

module.exports = mongoose.model('Task', TaskSchema);