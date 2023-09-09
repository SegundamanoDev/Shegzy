import React from "react";
import "./Specialised.css";
import {CheckCircleOutlineRounded} from "@mui/icons-material";
import {Link} from "react-router-dom";

const Specialised = () => {
	return (
		<div className='specialised_container'>
			<div className='specialised_top'>
				<h1>WHO WE ARE</h1>
				<h1>SPECIALISED SOLUTIONS</h1>
			</div>

			<div className='left_wrapper'>
				<div className='left_top'>
					<div className='left_items_wrapper'>
						<div className='discssn'>
							<h2>Specialised Solutions</h2>{" "}
							<p>
								Our customized business solutions can either address your entire
								supply chain or smaller elements within it such as material
								supply, line replenishment, distribution, packaging and final
								product delivery as well as flexible solutions for large-scale
								production operations. Our custom service solutions include
								special projects, mail room management, bulk mail deliveries and
								dedicated contract carriage.
							</p>
						</div>
						<div className='discssn'>
							<h2>Address Verification Service</h2>
							<p>
								As far as business is concerned, every customer is a potential
								risk until his/her identity is verified. Verification averts
								relations with potential fraudulent customers and provides added
								advantage of insight for the purpose of data mining. Our address
								verification service provides guidance monitoring and record
								keeping in line with regulatory obligations.
							</p>
						</div>
						<div className='discssn'>
							<h2>Mail Room Management Service</h2>
							<p>
								We offer a complete and total outsourcing of office mail room
								operations including daily pickup, deliveries and a professional
								and economic handling of your mailroom and courier service
								requirements. We also provide dedicated resources with various
								flexibilities in pick-up and delivery of intra-office documents
								and parcels.
							</p>
						</div>
						<div className='discssn'>
							<h2>Bulk Mail Distribution Service</h2>
							<p>
								Processing and deliveries of high volume mails and reports; The
								service deliveries of high volume mails or reports such as
								Company annual reports, Statements of accounts, Dividends
								warrants and share certificates. Our expert mail handlers
								process and deliver high volume mails and reports such as
								Company Annual Reports, Statements of Accounts, Dividends
								Warrants and Share Certificates on behalf of clients across
								Nigeria. We offer an end-to-end mail room management service
								where clients can outsource their complete office mail room
								operations including daily pick up and deliveries.
							</p>
						</div>
						<div className='discssn'>
							<h2>Dedicated Bike Service</h2>
							<p>
								Our dedicated bike service is principally hinged upon the
								concept of specialisation in areas of core competence to allow
								for utmost efficiency. Within the major sectors of the Nigerian
								economy, the challenges of coordinating the environment of mails
								and other highly sensitive documents/ materials from one point
								to another have become enormous considering the advancement in
								information technology and level of efficiency expected of these
								organisations. This service will help optimize your logistics
								operations and reduce overall costs and provide effective
								delivery services without a hitch.
							</p>
						</div>
						<div className='discssn'>
							<h2>Special Projects</h2>
							<p>
								Our service can be customised to cover projects such as
								distribution of relief materials, relocations, removal of
								household and office equipment. The entire process is totally
								reliable and safe and above all, meets the exact requirements of
								the client.
							</p>
						</div>
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

export default Specialised;
