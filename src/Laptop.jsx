// Laptop.jsx
import React from 'react';
import { Html, PresentationControls, useGLTF } from "@react-three/drei";
import { XR } from '@react-three/xr';
import { Environment } from '@react-three/drei';

export default function Laptop() {
    const laptop = useGLTF('https://vazxmixjsiawhamofees.supabase.co/storage/v1/object/public/models/macbook/model.gltf');

    return (
        <XR>
            <Environment preset="park" background />
            <PresentationControls global polar={[-0.4, 0.2]} >
                <primitive object={laptop.scene} position={[0, -1.5, -3]} /> {/* Adjusted position */}
                <Html wrapperClass="laptop"
                    position={[0, 0.02, -4.5]} // Adjusted position for the iframe
                    transform
                    distanceFactor={1.2}
                    rotation-x={-0.25}
                >
                    <iframe src="https://vscode.dev" />
                </Html>
            </PresentationControls>
        </XR>
    );
}
