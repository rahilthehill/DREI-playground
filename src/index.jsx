import './style.css'
import ReactDOM from 'react-dom/client'
import { Canvas } from '@react-three/fiber'
import Experience from './Experience.jsx'
import {AsciiRenderer, PerspectiveCamera} from "@react-three/drei"
import { positionGeometry } from 'three/examples/jsm/nodes/Nodes.js'

const root = ReactDOM.createRoot(document.querySelector('#root'))

root.render(
    <Canvas
        camera={  {
            
            fov: 55,
            near: 0.1,
            far: 200,
            position: [10, 10, 15],
            
            
            
        } }
    >
          {/* <AsciiRenderer/> */}
        <Experience />
    </Canvas>
)