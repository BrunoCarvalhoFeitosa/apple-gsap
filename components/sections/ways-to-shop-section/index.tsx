"use client"
import Image from "next/image"
import { Swiper, SwiperSlide } from "swiper/react"
import { Navigation, Keyboard, Autoplay } from "swiper/modules"
import { useGSAP } from "@gsap/react"
import { animateWithGsap } from "@/utils/animation"
import { waysToShop } from "@/utils/constants"
import { rightImg } from "@/utils"

export const WaysToShopSection = () => {
    useGSAP(() => {
        animateWithGsap("#ways-to-shop", {
            scrollTrigger: {
                trigger: "#ways-to-shop",
                start: "20% bottom"
            },
            opacity: 1,
            y: 0,
            duration: 2.5,
            ease: "power1"
        })
    }, [])

    return (
        <section id="ways-to-shop" className="common-padding opacity-0 translate-y-20">
            <div className="screen-max-width">
                <div className="mb-8 flex items-center justify-between">
                    <h3 className="ways-to-shop-title">
                        Ways to shop and save at Apple.
                    </h3>
                    <div>
                        <div className="flex items-center gap-x-2">
                            <span className="link">
                                Shop iPhone
                            </span>
                            <Image
                                src={rightImg}
                                alt="Watch"
                                title="Watch"
                            />
                        </div>
                    </div>
                </div>
                <div>
                    <Swiper
                        grabCursor={true}
                        centeredSlides={false}
                        slidesPerView={3}
                        spaceBetween={30}
                        loop={true}
                        autoplay={true}
                        speed={5000}
                        keyboard={{ enabled: true }}
                        modules={[Keyboard, Autoplay]}
                    >
                        {waysToShop.map((ways) => (
                            <SwiperSlide key={ways.id} className="w-full p-8 min-h-[350px] rounded-md bg-zinc overflow-hidden">
                                <div className="w-full h-full flex flex-col gap-y-4">
                                    <div>
                                        <Image
                                            src={ways.icon}
                                            alt={ways.title}
                                            title={ways.title}
                                        />
                                    </div>
                                    <div>
                                        <h5 className="text-3xl font-semibold">
                                            {ways.title}
                                        </h5>
                                    </div>
                                    <div>
                                        <p className="font-light">
                                            {ways.description}
                                        </p>
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>
        </section>
    )
}