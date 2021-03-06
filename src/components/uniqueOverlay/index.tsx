import { useTransform } from 'framer-motion';
import useWrapperScroll from '../Model/ModelsWrapper/useWrapperScroll';

import { Container, Header, Logo, Burguer, Footer } from './styles';

function UniqueOverlay() {
	const { scrollYProgress } = useWrapperScroll();

	const opacity = useTransform(scrollYProgress, [0.9, 1], [0, 1]);

	return (
		<Container>
			<Header>
				<Logo />
				<Burguer />
			</Header>

			<Footer style={{ opacity }}>
				<ul>
					<li>
						<a href="https://github.com/Mozetsu">UI Clone</a>
					</li>
					<li>
						<a href="https://github.com/Mozetsu">Built with 🚀</a>
					</li>
					<li>
						<a href="https://github.com/Mozetsu">By Mozetsu</a>
					</li>
				</ul>
			</Footer>
		</Container>
	);
}

export default UniqueOverlay;
