function MainSection() {
	return (
		<section className="main-section" id="main">
			<div className="center box">
				<img src="https://res.cloudinary.com/deepank411/image/upload/v1653751746/my%20clicked%20photos/white-logo1_y3lc1v.png" width={150} alt='logo' />
				<div className="name-title wow fadeInLeft">Deepank</div>
				<div className="name-subtitle wow fadeInUp">
					Software Engineer
			</div>
			</div>
			<a className="arrows1" href="#about">
				<svg className="arrows">
					<path className="a1" d="M0 0 L15 16 L30 0"></path>
					<path className="a2" d="M0 10 L15 26 L30 10"></path>
				</svg>
			</a>
		</section>
	);
}

export default MainSection;
