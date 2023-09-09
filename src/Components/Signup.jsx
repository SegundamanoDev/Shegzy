// import { useState } from "react";
import "./Signup.css";
import {Link} from "react-router-dom";
const Signup = () => {
	// const [search, setSearch] = useState("");

	// const handleSearch = (e) => {
	// 	e.preventDefault();

	// 	setSearch("");
	// };
	return (
		<div className='signup_container'>
			<form>
				<h2>SIGN UP</h2>
				<input type='text' placeholder='Enter firstname' />
				<input type='text' placeholder='Enter last name' />
				<input type='email' placeholder='Enter your email' />
				<input type='password' placeholder='Enter your password' />
				<p>
					already have an account? <Link to='/signin'>sign in</Link>
				</p>
				<button className='google'>Sign up with Google</button>
				<button type='submit'>Sign up</button>
			</form>
		</div>
	);
};

export default Signup;
