import React, { useRef, useMemo } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { OrbitControls, Sphere, MeshDistortMaterial, Float, Stars } from '@react-three/drei'
import * as THREE from 'three'
import { useTheme } from '../../context/ThemeContext'

const AnimatedSphere = ({ color }) => {
    return (
        <Float speed={2} rotationIntensity={1} floatIntensity={2}>
            <Sphere args={[1, 100, 200]} scale={2}>
                <MeshDistortMaterial
                    color={color}
                    attach="material"
                    distort={0.4}
                    speed={1.5}
                    roughness={0}
                    emissive={color}
                    emissiveIntensity={0.5}
                />
            </Sphere>
        </Float>
    )
}

const ParticleField = ({ color, count = 2000 }) => {
    const points = useMemo(() => {
        const p = new Float32Array(count * 3)
        for (let i = 0; i < count; i++) {
            p[i * 3] = (Math.random() - 0.5) * 50
            p[i * 3 + 1] = (Math.random() - 0.5) * 50
            p[i * 3 + 2] = (Math.random() - 0.5) * 50
        }
        return p
    }, [count])

    const ref = useRef()
    useFrame((state) => {
        ref.current.rotation.y = state.clock.getElapsedTime() * 0.05
        ref.current.rotation.x = state.clock.getElapsedTime() * 0.02
    })

    return (
        <points ref={ref}>
            <bufferGeometry>
                <bufferAttribute
                    attach="attributes-position"
                    count={count}
                    array={points}
                    itemSize={3}
                />
            </bufferGeometry>
            <pointsMaterial
                size={0.02}
                color={color}
                transparent
                opacity={0.3}
                sizeAttenuation
            />
        </points>
    )
}

const HeroBackground = () => {
    const { theme } = useTheme()
    const color = theme === 'dark' ? '#00f2ff' : '#0088ff'

    return (
        <div className="fixed top-0 left-0 w-full h-full -z-20 pointer-events-none transition-colors duration-500">
            <Canvas camera={{ position: [0, 0, 10], fov: 75 }}>
                <ambientLight intensity={theme === 'dark' ? 0.3 : 1} />
                <pointLight position={[10, 10, 10]} intensity={1.5} color={color} />
                <spotLight position={[-10, 10, 10]} angle={0.15} penumbra={1} intensity={1} color="#ffffff" />

                <Stars radius={100} depth={50} count={3000} factor={4} saturation={0} fade speed={1} />
                <ParticleField color={color} />
                <AnimatedSphere color={color} />

                <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={0.5} />
            </Canvas>
        </div>
    )
}

export default HeroBackground
