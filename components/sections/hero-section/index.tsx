"use client"
import { useEffect, useRef, useState } from "react"
import { useGSAP } from "@gsap/react"
import { animateWithGsap } from "@/utils/animation"

export const HeroSection = () => {
    const videoRef = useRef<HTMLVideoElement | null>(null)
    const [videoSrc, setVideoSrc] = useState<string>("")

    const handleVideoSrcSet = () => {
        if (window.innerWidth < 760) {
            setVideoSrc("/assets/videos/smallHero.mp4")
        } else {
            setVideoSrc("/assets/videos/hero.mp4")
        }
    }

    useEffect(() => {
        handleVideoSrcSet()
        window.addEventListener("resize", handleVideoSrcSet)

        return () => {
            window.removeEventListener("resize", handleVideoSrcSet)
        }
    }, [])

    useGSAP(() => {
        animateWithGsap("#hero", {
            opacity: 1,
            delay: 2
        })

        animateWithGsap("#cta", {
            opacity: 1,
            y: -50,
            delay: 2
        })

        animateWithGsap("#hero-video", {
            scrollTrigger: {
                trigger: "#hero-video",
                toggleActions: "play pause reverse restart",
                start: "-50% bottom"
            },
            onComplete: () => {
                if (videoRef && videoRef.current) {
                    videoRef.current.play()
                }
            }
        })
    }, [])

    return (
        <section className="relative flex flex-col justify-center items-center max-sm:gap-y-14 md:gap-y-28 lg:gap-y-4 w-full nav-height bg-black">
            <div className="flex-center flex-col w-full">
                <h2 id="hero" className="hero-title">
                    iPhone 15 Pro
                </h2>
            </div>
            <div className="mx-auto w-9/12 md:w-10/12">
                <video
                    autoPlay
                    muted
                    playsInline={true}
                    key={videoSrc}
                    preload="none"
                    ref={videoRef}
                    id="hero-video"
                    title="iPhone 15 Pro"
                >
                    <source src={videoSrc} type="video/mp4" />
                </video>
            </div>
            <div>
                <div id="cta" className="flex flex-col items-center opacity-0 translate-y-20">
                    <a href="#highlights" className="btn">
                        Buy
                    </a>
                    <p className="font-normal text-xl">
                        From $399/month or $999
                    </p>
                </div>
            </div>
        </section>
    )
}
