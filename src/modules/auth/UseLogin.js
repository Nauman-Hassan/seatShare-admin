
import { useEffect, useState } from "react";

import { useDispatch, useSelector } from "react-redux";
import { AdminLoginAction } from "../../store/actions/AuthAction";

export function UseLogin(){
    const [ID, setInpId] = useState("")
    const [password, setPassword] = useState("")
    const [loginLoading, setLoginLoading] = useState(false)


    const dispatch = useDispatch();
    const ctaLogin=()=>{
        console.log("=>>", ID, "=>>", password);
        

        dispatch(AdminLoginAction(ID, password, setLoginLoading));
        setInpId("");
        setPassword("")
        
    }

    return [setInpId, setPassword, ctaLogin, loginLoading, ID, password];
}