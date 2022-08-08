import { cardContent } from "../../utils/contents/cards-contents/solutionCard"
import Card from "../card/Card";

const Solutions = () => {
	return (
		<section className="container solutions gray-card ">
			<h3 className="section__title">Our business values</h3>
			<p className="section__desc">
				These core values shape the way we do business and maintain harmonous relationships with our client.
			</p>
			<div className="solutions__container">
				{cardContent.map(card => {
					return <Card key={card.id} card={card} />
				})}
			</div>
		</section>
	);
}

export default Solutions;
