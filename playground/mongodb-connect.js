//const MongoClient = require ('mongodb').MongoClient;

const {MongoClient, ObjectID} = require ('mongodb');

// var obj = new ObjectID ();
// console.log (obj);


// var user = { name: 'Dave', age:25};
// var {name} = user;
// console.log (name);

MongoClient.connect ('mongodb://localhost:27017/TodoApp', (err, db) => {
    if (err) {
        console.log ('Unable to connect to MongoDB', err);
        return;
    }
    console.log ('Connected to MongoDB server');
    // db.collection ('Todos').insertOne ({
    //     text: 'Another to do',
    //     completed: false
    // }, (err, result) => {
    //     if (err) {
    //         console.log ('Insert failed: ', err);
    //         return
    //     }
    //     console.log (JSON.stringify (result.ops, undefined, 2));
    // });
    // db.collection ('Users').insertOne ({
    //     name: 'Ralph',
    //     age: 25,
    //     location: 'Arizona Desert'
    //  }, (err, result) => {
    //     if (err) {
    //         console.log ('Insert failed: ', err);
    //         return
    //     }
    //     console.log (JSON.stringify (result.ops[0]._id.getTimestamp(), undefined, 2));
    //     console.log (JSON.stringify (result.ops, undefined, 2));
    // });

    db.close();
});