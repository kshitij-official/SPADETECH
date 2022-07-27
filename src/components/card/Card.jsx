import React from 'react'
import './card.css'

const Card = (props) => {
    return (
        <article className={`card ${props.class}`}>
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




/*

Props needed

img = text
h4 = text
p = text
button = true/false

modifier = true/false => solution ; service ; red-card 

.card {
    padding: 2rem;
    border-radius: 0.25rem;
    box-shadow: 0px 8px 24px rgba(0, 0, 0, 0.08);
}

COLORS 
.gray-card {
    box-shadow: none;
    text-align: center;
    background: var(--color-bg1);
    display: flex;
    flex-direction: column;
    justify-content: space-between;
}

.red-card {
    background: var(--color-active);
    color: var(--color-white);
    box-shadow: 0px 8px 24px rgba(239, 121, 138, 0.4);
}
.white-card {
    background: var(--color-white);
}

FUNCTIONAL
.col-card {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
}

.icon--row-card {
    display: grid;
    grid-template-columns: 64px 1fr;
    gap: 32px;   
}

.img--row-card {
    display: grid;
    grid-template-columns: 136px 1fr;
    gap: 32px;  
}





ANCIEN 


service-img--row => img--row-card
.service-img--row {
    display: grid;
    grid-template-columns: 136px 1fr;
    gap: 32px;  
}

service-icon--row => icon--row-card
.service-icon--row {
    display: grid;
    grid-template-columns: 64px 1fr;
    gap: 32px;   
}

solution => col-card
.solution {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
}

service => gray-card 
.service {
    text-align: center;
    background: var(--color-bg1);
    box-shadow: none;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
}


*/