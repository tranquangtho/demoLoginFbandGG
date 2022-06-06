const initialState = {
    items: {},
};

export default function itemReducer(state = initialState, action) {
    switch (action.type) {
        case '@UserName':
            console.log('userInfo redux', action)
            return {
                items: action,
            };

        default:
            return state;
    }
}
