import { h } from 'preact';
import classnames from 'classnames';

export default ({ children, isSmall }) => (
	<section class={classnames('hero', isSmall && 'is-small')}>
		<div class="hero-body">
			<div class="container">
				{children}
			</div>
		</div>
	</section>
);
