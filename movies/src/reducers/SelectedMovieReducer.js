export default (state = null, action) => {
    switch (action.type) {
    case ('SELECT_MOVIE'):
        return action.payload;
    default:
        return state;
    }
};