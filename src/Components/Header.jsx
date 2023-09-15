import React, {useState} from "react";
import "./Header.css";
import {routes} from "./routers";
import {Link, NavLink} from "react-router-dom";
import {Menu, Search} from "@mui/icons-material";
import Sidebar from "./Sidebar";

const Header = () => {
	const [menu, setMenu] = useState(false);
	const [searchBar, setSearchBar] = useState(false);

	const hideMenu = () => setMenu(false);
	const toggleMenu = () => setMenu(!menu);
	const toggleSearch = () => setSearchBar(!searchBar);

	const [search, setSearch] = useState("");

	const handleSearch = (e) => {
		e.preventDefault();
		setSearch("");
	};
	return (
		<>
			<header>
				<div className='headers_container'>
					<Sidebar menu={menu} click={hideMenu} />
					<div className='logo'>
						<h2>SHEGZY</h2>
					</div>
					<div className='nav_container'>
						<ul>
							{routes.map((route, index) => {
								return (
									<li key={index}>
										<NavLink to={route.path} className={route.cName}>
											{route.name}
										</NavLink>
									</li>
								);
							})}
						</ul>
						<div className='auth_container'>
							<Link to='/signin'>SignIn</Link>
							<Link to='/signup'>SignUp</Link>
						</div>
						<div className='search'>
							<Search className='icon' onClick={toggleSearch} />
						</div>
					</div>
					<div className='menu' onClick={toggleMenu}>
						<Menu className='icon' />
					</div>
				</div>
				<form onSubmit={handleSearch} className={searchBar ? "show" : ""}>
					<input
						type='search'
						value={search}
						onChange={(e) => setSearch(e.target.value)}
						placeholder='Search'
					/>
					<button type='submit'>Search</button>
				</form>
			</header>
		</>
	);
};

export default Header;
