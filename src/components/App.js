import Signup from "./Signup";
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from "react-bootstrap";
import { AuthProvider } from "../contexts/AuthContext";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Dashboard from "./Dashboard";
import Login from "./Login";
import PrivateRoute from "./PrivateRoute";
import ForgotPassword from "./ForgotPassword";
import UpdateProfile from "./UpdateProfile";
import Team from "../app/4-Team/Team";
import University from "../app/5-University/University";
import Campaigns from "../app/3-Campaigns/Campaigns";
import Lead from "../app/7-Leads/Lead";
import Lead2 from "../app/7-Leads/Lead2";
import Bangla from "../app/8-Stripe/Stripe";
import Data from "../app/9-Data/Data";

function App() {
  return (
    <Router>
      <AuthProvider>
        <Switch>
          <PrivateRoute exact path="/" component={Campaigns} />
          <PrivateRoute path="/app/lead" component={Lead} />
          <PrivateRoute path="/app/lead2" component={Lead2} />
          <PrivateRoute path="/app/stripe" component={Bangla} />
          <PrivateRoute path="/app/data" component={Data} />
          <PrivateRoute path="/app/team" component={Team} />
          <PrivateRoute path="/app/university" component={University} />
          <PrivateRoute exact path="/app/accaunt" component={Dashboard} />
          <PrivateRoute path="/update-profile" component={UpdateProfile} />
          <Container className="d-flex justify-content-center align-items-center" style={{ minHeight: '100vh' }}>
            <div className="w-100" style={{ maxWidth: '400px' }}>
              <Route path="/signup" component={Signup} />
              <Route path="/login" component={Login} />
              <Route path="/forgot-password" component={ForgotPassword} />
            </div>
          </Container>
        </Switch>
      </AuthProvider>
    </Router>
  );
}

export default App;
