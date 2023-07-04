import { Canvas } from '@react-three/fiber';
import Haeun99 from './Haeun99';

export default function Profile(){
    

    return (
        <div className="h-[500px]">
            <Canvas camera={{position:[6,5,8], fov:10}} className="w-full h-full">
                <ambientLight intensity={1.25} />
                <ambientLight intensity={0.1} />
                <directionalLight intensity={0.4} />
                <Haeun99 position={[0.4, -0.5, 0]} />
            </Canvas>
        </div>
    );

}