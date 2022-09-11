import "./App.css";
import Header from "./Header";
import Home from "./Home";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  // Link
} from "react-router-dom";
import Checkout from "./Checkout";
import Login from "./Login";
import { useEffect } from "react";
import { auth } from "./firebase";
import { useStateValue } from "./StateProvider";

function App() {
  const [{},dispatch]= useStateValue();

  useEffect(()=>{
    // will only run once when the app component is LocalDrinkSharp...
    auth.onAuthStateChanged(authUser => {

      if (authUser) {
        dispatch({
          type:"SET_USER",
          user:authUser
        })
      }else{
        dispatch({
          type:"SET_USER",
          user:null
        })
      }
    })
  },[])
  return (
    <Router>
      <div className="app">
      
        <Switch>
        <Route path="/login">
            <Login/>
          </Route>
          <Route path="/checkout">
          <Header/>
            <Checkout />
          </Route>
          <Route path='/'>
          <Header/>
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
