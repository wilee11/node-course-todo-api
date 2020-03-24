const express = require ('express')
const Task = require ('../models/task');
const router = new express.Router(); 
const auth = require('../middleware/auth');

// Get /tasks?limit=10&skip=10
router.get ('/tasks/', auth, async (req, res) => {
    try {
        // let tasks = undefined;
        // if (!completedStr || completedStr === "") {
        //     tasks = await Task.find({owner: req.user._id});
        // } else {
        //     let completed = false;
        //     if (completedStr === "true") {
        //         completed = true;
        //     }
        //     tasks = await Task.find({owner: req.user._id, completed})
        // }
        // res.send (tasks);
        const match = {};
        const sort = {};
        if (req.query.completed) {
            match.completed = req.query.completed === 'true';
        }
        if (req.query.sortBy) {
            const parts = req.query.sortBy.split(':');
            sort[parts[0]] = parts[1] === 'desc' ? -1 : 1;
        }
        await req.user.populate({
            path: 'tasks',
            match,
             options: {
                limit: parseInt(req.query.limit),    // tells mongose to limit the number of results returned
                skip: parseInt(req.query.skip),
                sort
            } 
        }).execPopulate();
        res.send(req.user.tasks);
    } catch (e) {
        res.status(500).send(e);
        console.log (e);
    }
})

router.get ('/tasks/:id', auth, async (req, res) => {
    const _id = req.params.id;
    try {
        const task = await Task.findOne ({_id, owner: req.user._id});
        if (!task) {
            return res.status(404).send();
        }
        res.send (task);
    } catch (e) {
        res.status(500).send(e);
        console.log (e);
    }
})

router.post('/tasks/', auth, async (req, res) => {
    const task = new Task({
        ... req.body,  //copies all properties from req
        owner: req.user._id
    });
    
    try {
        await task.save ();
        res.status(201).send(task)
    } catch (e) {
        res.status(400).send(e);
        console.log (e);
    }
})

router.patch('/tasks/:id', auth, async (req, res) => {
    const _id = req.params.id;
    const allowedUpdates = ['description', 'completed'];
    const updates = Object.keys (req.body);
    const isValidUpdate = updates.every ((update) => {
        return allowedUpdates.includes (update)
    });

    if (!isValidUpdate) {
        return res.status(400).send ({error: 'Invalid updates'})
    }

    try {
        const task = await Task.findOne ({_id, owner: req.user._id});
        if (!task) {
            return res.status(404).send();
        }

        updates.forEach((update) => {
            task[update] = req.body[update];
        })

        await task.save();
        res.send (task);
    } catch (e) {
        res.status(400).send(e);
        console.log (e);
    }
})

router.delete ('/tasks/:id', auth, async (req, res) => {
    const _id = req.params.id;
    try {
        const task = await Task.findOneAndDelete ({_id, owner: req.user._id})
        if (!task) {
            return res.status(404).send();
        }
        res.send (task);
    } catch (e) {
        res.status(500).send(e);
        console.log (e);
    }
})

module.exports = router;