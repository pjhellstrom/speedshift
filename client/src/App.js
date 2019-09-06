import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import NavTabs from "./components/NavTabs";
import LandingPage from "./components/pages/LandingPage";
import About from "./components/pages/About";
import Blog from "./components/pages/Blog";
import Contact from "./components/pages/Contact";
import Date from "./components/Date";
import Day from "./components/Day";


function App() {
	return (
		<Router>
			<div>
				{/* <NavTabs /> */}
				<Route exact path="/" component={LandingPage} />
				<Route exact path="/managerview" component={About} />
				<Route exact path="/employeeview" component={Blog} />
				<Route path="/contact" component={Contact} />
			</div>
		</Router>
	);
}

export default App;
