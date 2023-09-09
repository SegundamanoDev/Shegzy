import React from "react";
import "./Signin.css";
const Signin = () => {
	return (
		<div className='signin_container'>
			<form>
				<h2>SIGN IN</h2>
				<input type='email' placeholder='Enter your email' />
				<input type='password' placeholder='Enter your password' />
				<p>
					Remember me?{" "}
					<span>
						<input type='checkbox' />
					</span>
				</p>
				<button type='submit'>Signin</button>
			</form>
		</div>
	);
};

export default Signin;
