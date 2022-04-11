import { useEffect, useState } from "react";

import { useDispatch, useSelector } from "react-redux";
import {
  GetUserListAction,
  ToActiveUser,
  ToTempBlock,
  ToPermBlock,
  ToDeleteUser
} from "../../store/actions/UserAction";



export function UseUser() {
  const [userLoading, setUserLoading] = useState(false)
  const [userActionLoading, setUserActionLoading] = useState(false)
    const dispatch = useDispatch();
    useEffect(() => {
      dispatch(GetUserListAction(setUserLoading));
    },[]);
    const allUser = useSelector((store) => store.AllUserReducer.allUser);


    const columns = [
      { id: "userName", label: "User Name", minWidth: 170 },
      // { id: 'id', label: 'User ID', minWidth: 170 },
      {
        id: "userEmail",
        label: "User Email",
        minWidth: 170,
        align: "left",
        format: (value) => value.toLocaleString("en-US"),
      },
      {
        id: "mobile",
        label: "Mobile",
        minWidth: 170,
        align: "left",
        format: (value) => value.toLocaleString("en-US"),
      },
      {
        id: "status",
        label: "User Status",
        minWidth: 170,
        align: "left",
        format: (value) => value.toLocaleString("en-US"),
      },
      {
        id: "actions",
        label: "Actions",
        minWidth: 150,
        align: "left",
        format: (value) => value.toFixed(2),
      },
    ];

    const ctaUserActive=(id)=>{
      console.log("i am runni...", id);
      dispatch(ToActiveUser(id, setUserActionLoading));
      //  dispatch(GetUserListAction(setUserLoading));
    }

    const ctaTempBlock = (id) =>{
      dispatch(ToTempBlock(id, setUserActionLoading));
    }
    const ctaPermBlock = (id) =>{
      dispatch(ToPermBlock(id, setUserActionLoading));
    }
    const ctaDeleteUser = (id) =>{
      dispatch(ToDeleteUser(id, setUserActionLoading));
    }
    return [
      allUser,
      columns,
      userLoading,
      ctaUserActive,
      ctaTempBlock,
      ctaPermBlock,
      ctaDeleteUser,
      userActionLoading,
    ];

}