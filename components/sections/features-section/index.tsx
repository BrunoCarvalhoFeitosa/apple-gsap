"use client"
import { useRef } from "react"
import Image from "next/image"
import { useGSAP } from "@gsap/react"
import { animateWithGsap } from "@/utils/animation"
import { explore1Img, explore2Img } from "@/utils"

export const FeaturesSection = () => {
    const videoRef = useRef<(HTMLVideoElement | null)>(null)

    useGSAP(() => {
        animateWithGsap("#explore-video", {
            scrollTrigger: {
                trigger: "#explore-video",
                toggleActions: "play pause reverse restart",
                start: "-10% bottom"
            },
            onComplete: () => {
                if (videoRef && videoRef.current) {
                    videoRef.current.play()
                }
            }
        })

        animateWithGsap("#features-title", {
            opacity: 1,
            y: 0
        })

        animateWithGsap(".g_grow", {
            opacity: 1,
            scale: 1,
            ease: "power1",
            scrub: 5.5
        })
    }, [])

    return (
        <section className="relative common-padding overflow-hidden bg-zinc">
            <div className="screen-max-width">
                <div className="mb-12 w-full">
                    <h2 id="features-title" className="section-heading">
                        Explore the full story.
                    </h2>
                </div>
                <div className="flex flex-col justify-center items-center overflow-hidden">
                    <div className="mt-32 mb-24 pl-24">
                        <h3 className="text-5xl lg:text-7xl font-semibold">
                            iPhone
                        </h3>
                        <h3 className="text-5xl lg:text-7xl font-semibold">
                            Forged in titanium.
                        </h3>
                    </div>
                    <div className="sm:px-10 flex-center flex-col gap-y-5">
                        <div className="relative flex items-center w-full h-[60vh]">
                            <video
                                muted
                                autoPlay
                                playsInline={true}
                                preload="none"
                                ref={videoRef}
                                title="Titanium"
                                id="explore-video"
                                className="w-full h-full object-cover object-center"
                            >
                                <source src="/assets/videos/explore.mp4" type="video/mp4" />
                            </video>
                        </div>
                        <div className="relative flex flex-col w-full">
                            <div className="feature-video-container">
                                <div className="flex-1 h-[40vh] md:h-[40vh] lg:h-[70vh] overflow-hidden">
                                    <Image
                                        src={explore1Img}
                                        alt="Titanium"
                                        title="Titanium"
                                        className="feature-video g_grow"
                                    />
                                </div>
                                <div className="flex-1 h-[40vh] md:h-[40vh] lg:h-[70vh] overflow-hidden">
                                    <Image
                                        src={explore2Img}
                                        alt="Titanium"
                                        title="Titanium"
                                        className="feature-video g_grow"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}