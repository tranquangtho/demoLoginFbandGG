import { useNavigation } from '@react-navigation/native';

const initialState = {
    items: {},
};
export default function itemReducer(state = initialState, action) {
  const navigation = useNavigation();

    switch (action.type) {
        case 'User_Login':
            navigation.navigate("Google")
            return {
                ...state,       
            }
            
        default:
            return state;
    }
}
