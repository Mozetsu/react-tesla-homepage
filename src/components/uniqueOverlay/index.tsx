import { ReactNode } from 'react';

import { Container, Header, Logo, Burguer, Footer } from './styles';

function UniqueOverlay() {
	return (
		<Container>
			<Header>
				<Logo />
				<Burguer />
			</Header>

			<Footer>
				<ul>
					<li>
						<a href="#">UI Clone</a>
					</li>
					<li>
						<a href="#">Built with 🚀</a>
					</li>
					<li>
						<a href="#">By Mozetsu</a>
					</li>
				</ul>
			</Footer>
		</Container>
	);
}

export default UniqueOverlay;
