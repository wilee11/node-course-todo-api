const {MongoClient, ObjectID} = require ('mongodb');

MongoClient.connect ('mongodb://localhost:27017/TodoApp', (err, db) => {
    if (err) {
        console.log ('Unable to connect to MongoDB', err);
        return;
    }
    console.log ('Connected to MongoDB server');
    
    db.collection ('Todos').find ({completed: false}).toArray().then ((docs) => {
        console.log ('Todos');
        console.log (JSON.stringify(docs, undefined, 2));
    }, (err) => {
        console.log ('Unable to fetch todods', err);
    });

    db.collection ('Todos').find ({_id: new ObjectID('5c65fc5a8e203179b2edf29f')}).toArray().then ((docs) => {
        console.log ('------');
        console.log (JSON.stringify(docs, undefined, 2));
    }, (err) => {
        console.log ('Unable to fetch todods', err);
    });

    db.collection ('Todos').find ().count().then ((count) => {
        console.log (`Count: ${count}`);
    }, (err) => {
        console.log ('Unable to fetch todods', err);
    });


    db.collection ('Users').find ({name: "Ralph"}).toArray().then ((docs) => {
        console.log ('Users');
        console.log (JSON.stringify(docs, undefined, 2));
    }, (err) => {
        console.log ('Unable to fetch users', err);
    });
    //db.close();
});