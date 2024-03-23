"use client"
import Image from "next/image"
import { useGSAP } from "@gsap/react"
import { alligatorImg } from "@/utils"
import { animateWithGsap } from "@/utils/animation"

export const CaptureSection = () => {
    useGSAP(() => {
        animateWithGsap("#capture-title", {
            scrollTrigger: {
                trigger: "#capture-title",
                start: "100% bottom"
            },
            duration: 2.5,
            y: 0,
            ease: "power1"
        })

        animateWithGsap("#capture-subtitle", {
            scrollTrigger: {
                trigger: "#capture-subtitle",
                start: "100% bottom"
            },
            y: 0,
            duration: 1,
            ease: "power1"
        })

        animateWithGsap("#alligator", {
            scrollTrigger: {
                trigger: "#alligator",
                start: "20% bottom"
            },
            opacity: 1,
            y: 0,
            duration: 1.5,
            ease: "power2.inOut"
        })
    }, [])

    return (
        <section>
            <div className="px-6">
                <div className="screen-max-width">
                    <h2 id="capture-title" className="capture-bigtext">
                        A camera that captures your wildest imagination.
                    </h2>
                    <p id="capture-subtitle" className="capture-subtitle">
                        From dramatic framing flexibility to next-generation
                        portraits, see what you can do with our most powerful 
                        iPhone camera system.
                    </p>
                </div>
            </div>
            <div id="alligator" className="flex justify-end w-full opacity-0 translate-y-20">
                <Image
                    src={alligatorImg}
                    alt="Iguana"
                    title="Iguana"
                    className="w-full h-full"
                />
            </div>
        </section>
    )
}