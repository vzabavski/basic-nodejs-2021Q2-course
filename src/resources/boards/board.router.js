const router = require('express').Router();
const boardService = require('./board.service');
const taskService = require('../tasks/task.service')

router.route('/').get(async (req, res) => {
  const boards = await boardService.getAll();
  res.json(boards);
});

router.route('/').post(async (req, res) => {
  const board = await boardService.save(req.body);
  res.status(201).json(board);
});

router.route('/:id').get(async (req, res) => {
  try {
    const boards = await boardService.get(req.params.id);
    res.json(boards);
  } catch (error) {
    res.status(404).send(error);
  }
});

router.route('/:id').delete(async (req, res) => {
  const boardResponse = await boardService.remove(req.params.id);
  taskService.removeBoardsTasks(req.params.id)
  res.status(204).json(boardResponse);
});

router.route('/:id').put(async (req, res) => {
  const boards = await boardService.update(req.params.id, req.body);
  res.json(boards);
});

module.exports = router;