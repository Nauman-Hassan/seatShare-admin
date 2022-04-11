import { style } from '@mui/system';
import axios from 'axios';
import { toast } from 'react-toastify';
import {endPoint} from "../../config/EndPoint"
import { FETCH_ALL_USER } from '../TypeConstant';

export const GetUserListAction = (setUserLoading) => async (dispatch) => {
    try {
      setUserLoading(true)
      const Success = await axios.get(
        `${endPoint}/admin/getAllUser`
      );
  
      console.log('get', Success.data.data)
      dispatch({
        type: FETCH_ALL_USER,
        payload: Success.data.data,
      });
    } catch (error) {
      console.log("error", error);
    } 
    finally{
      setUserLoading(false)
    }
  };

  export const ToActiveUser = (id, setUserActionLoading) => async (dispatch) => {
    console.log("action's active ...", id);
    try {
      setUserActionLoading(true);
      var data = JSON.stringify({
        id: id,
      });

      var config = {
        method: "put",
        url: `${endPoint}/admin/blockToActive`,
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
       const Success = await axios.get(`${endPoint}/admin/getAllUser`);

       console.log("get", Success.data.data);
       dispatch({
         type: FETCH_ALL_USER,
         payload: Success.data.data,
       });
     } catch (error) {
       console.log("error", error);
     } 
      
    } catch (error) {
      console.log("error in active user api", error);
    } finally {
      setUserActionLoading(false);
    }
  };
  export const ToTempBlock = (id, setUserActionLoading) => async (dispatch) => {
    console.log("action's temp block ...", id);
    try {
      setUserActionLoading(true);
      var data = JSON.stringify({
        id: id,
      });

      var config = {
        method: "put",
        url: `${endPoint}/admin/temporaryBlockUser`,
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
        const Success = await axios.get(`${endPoint}/admin/getAllUser`);

        console.log("get", Success.data.data);
        dispatch({
          type: FETCH_ALL_USER,
          payload: Success.data.data,
        });
      } catch (error) {
        console.log("error", error);
      } 

    } catch (error) {
      console.log("error in active user api", error);
    } finally {
      setUserActionLoading(false);
    }
  };
  export const ToPermBlock = (id, setUserActionLoading) => async (dispatch) => {
    console.log("action's temp block ...", id);
    try {
      setUserActionLoading(true);
      var data = JSON.stringify({
        id: id,
      });

      var config = {
        method: "put",
        url: `${endPoint}/admin/permanentBlockUser`,
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
        const Success = await axios.get(`${endPoint}/admin/getAllUser`);

        console.log("get", Success.data.data);
        dispatch({
          type: FETCH_ALL_USER,
          payload: Success.data.data,
        });
      } catch (error) {
        console.log("error", error);
      } 

    } catch (error) {
      console.log("error in active user api", error);
    } finally {
      setUserActionLoading(false);
    }
  };
  export const ToDeleteUser = (id, setUserActionLoading) => async (dispatch) => {
    console.log("action's delete user ...", id);
    try {
      setUserActionLoading(true);
      var data = JSON.stringify({
        id: id,
      });

      var config = {
        method: "delete",
        url: `${endPoint}/admin/deletelUser`,
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
       const Success = await axios.get(`${endPoint}/admin/getAllUser`);

       console.log("get", Success.data.data);
       dispatch({
         type: FETCH_ALL_USER,
         payload: Success.data.data,
       });
     } catch (error) {
       console.log("error", error);
     } 

    } catch (error) {
      console.log("error in del user res", error);
    } finally {
      setUserActionLoading(false);
    }
  };

