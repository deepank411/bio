import MainSection from './components/main';
import AboutSection from './components/about';
import PassionSection from './components/passion';
import ContactSection from './components/contact';

import './styles/App.css';
import FamilySection from './components/family';

function App() {
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
