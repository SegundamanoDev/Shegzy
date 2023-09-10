import React from "react";
import "./Footer.css";
import {Link} from "react-router-dom";
import {Facebook, Google, LinkedIn, Twitter} from "@mui/icons-material";

const Footer = () => {
	return (
		<>
			<div className='footer_container'>
				<div className='footer_top'>
					<div className='left'>
						<Link to='/services/courier'>Courier</Link>
						<Link to='/services/logistics'>Logistics</Link>
						<Link to='/services/e-commerce'>E-commerce</Link>
						<Link to='/services/international'>International</Link>
						<Link to='/services'>Ship Now</Link>
					</div>
					<div className='right'>
						<Google className='icon' />
						<Facebook className='icon' />
						<LinkedIn className='icon' />
						<Twitter className='icon' />
					</div>
				</div>
				<hr className='hr' />
				<div className='footer_bottom'>
					<div className='left'>
						<h3>SHEGZY INT SERVICE</h3>
						<p>42 Concord Way off Airport Road, Ikeja, Lagos, Nigeria</p>
						<button>GET LOCATION</button>
					</div>
					<div className='middle'>
						<p>USEFUL LINKS</p>
						<div className='links'>
							<div className='link'>
								<Link to=''>FAQ's</Link>
								<Link to=''>Updates</Link>
								<Link to=''>Agent</Link>
								<Link to=''>Get Quote</Link>
								<Link to=''>How To Ship</Link>
							</div>
							<div className='link'>
								<Link to=''>Calculator</Link>
								<Link to=''>Team</Link>
								<Link to=''>Open Account</Link>
								<Link to=''>Partner</Link>
								<Link to=''>Franchise</Link>
							</div>
						</div>
					</div>
					<div className='right'>
						<p>SUBSCRIBE</p>
						<p>
							Don’t miss CourierPlus Nigeria latest news and events. Subscribe
							to our newsletter channel and be informed
						</p>
						<form>
							<input type='text' placeholder='Subscribe' />
							<button type='submit'>Subscribe</button>
						</form>
					</div>
				</div>
			</div>
		</>
	);
};

export default Footer;
