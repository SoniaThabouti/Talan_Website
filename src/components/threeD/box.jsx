import React from 'react';
// import { useLoader } from '@react-three/fiber';
// import { TextureLoader } from 'three/src/loaders/TextureLoader';
import { useTexture } from '@react-three/drei/core';

import text from '../../assets/talan_game.png';

export default function Box() {
// const colorMap = useLoader(TextureLoader, texture);
  const mapTexture = useTexture(text);

  return (
    <mesh rotation={[90, 0, 20]}>
      <boxBufferGeometry attach="geometry" args={[3, 3, 3]} />
      <meshStandardMaterial attach="material" map={mapTexture} />
      {/* <meshStandardMaterial map={colorMap} /> */}
    </mesh>
  );
}
