const mongoose = require ('mongoose');

mongoose.connect (process.env.MONGO_DB, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false
});


/*
const me = new User ({
    name: 'Dave',
    age: 61,
    email: 'dave@dave.com',
    password: 'letMeIn'
});

me.save().then (() => {
    console.log (me)
}).catch ((error) => {
    console.log ('Error:', error);
});
*/

/*
const Task = mongoose.model ('Task', {
    description: {
        type: String,
        required: true,
        trim: true
    },
    completed: {
        type: Boolean,
        default: false
    }
});

const myTask = new Task ({
    description: ' Add some validation    ',
    completed: true
});

myTask.save().then (() => {
    console.log (myTask)
}).catch ((error) => {
    console.log ('Error:', error);
});
*/