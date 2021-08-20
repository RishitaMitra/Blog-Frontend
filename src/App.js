import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
//import Home from "./components/LandingPage/Home";
//import Login from "./components/Login/Login";
import Navbar from "./Components/Navbar";
import Header from "./Components/Header";
//import "./Components/style.css";


function App() {
	return (
    <>
		<Router>
			<Navbar />
			
			<Switch>
				<Route exact path='/' children={<Header/>} />
				
        		
        
			</Switch>
		</Router>
    </>
	);
}

export default App;