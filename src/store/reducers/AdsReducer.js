import { FETCH_ALL_ADS } from "../TypeConstant";

const initialState = {
  allAds: [],
};

function AllAdsReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_ALL_ADS: {
      console.log("ads in Reducer", action.payload);
      return {
        ...state,
        allAds: action.payload,
      };
    }

    default:
      return state;
  }
}
export default AllAdsReducer;
