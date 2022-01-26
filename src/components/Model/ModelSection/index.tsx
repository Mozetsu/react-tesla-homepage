import { useEffect, useRef } from 'react';
import useModel from '../ModelsWrapper/useModel';

import { Container } from './styles';

interface Props extends React.HTMLAttributes<HTMLDivElement> {
	modelName: string;
	overlayNode: React.ReactNode;
}

const ModelSection = ({ modelName, overlayNode, children, ...props }: Props) => {
	const { registerModel } = useModel(modelName);

	const sectionRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		if (sectionRef.current) {
			registerModel({
				modelName,
				overlayNode,
				sectionRef,
			});
		}
	}, []);

	return (
		<Container ref={sectionRef} {...props}>
			{children}
		</Container>
	);
};

export default ModelSection;
