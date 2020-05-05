import React from "react";
import NavBar from "./components/home";
import Login from "./components/home/Login";
import Register from "./components/home/SignUp";
import { Router, Route, BrowserRouter, Switch } from "react-router-dom";
import Dashboard from "./components/dashboard/index";
import history from "./history";
import PostJob from "./components/dashboard/Jobs/PostNewJob";
import Verified from "./components/home/VerifyPage";
import PrivateRoute from "./privateRoutes";
import MyJobs from "./components/dashboard/Jobs/Mylisting";
import MyProfile from "./components/dashboard/Profile/index"
function App() {
  return (
    <React.Fragment>
      <Router history={history}>
        <Route path="/" exact component={NavBar} />
        <Route path="/login" exact component={Login} />
        <Route path="/register" exact component={Register} />

        <Route path="/verify/:id" exact component={Verified} />
        <Switch>
          <PrivateRoute path="/dashboard" exact component={Dashboard} />
          <PrivateRoute path="/postjob" exact component={PostJob} />
          <PrivateRoute path="/myjobs" exact component={MyJobs} />
          <PrivateRoute path="/myprofile" exact component={MyProfile} />
        </Switch>
      </Router>
    </React.Fragment>
  );
}

export default App;
