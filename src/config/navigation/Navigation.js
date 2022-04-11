import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Login from "../../modules/auth/Login"
import Admins from "../../modules/admins/Admins";
import Ads from "../../modules/ads/Ads";
import Dashboard from "../../modules/dashBoard/Dashboard";
import Users from "../../modules/users/Users";
import { useSelector } from "react-redux";
function Navigation() {

  
  return (
    <>
      <Switch>
      
        <Route exact path="/">
            <Dashboard />
        </Route>
        {/* <Route exact path="/admins">
            <Admins />
        </Route> */}
        <Route exact path="/users">
            <Users />
        </Route>
        <Route exact path="/ads">
            <Ads />
        </Route>

      </Switch>
    </>
  );
}
export default Navigation