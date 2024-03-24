"use client"
import Image from "next/image"
import { useGSAP } from "@gsap/react"
import { animateWithGsap } from "@/utils/animation"
import { systemContactPosterImg, systemNamedropPosterImg, systemStickersPosterImg } from "@/utils"

export const SystemSection = () => {
    useGSAP(() => {
        animateWithGsap("#system", {
            scrollTrigger: {
                trigger: "#system",
                start: "-20% bottom"
            },
            opacity: 1,
            y: 0,
            duration: 1.5,
            ease: "power2.inOut"
        })
    }, [])

    return (
        <section id="system" className="common-padding opacity-0 translate-y-20">
            <div className="screen-max-width bg-zinc py-20 px-10 md:px-24 lg:px-32">
                <div className="w-full mb-20">
                    <h3 className="system-title text-zinc-700">
                        iOS 17.
                    </h3>
                    <h3 className="system-title text-white">
                        Style it out. Swap it over.
                    </h3>
                    <h3 className="system-title text-white">
                        Sticker it up.
                    </h3>
                </div>
                <div className="w-full grid grid-cols-1 lg:grid-cols-3 place-items-center gap-16 md:gap-28 lg:gap-10">
                    <div className="flex flex-col gap-y-6">
                        <div className="flex justify-center">
                            <Image
                                src={systemContactPosterImg}
                                alt="Contact Poster. Create your own poster that contacts will see when you call."
                                title="Contact Poster. Create your own poster that contacts will see when you call."
                                className="w-full lg:w-min object-cover"
                            />
                        </div>
                        <div>
                            <p className="text-zinc-500 font-semibold text-center lg:text-start">
                                <span className="text-white">Contact Poster.</span> Create your own poster that contacts will see when you call. Pick a favorite pic or Memoji, pair it with a favorite font, and there you have it — your very own calling card.
                            </p>
                        </div>
                    </div>
                    <div className="flex flex-col gap-y-6">
                        <div className="flex justify-center">
                            <Image
                                src={systemNamedropPosterImg}
                                alt="NameDrop. Want to swap contact info with someone? Just bring your iPhone close to theirs."
                                title="NameDrop. Want to swap contact info with someone? Just bring your iPhone close to theirs."
                                className="w-full lg:w-min object-cover"
                            />
                        </div>
                        <div>
                            <p className="text-zinc-500 font-semibold text-center lg:text-start">
                                <span className="text-white">Namedrop.</span> Want to swap contact info with someone? Just bring your iPhone close to theirs. You can both choose what you want to share, and the information transfers instantly.
                            </p>
                        </div>
                    </div>
                    <div className="flex flex-col gap-y-6">
                        <div className="flex justify-center">
                            <Image
                                src={systemStickersPosterImg}
                                alt="Live Stickers. Touch and hold an object in a photo to lift it from the background and create a sticker."
                                title="Live Stickers. Touch and hold an object in a photo to lift it from the background and create a sticker."
                                className="w-full lg:w-min object-cover"
                            />
                        </div>
                        <div>
                            <p className="text-zinc-500 font-semibold text-center lg:text-start">
                                <span className="text-white">Live Stickers.</span> Touch and hold an object in a photo to lift it from the background and create a sticker. Add effects like Puffy and Shiny. Or create animated stickers from Live Photos.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}