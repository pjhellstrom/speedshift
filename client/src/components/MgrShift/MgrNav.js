import React from "react";
import { Link } from "react-router-dom";

function MgrNav() {
	return (
		<ul className="nav nav-tabs">
			<li className="nav-item">
				<Link to="/" className={window.location.pathname === "/managerview" ? "nav-link active" : "nav-link"}>
				Home
				</Link>
			</li>
			<li className="nav-item">
				<Link
				to="/managerview"
				className={window.location.pathname === "/managerview/other" ? "nav-link active" : "nav-link"}
				>
				Other
				</Link>
			</li>
			
		</ul>
	);
}

export default MgrNav;
