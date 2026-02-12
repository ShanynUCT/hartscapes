
import { useState, useEffect, useRef } from 'react';
import * as THREE from 'three';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { OrbitControls, useTexture, PerspectiveCamera } from '@react-three/drei';

function Terrain({ position = [0, 0, 0] as [number, number, number], scale = [1, 1, 1] as [number, number, number], ...props }) {
  const mesh = useRef<THREE.Mesh>(null!);
  const [hovered, setHovered] = useState(false);
  
  const [heightMap] = useTexture(['https://images.unsplash.com/photo-1506102383123-c8ef1e872756?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3']);
  
  useFrame((state) => {
    if (mesh.current) {
      mesh.current.rotation.z = THREE.MathUtils.lerp(
        mesh.current.rotation.z,
        hovered ? -0.2 : 0,
        0.1
      );
      mesh.current.position.y = THREE.MathUtils.lerp(
        mesh.current.position.y,
        hovered ? -0.5 : 0,
        0.1
      );
    }
  });

  return (
    <mesh
      ref={mesh}
      position={position}
      scale={scale}
      receiveShadow
      castShadow
      onPointerOver={() => setHovered(true)}
      onPointerOut={() => setHovered(false)}
      {...props}
    >
      <planeGeometry args={[10, 10, 32, 32]} />
      <meshStandardMaterial
        color={hovered ? "#68AB45" : "#4E8135"}
        displacementMap={heightMap}
        displacementScale={1.5}
        flatShading
      />
    </mesh>
  );
}

function Trees({ count = 15, ...props }) {
  const groupRef = useRef<THREE.Group>(null!);
  const positions = useRef<Array<[number, number, number]>>([]);
  
  // Generate random positions once
  useEffect(() => {
    positions.current = Array.from({ length: count }, () => [
      THREE.MathUtils.randFloatSpread(8),
      0,
      THREE.MathUtils.randFloatSpread(8)
    ] as [number, number, number]);
  }, [count]);

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = state.clock.getElapsedTime() * 0.05;
    }
  });

  return (
    <group ref={groupRef} {...props}>
      {positions.current.map((position, i) => (
        <group key={i} position={position}>
          {/* Tree trunk */}
          <mesh castShadow position={[0, 0.5, 0] as [number, number, number]}>
            <cylinderGeometry args={[0.1, 0.15, 1, 8]} />
            <meshStandardMaterial color="#9D7E56" />
          </mesh>
          
          {/* Tree foliage */}
          <mesh castShadow position={[0, 1.5, 0] as [number, number, number]}>
            <coneGeometry args={[0.5, 1.5, 8]} />
            <meshStandardMaterial color={i % 2 === 0 ? "#68AB45" : "#3B6128"} />
          </mesh>
        </group>
      ))}
    </group>
  );
}

function Rocks({ count = 10, ...props }) {
  const groupRef = useRef<THREE.Group>(null!);
  const positions = useRef<Array<[number, number, number]>>([]);
  
  // Generate random positions once
  useEffect(() => {
    positions.current = Array.from({ length: count }, () => [
      THREE.MathUtils.randFloatSpread(10),
      -0.4,
      THREE.MathUtils.randFloatSpread(10)
    ] as [number, number, number]);
  }, [count]);

  return (
    <group ref={groupRef} {...props}>
      {positions.current.map((position, i) => (
        <mesh key={i} position={position} castShadow receiveShadow rotation={[0, Math.random() * Math.PI, 0] as [number, number, number]}>
          <dodecahedronGeometry args={[0.2 + Math.random() * 0.3, 0]} />
          <meshStandardMaterial 
            color={i % 3 === 0 ? "#C5B192" : i % 2 === 0 ? "#9D7E56" : "#785E3E"} 
            roughness={0.8} 
          />
        </mesh>
      ))}
    </group>
  );
}

function AnimatedCamera() {
  const { camera } = useThree();
  const cameraRef = useRef<THREE.PerspectiveCamera>();
  
  useEffect(() => {
    if (cameraRef.current) {
      camera.position.set(0, 3, 8);
      camera.lookAt(0, 0, 0);
    }
  }, [camera]);

  useFrame(({ clock }) => {
    const t = clock.getElapsedTime() * 0.2;
    camera.position.x = Math.sin(t) * 8;
    camera.position.z = Math.cos(t) * 8;
    camera.lookAt(0, 0, 0);
  });

  return <PerspectiveCamera ref={cameraRef} makeDefault fov={75} near={0.1} far={1000} />;
}

function Scene() {
  return (
    <>
      <AnimatedCamera />
      <ambientLight intensity={0.5} />
      <directionalLight 
        position={[10, 10, 10] as [number, number, number]} 
        intensity={1} 
        castShadow 
        shadow-mapSize-width={2048} 
        shadow-mapSize-height={2048} 
      />
      <Terrain rotation={[-Math.PI / 2, 0, 0] as [number, number, number]} />
      <Trees />
      <Rocks />
      <mesh rotation={[-Math.PI / 2, 0, 0] as [number, number, number]} position={[0, -0.5, 0] as [number, number, number]} receiveShadow>
        <planeGeometry args={[30, 30]} />
        <meshStandardMaterial color="#E2D9CA" />
      </mesh>
    </>
  );
}

export default function ThreeScene() {
  return (
    <div className="h-screen w-full">
      <Canvas shadows>
        <Scene />
      </Canvas>
    </div>
  );
}
