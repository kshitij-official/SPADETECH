import React from "react";
import ServicesHeader from "../../components/ServicesHeader";
import Card from "../../components/card/Card";


import { developmentContents } from "../../utils/contents/headerContents";
import { cardContent } from "../../utils/contents/developmentCard";

import arrow from "../../assets/icons/arrow.svg";

const Development = () => {

  const { card_1, card_2 } = cardContent.section_1;
  const { card1, card2, card3, card4 } = cardContent.section_3


  return (
    <>
      <ServicesHeader
        leftContent={developmentContents.leftContent}
        rightContent={developmentContents.rightContent}
      />

      <section className="container services-section general-section1">
        <Card class="white-card icon--row-card" iconClass={card_1.iconClass} h4={card_1.title} p={card_1.content} img={card_1.icon} />
        <div className="next__btn">
          <img src={arrow} alt="arrow-icon" />
        </div>
        <Card class="red-card icon--row-card" iconClass={card_2.iconClass} h4={card_2.title} p={card_2.content} img={card_2.icon} />
      </section>

      <section className="container services-section general-section2">
        <h3 style={{ lineHeight: "56px" }} className="section__title">
          What we offer
        </h3>
        <div className="offers__list">
          <p>A trusted team of UK developers who will develop a tailored blockchain solution for your project needs.</p>
          <p>The development of smart contracts, dApps, and other blockchain-based solutions.  From DeFi to  NFTs, we've got you covered.</p>
          <p>
            A comprehensive service that includes project management, quality assurance, and launch on your chosen platform.
          </p>
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
          <Card class="white-card img--row-card" h4={card1.title} p={card1.content} img={card1.icon} />
          <Card class="white-card img--row-card" h4={card2.title} p={card2.content} img={card2.icon} />
          <Card class="white-card img--row-card" h4={card3.title} p={card3.content} img={card3.icon} />
          <Card class="white-card img--row-card" h4={card4.title} p={card4.content} img={card4.icon} />
        </div>
      </section>
    </>
  );
};

export default Development;
