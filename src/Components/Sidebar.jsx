import React, {useState} from "react";
import "./Sidebar.css";
import {routes} from "./routers";
import {Link, NavLink} from "react-router-dom";

const Sidebar = ({menu, click}) => {
	const [search, setSearch] = useState("");

	const handleSearch = (e) => {
		e.preventDefault();
		setSearch("");
	};
	return (
		<>
			<div className={menu ? "overlay open" : "overlay"} onClick={click}></div>
			<div className={menu ? "sidebar_container open" : "sidebar_container"}>
				<ul>
					<form onSubmit={handleSearch}>
						<input
							type='search'
							value={search}
							onChange={(e) => setSearch(e.target.value)}
							placeholder='Search'
						/>
						<button type='submit'>Search</button>
					</form>
					{routes.map((route, index) => {
						return (
							<li key={index}>
								<NavLink to={route.path} className={route.cName}>
									{route.name}
								</NavLink>
							</li>
						);
					})}
					<div className='auth'>
						<Link to='/signin'>SignIn</Link>
						<Link to='/signup'>SignUp</Link>
					</div>
				</ul>
			</div>
		</>
	);
};

export default Sidebar;
