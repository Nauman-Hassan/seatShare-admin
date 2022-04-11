import { useEffect, useState } from "react";

import { useDispatch, useSelector } from "react-redux";
import {
  GetTotalAdsAction,
  GetTotalAdsActiveAction,
  GetTotalAdsPermAction,
  GetTotalAdsTempAction,
  GetTotalUserAction,
  GetTotalUserActiveAction,
  GetTotalUserPermAction,
  GetTotalUserTempAction,
} from "../../store/actions/DashboardAction";

export function UseDashboard() {

  const [userLoading, setUserLoading] = useState(false);
  const [activeUserLoading, setActiveUserLoading] = useState(false);
  const [tempUserLoading, setTempUserLoading] = useState(false);
  const [permUserLoading, setPermUserLoading] = useState(false);

  const [adsLoading, setAdsLoading] = useState(false);
  const [activeAdsLoading, setActiveAdsLoading] = useState(false);
  const [tempAdsLoading, setTempAdsLoading] = useState(false);
  const [permAdsLoading, setPermAdsLoading] = useState(false);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(GetTotalUserAction(setUserLoading));
    dispatch(GetTotalUserTempAction(setTempUserLoading));

    dispatch(GetTotalAdsAction(setAdsLoading));
    dispatch(GetTotalAdsPermAction(setPermUserLoading));
    dispatch(GetTotalAdsTempAction(setTempAdsLoading));
    dispatch(GetTotalAdsActiveAction(setActiveAdsLoading));

    dispatch(GetTotalUserPermAction(setPermAdsLoading));
    dispatch(GetTotalUserActiveAction(setActiveUserLoading));
  }, []);

  const allDashboard = useSelector((store) => store.DashboardReducer);
  console.log("ads in use", allDashboard);
  return [
    allDashboard,
    userLoading,
    activeUserLoading,
    tempUserLoading,
    permUserLoading,
    adsLoading,
    activeAdsLoading,
    tempAdsLoading,
    permAdsLoading,
  ];
}
