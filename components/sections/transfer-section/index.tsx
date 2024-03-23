"use client"
import Image from "next/image"
import { useGSAP } from "@gsap/react"
import { animateWithGsap } from "@/utils/animation"
import { transferImg } from "@/utils"

export const TransferSection = () => {
    useGSAP(() => {
        animateWithGsap("#transfer-description", {
            scrollTrigger: {
                trigger: "#transfer-description",
                start: "20% bottom"
            },
            opacity: 1,
            y: 0,
            duration: 2.5,
            ease: "power1"
        })
    }, [])

    return (
        <section className="common-padding">
            <div className="screen-max-width">
                <div className="lg:pl-40">
                    <h2 className="transfer-title">
                        Gigablast
                    </h2>
                    <h2 className="transfer-title">
                        your gigabits.
                    </h2>
                </div>
                <div className="mt-16 mx-auto w-[70%]">
                    <Image
                        src={transferImg}
                        alt="Up to 20x faster file transfers"
                        title="Up to 20x faster file transfers"
                        className="w-full object-cover"
                    />
                </div>
                <div id="transfer-description" className="mt-8 grid grid-cols-4 place-items-center gap-7 opacity-0 translate-y-20">
                    <div className="flex flex-col items-center">
                        <span className="transfer-text">
                            Up to
                        </span>
                        <h3 className="transfer-bigtext">
                            20x faster
                        </h3>
                        <span className="transfer-text">
                            file transfer
                        </span>
                    </div>
                    <div>
                        <p className="text-sm font-light text-center">
                            iPhone 15 Pro is the first iPhone to support 
                            USB 3,5 for a huge leap in data transfer speeds 
                            and faster pro workflows than ever before.
                        </p>
                    </div>
                    <div>
                        <p className="text-sm font-light text-center">
                            The new USB‑C connector lets you charge your Mac 
                            or iPad with the same cable you use to charge iPhone 
                            15 Pro. Bye‑bye, cable clutter.
                        </p>
                    </div>
                    <div>
                        <p className="text-sm font-light text-center">
                            And with all‑new Wi‑Fi 6E6 you'll get two times faster 
                            wireless speeds. So you can upload, download, and transfer 
                            files in a flash.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}