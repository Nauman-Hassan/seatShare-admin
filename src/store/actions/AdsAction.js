import axios from "axios";
import { endPoint } from "../../config/EndPoint";
import { FETCH_ALL_ADS } from "../TypeConstant";
import { toast } from "react-toastify";

export const GetAdsListAction = (setAdsLoading) => async (dispatch) => {
  try {
    setAdsLoading(true)
    const Success = await axios.get(`${endPoint}/user/allAds`);

    console.log("get", Success.data.data);
    dispatch({
      type: FETCH_ALL_ADS,
      payload: Success.data.data,
    });
  } catch (error) {
    console.log("error", error);
  }finally{
    setAdsLoading(false)
  }
};

export const ToActiveAdAd = (id) => async (dispatch) => {
  console.log("action's active ...", id);
  try {
    
    var data = JSON.stringify({
      id: id,
    });

    var config = {
      method: "put",
      url: `${endPoint}/user/blockToActiveCard`,
      headers: {
        "Content-Type": "application/json",
      },
      data: data,
    };

    const tempRes = await axios(config);
    console.log("active uder run", tempRes.data.message);
    toast.success(tempRes.data.message, {
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      style: { color: "#29ab87" },
      progressStyle: { backgroundColor: "#29ab87" },
      icon: false,
    });

    try {
      
      const Success = await axios.get(`${endPoint}/user/allAds`);

      console.log("get", Success.data.data);
      dispatch({
        type: FETCH_ALL_ADS,
        payload: Success.data.data,
      });
    } catch (error) {
      console.log("error", error);
    }
  } catch (error) {
    console.log("error in active user api", error);
  } 
};
export const ToTempBlockAd = (id) => async (dispatch) => {
  console.log("action's temp block ...", id);
  try {
    
    var data = JSON.stringify({
      id: id,
    });

    var config = {
      method: "put",
      url: `${endPoint}/user/temporaryBlockCard`,
      headers: {
        "Content-Type": "application/json",
      },
      data: data,
    };

    const tempRes = await axios(config);
    console.log("temp block uder run", tempRes);

    toast.success(tempRes.data.message, {
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      style: { color: "#29ab87" },
      progressStyle: { backgroundColor: "#29ab87" },
      icon: false,
    });

     try {
       
       const Success = await axios.get(`${endPoint}/user/allAds`);

       console.log("get", Success.data.data);
       dispatch({
         type: FETCH_ALL_ADS,
         payload: Success.data.data,
       });
     } catch (error) {
       console.log("error", error);
     }
  } catch (error) {
    console.log("error in active user api", error);
  } 
};
export const ToPermBlockAd = (id) => async (dispatch) => {
  console.log("action's temp block ...", id);
  try {
    
    var data = JSON.stringify({
      id: id,
    });

    var config = {
      method: "put",
      url: `${endPoint}/user/permanentBlockCard`,
      headers: {
        "Content-Type": "application/json",
      },
      data: data,
    };

    const tempRes = await axios(config);
    console.log("temp block uder run", tempRes);

    toast.success(tempRes.data.message, {
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      style: { color: "#29ab87" },
      progressStyle: { backgroundColor: "#29ab87" },
      icon: false,
    });

     try {
       
       const Success = await axios.get(`${endPoint}/user/allAds`);

       console.log("get", Success.data.data);
       dispatch({
         type: FETCH_ALL_ADS,
         payload: Success.data.data,
       });
     } catch (error) {
       console.log("error", error);
     }
  } catch (error) {
    console.log("error in active user api", error);
  } 
};
export const ToDeleteAdAd = (id) => async (dispatch) => {
  console.log("action's delete user ...", id);
  try {
    
    var data = JSON.stringify({
      id: id,
    });

    var config = {
      method: "delete",
      url: `${endPoint}/user/deleteCard`,
      headers: {
        "Content-Type": "application/json",
      },
      data: data,
    };

    const tempRes = await axios(config);
    console.log("del user res", tempRes);

    toast.success(tempRes.data.message, {
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      style: { color: "#29ab87" },
      progressStyle: { backgroundColor: "#29ab87" },
      icon: false,
    });

     try {
       
       const Success = await axios.get(`${endPoint}/user/allAds`);

       console.log("get", Success.data.data);
       dispatch({
         type: FETCH_ALL_ADS,
         payload: Success.data.data,
       });
     } catch (error) {
       console.log("error", error);
     }
  } catch (error) {
    console.log("error in del user res", error);
  } 
};

