import styled from 'styled-components';

export const Container = styled.div`
	.colored:nth-child(1) {
		background-image: url('/img/one.webp');
		background-size: cover;
		background-position: center;
	}
	.colored:nth-child(2) {
		background-image: url('/img/two.webp');
		background-size: cover;
		background-position: center;
	}
	.colored:nth-child(3) {
		background-image: url('/img/three.webp');
		background-size: cover;
		background-position: center;
	}
	.colored:nth-child(4) {
		background-image: url('/img/four.webp');
		background-size: cover;
		background-position: center;
	}
	.colored:nth-child(5) {
		background-image: url('/img/five.webp');
		background-size: cover;
		background-position: center;
	}
	.colored:nth-child(6) {
		background-image: url('/img/six.webp');
		background-size: cover;
		background-position: center;
	}
	.colored:nth-child(7) {
		background-image: url('/img/seven.webp');
		background-size: cover;
		background-position: center;
	}
`;

export const Spacer = styled.div`
	height: 15vh;
	opacity: 0;
	pointer-events: none;
`;
