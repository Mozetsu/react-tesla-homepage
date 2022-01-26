import { ReactNode } from 'react';

import { ModelsWrapper, ModelSection } from '../Model';
import DefaultOverlayContent from '../DefaultOverlayContent';

import { Container } from './styles';

function Page() {
	return (
		<Container>
			<ModelsWrapper>
				<div>
					{['Model One', 'Model Two', 'Model Three', 'Model Four', 'Model Five', 'Model Six', 'Model Seven'].map(
						(modelName) => (
							<ModelSection
								className="colored"
								modelName={modelName}
								overlayNode={
									<DefaultOverlayContent key={modelName} label={modelName} description="Order Online for Delivery" />
								}
							/>
						)
					)}
				</div>
			</ModelsWrapper>
		</Container>
	);
}

export default Page;
