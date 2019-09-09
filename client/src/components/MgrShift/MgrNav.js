import React from "react";
import { Link } from "react-router-dom";

function MgrNav() {
	return (
		<ul className="nav nav-tabs">
			<li className="nav-item">
				<Link to="/managerview" className={window.location.pathname === "/managerview" ? "nav-link active" : "nav-link"}>
				Home
				</Link>
			</li>
			<li className="nav-item">
				<Link
				to="/managerview"
				className={window.location.pathname === "/managerview/team" ? "nav-link active" : "nav-link"}
				>
				Team
				</Link>
			</li>
			<li className="nav-item">
				<Link
				to="/managerview"
				className={window.location.pathname === "/managerview/addshift" ? "nav-link active" : "nav-link"}
				>
				Add Shift
				</Link>
			</li>
			<li className="nav-item">
				<Link
				to="/managerview"
				className={window.location.pathname === "/managerview/manageshift" ? "nav-link active" : "nav-link"}
				>
				Manage Shift
				</Link>
			</li>

		</ul>
	);
}

export default MgrNav;
