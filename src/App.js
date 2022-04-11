import Login from "./modules/auth/Login";
import Home from "../src/modules/home/Home";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { useSelector } from "react-redux";
import PublicNavigation from "./config/navigation/PublicNavigation";
import PrivateNavigation from "./config/navigation/PrivateNavigation";
import CheckNet from "./commonComponents/InternetDetect";

import ErrorToast from "./commonComponents/ErrorToast";
import SimpleToast from "./commonComponents/SimpleToast";





function App() {

  const authState = useSelector((state) => state.AuthReducer.isLogin);

  console.log("Auth statte", authState);
  return (
    <>
      <Router>
        {/* <ErrorToast /> */}
        <SimpleToast />
        <Switch>
          <PublicNavigation exact path="/login" auth={authState}>
            <Login />
          </PublicNavigation>

          <PrivateNavigation exact auth={authState}>
            <Home />
          </PrivateNavigation>
          {/* {authState ? (
            <Home />
          ) : (
            <Route exact path="/login">
              <Login />
            </Route>
          )} */}
        </Switch>
      </Router>
      <CheckNet />
    </>
  );
}

export default App;
