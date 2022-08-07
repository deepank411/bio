import './gallery.css';

const images = [
	'https://res.cloudinary.com/deepank411/image/upload/w_1200/v1659880853/my%20photos/amsterdam_i5p62p.jpg',
	'https://res.cloudinary.com/deepank411/image/upload/w_600/v1653751174/my%20clicked%20photos/IMG_20190610_170356496_HDR-01_azzjdn.jpg',
	'https://res.cloudinary.com/deepank411/image/upload/w_600/v1653751185/my%20clicked%20photos/IMG_20190608_192856078-01_qukeud.jpg',
	'https://res.cloudinary.com/deepank411/image/upload/w_1200/v1659880333/my%20photos/volendam_rirdrh.jpg',
	// 'https://res.cloudinary.com/deepank411/image/upload/w_600/v1653751178/my%20clicked%20photos/IMG_20210120_181237__01_akj10t.jpg',
	// 'https://res.cloudinary.com/deepank411/image/upload/w_600/v1653751178/my%20clicked%20photos/IMG_1815_cqoleh.jpg',
	'https://res.cloudinary.com/deepank411/image/upload/w_600/v1653751162/my%20clicked%20photos/Copy_of_IMG_20171216_132420288-01_h8xoxu.jpg',
	'https://res.cloudinary.com/deepank411/image/upload/w_1200/v1659880325/my%20photos/louvre_pw3tg8.jpg',
	// 'https://res.cloudinary.com/deepank411/image/upload/w_600/v1653751176/my%20clicked%20photos/IMG-20190608-WA0007-01_qxucfb.jpg',
	// 'https://res.cloudinary.com/deepank411/image/upload/w_600/v1653751181/my%20clicked%20photos/IMG_20190606_115013851_HDR-01_lqjonf.jpg',
];

const Gallery = () => {
	return (
		<div className="img-container">
			{images.map(x => <figure>
				<img src={x} alt="asd"/>
			</figure>)}
		</div>
	);
}

export default Gallery;
