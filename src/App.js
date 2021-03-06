import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from './components/Home/Home/Home';
import Login from './components/Login/Login';
import { createContext } from 'react';
import { useState } from 'react';
import ResponsiveDashboard from './components/Dashboard/Dashboard/Dashboard';
import AddOrders from './components/Dashboard/AddOrders/AddOrders';
import AddTestimonial from './components/Dashboard/AddTestimonial/AddTestimonial';
import MakeAdmin from './components/Dashboard/MakeAdmin/MakeAdmin';
import AllOrdersList from './components/Dashboard/AllOrdersList/AllOrdersList';
import PrivateRoute from './components/Login/PrivateRoute/PrivateRoute';
import AddServices from './components/Dashboard/AddServices/AddServices';

export const UserContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState({})
  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <Router>
        <Switch>
          <Route path="/login">
            <Login></Login>
          </Route>
          <Route path="/home">
            <Home></Home>
          </Route>
          <PrivateRoute path="/dashboard">
            <ResponsiveDashboard></ResponsiveDashboard>
          </PrivateRoute>
          <PrivateRoute path="/order/:id">
            <AddOrders></AddOrders>
          </PrivateRoute>
          <PrivateRoute path="/AddReview">
            <AddTestimonial></AddTestimonial>
          </PrivateRoute>
          <PrivateRoute path="/addServices">
            <AddServices></AddServices>
          </PrivateRoute>
          <PrivateRoute path="/makeAdmin">
            <MakeAdmin></MakeAdmin>
          </PrivateRoute>
          <PrivateRoute path="/allOrder">
            <AllOrdersList></AllOrdersList>
          </PrivateRoute>
          <Route path="/">
            <Home></Home>
          </Route>
        </Switch>
      </Router>
    </UserContext.Provider>
    
  );
}

export default App;
