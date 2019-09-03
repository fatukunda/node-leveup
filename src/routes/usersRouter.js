import express from 'express';
import User from '../models/User';

const router = express.Router();

const users = [];

router.post('/users', (req, res) => {
	const { id, name, age } = req.body;
	const user = new User(id, name, age);
	users.push(user);
	res.status(201).send(user);
});

router.get('/users', (req, res) => {
	res.send(users);
});

router.get('/users/:id', (req, res) => {
	const id = req.params.id;
	const user = users.find(user => user.id === id);
	if (!user) {
		return res.status(404).send({ message: 'No such user was found' });
	}
	res.send(user);
});

export default router;
