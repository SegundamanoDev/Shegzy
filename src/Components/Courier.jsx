import React from "react";
import "./Courier.css";
import {Link} from "react-router-dom";
import {CheckCircleOutlineRounded} from "@mui/icons-material";

const Courier = () => {
	return (
		<div className='courier_container'>
			<div className='courier_top'>
				<h1>WHO WE ARE</h1>
				<h1>COURIER</h1>
			</div>
			<div className='left_wrapper'>
				<div className='left_top'>
					<div className='group_item'>
						<h2>Courier Service</h2>
						<h2>Integrated transport solutions.</h2>
					</div>

					<h3>
						Trust Our Tires everything runs like clockwork. your business run
						smoothly when your logistics runs smoothly
					</h3>

					<div className='discssn'>
						<h2>Same Day Delivery:</h2>
						<p>
							For our same-day service, Shipment received before 10:00am and
							guarantee to be delivered to selected airport cities across
							Nigeria before close of business on the same day.
						</p>
					</div>

					<div className='discssn'>
						<h2>Domestic Express Service:</h2>
						<p>
							Our domestic express service delivers time sensitive documents and
							parcels nation wild, transit is usually between 24 to 72 hours for
							consignments up to 500kg policies for all types of shipments
						</p>
					</div>
				</div>
				<div className='top_right'>
					<div className='card'>
						<ul>
							<h2>SERVICES</h2>
							<li>
								<Link to='/services/courier'>Courier</Link>
							</li>
							<li>
								<Link to='/services/logistics'>Logistics</Link>
							</li>
							<li>
								<Link to='/services/e-commerce'>E-commerce</Link>
							</li>
							<li>
								<Link to='/services/international'>International</Link>
							</li>
							<li>
								<Link to='/services/specialised-solution'>
									Specialised Solutions{" "}
								</Link>
							</li>
							<li>
								<Link to='/services/custom-solution'>Custom Solution</Link>
							</li>
						</ul>
					</div>
				</div>
			</div>
			<div className='bottom'>
				<div className='cards'>
					<ul>
						<li>
							<CheckCircleOutlineRounded className='icon' />
							<h2>Our Vision</h2>
							<p>
								To achieve leadership in the World courier and logistics market
								by creating solutions that improve performances and enable its
								people and business partners.
							</p>
						</li>
						<li>
							<CheckCircleOutlineRounded className='icon' />
							<h2>Our Mission</h2>
							<p>
								To be the reference point of excellence for courier and
								logistics solutions with cross-efficient express deliveries to
								our clients in all businesses sectors.
							</p>
						</li>
						<li>
							<CheckCircleOutlineRounded className='icon' />
							<h2>Brand Value</h2>
							<p>
								Our values guide how we behave. our brand values are:
								innovation, customer centricity, Community, Excellence,
								Integrity, Respect and Commitment.
							</p>
						</li>
					</ul>
				</div>
			</div>
		</div>
	);
};

export default Courier;
