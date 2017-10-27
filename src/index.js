import { h } from 'preact';
import Home from './pages/home';
import FooterSection from './components/FooterSection';
import './styles.scss';

export default () => (
	<div>
		<Home />
		<FooterSection />
	</div>
);
