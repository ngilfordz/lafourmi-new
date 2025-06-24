
import { Canvas } from "@react-three/fiber";
import { PerspectiveCamera } from "@react-three/drei";
import { useThree, useFrame } from "@react-three/fiber";
import { SpotLight, useDepthBuffer } from '@react-three/drei';
import * as THREE from 'three';
import React, { Suspense, useRef, useState, useEffect, forwardRef, useMemo, useCallback } from "react";
import { Vector3, Matrix4, Quaternion } from "three";
import { RoundedBox } from "@react-three/drei";

const RubiksCubeModel = forwardRef<any, any>((props, ref) => {
  const ANIMATION_DURATION = 1.2;
  const GAP = 0.01;
  const RADIUS = 0.075;
  const mainGroupRef = useRef<THREE.Group>(null);
  const isAnimatingRef = useRef(false);
  const currentRotationRef = useRef(0);
  const lastMoveAxisRef = useRef(null);
  const currentMoveRef = useRef(null);
  const animationFrameRef = useRef(null);
  const isMountedRef = useRef(true);
  const viewportSizeRef = useRef({ width: window.innerWidth, height: window.innerHeight });
  const isResizingRef = useRef(false);
  const resizeTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const [size, setSize] = useState(0.8);
  const [cubes, setCubes] = useState<any[]>([]);
  const [isVisible, setIsVisible] = useState(true);
  const [deviceSettings, setDeviceSettings] = useState(() => {
    const isMobile = window.innerWidth < 768;
    return {
      smoothness: isMobile ? 2 : 4,
      castShadow: !isMobile,
      receiveShadow: !isMobile
    };
  });

  const reusableVec3 = useMemo(() => new Vector3(), []);
  const reusableMatrix4 = useMemo(() => new Matrix4(), []);
  const reusableQuaternion = useMemo(() => new Quaternion(), []);

  React.useImperativeHandle(ref, () => ({
    ...mainGroupRef.current,
    reset: resetCube
  }));

  const initializeCubes = useCallback(() => {
    const initial: any[] = [];
    const positions = [-1, 0, 1];
    for (let x of positions) {
      for (let y of positions) {
        for (let z of positions) {
          initial.push({
            position: [x, y, z], // Use array instead of Vector3 for better compatibility
            rotationMatrix: new Matrix4().identity(),
            id: `cube-${x}-${y}-${z}`,
            originalCoords: { x, y, z }
          });
        }
      }
    }
    return initial;
  }, []);

  useEffect(() => {
    setCubes(initializeCubes());
    isMountedRef.current = true;
    return () => {
      isMountedRef.current = false;
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
        animationFrameRef.current = null;
      }
      if (resizeTimeoutRef.current) {
        clearTimeout(resizeTimeoutRef.current);
        resizeTimeoutRef.current = null;
      }
    };
  }, [initializeCubes]);

  const resetCube = useCallback(() => {
    if (!isMountedRef.current) return;
    setCubes(initializeCubes());
    if (mainGroupRef.current) {
      mainGroupRef.current.rotation.set(0, 0, 0);
    }
    isAnimatingRef.current = false;
    currentRotationRef.current = 0;
    lastMoveAxisRef.current = null;
    currentMoveRef.current = null;
    if (animationFrameRef.current) {
      cancelAnimationFrame(animationFrameRef.current);
      animationFrameRef.current = null;
    }
  }, [initializeCubes]);

  useFrame((state, delta) => {
    if (mainGroupRef.current && !isAnimatingRef.current) {
      mainGroupRef.current.rotation.y += delta * 0.2;
      mainGroupRef.current.rotation.x += delta * 0.1;
    }
  });

  return (
    <group ref={mainGroupRef}>
      {cubes.map((cube, index) => (
        <RoundedBox
          key={cube.id}
          position={cube.position}
          args={[0.95, 0.95, 0.95]}
          radius={RADIUS}
          smoothness={deviceSettings.smoothness}
          castShadow={deviceSettings.castShadow}
          receiveShadow={deviceSettings.receiveShadow}
        >
          <meshStandardMaterial 
            color="#000000" 
            metalness={0.1} 
            roughness={0.3}
            opacity={0.8}
            transparent
          />
        </RoundedBox>
      ))}
    </group>
  );
});

RubiksCubeModel.displayName = "RubiksCubeModel";

export function Scene() {
  return (
    <div className="fixed inset-0 -z-10 opacity-20">
      <Canvas shadows>
        <PerspectiveCamera makeDefault position={[5, 5, 5]} />
        <ambientLight intensity={0.5} />
        <directionalLight position={[10, 10, 5]} intensity={1} castShadow />
        <Suspense fallback={null}>
          <RubiksCubeModel />
        </Suspense>
      </Canvas>
    </div>
  );
}
