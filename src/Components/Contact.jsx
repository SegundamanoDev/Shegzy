import React from "react";
import "./Contact.css";
import {
	EmailRounded,
	LocationOnRounded,
	PhoneEnabled,
} from "@mui/icons-material";

const Contact = () => {
	return (
		<div className='contact_container'>
			<div className='contact_top'>
				<h1>WHO WE ARE</h1>
				<h1>CONTACT US</h1>
			</div>
			<div className='contact_bottom'>
				<div className='left'>
					<h2>Get in touch with us</h2>
					<h3 style={{padding: "0rem 1.5rem"}}>
						To get in touch with SHEGZY please Call or Email us
					</h3>
				</div>
				<div className='right'>
					<form>
						<input type='text' name='' id='' placeholder='Enter your name' />
						<input type='email' name='' id='' placeholder='Enter your email' />
						<input
							type='text'
							name=''
							id=''
							placeholder='Whats your subject?'
						/>
						<textarea
							name=''
							id=''
							cols='30'
							rows='10'
							placeholder='Please enter your message'>
							Text
						</textarea>
						<button type='submit'>Send</button>
					</form>
				</div>
			</div>
			<div className='contact_info'>
				<div className='contact_info_wrapper'>
					<LocationOnRounded className='icon' />
					<h2>ADDRESS</h2>
					<h3>42 MM Way Off Airport Road, Ikeja, Lagos, Nigeria.</h3>
				</div>
				<div className='contact_info_wrapper'>
					<PhoneEnabled className='icon' />
					<h2>TELEPHONE</h2>
					<h3>+2349052890540</h3>
					<h3>+2349052890540</h3>
					<h3>+2349052890540</h3>
				</div>
				<div className='contact_info_wrapper'>
					<EmailRounded className='icon' />
					<h2>EMAIL</h2>
					<h3>akitikorisegun2031@gmail.com</h3>
					<h3>akitikorisegun2031@gmail.com</h3>
					<h3>akitikorisegun2031@gmail.com</h3>
				</div>
			</div>
		</div>
	);
};

export default Contact;
