

// To Run:  nodemon src/index.js


const express = require ('express')
require ('./db/mongoose');
const Task = require ('./models/task');
const User = require ('./models/user');
const userRouter = require ('./routers/user');
const taskRouter = require ('./routers/task');

const app = express();
const port = process.env.PORT;

// Without middleware:  new request -> run route handler
// With middleware:  new request -> do something -> run route handler
// app.use((req, res, next) => {
//     console.log (req.method, req.path);
//     next();
// });

app.use(express.json());        //Automatically parse incoming JSON into an object
app.use(userRouter);
app.use(taskRouter);

/*
const multer = require ('multer');
const upload = multer({
    dest: 'images'
});

app.post ('/upload', upload.single('upload'), (req, res) => {
    res.send();
});
*/

app.listen (port, () => {
    console.log ('Server is up on port ' + port);
})

