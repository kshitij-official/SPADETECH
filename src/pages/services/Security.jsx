import React, { useState } from "react";
import Header from "../../components/header/Header";
import Card from "../../components/card/Card";

import { securityContents } from "../../utils/contents/headers-contents/headerContents";
import { cardContent } from "../../utils/contents/cards-contents/securityAuditCard";
import { stepContents } from "../../utils/contents/steps-contents/stepContents";
import { security_offers_list } from "../../utils/contents/offers-list/offersContents";
import HowWW from "../../components/howwework/HowWW";


const Security = () => {

	const [clicked, setClicked] = useState(0);

	const { card_1, card_2 } = cardContent.section_1;
	const { card1, card2, card3, card4 } = cardContent.section_3


	// useRef, if useRef.index === index setClicked(index)

	const toggle = (index) => {
		if (clicked === index) {
			return setClicked(null);
		}
		setClicked(index);
	};

	return (
		<>
			<Header title={securityContents.title} content={securityContents.content} img={securityContents.img} url={securityContents.url} />

			<section className="container services-section general-section1">
				<Card cssClass="white-card icon--row-card" iconClass={card_1.iconClass} h4={card_1.title} p={card_1.content} img={card_1.icon} />
				<div className="next__btn"></div>
				<Card cssClass="red-card icon--row-card" iconClass={card_2.iconClass} h4={card_2.title} p={card_2.content} img={card_2.icon} />
			</section>

			<section className="container services-section ">
				<div className="general-section2">
					<h3 className="section__title">
						What we offer
					</h3>
					<div className="offers__list">
						{security_offers_list.map(offer => {
							return <p key={offer.id}>{offer.content}</p>
						})}
					</div>
				</div>

				<br />
				<br />
				<br />

				<h3 className="section__title">How We Work</h3>
				<p className="section__desc">
					Our five-step audit methodology is designed to give you the most comprehensive
					assessment of your project's security posture. Here's how we work:
				</p>

				<div className="steps__container">
					<div className="step__list">
						{stepContents.map((step, index) => {
							return (
								<HowWW key={step.id} step={step} index={index} clicked={clicked} toggle={toggle} />
							)
						})}
					</div>
					
					<div className="step__answer">
						{stepContents.map((step, index) => {
							return (
								<div key={step.id} className="step__content">
									{clicked === index ? (<>
										{step.content}
									</>) : null}
								</div>)
						})}
					</div>
				</div>

			</section>

			<section className="container services-section general-section3">
				<h3 className="section__title">
					The Spade Tech Difference
				</h3>
				<p className="section__desc">
					Place holder text for a small description
				</p>

				<div className="general-section3__container">
					<Card iconClass="card__img" cssClass="white-card img--row-card" h4={card1.title} p={card1.content} img={card1.icon} />
					<Card iconClass="card__img" cssClass="white-card img--row-card" h4={card2.title} p={card2.content} img={card2.icon} />
					<Card iconClass="card__img" cssClass="white-card img--row-card" h4={card3.title} p={card3.content} img={card3.icon} />
					<Card iconClass="card__img" cssClass="white-card img--row-card" h4={card4.title} p={card4.content} img={card4.icon} />
				</div>
			</section>
		</>
	);
};

export default Security;
