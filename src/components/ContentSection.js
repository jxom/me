import { h } from 'preact';
import Section from './Section';

export default () => (
	<Section isSmall>
		<p style={{ marginBottom: '1rem' }}>
			Jake is a software engineer living in outer eastern Melbourne.{' '}
			He is currently revolutionising healthcare at <a href="https://medipass.com.au" target="_blank" rel="noreferrer noopener">Medipass</a>{' '}
			and loves to work on <a href="https://github.com/thebogandev" target="_blank" rel="noreferrer noopener">open source</a> in his spare time.{' '}
			He also loves to have a good pint of <a href="https://www.victoriabitter.com.au/" target="_blank" rel="noreferrer noopener">VB</a> while snapping his neck to <a href="https://www.victoriabitter.com.au/" target="_blank" rel="noreferrer noopener">Parkway Drive</a>.
		</p>
		<p>
			Read my latest blog post: <a href="https://github.com/thebogandev" target="_blank" rel="noreferrer noopener">How a ‘toolbox’ can streamline web development</a>
		</p>
	</Section>
);
