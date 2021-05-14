const router = require('express').Router({mergeParams: true});
const taskService = require('./task.service');

router.route('/').get(async (req, res) => {
  const tasks = await taskService.getAll(req.params.id);
  res.json(tasks);
});

router.route('/').post(async (req, res) => {
  const newTask = await taskService.save(req.body);
  res.status(201).json(newTask);
});

router.route('/:TaskId').get(async (req, res) => {
  try {
    const task = await taskService.get(req.params.TaskId);
    res.json(task);
  } catch (error) {
    res.status(404).send(error)
  }
});

router.route('/:TaskId').delete(async (req, res) => {
  const boards = await taskService.remove(req.params.TaskId);
  res.status(204).json(boards);
});

router.route('/:TaskId').put(async (req, res) => {
  const updatedTask = await taskService.update(req.params.TaskId, req.body);
  res.json(updatedTask);
});

module.exports = router;