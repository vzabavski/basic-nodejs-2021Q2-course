let BOARD_DB = [];

const getAll = async () => BOARD_DB;

const get = async (id) => {
  const currentBoard = BOARD_DB.find(board => board.id === id);
  if(!currentBoard) {
    throw new Error('Not fond')
  }
  return currentBoard;
}; 

const remove = async (id) => {
  BOARD_DB = BOARD_DB.filter(board => board.id !== id);
  return 'Board has been deleted'
};

const save = async (board) => {
  BOARD_DB.push(board)
  return board;
};

const update = async (id, board) => {
  const boardIndex = BOARD_DB.findIndex(user => user.id === id);
  const updatedBoard = {
    id,
    ...board
  };
  BOARD_DB.splice(boardIndex, 1, updatedBoard);
  return updatedBoard;
}

module.exports = { getAll, get, remove, save, update };
