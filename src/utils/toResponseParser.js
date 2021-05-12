const toResponseParser = (user) => {
    if(user === undefined) {
        return user;
    }
    const { id, name, login } = user;
    return { id, name, login };
}

module.exports = toResponseParser;