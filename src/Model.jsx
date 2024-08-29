import React, { useEffect, useRef, useState } from 'react'
import { useGLTF, useAnimations, PerspectiveCamera, ScrollControls, useScroll, Html } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'
import { useMediaQuery } from 'react-responsive';

export default function Model(props, { handleWhiteButtonOneClick }) {
  const isMobile = useMediaQuery({ query: '(max-width: 768px)' });
  const scroll = useScroll()
  const group = useRef()
  const { nodes, materials, animations } = useGLTF('./hoka11.glb')
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
          name="inside_floor"
          castShadow
          receiveShadow
          geometry={nodes.inside_floor.geometry}
          material={materials['Material.001']}
          rotation={[Math.PI / 2, 0, 0]}
          scale={0.01}
        />
        <mesh
          name="lines"
          castShadow
          receiveShadow
          geometry={nodes.lines.geometry}
          material={materials.Material}
          rotation={[Math.PI / 2, 0, 0]}
          scale={0.01}
        />
        <group
          name="cam"
          position={[-8.855, 1.6, -0.102]}
          rotation={[1.572, -0.058, 1.585]}
          scale={0.01}
        >
          <PerspectiveCamera far={ 10000 } rotation={ [ Math.PI * -0.5, 0, 0 ] } fov={isMobile ? 85 : 40} makeDefault/>
        </group>
        <mesh
          name="Cloner"
          castShadow
          receiveShadow
          geometry={nodes.Cloner.geometry}
          material={nodes.Cloner.material}
          position={[0, 0.493, 0]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={0.01}
        />
        <group
          name="Symmetry_1"
          position={[325.147, 539.605, 624.581]}
          rotation={[-Math.PI, 0.68, -Math.PI]}
          scale={0.417}>
          <group name="Null_1" rotation={[0.502, 0, 0]}>
            <mesh
              name="Null_1Cube_3"
              castShadow
              receiveShadow
              geometry={nodes.Null_1Cube_3.geometry}
              material={nodes.Null_1Cube_3.material}>
              <mesh
                name="Null_1Cube_3Cube_4"
                castShadow
                receiveShadow
                geometry={nodes.Null_1Cube_3Cube_4.geometry}
                material={nodes.Null_1Cube_3Cube_4.material}
                position={[2.24, 2.935, 15.793]}
                rotation={[0.213, 0, 0]}>
                <mesh
                  name="Null_1Cube_3Cube_4Cube_5"
                  castShadow
                  receiveShadow
                  geometry={nodes.Null_1Cube_3Cube_4Cube_5.geometry}
                  material={nodes.Null_1Cube_3Cube_4Cube_5.material}
                  position={[-0.037, 0.716, 16.885]}
                  rotation={[0.338, 0, 0]}
                />
              </mesh>
            </mesh>
          </group>
          <group name="Null_1_1" rotation={[-0.502, 0, Math.PI]} scale={-1}>
            <mesh
              name="Null_1_1Cube_3_1"
              castShadow
              receiveShadow
              geometry={nodes.Null_1_1Cube_3_1.geometry}
              material={nodes.Null_1_1Cube_3_1.material}
              rotation={[-1.005, 0, Math.PI]}
              scale={-1}>
              <mesh
                name="Null_1_1Cube_3_1Cube_4_1"
                castShadow
                receiveShadow
                geometry={nodes.Null_1_1Cube_3_1Cube_4_1.geometry}
                material={nodes.Null_1_1Cube_3_1Cube_4_1.material}
                position={[2.24, -11.754, -10.949]}
                rotation={[0.213, 0, 0]}>
                <mesh
                  name="Null_1_1Cube_3_1Cube_4_1Cube_5_1"
                  castShadow
                  receiveShadow
                  geometry={nodes.Null_1_1Cube_3_1Cube_4_1Cube_5_1.geometry}
                  material={nodes.Null_1_1Cube_3_1Cube_4_1Cube_5_1.material}
                  position={[-0.037, -16.621, -3.061]}
                  rotation={[0.338, 0, 0]}
                />
              </mesh>
            </mesh>
          </group>
        </group>
        <group
          name="Symmetry"
          position={[546.311, 533.3, -817.968]}
          rotation={[Math.PI, -0.746, Math.PI]}
          scale={0.417}>
          <group name="Null_1_1" rotation={[-0.502, 0, Math.PI]} scale={-1}>
            <mesh
              name="Null_1Cube_1"
              castShadow
              receiveShadow
              geometry={nodes.Null_1Cube_1.geometry}
              material={nodes.Null_1Cube_1.material}
              rotation={[-1.005, 0, Math.PI]}
              scale={-1}>
              <mesh
                name="Null_1Cube_1Cube_1_1"
                castShadow
                receiveShadow
                geometry={nodes.Null_1Cube_1Cube_1_1.geometry}
                material={nodes.Null_1Cube_1Cube_1_1.material}
                position={[2.24, -11.754, -10.949]}
                rotation={[0.213, 0, 0]}>
                <mesh
                  name="Null_1Cube_1Cube_1_1Cube_2_1"
                  castShadow
                  receiveShadow
                  geometry={nodes.Null_1Cube_1Cube_1_1Cube_2_1.geometry}
                  material={nodes.Null_1Cube_1Cube_1_1Cube_2_1.material}
                  position={[-0.037, -16.621, -3.061]}
                  rotation={[0.338, 0, 0]}
                />
              </mesh>
            </mesh>
          </group>
          <group name="Null001" rotation={[0.502, 0, 0]}>
            <mesh
              name="NullCube"
              castShadow
              receiveShadow
              geometry={nodes.NullCube.geometry}
              material={nodes.NullCube.material}>
              <mesh
                name="NullCubeCube_1"
                castShadow
                receiveShadow
                geometry={nodes.NullCubeCube_1.geometry}
                material={nodes.NullCubeCube_1.material}
                position={[2.24, 2.935, 15.793]}
                rotation={[0.213, 0, 0]}>
                <mesh
                  name="NullCubeCube_1Cube_2"
                  castShadow
                  receiveShadow
                  geometry={nodes.NullCubeCube_1Cube_2.geometry}
                  material={nodes.NullCubeCube_1Cube_2.material}
                  position={[-0.037, 0.716, 16.885]}
                  rotation={[0.338, 0, 0]}
                />
              </mesh>
            </mesh>
          </group>
        </group>
        <group
          name="Null002"
          position={[-1026.066, 2009.072, -1541.12]}
          rotation={[-0.502, 0, -Math.PI]}>
          <mesh
            name="Cube_1"
            castShadow
            receiveShadow
            geometry={nodes.Cube_1.geometry}
            material={nodes.Cube_1.material}
            position={[-482.193, 2041.45, 1244.01]}
            rotation={[0.502, 0, 0]}>
            <mesh
              name="Cube_1_2"
              castShadow
              receiveShadow
              geometry={nodes.Cube_1_2.geometry}
              material={nodes.Cube_1_2.material}
              position={[2.24, 15.793, -2.935]}
              rotation={[0.213, 0, 0]}>
              <mesh
                name="Cube_2"
                castShadow
                receiveShadow
                geometry={nodes.Cube_2.geometry}
                material={nodes.Cube_2.material}
                position={[-0.037, 16.885, -0.716]}
                rotation={[0.338, 0, 0]}
              />
            </mesh>
          </mesh>
        </group>
        <group
          name="Null_2"
          position={[-915.08, -2497.739, 268.203]}
          rotation={[-0.479, 0, Math.PI]}
        />
        <group
          name="Null003"
          position={[-1026.066, 1541.12, 2009.072]}
          rotation={[2.639, 0, Math.PI]}
        />
        <mesh
          name="Cylinder_1"
          castShadow
          receiveShadow
          geometry={nodes.Cylinder_1.geometry}
          material={nodes.Cylinder_1.material}
          position={[12.862, 0.493, 0]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={0.01}
        />
        <mesh
          name="Fill"
          castShadow
          receiveShadow
          geometry={nodes.Fill.geometry}
          material={materials.walls}
          position={[12.864, 1.587, 0.003]}
          rotation={[1.344, 0, Math.PI / 2]}
          scale={0.01}
        />
        <group
          name="bird"
          position={[10.3, 4.476, -3.785]}
          rotation={[Math.PI / 2, 0, -0.296]}
          scale={0.01}>
          <mesh
            name="body"
            castShadow
            receiveShadow
            geometry={nodes.body.geometry}
            material={nodes.body.material}
          />
          <mesh
            name="wing1"
            castShadow
            receiveShadow
            geometry={nodes.wing1.geometry}
            material={nodes.wing1.material}
            rotation={[0.087, 0, 0]}
          />
          <mesh
            name="wing2"
            castShadow
            receiveShadow
            geometry={nodes.wing2.geometry}
            material={nodes.wing2.material}
            rotation={[-0.087, 0, 0]}
          />
        </group>
        <mesh
          name="circles_2"
          castShadow
          receiveShadow
          geometry={nodes.circles_2.geometry}
          material={materials.walls}
          position={[1.543, 2.921, -0.244]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={0.01}
        />
        <mesh
          name="circles_1"
          castShadow
          receiveShadow
          geometry={nodes.circles_1.geometry}
          material={materials['walls.001']}
          position={[1.543, 2.921, -0.244]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={0.01}
        />
        <mesh
          name="circles"
          castShadow
          receiveShadow
          geometry={nodes.circles.geometry}
          material={materials['walls_0.001']}
          position={[1.543, 2.921, -0.244]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={0.01}
        />
        <mesh
          name="track_floor"
          castShadow
          receiveShadow
          geometry={nodes.track_floor.geometry}
          material={materials.OctDiffuse2_0}
          rotation={[Math.PI / 2, 0, 0]}
          scale={0.01}
        />
        <mesh
          name="track_floor_1"
          castShadow
          receiveShadow
          geometry={nodes.track_floor_1.geometry}
          material={materials.walls}
          rotation={[Math.PI / 2, 0, 0]}
          scale={0.01}
        />
      </group>
    </group>
  )
}

useGLTF.preload('./hoka11.glb')
