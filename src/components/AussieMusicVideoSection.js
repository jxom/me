import { h } from 'preact';
import Section from './Section';

export default () => (
	<Section isSmall>
		<p>Feel free to not close this webpage and listen to this Aussie classic in the background.</p>
		<iframe width="560" height="315" src="https://www.youtube.com/embed/Ri1MTXFu8No?autoplay=1" frameborder="0" allowfullscreen />
	</Section>
);
