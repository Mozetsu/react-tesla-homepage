import { ModelsWrapper, ModelSection } from '../Model';
import DefaultOverlayContent from '../DefaultOverlayContent';
import UniqueOverlay from '../uniqueOverlay';

import { Container, Spacer } from './styles';

function Page() {
	return (
		<Container>
			<ModelsWrapper>
				<div>
					{['Model 3', 'Model Y', 'Model S', 'Model X', 'Solar Panels', 'Solar Roof', 'Accessories'].map(
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
				<Spacer />
				<UniqueOverlay />
			</ModelsWrapper>
		</Container>
	);
}

export default Page;
