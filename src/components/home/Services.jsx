import icon1 from "../../assets/icons/icon1.svg"
import icon2 from "../../assets/icons/icon2.svg"
import icon33 from "../../assets/icons/icon33.svg"
import { Link } from "react-router-dom";

// Make sure to REMOVE service__icon

function Services() {
    return (
        <section className="container services">
            <h3 className="section__title">Our services</h3>
            <p className="section__desc">We make it easy for users to use our platform</p>

            <div className="services__container">
                <article className="service card">
                    <div className="card__body">
                        <div className="service__icon">
                            <img src={icon1} alt="" />
                        </div>
                        <h4>Security Audit</h4>
                        <p>
                            Providing affordable, comprehensive smart contract audits that ensure the safety of your
                            project.
                        </p>
                    </div>
                    <Link className="learn-more__btn" to="/services/security-audit">Learn More</Link>
                </article>

                <article className="service card">
                    <div className="card__body">
                        <div className="service__icon">
                            <img src={icon2} alt="" />
                        </div>
                        <h4>Blockchain Development</h4>
                        <p>
                            We work with you to understand your business needs and develop a bespoke solution that meets
                            your
                            requirements.
                        </p>
                    </div>
                    <Link className="learn-more__btn" to="/services/development">Learn More</Link>
                </article>

                <article className="service card">
                    <div className="card__body">
                        <div className="service__icon">
                            <img src={icon33} alt="" />
                        </div>
                        <h4>Blockchain Consulting</h4>
                        <p>
                            Launch your project with confidence. We can come onboard at any stage during the project
                            lifecycle
                            and assist with strategy, planning, and execution.
                        </p>
                    </div>
                    <Link className="learn-more__btn" to="/services/consultancy">Learn More</Link>
                </article>
            </div>
        </section>
    );
}

export default Services;