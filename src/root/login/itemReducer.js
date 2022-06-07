
const initialState = {
    items: {},
};
export default function itemReducer(state = initialState, action) {
    switch (action.type) {
        case 'User_Login':
            console.log('userInfo redux', action.data)
            return {
                items: action,
            };
            
        default:
            return state;
    }
}
