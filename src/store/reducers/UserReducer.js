import { FETCH_ALL_USER } from "../TypeConstant";

const initialState = {
    allUser:[]
};


function AllUserReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_ALL_USER: {
      console.log("user in Reducer", action.payload);
      return {
        ...state,
        allUser: action.payload,
      };
    }
    
    default:
      return state;
  }
}
export default AllUserReducer;