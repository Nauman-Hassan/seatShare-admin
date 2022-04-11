import {
  FETCH_TOTAL_USERS,
  FETCH_TOTAL_TEMP_USERS,
  FETCH_TOTAL_PERM_USERS,
  FETCH_TOTAL_ACTIVE_USERS,
  FETCH_TOTAL_ADS,
  FETCH_TOTAL_TEMP_ADS,
  FETCH_TOTAL_PERM_ADS,
  FETCH_TOTAL_ACTIVE_ADS,
} from "../TypeConstant";

const initialState = {
  tUser:[],
  tTempUser:[],
  tPermUser:[],
  tActiveUser:[],
  tAds:[],
  tTempAds:[],
  tPermAds:[],
  tActiveAds:[]

};

function DashboardReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_TOTAL_USERS: {
      // console.log("FETCH_TOTAL_USERS", action.payload);
      return {
        ...state,
        tUser: action.payload,
      };
    }
    case FETCH_TOTAL_TEMP_USERS: {
      // console.log("FETCH_TOTAL_TEMP_USERS", action.payload);
      return {
        ...state,
        tTempUser: action.payload,
      };
    }
    case FETCH_TOTAL_PERM_USERS: {
      // console.log("FETCH_TOTAL_PERM_USERS", action.payload);
      return {
        ...state,
        tPermUser: action.payload,
      };
    }
    case FETCH_TOTAL_ACTIVE_USERS: {
      // console.log("FETCH_TOTAL_ACTIVE_USERS", action.payload);
      return {
        ...state,
        tActiveUser: action.payload,
      };
    }
    case FETCH_TOTAL_ADS: {
      // console.log("FETCH_TOTAL_ADS", action.payload);
      return {
        ...state,
        tAds: action.payload,
      };
    }
    case FETCH_TOTAL_TEMP_ADS: {
      // console.log("FETCH_TOTAL_TEMP_ADS", action.payload);
      return {
        ...state,
        tTempAds: action.payload,
      };
    }
    case FETCH_TOTAL_PERM_ADS: {
      // console.log("FETCH_TOTAL_PERM_ADS", action.payload);
      return {
        ...state,
        tPermAds: action.payload,
      };
    }
    case  FETCH_TOTAL_ACTIVE_ADS: {
      // console.log(" FETCH_TOTAL_ACTIVE_ADS", action.payload);
      return {
        ...state,
        tActiveAds: action.payload,
      };
    }

    default:
      return state;
  }
}
export default DashboardReducer;
