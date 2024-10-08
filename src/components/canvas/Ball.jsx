import React, { Suspense, useState, useEffect } from 'react'
import PropTypes from 'prop-types';
import { Canvas } from '@react-three/fiber'
import { Decal, Float, useTexture, OrbitControls, Preload } from '@react-three/drei'
import CanvasLoader from '../Loader'
const Ball = ({  imgUrl,isMobile }) => {
  const [decal] = useTexture([imgUrl])
  return (
    <Float speed={isMobile ? 1.25 : 1.75} rotationIntensity={isMobile ? 0.75 : 1} floatIntensity={isMobile ? 1.5 : 2}>
      <ambientLight intensity={0.25} />
      <directionalLight position={[0, 0, 0.05]} />
      <mesh castShadow receiveShadow scale={isMobile ? 2 : 2.75}>
        <sphereGeometry args={[1, 32, 32]} />
        <meshStandardMaterial color='#fff8eb' polygonOffset polygonOffsetFactor={-5} flatShading />
        <Decal
          position={[0, 0, 1]}
          rotation={[2 * Math.PI, 0, 6.25]}
          scale={isMobile ? 0.8 : 1}
          map={decal}
          flatShading
        />
      </mesh>
    </Float>
  )
}

Ball.propTypes = {
  imgUrl: PropTypes.string.isRequired,  // imgUrl is a required string
  isMobile: PropTypes.bool.isRequired,  // isMobile is a required boolean
};

const BallCanvas = ({ icon }) => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(max-width: 500px)');
    setIsMobile(mediaQuery.matches);

    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches);
    };

    mediaQuery.addEventListener('change', handleMediaQueryChange);
    return () => {
      mediaQuery.removeEventListener('change', handleMediaQueryChange);
    };
  }, []);
  return (
    <Canvas
     frameloop='demand' 
     dpr={isMobile ? [1, 1.5] : [1, 2]} 
     gl={{preserverDrawingBuffer: true}}

    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls enableZoom={false}/>
        <Ball imgUrl={icon} isMobile={isMobile} />
      </Suspense>
      <Preload all />
    </Canvas>
  )
}
export default BallCanvas