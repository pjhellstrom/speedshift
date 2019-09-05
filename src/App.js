import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import NavTabs from "./components/NavTabs";
import About from "./components/pages/About";
import Discover from "./components/pages/Discover";
import Search from "./components/pages/Search";
import APIrand from "./components/APIrand"

class App extends Component {
	state = {
		randResults: []
	};

	randDog = () => {
		// console.log("In Query")
		APIrand.search()
			.then(res => {
				// console.log(res.data.message);
				this.setState({ randResults: res.data.message });
			})
			// .then(console.log(this.state.results))
			.catch(err => console.log(err));
	};

	componentDidMount() {
		this.randDog();
	}

	render () {
		return (
			<Router>
				<div>
					<NavTabs />
					<Route exact path="/" component={About} />
					<Route exact path="/discover" component={Discover} 
						randResults ={this.randResults}
						search = {this.randDog}
						
					/>


					<Route exact path="/search" component={Search} />
				</div>
			</Router>
		);
	}

}

export default App;
