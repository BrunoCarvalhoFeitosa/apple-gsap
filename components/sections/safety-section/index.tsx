"use client"
import Image from "next/image"
import { useGSAP } from "@gsap/react"
import { animateWithGsap } from "@/utils/animation"
import { safetyImg } from "@/utils"

export const SafetySection = () => {
    useGSAP(() => {
        animateWithGsap("#safety", {
            scrollTrigger: {
                trigger: "#safety",
                start: "-20% bottom"
            },
            opacity: 1,
            y: 0,
            duration: 1.5,
            ease: "power2.inOut"
        })
    }, [])

    return (
        <section id="safety" className="common-padding opacity-0 translate-y-20">
            <div className="screen-max-width">
                <div className="relative w-full">
                    <div>
                        <Image
                            src={safetyImg}
                            alt="In an emergency, iPhone has your back."
                            title="In an emergency, iPhone has your back."
                            className="w-full object-cover"
                        />
                    </div>
                    <div className="absolute top-7 left-7 md:top-16 md:left-16 lg:top-32 lg:left-32 z-10">
                        <h3 className="safety-title">
                            In an emergency,
                        </h3>
                        <h3 className="safety-title">
                            iPhone has your back.
                        </h3>
                    </div>
                </div>
                <div className="py-10 px-8 md:py-16 md:px-14 lg:py-28 lg:px-32 flex flex-col md:flex-row justify-between gap-y-8 md:gap-y-0 md:gap-x-32 w-full bg-zinc">
                    <p className="md:font-semibold text-gray-400">
                        New <span className="text-white">Roadside Assistance via satellite<sup className="underline">14</sup></span> can get 
                        you help for things like a flat tire or a dead battery, 
                        even when you’re off the grid.
                    </p>
                    <p className="md:font-semibold text-gray-400">
                        iPhone also has <span className="text-white">Emergency SOS via satellite<sup className="underline">14</sup> and Crash 
                        Detection<sup className="underline">15</sup></span>, two vital safety features that have helped
                        save lives.
                    </p>
                </div>
            </div>
        </section>
    )
}