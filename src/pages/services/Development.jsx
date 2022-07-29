import React from "react";
import Header from "../../components/header/Header";
import Card from "../../components/card/Card";


import { developmentContents } from "../../utils/contents/headers-contents/headerContents";
import { cardContent } from "../../utils/contents/cards-contents/developmentCard";
import { development_offers_list } from "../../utils/contents/offers-list/offersContents";



const Development = () => {

	const { card_1, card_2 } = cardContent.section_1;
	const { card1, card2, card3, card4 } = cardContent.section_3


	return (
		<>
			<Header extra title={developmentContents.title} content={developmentContents.content} img={developmentContents.img} description={developmentContents.description} url={developmentContents.url} />

			<section className="container services-section general-section1">
				<Card cssClass="white-card icon--row-card" iconClass={card_1.iconClass} h4={card_1.title} p={card_1.content} img={card_1.icon} />
				<div className="next__btn"></div>
				<Card cssClass="red-card icon--row-card" iconClass={card_2.iconClass} h4={card_2.title} p={card_2.content} img={card_2.icon} />
			</section>

			<section className="container services-section general-section2">
				<h3 className="section__title">
					What we offer
				</h3>

				<div className="offers__list">
					{development_offers_list.map(offer => {
						return <p key={offer.id}>{offer.content}</p>
					})}
				</div>
				
			</section>

			<section className="container services-section general-section3">
				<h3 style={{ lineHeight: "56px" }} className="section__title">
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

export default Development;
