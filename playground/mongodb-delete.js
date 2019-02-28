const {MongoClient, ObjectID} = require ('mongodb');

MongoClient.connect ('mongodb://localhost:27017/TodoApp', (err, db) => {
    if (err) {
        console.log ('Unable to connect to MongoDB', err);
        return;
    }
    console.log ('Connected to MongoDB server');
    
    // db.collection('Todos').deleteMany ({text : "eat lunch"}).then ((result) => {
    //     console.log (result);
    // });

    // db.collection('Todos').deleteOne ({text : "eat lunch"}).then ((result) => {
    //     console.log (result);
    // });

//    db.collection('Todos').findOneAndDelete ({text : "delete me"}).then ((result) => {
//         console.log (result);
//     });

  //  {_id: new ObjectID('5c65fc5a8e203179b2edf29f')}

   db.collection('Users').findOneAndDelete ({_id: new ObjectID("5c6c407bb7c633aadcb8c96c")}).then ((result) => {
        console.log (result);
    });

    // db.collection ('Todos').find ({completed: false}).toArray().then ((docs) => {
    //     console.log ('Todos');
    //     console.log (JSON.stringify(docs, undefined, 2));
    // }, (err) => {
    //     console.log ('Unable to fetch todods', err);
    // });

    //db.close();
});