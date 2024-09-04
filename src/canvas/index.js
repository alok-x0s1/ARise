import { Canvas } from "@react-three/fiber";
import { Center, Environment } from "@react-three/drei";
import CanvasProduct from "./CanvasProduct";
import CameraRig from "./CameraRig";
import Backdrop from "./Backdrop";

const CanvasModel = () => {
	return (
		<Canvas
			shadows
			camera={{ position: [0, 0, 0], fov: 25 }}
			gl={{ preserveDrawingBuffer: true }}
			style={{ background: "#f0f0f0" }}
			className="w-full max-w-full h-full transition-all ease-in"
		>
			<ambientLight intensity={0.9} />
			<Environment preset="city" />

			<CameraRig>
				<Backdrop />
				<Center>
					<CanvasProduct />
				</Center>
			</CameraRig>
		</Canvas>
	);
};

export default CanvasModel;
