import { ISLOGIN_ADMIN, ISLOGOUT_ADMIN } from "../TypeConstant";

const initialState = {
  isLogin: false,
};

function AuthReducer(state = initialState, action) {
  switch (action.type) {
    case ISLOGIN_ADMIN: {
      console.log("is login red", action.payload);
      return {
        ...state,
        isLogin: action.payload,
      };
    }
    case ISLOGOUT_ADMIN: {
      console.log("is login red", action.payload);
      return {
        ...state,
        isLogin: action.payload,
      };
    }

    default:
      return state;
  }
}
export default AuthReducer;
