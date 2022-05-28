import Me from '../../images/me.jpeg';

function AboutSection() {
	const personalDetails = [
		{
			title: 'Date and time of birth',
			details: '4 November 1995, 10:20 am',
		},
		{
			title: 'Place of birth',
			details: 'Jaipur, Rajasthan',
		},
		{
			title: 'Height',
			details: '5” 6.',
		},
		{
			title: 'Occupation',
			details: 'Engineering Manager, Yellow Class, Ivypods Technology Pvt Ltd.',
		},
		{
			title: 'Education',
			details: 'B.Tech in Communications & Computer Engineering from LNMIIT Jaipur',
		},
		{
			title: 'Religion and Gotra',
			details: 'Hindu, Garg',
		},
	]
	return (
		<>
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
						This is the online home of Deepank Agarwal — software engineer and an aspiring polymath.
				</p>
				</div>
			</section>
			<section className="image-section" id="image">
				<div className="division">
					<div
						className="left-area area"
					>
						<div className="content custom-container">
							{personalDetails.map(x => <div className="row">
								<div className="col s12 m12 l4 frow title">
									<h6 className="h6">{x.title}</h6>
								</div>
								<div className="col s12 m12 l8 frow details">
									<h6 className="h6">{x.details}</h6>
								</div>
							</div>)}
						</div>
						{/* <h2>Make it work, make it right, make it fast.</h2> */}

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
			</>
	)
}

export default AboutSection;
