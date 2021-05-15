const router = require('express').Router();
const User = require('./user.model');
const usersService = require('./user.service');
const taskService = require('../tasks/task.service');
const toResponseParser = require('../../utils/toResponseParser')

router.route('/').get(async (req, res) => {
  const users = await usersService.getAll();
  res.json(users.map(User.toResponse));
});

router.route('/').post(async (req, res) => {
  const user = await usersService.save(req.body);
  res.status(201).json(toResponseParser(user));
});

router.route('/:id').get(async (req, res) => {
  const user = await usersService.get(req.params.id);
  res.status(200).json(toResponseParser(user)); 
});

router.route('/:id').delete(async (req, res) => {
  const deletedUser = await usersService.remove(req.params.id);
  taskService.removeUsersTasks(req.params.id);
  res.status(204).json(deletedUser);
});

router.route('/:id').put(async (req, res) => {
  const updatedUser = await usersService.update(req.params.id, req.body);
  res.json(updatedUser);
});

module.exports = router;
