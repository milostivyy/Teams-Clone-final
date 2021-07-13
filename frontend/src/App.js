
import React, { useState } from "react"//Import useState from react.useState() is a Hook that allows you to have state variables in functional components.
import "./App.css"
import {
	BrowserRouter as Router,//A <Router> that uses the HTML5 history API (pushState, replaceState and the popstate event) to keep your UI in sync with the URL.
	Switch,//It is used to render route exclusively
	Route,//The Route component is perhaps the most important component in React Router to understand and learn to use well. Its most basic responsibility is to render some UI when its path matches the current URL.
  } from "react-router-dom";//It contains the DOM bindings for React Router.

import Navbar from './components/Navbar'//importing Navbar from components folder
import { VideoChat } from "./pages/VideoChat/VideoChat"//importing VideoChat from pages folder
import { Home } from "./pages/Home/Home"//importing Home.js from pages folder
import { Login } from "./pages/Login/Login"//importing Login.js from pages folder
import {Chat} from "./pages/Chat/Chat"//importing Chat.js from pages folder





function App() {

const [token, setToken] = useState()//store the token in memory using the useState Hook. call useState and set return values to token and setToken:

if(!token) {
	return <Login setToken = {setToken}  />//Import the Login component. Add a conditional statement to display Login if the token is falsy.
										//Pass the setToken function to the Login component.
}
	return (
		<Router>
		<div>
          <Navbar />
            <Switch>
             <Route path="/" component= {Home} exact/>
			 <Route path="/VideoChat" exact component={VideoChat}></Route>
			 <Route path="/Login" exact component={Login}></Route>
			 <Route path="/Chat" exact component={Chat}></Route>

			 
           </Switch>
        </div>
		</Router>
	)
}//to route path using exact component.exact parameter is used because  we can have multiple paths that have similar names so to avoid that conflict it is used.

export default App
