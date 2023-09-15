import {useState} from "react";
import "./Signup.css";
import {Link} from "react-router-dom";
import {useDispatch} from "react-redux";

const Signup = () => {
	const [signUpData, setSignUpData] = useState({
		firstname: "",
		lastname: "",
		email: "",
		password: "",
	});

	const handleChange = (e) => {
		const name = e.target.name;
		const value = e.target.value;
		setSignUpData({...signUpData, [name]: value});
	};

	const handleSubmit = (e) => {
		e.preventDefault();

		setSignUpData({
			firstname: "",
			lastname: "",
			email: "",
			password: "",
		});
	};
	return (
		<div className='signup_container'>
			<form onSubmit={handleSubmit}>
				<h2>SIGN UP</h2>
				<input
					type='text'
					name='firstname'
					value={signUpData.firstname}
					onChange={handleChange}
					placeholder='Enter firstname'
				/>
				<input
					type='text'
					name='lastname'
					value={signUpData.lastname}
					onChange={handleChange}
					placeholder='Enter lastname'
				/>
				<input
					type='email'
					name='email'
					value={signUpData.email}
					onChange={handleChange}
					placeholder='Enter your email'
				/>
				<input
					type='password'
					name='password'
					value={signUpData.password}
					onChange={handleChange}
					placeholder='Enter your password'
				/>
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
