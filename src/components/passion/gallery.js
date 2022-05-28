import './gallery.css';

const images = [
	'https://dummyimage.com/600x200/f4f4f4/0f0f0f',
	'https://dummyimage.com/600x400/f4f4f4/0f0f0f',
	'https://dummyimage.com/600x600/f4f4f4/0f0f0f',
	'https://dummyimage.com/600x200/f4f4f4/0f0f0f',
	'https://dummyimage.com/600x600/f4f4f4/0f0f0f',
	"https://assets.codepen.io/12005/windmill.jpg",
	"https://assets.codepen.io/12005/suspension-bridge.jpg",
	"https://assets.codepen.io/12005/sunset.jpg",
	"https://assets.codepen.io/12005/snowy.jpg",
	"https://assets.codepen.io/12005/bristol-balloons1.jpg",
	"https://assets.codepen.io/12005/dog-balloon.jpg",
	"https://assets.codepen.io/12005/abq-balloons.jpg",
	"https://assets.codepen.io/12005/disney-balloon.jpg",
	"https://assets.codepen.io/12005/bristol-harbor.jpg",
	"https://assets.codepen.io/12005/bristol-balloons2.jpg",
	"https://assets.codepen.io/12005/toronto.jpg",
];

const Gallery = () => {
	return (
		<div class="img-container">
			{images.map(x => <figure>
				<img src={x} alt="asd"/>
			</figure>)}
		</div>
	);
}

export default Gallery;
