const USER_DB = [];

const getAll = async () => 
  // TODO: mock implementation. should be replaced during task development
  USER_DB
;

const get = async (id) => USER_DB.find(user => user.id === id); 

const remove = async (id) => {
  USER_DB.filter(user => user.id !== id);
  return 'User has been deleted'
};

const save = async (user) => {
  USER_DB.push(user)
  return user;
};

const update = async (id, userData) => {
  const userIndex = USER_DB.findIndex(user => user.id === id);
  const updatedUser = {
    id,
    ...userData
  };
  USER_DB.splice(userIndex, 1, updatedUser);
  return updatedUser;
}

module.exports = { getAll, get, remove, save, update };
