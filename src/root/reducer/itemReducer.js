
const initialState = {
    items: {},
};
export default function itemReducer(state = initialState, action) {
    switch (action.type) {
        case 'User_Login':
            return {
                items:action
            }
            
        default:
            return state;
    }
}
