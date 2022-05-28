import Gallery from "./gallery";

function PassionSection() {
	const passions = ['Travelling', 'Photography', 'Table Tennis', 'Programming'];
	return (
		<section className="experience-section" id="experience">
			<h2 className="uppercase center">
				My Passions
			</h2>
			<div className="content custom-container">
				<div className="grid row">
					{passions.map(x => <div className="grid-item col s6 m6 l3">
						<div className="element-item center">
							<h3 className="name">{x}</h3>
						</div>
					</div>)}
				</div>
				<div>
					<Gallery />
				</div>
				{/* <div className="m-t-30 center">
					<a
						href="https://github.com/deepank411?tab=repositories"
						target="_blank" rel="noreferrer"
					>
						<button className="custom-btn5">
							Find more projects on Github
					</button>
					</a>
				</div> */}
			</div>
		</section>
	);
}

export default PassionSection;
