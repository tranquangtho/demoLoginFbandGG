// const postData = (post)=>{
//     return {
//         type:"Post",
//         post
//     }
// };
const initialState= {
    item:{},
    activeId:null
}

export default function PostReducer(state = initialState, action) {
  const navigation = useNavigation();

    switch (action.type) {
        case 'CONTENT':
            const newList= [...state.post]
            newList.push(action)


            return {
                ...state,
                list:newList
            }
        case 'COMMENT':
            console.log("Comment type :",action);
            return {
                ...state
            }
        default:
            return state;
    }
}
