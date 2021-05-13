const boardsRepo = require('./board.memory.repository');
const Board = require('./board.model');

const getAll = () => boardsRepo.getAll();

const get = (id) => boardsRepo.get(id);

const remove = (id) => boardsRepo.remove(id);

const save = (board) => boardsRepo.save(new Board(board));

const update = (id, board) => boardsRepo.update(id, board);

module.exports = { getAll, get, remove, save, update };