const uuid = require('uuid').v4;
const Column = require('./column.model');

class Board {
  constructor({
    id = uuid(),
    title = 'Default',
    columns = []
  } = {}) {
    this.id = id;
    this.title = title;
    this.columns = columns.map(column => new Column(column));
  }
};

module.exports = Board;
