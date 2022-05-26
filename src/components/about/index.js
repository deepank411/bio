import Me from '../../images/me.jpeg';

function AboutSection() {
	return (
		<div className="about">
			<section className="about-section" id="about">
				<div className="container">
					<h2
						className="h2 capitalize hello-title"
					>
						Hello, thanks for stopping by
				</h2>
					<p
						className="about-text"
					>
						This is the online home of Deepank Agarwal— software engineer and an aspiring polymath.
				</p>
				</div>
			</section>
			<section className="image-section" id="image">
				<div className="division">
					<div
						className="left-area center area"
					>
						<h2>Make it work, make it right, make it fast.</h2>
					</div>
					<div
						className="right-area area"
					>
						<img src={Me} className="me" alt='me' />
					</div>
				</div>
				{/* <!-- <div className="m-t-30 center">
					<a href="./docs/Deepank_Agarwal_Resume.pdf" target="_blank">
						<button className="custom-btn4 invert-color">Résumé</button>
					</a>
				</div> --> */}
			</section>
		</div>
	)
}

export default AboutSection;
