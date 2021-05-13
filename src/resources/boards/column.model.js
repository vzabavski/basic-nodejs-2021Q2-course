const uuid = require('uuid').v4;

class Column {
  constructor({
    id = uuid(),
    title = 'Default',
    order = 1
  } = {}) {
    this.id = id;
    this.title = title;
    this.order = order;
  }
};

module.exports = Column;