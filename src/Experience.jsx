import { Environment, ScrollControls, Html, Scroll, SoftShadows, OrbitControls } from '@react-three/drei'
import Model from './Model'
import { Suspense, useState } from 'react'
import { Bloom, DepthOfField, EffectComposer, N8AO, Noise, SSAO } from '@react-three/postprocessing'
import { BlendFunction } from 'postprocessing'

export default function Experience() {

  return (
    <>
    <SoftShadows />
      <Suspense fallback  >
        <ScrollControls damping={1} maxSpeed={0.5} pages={10}>
            <Model position={ [ 0, -2, 0 ] } />
        </ScrollControls>
      </Suspense>
      <directionalLight 
        color={ "#FCEBE4" } shadow-bias={-0.001} castShadow position={[10, 35, -25]} 
        intensity={3} shadow-mapSize-width={4096} shadow-mapSize-height={4096} 
      >
        <orthographicCamera attach="shadow-camera" args={[-25, 25, -25, 25, 0.1, 100]} />
      </directionalLight>
      <EffectComposer enableNormalPass={true} >
        <SSAO
          blendFunction={BlendFunction.MULTIPLY} // blend mode
          samples={9} // amount of samples per pixel (shouldn't be a multiple of the ring count)
          rings={4} // amount of rings in the occlusion sampling pattern
          distanceThreshold={1.0} // global distance threshold at which the occlusion effect starts to fade out. min: 0, max: 1
          distanceFalloff={0.0} // distance falloff. min: 0, max: 1
          rangeThreshold={0.5} // local occlusion range threshold at which the occlusion starts to fade out. min: 0, max: 1
          rangeFalloff={0.1} // occlusion range falloff. min: 0, max: 1
          luminanceInfluence={0.9} // how much the luminance of the scene influences the ambient occlusion
          radius={20} // occlusion sampling radius
          scale={0.5} // scale of the ambient occlusion
          bias={0.5} // occlusion bias
          color={"black"}
        />
      </EffectComposer>
      <Environment files="./menv.hdr" background environmentIntensity={0.45} backgroundRotation={[0, Math.PI * -1.5, 0]} />

      </>
  )
}