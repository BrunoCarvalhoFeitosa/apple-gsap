"use client"
import Image from "next/image"
import { useRef, useState } from "react"
import { useGSAP } from "@gsap/react"
import { animateWithGsap } from "@/utils/animation"
import { Swiper, SwiperSlide } from "swiper/react"
import { EffectCoverflow, Pagination, Keyboard } from "swiper/modules"
import { hightlightsSlides } from "@/utils/constants"
import { pauseImg, playImg } from "@/utils"

export const VideoCarousel = () => {
    const videoRefs = useRef<(HTMLVideoElement | null)[]>([])
    const [videoStates, setVideoStates] = useState(hightlightsSlides.map(() => ({
        isPlaying: false,
    })))

    useGSAP(() => {
        animateWithGsap("#swiper", {
            opacity: 1,
            y: 0
        })
    }, [])

    const handlePlayPause = (index: number) => {
        setVideoStates(prevStates => {
            const updatedStates = [...prevStates]

            updatedStates[index] = {
                isPlaying: !prevStates[index].isPlaying,
            }

            return updatedStates
        })

        const videoRef = videoRefs.current[index]

        if (videoRef) {
            if (videoRef.paused) {
                videoRef.play()
            } else {
                videoRef.pause()
            }
        }
    }

    return (
        <div className="mt-8 flex items-center opacity-0 translate-y-20" id="swiper">
            <Swiper
                effect={"coverflow"}
                grabCursor={true}
                centeredSlides={false}
                slidesPerView={1}
                spaceBetween={0}
                loop={true}
                keyboard={{ enabled: true }}
                pagination={{ clickable: true }}
                modules={[EffectCoverflow, Pagination, Keyboard]}
                coverflowEffect={{
                    rotate: 25,
                    stretch: 0,
                    depth: 50,
                    modifier: 1,
                }}
            >
                {hightlightsSlides.map((slide, index) => (
                    <SwiperSlide key={slide.id} className="sm:pr-20 md:pr-10">
                        <div className="video-carousel_container">
                            <div className="relative w-full h-full flex-center overflow-hidden bg-black">
                                <video
                                    playsInline={true}
                                    preload="auto"
                                    muted
                                    autoPlay={false}
                                    controls={false}
                                    ref={el => (videoRefs.current[index] = el)}
                                    title="Highlights"
                                    onPlay={() => setVideoStates(prevStates => {
                                        const updatedStates = [...prevStates]
                                        updatedStates[index] = { isPlaying: true }
                                        return updatedStates
                                    })}
                                    onPause={() => setVideoStates(prevStates => {
                                        const updatedStates = [...prevStates]
                                        updatedStates[index] = { isPlaying: false }
                                        return updatedStates
                                    })}
                                >
                                    <source src={slide.video} type="video/mp4" />
                                </video>
                                <div className="absolute top-12 left-[5%] z-10">
                                    {slide.textLists.map((text) => (
                                        <p key={text} className="text-xl md:text-2xl font-medium">
                                            {text}
                                        </p>
                                    ))}
                                </div>
                                <div className="absolute bottom-8 right-6 z-10">
                                    <button
                                        className="control-btn"
                                        onClick={() => handlePlayPause(index)}
                                    >
                                        <Image
                                            src={videoStates[index].isPlaying ? pauseImg : playImg}
                                            alt={videoStates[index].isPlaying ? "Pause" : "Play"}
                                            title={videoStates[index].isPlaying ? "Pause" : "Play"}
                                            className="flex justify-center items-center"
                                        />
                                    </button>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    )
}