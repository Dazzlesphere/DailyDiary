import express from 'express';

const router = express.Router();

const userList = [
    {
        id: 1,
        name: "Faisal",
        isAdmin: true,
        isSubscriber: true,
        email: "faisal@something.com",
        profile_photo: "xyz.jpg"
    },
    {
        id: 2,
        name: "Hafsa",
        isAdmin: false,
        isSubscriber: true,
        email: "hafsa@something.com",
        profile_photo: "xyz.jpg"
    },
    {
        id: 3,
        name: "Ahmed",
        isAdmin: true,
        isSubscriber: true,
        email: "ahmed@something.com",
        profile_photo: "xyz.jpg"
    }
]

router.get('/', (req, res) => res.json(userList));

router.get('/:user_id', (req, res) => {
    const user_id = req.params.user_id;

    let user_obj = null;

    user_obj = userList.find(obj => {
        console.log(obj.id);
        return obj.id == user_id
    })

    if (user_obj) {
        res.setHeader('Content-Type', 'application/json');
        res.end(JSON.stringify(user_obj));
    } else {
        res.json({ 'message': 'user not found' });
    }
})

export default router;