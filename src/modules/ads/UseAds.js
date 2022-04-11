import { useEffect, useState } from "react";

import { useDispatch, useSelector } from "react-redux";
import {
  GetAdsListAction,
  ToActiveAdAd,
  ToTempBlockAd,
  ToPermBlockAd,
  ToDeleteAdAd,
} from "../../store/actions/AdsAction";




export function UseAds(){
  const [adsLoading, setAdsLoading] = useState(false)
    const dispatch = useDispatch();
    useEffect(() => {
      dispatch(GetAdsListAction(setAdsLoading));
    }, []);


    const allAds = useSelector((store) => store.AllAdsReducer.allAds);
    console.log("ads in use", allAds);

    const columns = [
      { id: "name", label: "Ad Owner Name", minWidth: 170 },
      { id: "id", label: "User ID", minWidth: 170 },
      {
        id: "email",
        label: "Email",
        minWidth: 170,
        align: "left",
        format: (value) => value.toLocaleString("en-US"),
      },
      {
        id: "vehicleType",
        label: "Vehicle Type",
        minWidth: 170,
        align: "left",
        format: (value) => value.toLocaleString("en-US"),
      },
      {
        id: "status",
        label: "Status",
        minWidth: 170,
        align: "left",
        format: (value) => value.toLocaleString("en-US"),
      },
      {
        id: "actions",
        label: "Actions",
        minWidth: 170,
        align: "left",
        format: (value) => value.toFixed(2),
      },

    ];

    const ctaAdActive = (id) => {
      console.log("i am runni...", id);
      dispatch(ToActiveAdAd(id));
      //  dispatch(GetAdListAction(setAdLoading));
    };

    const ctaTempBlockAd = (id) => {
      dispatch(ToTempBlockAd(id));
    };
    const ctaPermBlockAd = (id) => {
      dispatch(ToPermBlockAd(id));
    };
    const ctaDeleteAd = (id) => {
      dispatch(ToDeleteAdAd(id));
    };
    return [
      allAds,
      columns,
      adsLoading,
      ctaAdActive,
      ctaTempBlockAd,
      ctaPermBlockAd,
      ctaDeleteAd,
    ];
}