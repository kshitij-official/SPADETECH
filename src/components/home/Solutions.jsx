import transparent from "../../assets/icons/transparent.svg";
import honest from "../../assets/icons/honest.svg";
import secure from "../../assets/icons/secure.svg";
import efficient from "../../assets/icons/efficient.svg";



function Solutions() {
	return (
		<section className="solutions container">

			<h3 className="section__title">Our solution for your business</h3>
			<p className="section__desc">
				We make it easy for users to use our platform, that’s why we provide the
				benefit.
			</p>
			<div className="solutions__container">
				<article className="solution card white-card">
					<div className="card__container">
						<div className="card__icon">
							<div>
								<img src={transparent} alt="transparent-icon" />
							</div>
						</div>
						<div className="card__body">
							<h4>Transparent</h4>
							<p>
								We're an open book. We believe in total transparency and will
								always keep you in the loop. We'll be completely open about any
								findings, regardless of whether they're good or bad.
							</p>
						</div>
					</div>
					<a className="learn-more__btn" href="./">
						Learn More
					</a>
				</article>

				<article className="solution card white-card">
					<div className="card__container">
						<div className="card__icon">
							<img src={honest} alt="honest-icon" />
						</div>
						<div className="card__body">
							<h4>Honest</h4>
							<p>
								We do things the right way. We're honest, reliable and always
								deliver on our promises. If we say we're going to do something,
								we'll do it.
							</p>
						</div>
					</div>
					<a className="learn-more__btn" href="./">
						Learn More
					</a>
				</article>

				<article className="solution card white-card">
					<div className="card__container">
						<div className="card__icon">
							<img src={secure} alt="secure-icon" />
						</div>
						<div className="card__body">
							<h4>Secure</h4>
							<p>
								Our top priority is ensuring every project we audit is 100% secure
								for users. This means we'll never take shortcuts or overlook any
								potential vulnerabilities.
							</p>
						</div>
					</div>
					<a className="learn-more__btn" href="./">
						Learn More
					</a>
				</article>

				<article className="solution card white-card">
					<div className="card__container">
						<div className="card__icon">
							<img src={efficient} alt="efficient-icon" />
						</div>
						<div className="card__body">
							<h4>Efficient</h4>
							<p>
								We move quickly and efficiently, without compromising on quality.
								We understand that time is often of the essence for many
								blockchain projects, so we'll always work to deliver re....
							</p>
						</div>
					</div>
					<a className="learn-more__btn" href="./">
						Learn More
					</a>
				</article>
			</div>
		</section>
	);
}

export default Solutions;
