import express from 'express';
import userList from '../data/user-list.js';

const router = express.Router();

router.get('/', (req, res) => res.json(userList));



router.get('/:user_id', (req, res) => {
    const user_id = parseInt(req.params.user_id);
    let user_obj = null;

    // Sent back an error when an invalid user_id is requested
    if (typeof user_id != 'number') {
        res.status(400).json({ 'error': true, 'message': 'invalid request' });
        return;
    }

    user_obj = userList.find(obj => {
        return obj.id === user_id
    });

    if (user_obj) {
        res.json({ error:false, user:user_obj });
    } else {
        res.status(404).json({ 'error': true, 'message': 'user not found' });
    }
});

export default router;