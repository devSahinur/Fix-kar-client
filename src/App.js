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
          <Route path="/dashboard">
            <ResponsiveDashboard></ResponsiveDashboard>
          </Route>
          <Route path="/order">
            <AddOrders></AddOrders>
          </Route>
          <Route path="/AddReview">
            <AddTestimonial></AddTestimonial>
          </Route>
          <Route path="/makeAdmin">
            <MakeAdmin></MakeAdmin>
          </Route>
          <Route path="/allOrder">
            <AllOrdersList></AllOrdersList>
          </Route>
          <Route path="/">
            <Home></Home>
          </Route>
        </Switch>
      </Router>
    </UserContext.Provider>
    
  );
}

export default App;
