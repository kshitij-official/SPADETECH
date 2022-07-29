import React from 'react'
import './howww.css'

const HowWW = ({ step, clicked, toggle, index}) => {


    return (
        <>
            <div onClick={() => toggle(index)} className={clicked === index ? "step active" : "step"}  autoFocus={index === 0 ? true: null } >
                <div className="step__count">
                    <span>{step.count}</span>
                </div>
                <div className="step__intro">
                    <span>{step.intro}</span>
                </div>
            </div>
        </>
    )
}

export default HowWW
