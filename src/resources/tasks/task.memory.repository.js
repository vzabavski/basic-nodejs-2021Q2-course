let TASK_DB = [];

const getAll = async (boardId) => {
    const tasks = TASK_DB.filter(task => task.boardId === boardId)
    if(!tasks) {
        throw new Error('Not found');
    }
    return tasks;
};

const get = async (id) => {
    const currentTask = TASK_DB.find(task => task.id === id);
    if(!currentTask) {
        throw new Error('Not fond')
    }
    return currentTask;
}

const remove = async (id) => {
    TASK_DB = TASK_DB.filter(task => task.id !== id);
    return 'The task has been deleted'
};

const save = async (task) => {
    TASK_DB.push(task)
    return task;
};

const update = async (id, updates) => {
  const taskIndex = TASK_DB.findIndex(task => task.id === id);
  const updatedTask = {
    id,
    ...updates
  };
  TASK_DB.splice(taskIndex, 1, updatedTask);
  return updatedTask;
}

const removeBoardsTasks = async (boardId) => {
    TASK_DB = TASK_DB.filter(task => task.boardId !== boardId);
    return 'The task has been deleted'
}

const removeUsersTasks = async (userId) => {
    TASK_DB = TASK_DB.map(task => {
        if(task.userId === userId) {
            // eslint-disable-next-line no-param-reassign
            task.userId = null;
        }
        return task;
    });
    return 'The user\'s tasks have been unassign'
}

module.exports = { getAll, get, remove, save, update, removeBoardsTasks, removeUsersTasks };
