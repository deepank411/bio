import { useEffect } from 'react';
import ReactGA from 'react-ga';

import MainSection from './components/main';
import AboutSection from './components/about';
import PassionSection from './components/passion';
import ContactSection from './components/contact';
import FamilySection from './components/family';

import './styles/App.css';

function App() {
	useEffect(() => {
		ReactGA.initialize('UA-85185061-2');
		if (window) {
			ReactGA.pageview(window.location.pathname + window.location.search);
		}
	}, []);
	return (
		<div className="App">
			<MainSection />
			<AboutSection />
			<PassionSection />
			<FamilySection />
			<ContactSection />
		</div>
	);
}

export default App;
