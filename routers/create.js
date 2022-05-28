const express = require('express');
const mongoose = require('mongoose');
const router = express.Router()
const User = require('../model/user')
const verifytime = require('../routers/verify')

//create user
router.post('/entry', async (req, res) => {
    const user = await new User({
        _id: new mongoose.Types.ObjectId(),
        user: req.body.user,
        date: req.body.date,
        hours: req.body.hours,
        note: req.body.note
        

    })
    try {
        const a1 = await user.save()
        res.status(201).json(a1)
        
    } catch (err) {
        res.status(500).json('Error' + err)
    }
    console.log(user)


})
router.post('/entry/check', verifytime, async (req, res) => {
    const user = await new User({
        _id: new mongoose.Types.ObjectId(),
        user: req.body.user,
        date: req.body.date,
        hours: req.body.hours,
        note: req.body.note


    })
    try {
        const a1 = await user.save()
        res.status(201).json(a1)

    } catch (err) {
        res.status(500).json('Error' + err)
    }
    console.log(user)


})

// update user
router.put('/:id', async (req, res) => {

    try {
        const userUpdate = await User.findByIdAndUpdate(req.params.id,
            {
                $set: req.body,
            },
            { new: true }
        );
        res.status(200).json(userUpdate);
    } catch (err) {
        res.status(500).json(err)
    }

})

//detete user 
router.delete('/:id',async (req, res) => {
    try {
        await User.findByIdAndDelete(req.params.id)
        res.status(200).json('user has been deleted')
    } catch (error) {
        res.status(500).json(error)

    }
})


module.exports = router;