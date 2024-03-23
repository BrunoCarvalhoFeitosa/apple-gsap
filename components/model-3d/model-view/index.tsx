"use client"
import { MutableRefObject, Suspense } from "react"
import dynamic from "next/dynamic"
import * as THREE from "three"
import { OrbitControls, PerspectiveCamera, View } from "@react-three/drei"
import { Lights } from "@/components/model-3d/lights"
import { Loader } from "@/components/common/loader"

const ModelIphone3D = dynamic(() => import("@/components/model-3d/model-iphone-3d"), {
    ssr: false
})

interface ModelViewProps {
    index: number
    groupRef: MutableRefObject<THREE.Group>
    gsapType: string
    controlRef: MutableRefObject<any>
    setRotationState: React.Dispatch<React.SetStateAction<number>>
    size: string
    item: {
        title: string
        color: string[]
        img: string
    }
}

export const ModelView: React.FC<ModelViewProps> = ({
    index,
    groupRef,
    gsapType,
    controlRef,
    setRotationState,
    size,
    item
}) => {
    return (
        <View
            index={index}
            id={gsapType}
            className={`absolute w-full h-full md:h-[114%] ${index === 2 ? "right-[-100%]" : ""}`}
        >
            <ambientLight intensity={0.3} />
            <PerspectiveCamera makeDefault position={[0, 0, 4]} />
            <Lights />
            <OrbitControls 
                makeDefault
                ref={controlRef}
                enableRotate={true}
                enableZoom={false}
                enablePan={false}
                rotateSpeed={0.4}
                target={new THREE.Vector3(0, 0 ,0)}
                onEnd={() => setRotationState(controlRef.current.getAzimuthalAngle())}
            /> 
            <group
                ref={groupRef}
                name={`${index === 1} ? "small" : "large"`}
                position={[0, 0 ,0]}
            >
                <Suspense fallback={<Loader />}>
                    <ModelIphone3D 
                        scale={index === 1 ? [15, 15, 15] : [17, 17, 17]}
                        item={item}
                        size={size}
                    />
                </Suspense>
            </group>
        </View>
    )
}