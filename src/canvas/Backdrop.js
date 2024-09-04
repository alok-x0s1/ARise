import React, { useRef } from "react";
import { AccumulativeShadows, RandomizedLight } from "@react-three/drei";

const Backdrop = () => {
	const shadows = useRef();

	return (
		<AccumulativeShadows
			ref={shadows}
			temporal
			frames={100}
			alphaTest={0.85}
			scale={10}
			rotation={[Math.PI / 2, 0, 0]}
			position={[0, 0, -0.14]}
		>
			<RandomizedLight
				amount={1}
				radius={1}
				intensity={1}
				ambient={0.9}
				position={[5, 5, -10]}
			/>
			<RandomizedLight
				amount={1}
				radius={1}
				intensity={1}
				ambient={0.9}
				position={[-5, 5, -9]}
			/>
		</AccumulativeShadows>
	);
};

export default Backdrop;
