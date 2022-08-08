// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

import sliderBg from "../../assets/slider/testimonials-bg.svg";
import johnSmith from "../../assets/slider/smith.png";
import metatank from "../../assets/slider/metatank.png";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./slider.css";

// import required modules
import { Parallax, Navigation } from "swiper";

export default function Slider() {
	return (
		<>
			<Swiper
				style={{
					"--swiper-navigation-color": "#fff",
					"--swiper-pagination-color": "#fff",
				}}
				speed={600}
				parallax={true}
				navigation={true}
				spaceBetween={0}
				slidesPerView={1}
				modules={[Parallax, Navigation]}
				className="mySwiper"
			>
				<h5 className="slider__title">CUSTOMERS STORIES</h5>
				<div
					slot="container-start"
					className="parallax-bg"
					style={{
						"backgroundImage": `url(${sliderBg})`,
						backgroundSize: "75%",
						"margin":"0",
					}}
					data-swiper-parallax="-23%"
				>
					{" "}
				</div>

				<SwiperSlide>
					{/* 					<div className="title" data-swiper-parallax="-300">
						Slide 1
					</div>
					<div className="subtitle" data-swiper-parallax="-200">
						Subtitle
					</div> */}
					<div className="text" data-swiper-parallax="-100">
						<p>
							"The Spade team has always been my first choice for WEB3 solutions in a market overrun with con artists and illiterate programmers. Before we met, I struggled to find the necessary information and engineers to realize my vision for my blockchain-based company in the constantly changing digital world. Being kind to customers and ever prepared to offer unbiased advice I have no problem recommending the group to anyone."
						</p>
						<article className="author">
							<img src={johnSmith} alt="John Smith" />
							<div>
								<h5>George Ayinde</h5>
								<span>Founder - WEMOVE DEFI</span>
							</div>
						</article>
					</div>
				</SwiperSlide>
				<SwiperSlide>
					{/* 					<div className="title" data-swiper-parallax="-300">
						Slide 2
					</div>
					<div className="subtitle" data-swiper-parallax="-200">
						Subtitle
					</div> */}
					<div className="text" data-swiper-parallax="-100">
						<p>
							"I continue to be amazed by the depth and breadth of Spade team's development knowledge but also their soft qualities in how they conduct business. Not only do they deliver on the agreed specifications, but they go the extra mile to educate you on possible alternative improvements. It turns out they knew a thing or two about developing projects with a focus on the metaverse. They have a great understanding of the multiple ways that NFTs can be utilised in game development. It has been a pleasure working with them in fine-tuning our long-term vision. I'd recommend them to others who are serious about getting the job done."
						</p>
						<article className="author">
							<img src={metatank} alt="John Smith" />
							<div>
								<h5>Metatank</h5>
								<span>Testimonial from Kays</span>
							</div>
						</article>
					</div>
				</SwiperSlide>
				<SwiperSlide>
					{/* 					<div className="title" data-swiper-parallax="-300">
						Slide 3
					</div>
					<div className="subtitle" data-swiper-parallax="-200">
						Subtitle
					</div> */}
					<div className="text" data-swiper-parallax="-100">
						<p>
							"Suspendisse in sem justo. Integer laoreet magna nec elit
							suscipit, ac laoreet nibh euismod. Aliquam hendrerit lorem at elit
							facilisis rutrum. Ut at ullamcorper velit."
						</p>
						<article className="author">
							<img src={johnSmith} alt="John Smith" />
							<div>
								<h5>John Smith</h5>
								<span>Founder & CEO</span>
							</div>
						</article>
					</div>
				</SwiperSlide>
			</Swiper>
		</>
	);
}
