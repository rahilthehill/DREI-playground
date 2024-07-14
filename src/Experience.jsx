import {Cloud,Fisheye ,MeshReflectorMaterial,MeshWobbleMaterial,Text, Html, PivotControls, TransformControls, OrbitControls, Float } from "@react-three/drei"
import { useRef } from "react"

export default function Experience()
{
    

    const cubeRef = useRef()
    const sphereRef = useRef()
    const textRef = useRef()
   

    return <>
        
        <OrbitControls makeDefault />
        

        <directionalLight position={ [ 1, 2, 3 ] } intensity={ 4.5 } />
        <ambientLight intensity={ 1.5 } />

        <group position-y={-3}>

    <PivotControls 
    anchor={[0,0,0]} 
    depthTest={false}
    lineWidth={4}
    axisColors={['#9381ff', '#ff4d6d', '#7ae582']}
    scale={1}
    
    >
        <mesh ref={sphereRef} position-x={ - 2 }>
            <sphereGeometry />
            <meshStandardMaterial color="orange" />
            {/* <Html 
                position={[1,1,0]}
                wrapperClass="label"
                center
                distanceFactor={6}
                occlude ={[sphereRef,cubeRef]}
            >This is a god damn sphere 👍 
            </Html> */}
        </mesh>
        </PivotControls>
    
        
        <PivotControls 
    anchor={[0,0,0]} 
    depthTest={false}
    lineWidth={3}
    axisColors={['#9381ff', '#ff4d6d', '#7ae582']}
    scale={1}
    
    >
        <mesh ref={cubeRef} position-x={ 2 } scale={ 1.5 }>
            <boxGeometry />
            <MeshWobbleMaterial
            factor={1}
            speed={8}
            color="mediumpurple" />
            
        </mesh>
        {/* <TransformControls object={cubeRef} mode="translate"/> */}
        </PivotControls>
      

        <mesh position-y={ - 1 } rotation-x={ - Math.PI * 0.5 } scale={ 10 }>
            <planeGeometry />
            <meshStandardMaterial color="greenyellow" />
            <MeshReflectorMaterial
                resolution={1028}
                blur={[1000,1000]}
                mixBlur={1}
                mirror={0.75}
                color="gray"
                

            ></MeshReflectorMaterial>
        </mesh>

      
        <Float
        speed ={1}
        floatIntensity = {1}
        center
        >
        <PivotControls 
            anchor={[0,-1,0]} 
            depthTest={false}
            lineWidth={1}
            axisColors={['#9381ff', '#ff4d6d', '#7ae582']}
            opacity={0.8}
            scale={1} >

        <Text ref={textRef}
            font="bangers-v20-latin-regular.woff"
            color="salmon"
            position-y={3.8}
            // maxWidth={0}
            textAlign="center"
            scale={0.8}
        
        >This text is using troika!
        
        </Text>

        </PivotControls>
        

       </Float>
       {/* <TransformControls object={textRef} mode="translate"/> */}
       
       

    {/* <pointLight  intensity={100}>
    <TransformControls mode="translate" />
    </pointLight> */}
        
        
  <PivotControls depthTest={false} anchor={[0,13,0]} disableScaling={true} disableRotations={true} >
  <Cloud seed={1} scale={0.5} volume={6} color="ivory" fade={10} position-y={10} />
  
  <Cloud seed={453} scale={0.5} volume={6} color="ivory" fade={10} position-y={8}position-x={-5} />
  <Cloud seed={2304} scale={0.5} volume={6} color="ivory" fade={10} position-y={7} position-x={4}/>
  </PivotControls>
  </group>
    </>
}