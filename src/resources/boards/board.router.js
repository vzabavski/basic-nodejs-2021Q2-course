const router = require('express').Router();
const boardService = require('./board.service');

router.route('/').get(async (req, res) => {
  const boards = await boardService.getAll();
  res.json(boards);
});

router.route('/').post(async (req, res) => {
  const board = await boardService.save(req.body);
  res.status(201).json(board);
});

router.route('/:id').get(async (req, res) => {
  const boards = await boardService.get(req.params.id);
  res.json(boards);
});

router.route('/:id').delete(async (req, res) => {
  const boards = await boardService.remove(req.params.id);
  res.status(200
    ).json(boards);
});

router.route('/:id').put(async (req, res) => {
  const boards = await boardService.update(req.params.id, req.body);
  res.json(boards);
});

module.exports = router;