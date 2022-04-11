
import axios from "axios"
import { endPoint } from "../../config/EndPoint";
import { ISLOGIN_ADMIN, ISLOGOUT_ADMIN } from "../TypeConstant";
import { toast } from "react-toastify";

export const AdminLoginAction = (ID, password, setLoginLoading) => async (dispatch) => {
  

try {

    console.log("=>>", ID, "=>> action", password);
    setLoginLoading(true);
 var data = JSON.stringify({
   "ID": ID,
   "password": password,
 });

 var config = {
   method: "post",
   url: `${endPoint}/auth/signin/admin `,
   headers: {
     "Content-Type": "application/json",
   },
   data: data,
 };

 const tempRes = await axios(config);
 console.log("Admin login", tempRes);

 dispatch({
   type: ISLOGIN_ADMIN,
   payload: true,
 });
} catch (error) {
  // console.log("error", error.response.data.message);
  // toast.error(error.response.data.message, {
  //   autoClose: 5000,
  //   hideProgressBar: false,
  //   closeOnClick: true,
  //   pauseOnHover: true,
  //   draggable: true,
  //   progress: undefined,
  //   style: { color: "#29ab87" },
  //   progressStyle: { backgroundColor: "#29ab87" },
  //   icon: false,
  // });
  
  
}finally{
  setLoginLoading(false);
}
};


export const AdminLogoutAction = () => async (dispatch) => {
dispatch({
  type: ISLOGOUT_ADMIN,
  payload: false,
});

}