const initialState = {
    post: [],
};

export default function bossReducer(state = initialState, action) {
    switch (action.type) {
        case '@Post':
            return {
                post: action,
            };
        default:
            return state;
    }
}
