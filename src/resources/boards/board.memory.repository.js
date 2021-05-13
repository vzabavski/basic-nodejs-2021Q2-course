const BOARD_DB = [];

const getAll = async () => BOARD_DB;

const get = async (id) => BOARD_DB.find(board => board.id === id); 

const remove = async (id) => {
  BOARD_DB.filter(board => board.id !== id);
  return 'User has been deleted'
};

const save = async (board) => {
  BOARD_DB.push(board)
  return board;
};

const update = async (id, userData) => {
  const userIndex = BOARD_DB.findIndex(user => user.id === id);
  const updatedUser = {
    id,
    ...userData
  };
  BOARD_DB.splice(userIndex, 1, updatedUser);
  return updatedUser;
}

module.exports = { getAll, get, remove, save, update };
