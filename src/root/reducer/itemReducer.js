const initialState = {
    user: {},
    activeId:null
};
export default function itemReducer(state = initialState, action) {

    switch (action.type) {
        case 'User_Login':
            console.log("action.payload:",action.payload);
            return {
                ...state,
                user:action.payload           
            }
        case 'LOG_OUT':
            // console.log("user_name:", action.data.name);
            return {
                user:{}
            }

        default:
            return state;
    }
}
