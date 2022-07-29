import React from 'react'
import './card.css'

const Card = (props) => {
    return (
        <article className={`card ${props.cssClass}`}>
            {/* <div className="card__container"> */}
                <div className={props.iconClass}>
                    <img src={props.img} alt={props.img} />
                </div>
                <div className="card__body">
                    <h4>{props.h4}</h4>
                    <p>
                        {props.p}
                    </p>
                </div>
            {/* </div> */}
            {props.button && <a className="learn-more__btn" href="./">
                Learn More
            </a>}
        </article>
    )
}

export default Card

