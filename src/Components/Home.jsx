import React, {useEffect, useState} from "react";
import "./Home.css";
import img4 from "./img4.jpg";
import {
	ArrowBackIos,
	ArrowForwardIos,
	CheckCircleOutlineRounded,
	DirectionsBoatFilledRounded,
	HelpOutlineRounded,
	LocalShippingRounded,
	RecyclingRounded,
	ShoppingCartRounded,
} from "@mui/icons-material";
import {bannerItems} from "./bannerData";
import {Link} from "react-router-dom";

const Home = () => {
	const [currentSlide, setCurrentSlide] = useState(0);
	useEffect(() => {
		setCurrentSlide(0);
	}, []);

	useEffect(() => {
		const auto = setInterval(() => {
			setCurrentSlide(
				currentSlide === bannerItems.length - 1 ? 0 : currentSlide + 1
			);
		}, 5000);
		return () => clearInterval(auto);
	}, [currentSlide, bannerItems]);

	const next = () => {
		setCurrentSlide(
			currentSlide === bannerItems.length - 1 ? 0 : currentSlide + 1
		);
	};
	const prev = () => {
		setCurrentSlide(
			currentSlide === 0 ? bannerItems.length - 1 : currentSlide - 1
		);
	};

	return (
		<div className='home_container'>
			<div className='banner'>
				{bannerItems.map((data, index) => {
					return (
						<div
							className={index === currentSlide ? "slides slide" : "slides"}
							key={index}>
							{index === currentSlide && (
								<>
									<div className='arrow_btn'>
										<ArrowBackIos className='arrow' onClick={prev} />
										<ArrowForwardIos className='arrow' onClick={next} />
									</div>
									<img src={data.image} alt='pictures' />
									<div className='content'>
										<h2>{data.heading}</h2>
										<p>{data.desc}</p>
										<hr className='hr' />
										<Link to='/services/logistics'>{data.btn}</Link>
									</div>
								</>
							)}
						</div>
					);
				})}
			</div>
			<div className='tracking_form_container'>
				<h2>Enter Your Tracking Number Bellow</h2>
				<form>
					<input type='search' placeholder='Enter your tracking number' />
					<button type='submit'>Track</button>
				</form>
			</div>
			<div className='first_section'>
				<div className='first_sect_desc'>
					<h1>SHEGZY INT SERVICE</h1>
					<h2>
						You have a need? We have the <span>SOLUTION</span>
					</h2>
				</div>
				<ul>
					<li>
						<LocalShippingRounded className='first_sect_icon' />
						<h3>COURIER</h3>
						<p>
							For our same-day service, shipments received before 10:00am are
							guaranteed to be delivered to selected airport cities
						</p>
						<Link to='/services/courier'>READ MORE</Link>
					</li>
					<li>
						<LocalShippingRounded className='first_sect_icon' />
						<h3>LOGISTICS</h3>
						<p>
							Our Domestic Economy Service has been specifically designed to
							suit both individual and corporate organisations
						</p>
						<Link to='/services/logistics'>READ MORE</Link>
					</li>
					<li>
						<ShoppingCartRounded className='first_sect_icon' />
						<h3>E- COMMERCE</h3>
						<p>
							Our e-Commerce services can save you time and money in an
							increasingly competitive and fast changing business landscape.
						</p>
						<Link to='/services/e-commerce'>READ MORE</Link>
					</li>
					<li>
						<DirectionsBoatFilledRounded className='first_sect_icon' />
						<h3>INTERNATIONAL</h3>
						<p>
							Our international express service delivers time sensitive
							documents and parcels nationwide to over 200 countries.
						</p>
						<Link to='/services/international'>READ MORE</Link>
					</li>
					<li>
						<HelpOutlineRounded className='first_sect_icon' />
						<h3>SPECIALISED SOLUTIONS</h3>
						<p>
							Our customised business solutions can either address your entire
							supply chain or smaller elements within it such
						</p>
						<Link to='/services/specialised-solution'>READ MORE</Link>
					</li>
					<li>
						<RecyclingRounded className='first_sect_icon' />
						<h3>CUSTOM SOLUTIONS</h3>
						<p>
							Every business has different supply chain challenges; which means
							that standard solutions are rarely effective.
						</p>
						<Link to='/services/custom-solution'>READ MORE</Link>
					</li>
				</ul>
			</div>
			<div className='second_section'>
				<img src={img4} alt='second' />
				<div className='desc'>
					<h1> FAST & RELIABLE INQUIRY</h1>
					<p>
						Send us your inquiry – we are pleased to send you an offer without
						obligation. Our solutions are tailored on your individual
						requirements.
					</p>
					<button>SEND REQUEST</button>
				</div>
			</div>
			<div className='third_section'>
				<div className='left'>
					<h1>KEY FEATURES</h1>
					<div className='wrapper'>
						<div className='items'>
							<div className='left_icon'>
								<CheckCircleOutlineRounded className='check_circle' />
							</div>
							<div className='desc'>
								<h3>100% Safe Delivery</h3>
								<p>
									We pride on being the only indigenous logistics provider that
									has the vision, capacity and world class client service
									culture that can rival any international brand.
								</p>
							</div>
						</div>
						<div className='items'>
							<div className='left_icon'>
								<CheckCircleOutlineRounded className='check_circle' />
							</div>
							<div className='desc'>
								<h3>Fast & On Time</h3>
								<p>
									We understand that most times, the costs for delays in
									logistics far outweigh the cost of the transaction itself.
									Therefore, we have invested in acquiring robust technology,
									infrastructure and hiring people who continuously deliver on
									time, every time.
								</p>
							</div>
						</div>
					</div>
				</div>
				<div className='right'>
					<h1>ABOUT US</h1>
					<div className='wrapper'>
						<div>
							<h3>
								Between the point of departure and destination there is SHEGZY
								INT
							</h3>
							<p>
								SHEGZY INT is a provider of end-to-end logistics solutions to
								businesses and institutions across Nigeria.
							</p>
						</div>
						<div>
							<p>
								We are currently among the top 4 logistics providers in the
								country, operating from over 45 locations across Nigeria. SHEGZY
								INT has been in the distribution and logistics business since
								2009.
							</p>
						</div>
					</div>
				</div>
			</div>
			<div className='fourth_section'>
				<div className='options'>
					<h1>Looking for more? Here are a few places to explore.</h1>
					<div className='links'>
						<div className='links_wrapper'>
							<Link to='' className='opt_link'>
								About Us
							</Link>
							<ArrowForwardIos className='opt_icon' />
						</div>
						<div className='links_wrapper'>
							<Link to='' className='opt_link'>
								Import Service
							</Link>
							<ArrowForwardIos className='opt_icon' />
						</div>
						<div className='links_wrapper'>
							<Link to='' className='opt_link'>
								Same Day Delivery
							</Link>
							<ArrowForwardIos className='opt_icon' />
						</div>
						<div className='links_wrapper'>
							<Link to='' className='opt_link'>
								Contact Us
							</Link>
							<ArrowForwardIos className='opt_icon' />
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Home;
