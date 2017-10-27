import { h } from 'preact';
import Section from './Section';

export default () => (
	<Section isSmall>
		<p>
			Cya later — have a good one!
		</p>
		<p>
			© {new Date().getFullYear()} Jake Moxey.
		</p>
	</Section>
);
