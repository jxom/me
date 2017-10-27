import { h } from 'preact';
import Section from './Section';

export default () => (
	<Section isSmall>
		<p>Find Jake on:</p>
		<p>
			<a href="https://github.com/thebogandev" target="_blank" rel="noreferrer noopener">GitHub</a>
		</p>
		<p>
			<a href="https://twitter.com/thebogandev" target="_blank" rel="noreferrer noopener">Twitter</a>
		</p>
		<p>
			<a href="https://medium.com/@jxom" target="_blank" rel="noreferrer noopener">Medium</a>
		</p>
		<p>
			<a href="https://www.linkedin.com/in/jake-moxey-42aaa876/" target="_blank" rel="noreferrer noopener"><s>LinkedIn</s></a> - urgh.
		</p>
	</Section>
);
