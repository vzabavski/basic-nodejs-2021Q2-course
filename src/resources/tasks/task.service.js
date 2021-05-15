const tasksRepo = require('./task.memory.repository');
const Task = require('./task.model');

const getAll = (boardId) => tasksRepo.getAll(boardId);

const get = (id) => tasksRepo.get(id);

const remove = (id) => tasksRepo.remove(id);

const save = (boardId, task) => {
    const taskCopy = task;
    if(!task.boardId) {
        taskCopy.boardId = boardId
    }
    return tasksRepo.save(new Task(taskCopy))
};

const update = (id, board) => tasksRepo.update(id, board);

const removeBoardsTasks = (boardId) => tasksRepo.removeBoardsTasks(boardId);

const removeUsersTasks = (userId) => tasksRepo.removeUsersTasks(userId);

module.exports = { getAll, get, remove, save, update, removeBoardsTasks, removeUsersTasks };