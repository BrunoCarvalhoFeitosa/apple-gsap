"use client"
import { useEffect, useRef, useState } from "react"
import * as THREE from "three"
import gsap from "gsap"
import { useGSAP } from "@gsap/react"
import { ModelView } from "@/components/model-3d/model-view"
import { yellowImg } from "@/utils"
import { Canvas } from "@react-three/fiber"
import { View } from "@react-three/drei"
import { models, sizes } from "@/utils/constants"
import { animateWithGsap, animateWithGsapTimeline } from "@/utils/animation"

export const ModelSection = () => {
    const [isReady, setIsReady] = useState<boolean>(false)
    const [size, setSize] = useState<string>("small")
    const [model, setModel] = useState({
        title: "iPhone 15 Pro in Natural Titanium",
        color: ["#8F8A81", "#FFE7B9", "#6F6C64"],
        img: yellowImg
    })
    const cameraControlSmall = useRef()
    const cameraControlLarge = useRef()
    const small = useRef(new THREE.Group())
    const large = useRef(new THREE.Group())
    const [smallRotation, setSmallRotation] = useState<number>(0)
    const [largeRotation, setLargeRotation] = useState<number>(0)
    const timeline = gsap.timeline()

    useEffect(() => {
        if (size === "large") {
            animateWithGsapTimeline(timeline, small, smallRotation, "#view1", "#view2", {
                transform: "translateX(-100%)",
                duration: 2
            })
        }
        
        if (size === "small") {
            animateWithGsapTimeline(timeline, large, largeRotation, "#view2", "#view1", {
                transform: "translateX(0)",
                duration: 2
            })
        }
    }, [size])

    useEffect(() => {
        if (typeof document !== undefined) {
            setIsReady(true)
        }
    }, [])

    useGSAP(() => {
        animateWithGsap("#model-title", {
            opacity: 1,
            y: 0
        })
    }, [])

    return (
        <section className="common-padding">
            <div className="screen-max-width">
                <div className="mb-5">
                    <h2 id="model-title" className="section-heading">
                        Take a closer look.
                    </h2>
                </div>
                <div className="flex flex-col items-center">
                    <div className="relative w-full h-[75vh] md:h-[90vh] lg:h-[100vh] overflow-hidden">
                        <ModelView
                            index={1}
                            groupRef={small}
                            gsapType="view1"
                            controlRef={cameraControlSmall}
                            setRotationState={setSmallRotation}
                            item={model}
                            size={size}
                        />
                        <ModelView
                            index={2}
                            groupRef={large}
                            gsapType="view2"
                            controlRef={cameraControlLarge}
                            setRotationState={setLargeRotation}
                            item={model}
                            size={size}
                        />
                        <Canvas
                            className="w-full h-full"
                            eventSource={isReady && document.body}
                            style={{
                                position: "fixed",
                                top: 0,
                                bottom: 0,
                                left: 0,
                                right: 0,
                                overflow: "hidden"
                            }}
                        >
                            <View.Port />
                        </Canvas>
                    </div>
                    <div className="mx-auto w-full">
                        <p className="mb-5 text-sm font-light text-center">
                            {model.title}
                        </p>
                        <div className="flex-center">
                            <div>
                                <ul className="color-container">
                                    {models.map((model, index) => (
                                        <li
                                            key={index}
                                            onClick={() => setModel(model)}
                                            className="mx-2 w-6 h-6 rounded-full cursor-pointer"
                                            style={{
                                                backgroundColor: model.color[0],
                                                border: "1px solid #444"
                                            }}
                                        />
                                    ))}
                                </ul>
                            </div>
                            <div>
                                <button className="size-btn-container">
                                    {sizes.map(({ label, value }) => (
                                        <span
                                            key={label}
                                            onClick={() => setSize(value)}
                                            className="size-btn"
                                            style={{
                                                backgroundColor: size === value ? "#FFF" : "transparent",
                                                color: size === value ? "#000" : "#FFF",
                                            }}
                                        >
                                            {label}
                                        </span>
                                    ))}
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}