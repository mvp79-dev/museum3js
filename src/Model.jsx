import React, { useEffect, useRef, useState } from 'react'
import { useGLTF, useAnimations, PerspectiveCamera, ScrollControls, useScroll, Html } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'
import { useMediaQuery } from 'react-responsive';

export default function Model(props, { handleWhiteButtonOneClick }) {
  const isMobile = useMediaQuery({ query: '(max-width: 768px)' });
  const scroll = useScroll()
  const group = useRef()
  const { nodes, materials, animations } = useGLTF('./HOKA3.glb')
  const { actions, ref } = useAnimations(animations, group)
  const [anim3Playing, setAnim3Playing] = useState(false);

  useEffect(() => void (actions.cam.reset().play().paused = true), [])
  useFrame(() => (actions.cam.time = actions.cam.getClip().duration * scroll.offset))

  useEffect(() => {
    // Loop through all animations and start them except Anim_0
    for (const key in actions) {
      if (key !== 'cam') {
        actions[key].reset().play();
      }
    }
  }, []); // Run this effect only once after component mount
  const handleAnim3Click = () => {
    if (!anim3Playing) {
      // If Anim_3 is not playing, start it
      actions.Anim_3.reset().play();
      setAnim3Playing(true);
    } else {
      // If Anim_3 is playing, stop it
      actions.Anim_3.stop();
      setAnim3Playing(false);
    }
  };



  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Scene">
        <group name="world_root" rotation={[Math.PI / 2, 0, 0]} scale={0.01}>
          <mesh
            name="Aset_nature_rock_M_wdrhegb_00_LOD0"
            castShadow
            receiveShadow
            geometry={nodes.Aset_nature_rock_M_wdrhegb_00_LOD0.geometry}
            material={materials.Beach_Boulder_wdrhegb}
            position={[-23.159, 17.799, 0.881]}
            rotation={[0.367, -0.039, -1.163]}
          />
        </group>
        <mesh
          name="Cylinder"
          castShadow
          receiveShadow
          geometry={nodes.Cylinder.geometry}
          material={nodes.Cylinder.material}
          position={[6.85, 0.493, 0]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={0.01}
        />
        <mesh
          name="Fill"
          castShadow
          receiveShadow
          geometry={nodes.Fill.geometry}
          material={materials.OctDiffuse2_0}
          position={[13.669, 1.587, 0.003]}
          rotation={[1.344, 0, Math.PI / 2]}
          scale={0.01}
        />
        <group
          name="Null"
          position={[1.631, 1.421, -0.4]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={0.01}>
          <mesh
            name="empore"
            castShadow
            receiveShadow
            geometry={nodes.empore.geometry}
            material={materials['Material.012']}
            position={[-163.084, 39.962, 142.092]}
          />
        </group>
        <mesh
          name="floor"
          castShadow
          receiveShadow
          geometry={nodes.floor.geometry}
          material={materials['Material.012']}
          position={[0, 0.002, 0]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={0.01}
        />
        <group name="shoes001" position={[0, 1.627, 0]} rotation={[-Math.PI, 0, 0]} scale={0}>
          <mesh
            name="shoe_middle"
            castShadow
            receiveShadow
            geometry={nodes.shoe_middle.geometry}
            material={materials.Mat}
            position={[-163.053, -2613.363, 247.73]}
            rotation={[-0.302, 0.968, 0.925]}
          />
        </group>
        <group
          name="shoes_6"
          position={[0.005, 1.362, -5.075]}
          rotation={[-Math.PI, 0, 0]}
          scale={0}>
          <mesh
            name="shoe_middle002"
            castShadow
            receiveShadow
            geometry={nodes.shoe_middle002.geometry}
            material={materials['Material.018']}
            position={[-163.053, -2613.361, 247.733]}
            rotation={[-0.302, 0.968, 0.925]}
          />
        </group>
        <group
          name="shoes_5"
          position={[-4.405, 1.362, -2.584]}
          rotation={[-Math.PI, 0, 0]}
          scale={0}>
          <mesh
            name="shoe_middle_2"
            castShadow
            receiveShadow
            geometry={nodes.shoe_middle_2.geometry}
            material={materials['Material.017']}
            position={[-163.051, -2613.363, 247.729]}
            rotation={[-0.302, 0.968, 0.925]}
          />
        </group>
        <group
          name="shoes_4"
          position={[-4.406, 1.362, 2.521]}
          rotation={[-Math.PI, 0, 0]}
          scale={0}>
          <mesh
            name="shoe_middle_3"
            castShadow
            receiveShadow
            geometry={nodes.shoe_middle_3.geometry}
            material={materials['Material.016']}
            position={[-163.051, -2613.361, 247.731]}
            rotation={[-0.302, 0.968, 0.925]}
          />
        </group>
        <group
          name="shoes_3"
          position={[-0.014, 1.362, 5.066]}
          rotation={[-Math.PI, 0, 0]}
          scale={0}>
          <mesh
            name="shoe_middle_4"
            castShadow
            receiveShadow
            geometry={nodes.shoe_middle_4.geometry}
            material={materials['Material.015']}
            position={[-163.053, -2613.363, 247.737]}
            rotation={[-0.302, 0.968, 0.925]}
          />
        </group>
        <group
          name="shoes_2"
          position={[4.376, 1.362, 2.533]}
          rotation={[-Math.PI, 0, 0]}
          scale={0}>
          <mesh
            name="shoe_middle_5"
            castShadow
            receiveShadow
            geometry={nodes.shoe_middle_5.geometry}
            material={materials['Material.014']}
            position={[-163.055, -2613.361, 247.733]}
            rotation={[-0.302, 0.968, 0.925]}
          />
        </group>
        <group
          name="shoes_1"
          position={[4.383, 1.362, -2.527]}
          rotation={[-Math.PI, 0, 0]}
          scale={0}>
          <mesh
            name="shoe_middle_6"
            castShadow
            receiveShadow
            geometry={nodes.shoe_middle_6.geometry}
            material={materials['Mat.002']}
            position={[-163.055, -2613.363, 247.729]}
            rotation={[-0.302, 0.968, 0.925]}
          />
        </group>
        <mesh
          name="walls_split1"
          castShadow
          receiveShadow
          geometry={nodes.walls_split1.geometry}
          material={materials['walls_1.001']}
          position={[1.543, 2.921, -0.244]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={0.01}
        />
        <mesh
          name="walls_split2"
          castShadow
          receiveShadow
          geometry={nodes.walls_split2.geometry}
          material={materials['walls_0.001']}
          position={[1.543, 2.921, -0.244]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={0.01}
        />
        <group
          name="cam"
          position={[-8.909, 1.6, -0.099]}
          rotation={[Math.PI / 2, 0, 1.585]}
          scale={0.01}
        >
          <PerspectiveCamera far={ 10000 } rotation={ [ Math.PI * -0.5, 0, 0 ] } fov={isMobile ? 85 : 40} makeDefault/>
        </group>
        <mesh
          name="walls_outer_cirlce"
          castShadow
          receiveShadow
          geometry={nodes.walls_outer_cirlce.geometry}
          material={materials.walls}
          position={[1.543, 2.921, -0.244]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={0.01}
        />
        <mesh
          name="laufbahn"
          castShadow
          receiveShadow
          geometry={nodes.laufbahn.geometry}
          material={materials.OctDiffuse2_0}
          position={[0, 0.002, 0]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={0.01}
        />
        <mesh
          name="stripes"
          castShadow
          receiveShadow
          geometry={nodes.stripes.geometry}
          material={nodes.stripes.material}
          position={[0, 0.002, 0]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={0.01}
        />
      </group>
    </group>
  )
}

useGLTF.preload('./HOKA3.glb')
