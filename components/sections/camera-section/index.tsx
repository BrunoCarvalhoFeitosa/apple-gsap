"use client"
import Image from "next/image"
import { useGSAP } from "@gsap/react"
import { Swiper, SwiperSlide } from "swiper/react"
import { EffectCoverflow, Navigation, Pagination, Keyboard } from "swiper/modules"
import { cameraSlides } from "@/utils/constants"
import { animateWithGsap } from "@/utils/animation"
import { cameraPhoneFrameImg } from "@/utils"

export const CameraSection = () => {
    useGSAP(() => {
        animateWithGsap("#camera-title", {
            scrollTrigger: {
                trigger: "#camera-title",
                start: "20% bottom"
            },
            opacity: 1,
            y: 0,
            duration: 2.5,
            ease: "power1"
        })

        animateWithGsap("#camera-slide", {
            scrollTrigger: {
                trigger: "#camera-slide",
                start: "20% bottom"
            },
            opacity: 1,
            y: 0,
            duration: 2.5,
            ease: "power1"
        })

        animateWithGsap("#camera-frame", {
            scrollTrigger: {
                trigger: "#camera-frame",
                start: "20% bottom"
            },
            opacity: 1,
            y: 0,
            duration: 2.5,
            ease: "power1"
        })

        animateWithGsap("#camera-description", {
            scrollTrigger: {
                trigger: "#camera-description",
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
                <div id="camera-title" className="md:pl-28 md:w-2/3 opacity-0 translate-y-20">
                    <h3 className="camera-title">
                        With iPhone 15 Pro, you have multiple focal 
                        lengths to work with. It’s like having seven
                        pro lenses in your pocket, everywhere you go.
                    </h3>
                </div>
            </div>
            <div id="camera-slide" className="mt-32 flex justify-end w-full opacity-0 translate-y-20">
                <div className="w-full md:w-[86%]">
                    <Swiper
                        effect={"coverflow"}
                        grabCursor={true}
                        centeredSlides={false}
                        slidesPerView={2}
                        spaceBetween={0}
                        loop={true}
                        navigation={true}
                        pagination={{ type: "fraction" }}
                        keyboard={{ enabled: true }}
                        modules={[EffectCoverflow, Navigation, Pagination, Keyboard]}
                        coverflowEffect={{
                            rotate: 25,
                            stretch: 0,
                            depth: 50,
                            modifier: 1,
                        }}
                    >
                        {cameraSlides.map((slide) => (
                            <SwiperSlide key={slide.id} className="w-full">
                                <div className="flex flex-col justify-center items-center gap-y-3">
                                    <Image
                                        src={slide.image}
                                        alt={slide.text}
                                        title={slide.text}
                                    />
                                    <h4 className="m-0 p-0 text-xs md:text-base font-bold text-gray">
                                        {slide.text}
                                    </h4>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>
            <div className="screen-max-width">
                <div className="mx-auto lg:w-2/3">
                    <div className="flex flex-col items-center">
                        <div id="camera-frame" className="mt-20 opacity-0 translate-y-20">
                            <Image
                                src={cameraPhoneFrameImg}
                                alt="Camera 48MP"
                                title="Camera 48MP"
                            />
                        </div>
                        <div id="camera-description" className="opacity-0 translate-y-20">
                            <p className="camera-description">
                                The 48MP Main camera is more advanced than ever, 
                                capturing super‑high‑resolution photos with a new 
                                level of detail and color. You’ll see the improvements 
                                in your portraits. And  now you no longer have to switch
                                to Portrait mode.  If your subject is a person, dog, or cat, 
                                iPhone automatically  captures depth information. So you can
                                choose to instantly see  your photo as a portrait, with an artful
                                blur effect. Or later in the Photos app.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}