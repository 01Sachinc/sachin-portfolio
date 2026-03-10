import { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Points, PointMaterial } from '@react-three/drei';
// @ts-ignore
import * as random from 'maath/random/dist/maath-random.esm';

function Stars(props: any) {
  const ref = useRef<any>();
  const sphere = random.inSphere(new Float32Array(5000), { radius: 1.2 });

  useFrame((_state, delta) => {
    if (ref.current) {
      ref.current.rotation.x -= delta / 10;
      ref.current.rotation.y -= delta / 15;
    }
  });

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points ref={ref} positions={sphere} stride={3} frustumCulled {...props}>
        <PointMaterial
          transparent
          color="#38bdf8"
          size={0.002}
          sizeAttenuation={true}
          depthWrite={false}
        />
      </Points>
    </group>
  );
}

const ThreeBackground = () => {
  return (
    <div className="fixed inset-0 z-[-1] pointer-events-none overflow-hidden bg-[#0a0a0a]">
      <Canvas camera={{ position: [0, 0, 1] }}>
        <Stars />
      </Canvas>
      {/* Overlay Gradients for Depth */}
      <div className="absolute inset-0 bg-gradient-to-tr from-primary-500/5 via-transparent to-blue-500/5" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-blue-500/5 via-transparent to-transparent" />
    </div>
  );
};

export default ThreeBackground;
