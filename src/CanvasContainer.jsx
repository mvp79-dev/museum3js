import { Html, Text } from "@react-three/drei";
import Experience from "./Experience";
import { Canvas } from '@react-three/fiber'
import { useThree } from "@react-three/fiber";
import { useEffect, useState } from "react";
import * as THREE from 'three';

function ToneMapping() {
    const { gl, scene } = useThree(({ gl, scene }) => ({ gl, scene }));
    useEffect(() => {
      gl.toneMapping = THREE.ACESFilmicToneMapping;
      gl.toneMappingExposure = 1.1;
      scene.traverse((object) => {
        if (object.material) {
          object.material.needsUpdate = true;
        }
      });
    }, [gl, scene]);
    return <></>;
  }

export default function CanvasContainer({ toggleOverlayOne, toggleOverlayTwo, toggleOverlayThree, toggleOverlayFour, toggleOverlayFive, toggleOverlaySix, handleNavigationClick }) {

  const [hovered, setHovered] = useState(false);

  const handleWhiteButtonHover = () => {
    setHovered(true);
  };

  const handleWhiteButtonLeave = () => {
    setHovered(false);
  };

  const handleWhiteButtonText = () => {
    handleNavigationClick(); // Call toggleOverlay function from props
  };

  const handleWhiteButtonOne = () => {
    toggleOverlayOne(); // Call toggleOverlay function from props
  };

  const handleWhiteButtonTwo = () => {
    toggleOverlayTwo();
  };

  const handleWhiteButtonThree = () => {
    toggleOverlayThree();
  };

  const handleWhiteButtonFour = () => {
    toggleOverlayFour(); 
  };

  const handleWhiteButtonFive = () => {
    toggleOverlayFive(); 
  };

  const handleWhiteButtonSix = () => {
    toggleOverlaySix(); 
  };

  const [hidden, set] = useState()


  const HtmlContent = () => {
    const { gl } = useThree();
    return (
      <>
        <Html occlude distanceFactor={1} portal={{ current: gl.domElement.parentNode }} position={[-0.2, -0.55, -5]} >
          <div className="white-button" onClick={handleWhiteButtonOne} >
            <div className="white-button-inside" />
          </div>
        </Html>
        <Html occlude distanceFactor={1} portal={{ current: gl.domElement.parentNode }} position={[4.5, -0.55, -2.6]} >
          <div className="white-button" onClick={handleWhiteButtonTwo} >
            <div className="white-button-inside" />
          </div>
        </Html>
        <Html occlude distanceFactor={1} portal={{ current: gl.domElement.parentNode }} position={[4.5, -0.55, 2.52]} >
          <div className="white-button" onClick={handleWhiteButtonThree} >
            <div className="white-button-inside" />
          </div>
        </Html>
        <Html occlude distanceFactor={1} portal={{ current: gl.domElement.parentNode }} position={[0, -0.55, 5]} >
          <div className="white-button" onClick={handleWhiteButtonFour} >
            <div className="white-button-inside" />
          </div>
        </Html>
        <Html occlude distanceFactor={1} portal={{ current: gl.domElement.parentNode }} position={[-4.3, -0.55, 2.52]} >
          <div className="white-button" onClick={handleWhiteButtonSix} >
            <div className="white-button-inside" />
          </div>
        </Html>
        <Html occlude distanceFactor={1} portal={{ current: gl.domElement.parentNode }} position={[-4.8, -0.55, -3]} >
          <div className="white-button" onClick={handleWhiteButtonFive} >
            <div className="white-button-inside" />
          </div>
        </Html>
        <Html occlude distanceFactor={1} portal={{ current: gl.domElement.parentNode }} position={[13, 0, 0]} >
          <div className="grey-button" onClick={handleWhiteButtonText} >
            <div className="grey-button-inside" />
          </div>
        </Html>
      </>
    );
  };

    return (
        <>
         <Canvas shadows >
            <HtmlContent />
            <ToneMapping />
            <Experience handleWhiteButtonOne={handleWhiteButtonOne} />
         </Canvas>
        </>
    )
}