import axios from "axios";
import { endPoint } from "../../config/EndPoint";
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

export const GetTotalUserAction = (setUserLoading) => async (dispatch) => {
  try {
    setUserLoading(true);
    const Success = await axios.get(`${endPoint}/dashboard/fetchTotalUser`);
    // console.log("get t u", Success.data.data);
    dispatch({
      type: FETCH_TOTAL_USERS,
      payload: Success.data.data,
    });
  } catch (error) {
    console.log("error", error);
  } finally {
    setUserLoading(false);
  }
};
export const GetTotalUserTempAction = (setTempUserLoading) => async (dispatch) => {
  try {
    setTempUserLoading(true);
    const Success = await axios.get(`${endPoint}/dashboard/fetchTotalTempUser`);
    // console.log("get t T u", Success.data.data);
    dispatch({
      type: FETCH_TOTAL_TEMP_USERS,
      payload: Success.data.data,
    });
  } catch (error) {
    console.log("error", error);
  } finally {
    setTempUserLoading(false);
  }
};
export const GetTotalUserPermAction = (setPermUserLoading) => async (dispatch) => {
  try {
    setPermUserLoading(true);
    const Success = await axios.get(`${endPoint}/dashboard/fetchTotalPermUser`);
    // console.log("get t P u", Success.data.data);
    dispatch({
      type: FETCH_TOTAL_PERM_USERS,
      payload: Success.data.data,
    });
  } catch (error) {
    console.log("error", error);
  } finally {
    setPermUserLoading(false);
  }
};
export const GetTotalUserActiveAction = (setActiveUserLoading) => async (dispatch) => {
  try {
    setActiveUserLoading(true);
    const Success = await axios.get(
      `${endPoint}/dashboard//fetchTotalActiveUser`
    );
    // console.log("get t A u", Success.data.data);
    dispatch({
      type: FETCH_TOTAL_ACTIVE_USERS,
      payload: Success.data.data,
    });
  } catch (error) {
    console.log("error", error);
  } finally {
    setActiveUserLoading(false);
  }
};
export const GetTotalAdsAction = (setAdsLoading) => async (dispatch) => {
  try {
    setAdsLoading(true);
    const Success = await axios.get(`${endPoint}/dashboard/fetchTotalAds`);
    // console.log("get t A a", Success.data.data);
    dispatch({
      type: FETCH_TOTAL_ADS,
      payload: Success.data.data,
    });
  } catch (error) {
    console.log("error", error);
  } finally {
    setAdsLoading(false);
  }
};
export const GetTotalAdsTempAction = (setTempAdsLoading) => async (dispatch) => {
  try {
    setTempAdsLoading(true);
    const Success = await axios.get(`${endPoint}/dashboard/fetchTotalTempAds`);
    // console.log("get t T a", Success.data.data);
    dispatch({
      type: FETCH_TOTAL_TEMP_ADS,
      payload: Success.data.data,
    });
  } catch (error) {
    console.log("error", error);
  } finally {
    setTempAdsLoading(false);
  }
};
export const GetTotalAdsPermAction = (setPermAdsLoading) => async (dispatch) => {
  try {
    setPermAdsLoading(true);
    const Success = await axios.get(`${endPoint}/dashboard/fetchTotalPermAds`);
    // console.log("get t P a", Success.data.data);
    dispatch({
      type: FETCH_TOTAL_PERM_ADS,
      payload: Success.data.data,
    });
  } catch (error) {
    console.log("error", error);
  } finally {
    setPermAdsLoading(false);
  }
};
export const GetTotalAdsActiveAction = (setActiveAdsLoading) => async (dispatch) => {
  try {
    setActiveAdsLoading(true);
    const Success = await axios.get(
      `${endPoint}/dashboard/fetchTotalActiveAds`
    );
    // console.log("get t A a", Success.data.data);
    dispatch({
      type: FETCH_TOTAL_ACTIVE_ADS,
      payload: Success.data.data,
    });
  } catch (error) {
    console.log("error", error);
  } finally {
    setActiveAdsLoading(false);
  }
};

