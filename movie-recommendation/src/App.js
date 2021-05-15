import React,{useState,useEffect} from "react";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import HomePage from "./components/HomePage";
import MovieDetail from "./components/MovieDetail";
import ErrorPage from "./components/ErrorPage";
import {BrowserRouter as Router,Switch,Route} from "react-router-dom";

import './App.css';
import MyPlayList from "./components/MyPlayList";

function App() {

  return (
    <Router>
      <div className="App">
        <Header />
        <Switch>
            <Route path="/moviedetail" exact>
                <MovieDetail /> 
            </Route>

            <Route path="/myplaylist" exact>
                <MyPlayList /> 
            </Route>
        
            <Route path="/" exact>
                <Navbar />
                <HomePage />
            </Route>
          
            <Route path="*">
                <ErrorPage />          
            </Route>
        
        </Switch>
      
     
      </div>
    </Router>
  );
}

export default App;
