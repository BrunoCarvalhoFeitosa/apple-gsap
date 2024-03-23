"use client"
import { useRef } from "react"
import Image from "next/image"
import { useGSAP } from "@gsap/react"
import { animateWithGsap } from "@/utils/animation"
import { chipImg, frameImg } from "@/utils"

export const ChipSection = () => {
    const videoRef = useRef<HTMLVideoElement | null>(null)
    
    useGSAP(() => {
        animateWithGsap("#chip", {
            scrollTrigger: {
                trigger: "#chip",
                start: "20% bottom"
            },
            opacity: 1,
            scale: 1.05,
            duration: 2,
            ease: "power2.inOut"
        })

        animateWithGsap("#chip-video", {
            scrollTrigger: {
                trigger: "#chip-video",
                toggleActions: "play pause reverse restart",
                start: "-10% bottom"
            },
            onComplete: () => {
                if (videoRef && videoRef.current) {
                    videoRef.current.play()
                }
            }
        })

        animateWithGsap(".hiw-title", {
            opacity: 1,
            y: 0
        })

        animateWithGsap(".hiw-subtitle", {
            opacity: 1,
            y: 0
        })

        animateWithGsap(".hiw-video", {
            opacity: 1,
            y: 0
        })

        animateWithGsap(".g_fadeIn", {
            opacity: 1,
            y: 0,
            duration: 1,
            ease: "power2.inOut"
        })

        animateWithGsap("#chip-subtitle", {
            opacity: 1,
            y: 0,
            duration: 1,
            ease: "power2.inOut"
        })
    }, [])
    
    return (
        <section className="common-padding">
            <div className="screen-max-width">
                <div id="chip" className="my-20 flex-center w-full opacity-0 scale-75">
                    <Image
                        src={chipImg}
                        width={180}
                        height={180}
                        alt="Chip A17 Pro"
                        title="Chip A17 Pro"
                    />
                </div>
                <div className="flex flex-col items-center">
                    <h2 className="hiw-title">
                        A17 Pro Chip.
                        <br />
                        Now the game got serious.
                    </h2>
                    <p className="hiw-subtitle">
                        The biggest revolution in the history of Apple GPUs is already happening.
                    </p>
                </div>
                <div className="mt-10 md:mt-20 mb-14">
                    <div className="relative flex-center h-full">
                        <div className="overflow-hidden">
                            <Image
                                src={frameImg}
                                alt="Honkay: Start Rail"
                                title="Honkay: Star Rail"
                                className="relative bg-transparent z-10"
                            />
                        </div>
                        <div className="hiw-video">
                            <video
                                autoPlay
                                muted
                                playsInline={true}
                                preload="none"
                                ref={videoRef}
                                title="Honkay: Star Rail"
                                id="chip-video"
                                className="pointer-events-none"
                            >
                                <source src="/assets/videos/frame.mp4" type="video/mp4" />
                            </video>
                        </div>
                    </div>
                    <div className="mb-16">
                        <p className="font-bold text-gray-600 text-center">
                            Honkai: Star Rail
                        </p>
                    </div>
                    <div id="chip-subtitle" className="flex flex-col items-center opacity-0 translate-y-20">
                        <span className="hiw-text">
                            New
                        </span>
                        <h3 className="hiw-bigtext">
                            Pro category GPU
                        </h3>
                        <span className="hiw-text">
                            with 6 cores
                        </span>
                    </div>
                    <div className="mt-8 mx-auto md:w-2/4 g_fadeIn">
                        <p className="font-normal text-center mb-4">
                            The A17 Pro is an entirely new category of chip
                            for iPhone and takes our graphics performance to 
                            an unmatched level.
                        </p>
                        <p className="font-normal text-center">
                            <span className="text-zinc-600 font-semibold">Mobile games become more immersive</span>, with incredibly
                            detailed environments and much more realistic characters.
                            The A17 Pro chip also ensures unprecedented speed with 
                            industry-leading speed and efficiency. It's a portable powerhouse.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}