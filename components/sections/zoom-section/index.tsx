"use client"
import { useGSAP } from "@gsap/react"
import { animateWithGsap } from "@/utils/animation"
import Image from "next/image"
import { zoomImg } from "@/utils"

export const ZoomSection = () => {
    useGSAP(() => {
        animateWithGsap("#zoom-container", {
            scrollTrigger: {
                trigger: "#zoom-container",
                start: "40% bottom"
            },
            opacity: 1,
            y: 0,
            duration: 2.5,
            ease: "power1"
        })

        animateWithGsap("#zoom-text-container", {
            scrollTrigger: {
                trigger: "#zoom-text-container",
                start: "10% bottom"
            },
            opacity: 1,
            y: 0,
            duration: 2.5,
            ease: "power1"
        })
    }, [])

    return (
        <section className="common-padding">
            <div id="zoom-container" className="screen-max-width opacity-0 translate-y-20">
                <div>
                    <h2 className="zoom-title">
                        120 mm of
                        <br />
                        pure Pro zoom.
                    </h2>
                </div>
                <div className="mt-10 overflow-hidden">
                    <Image
                        src={zoomImg}
                        alt="Zoom"
                        title="Zoom"
                        className="transition-all duration-300 scale-75 hover:scale-100 cursor-zoom-in"
                    />
                </div>
                <div id="zoom-text-container" className="opacity-0 translate-y-20">
                    <h3 className="zoom-subtitle">
                        5x optical zoom
                    </h3>
                    <h4 className="zoom-description">
                        with the 120 mm lens
                    </h4>
                    <p className="mx-auto w-2/3 zoom-text">
                        For iPhone 15 Pro Max, we designed a 5x Telephoto camera 
                        with the longest optical zoom of any iPhone ever to fit 
                        in our compact Pro camera system. Now you can take sharper 
                        close‑ups from farther away — like a phenomenal photo of your 
                        friend or a goal in your kid’s soccer match.
                    </p>
                </div>
            </div>
        </section>
    )
}