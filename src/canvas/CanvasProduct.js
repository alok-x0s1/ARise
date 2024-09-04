import { Decal, useGLTF, useTexture } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { easing } from "maath";
import React from "react";
import { useSelector } from "react-redux";

const CanvasProduct = () => {
	const { nodes, materials } = useGLTF("/shirt_baked.glb");

	const customizerState = useSelector((state) => state.customizer);
	const logoTexture = useTexture(customizerState.logoDecal);
	const fullTexture = useTexture(customizerState.fullDecal);
	React.useEffect(() => {
		if (!logoTexture) {
			console.error(
				"Logo texture failed to load:",
				customizerState.logoDecal
			);
		}
		if (!fullTexture) {
			console.error(
				"Full texture failed to load:",
				customizerState.fullDecal
			);
		}
	}, [
		logoTexture,
		fullTexture,
		customizerState.logoDecal,
		customizerState.fullDecal,
	]);
	useFrame((state, delta) =>
		easing.dampC(
			materials.lambert1.color,
			customizerState.color,
			0.25,
			delta
		)
	);

	const stateString = JSON.stringify(customizerState);

	return (
		<group key={stateString}>
			<mesh
				castShadow
				geometry={nodes.T_Shirt_male.geometry}
				material={materials.lambert1}
				material-roughness={1}
				dispose={null}
			>
				{customizerState.isFullTexture && (
					<Decal
						position={[0, 0, 0]}
						rotation={[0, 0, 0]}
						scale={1}
						map={fullTexture}
					/>
				)}

				{customizerState.isLogoTexture && (
					<Decal
						position={[0, 0.04, 0.15]}
						rotation={[0, 0, 0]}
						scale={0.15}
						map={logoTexture}
						anisotropy={16}
						depthTest={false}
						depthWrite={true}
					/>
				)}
			</mesh>
		</group>
	);
};

export default CanvasProduct;
