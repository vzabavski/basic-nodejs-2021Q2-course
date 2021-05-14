const uuid = require('uuid').v4;

class Task {
  constructor({
    id = uuid(),
    title = 'Default',
    description,
    order,
    columnId,
    boardId,
    userId
  } = {}) {
    this.id = id;
    this.title = title;
    this.description = description;
    this.order = order;
    this.columnId = columnId;
    this.boardId = boardId;
    this.userId = userId;
  }
};

module.exports = Task;