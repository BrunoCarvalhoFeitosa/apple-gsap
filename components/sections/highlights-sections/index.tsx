"use client"
import Image from "next/image"
import { useGSAP } from "@gsap/react"
import { VideoCarousel } from "@/components/sections/video-carousel"
import { rightImg, watchImg } from "@/utils"
import { animateWithGsap } from "@/utils/animation"

export const HighlightsSection = () => {
    useGSAP(() => {
        animateWithGsap("#highlights-title", {
            opacity: 1,
            y: 0
        })

        animateWithGsap(".film", {
            opacity: 1,
            y: 0
        })
    }, [])
    
    return (
        <section id="highlights" className="w-screen h-full common-padding overflow-hidden bg-zinc text-white">
            <div className="screen-max-width">
                <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center">
                    <div>
                        <h2 id="highlights-title" className="section-heading"> 
                            Get the highlights
                        </h2>
                    </div>
                    <div className="film opacity-0 translate-y-20 flex flex-col lg:flex-row flex-wrap lg:items-end lg:gap-5">
                        <div className="flex items-start lg:items-center gap-x-2">
                            <span className="link">
                                Watch the film
                            </span>
                            <Image
                                src={watchImg}
                                alt="Watch"
                                title="Watch"
                            />
                        </div>
                        <div className="flex items-center gap-x-2">
                            <span className="link">
                                Watch the event
                            </span>
                            <Image
                                src={rightImg}
                                alt="Watch"
                                title="Watch"
                            />
                        </div>
                    </div>
                </div>
                <VideoCarousel />
            </div>
        </section>
    )
}