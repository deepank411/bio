import Logo from '../../images/white-logo1.png';

function MainSection() {
	return (
		<section className="main-section" id="main">
			<div className="center box">
				<img src={Logo} width={150} alt='logo' />
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
