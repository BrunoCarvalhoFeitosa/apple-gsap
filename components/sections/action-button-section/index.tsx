"use client"
import { useRef, useState } from "react"
import Image from "next/image"
import { useGSAP } from "@gsap/react"
import { animateWithGsap } from "@/utils/animation"
import { accessibilityImg, cameraImg, flashlightImg, focusImg, frameAccessibilityImg, frameCameraImg, frameFlashlightImg, frameFocusImg, frameMagnifierImg, frameShortcutImg, frameTranslateImg, frameVoiceMemoImg, magnifierImg, shortcutImg, silentImg, translateImg, voiceImg } from "@/utils"

export const ActionButtonSection = () => {
    const [activeValue, setActiveValue] = useState<string>("silent-mode")
    const videoRef = useRef<HTMLVideoElement | null>(null)

    const handleSelect = (event: React.MouseEvent<HTMLLIElement, MouseEvent>) => {
        const value = event.currentTarget.getAttribute("value")

        if (value) {
            setActiveValue(value)
        }
    }

    useGSAP(() => {
        animateWithGsap("#action-button-title", {
            scrollTrigger: {
                trigger: "#action-button-title",
                start: "-20% bottom"
            },
            opacity: 1,
            y: 0,
            duration: 1.5,
            ease: "power2.inOut"
        })

        animateWithGsap("#action-button-text", {
            scrollTrigger: {
                trigger: "#action-button-text",
                start: "-20% bottom"
            },
            opacity: 1,
            y: 0,
            duration: 1.5,
            ease: "power2.inOut"
        })

        animateWithGsap("#frame-silent", {
            scrollTrigger: {
                trigger: "#frame-silent",
                toggleActions: "play pause reverse restart",
                start: "200% top"
            },
            onComplete: () => {
                if (videoRef && videoRef.current) {
                    videoRef.current.play()
                }
            }
        })
    }, [])

    return (
        <section className="common-padding">
            <div className="screen-max-width">
                <div id="action-button-title" className="opacity-0 translate-y-20">
                    <h2 className="action-button-title">
                        Get in on the
                    </h2>
                    <h2 className="action-button-title">
                        Action button.
                    </h2>
                </div>
                <div id="action-button-text" className="mt-10 opacity-0 translate-y-20">
                    <p className="action-button-text">
                        By default, the Action button is set 
                        to toggle between Ring and Silent modes. 
                        If you choose a different action, you can 
                        use Control Center to mute or use Focus filters
                        to automatically set your iPhone to silent.
                        Whatever you’re doing, the Action button is at the 
                        ready. Launch Camera to catch a spontaneous selfie. 
                        Record an instant voice memo. You can even select 
                        Shortcut to open an app or run a series of tasks like 
                        switching on the lights in your living room and playing music.
                    </p>
                </div>
                <div className="mt-20 mx-auto flex flex-col lg:flex-row justify-center items-center gap-24 lg:w-[80%]">
                    <div className="flex-1">
                        <div className="mb-14">
                            <p className="action-button-description">
                                The all‑new Action button is <span className="text-white">a fast track to 
                                your favorite feature</span>. Once you set the one 
                                you want, just press and hold to launch the action.
                            </p>
                        </div>
                        <div>
                            <ul className="flex flex-col gap-y-2">
                                <li value="silent-mode" onClick={handleSelect}>
                                    <button className={`flex items-center gap-x-2 px-4 py-1 rounded-full border hover:bg-zinc-900 hover:text-white text-sm font-semibold ${activeValue === "silent-mode" ? "border-white text hover:bg-black" : "border-transparent text-zinc-500"} `}>
                                        <div>
                                            <Image
                                                src={silentImg}
                                                alt="Silent"
                                                title="Silent"
                                            />
                                        </div>
                                        <div>
                                            Silent mode
                                        </div>
                                    </button>
                                </li>
                                <li value="focus" onClick={handleSelect}>
                                    <button className={`flex items-center gap-x-2 px-4 py-1 rounded-full border hover:bg-zinc-900 hover:text-white text-sm font-semibold ${activeValue === "focus" ? "border-white text-white hover:bg-black" : "border-transparent text-zinc-500"} `}>
                                        <div>
                                            <Image
                                                src={focusImg}
                                                alt="Focus"
                                                title="Focus"
                                            />
                                        </div>
                                        <div>
                                            Focus
                                        </div>
                                    </button>
                                </li>
                                <li value="camera" onClick={handleSelect}>
                                    <button className={`flex items-center gap-x-2 px-4 py-1 rounded-full border hover:bg-zinc-900 hover:text-white text-sm font-semibold ${activeValue === "camera" ? "border-white text-white hover:bg-black" : "border-transparent text-zinc-500"} `}>
                                        <div>
                                            <Image
                                                src={cameraImg}
                                                alt="Camera"
                                                title="Camera"
                                            />
                                        </div>
                                        <div>
                                            Camera
                                        </div>
                                    </button>
                                </li>
                                <li value="flashlight" onClick={handleSelect}>
                                    <button className={`flex items-center gap-x-2 px-4 py-1 rounded-full border hover:bg-zinc-900 hover:text-white text-sm font-semibold ${activeValue === "flashlight" ? "border-white text-white hover:bg-black" : "border-transparent text-zinc-500"} `}>
                                        <div>
                                            <Image
                                                src={flashlightImg}
                                                alt="Flashlight"
                                                title="Flashlight"
                                            />
                                        </div>
                                        <div>
                                            Flashlight
                                        </div>
                                    </button>
                                </li>
                                <li value="voice-memo" onClick={handleSelect}>
                                    <button className={`flex items-center gap-x-2 px-4 py-1 rounded-full border hover:bg-zinc-900 hover:text-white text-sm font-semibold ${activeValue === "voice-memo" ? "border-white text hover:bg-black" : "border-transparent text-zinc-500"} `}>
                                        <div>
                                            <Image
                                                src={voiceImg}
                                                alt="Voice Memo"
                                                title="Voice Memo"
                                            />
                                        </div>
                                        <div>
                                            Voice Memo
                                        </div>
                                    </button>
                                </li>
                                <li value="translate" onClick={handleSelect}>
                                    <button className={`flex items-center gap-x-2 px-4 py-1 rounded-full border hover:bg-zinc-900 hover:text-white text-sm font-semibold ${activeValue === "translate" ? "border-white text-white hover:bg-black" : "border-transparent text-zinc-500"} `}>
                                        <div>
                                            <Image
                                                src={translateImg}
                                                alt="Translate"
                                                title="Translate"
                                            />
                                        </div>
                                        <div>
                                            Translate
                                        </div>
                                    </button>
                                </li>
                                <li value="magnifier" onClick={handleSelect}>
                                    <button className={`flex items-center gap-x-2 px-4 py-1 rounded-full border hover:bg-zinc-900 hover:text-white text-sm font-semibold ${activeValue === "magnifier" ? "border-white text-white hover:bg-black" : "border-transparent text-zinc-500"} `}>
                                        <div>
                                            <Image
                                                src={magnifierImg}
                                                alt="Magnifier"
                                                title="Magnifier"
                                            />
                                        </div>
                                        <div>
                                            Magnifier
                                        </div>
                                    </button>
                                </li>
                                <li value="shortcut" onClick={handleSelect}>
                                    <button className={`flex items-center gap-x-2 px-4 py-1 rounded-full border hover:bg-zinc-900 hover:text-white text-sm font-semibold ${activeValue === "shortcut" ? "border-white text-white hover:bg-black" : "border-transparent text-zinc-500"} `}>
                                        <div>
                                            <Image
                                                src={shortcutImg}
                                                alt="Shortcut"
                                                title="Shortcut"
                                            />
                                        </div>
                                        <div>
                                            Shortcut
                                        </div>
                                    </button>
                                </li>
                                <li value="accessibility" onClick={handleSelect}>
                                    <button className={`flex items-center gap-x-2 px-4 py-1 rounded-full border hover:bg-zinc-900 hover:text-white text-sm font-semibold ${activeValue === "accessibility" ? "border-white text-white hover:bg-black" : "border-transparent text-zinc-500"} `}>
                                        <div>
                                            <Image
                                                src={accessibilityImg}
                                                alt="Accessibility"
                                                title="Accessibility"
                                            />
                                        </div>
                                        <div>
                                            Accessibility
                                        </div>
                                    </button>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="flex-1">
                        {activeValue === "silent-mode" && (
                            <div>
                                <video
                                    autoPlay
                                    muted
                                    playsInline={true}
                                    preload="none"
                                    ref={videoRef}
                                    id="frame-silent"
                                    title="Silent"
                                >
                                    <source src="/assets/videos/frame-silent.mp4" type="video/mp4" />
                                </video>
                            </div>
                        )}
                        {activeValue === "focus" && (
                            <div>
                                <Image
                                    src={frameFocusImg}
                                    alt="Focus"
                                />
                            </div>
                        )}
                        {activeValue === "camera" && (
                            <div>
                                <Image
                                    src={frameCameraImg}
                                    alt="Camera"
                                />
                            </div>
                        )}
                        {activeValue === "flashlight" && (
                            <div>
                                <Image
                                    src={frameFlashlightImg}
                                    alt="Flashlight"
                                    title="Flashlight"
                                />
                            </div>
                        )}
                        {activeValue === "voice-memo" && (
                            <div>
                                <Image
                                    src={frameVoiceMemoImg}
                                    alt="Voice Memo"
                                    title="Voice Memo"
                                />
                            </div>
                        )}
                        {activeValue === "translate" && (
                            <div>
                                <Image
                                    src={frameTranslateImg}
                                    alt="Translate"
                                    title="Translate"
                                />
                            </div>
                        )}
                        {activeValue === "magnifier" && (
                            <div>
                                <Image
                                    src={frameMagnifierImg}
                                    alt="Magnifier"
                                    title="Magnifier"
                                />
                            </div>
                        )}
                        {activeValue === "shortcut" && (
                            <div>
                                <Image
                                    src={frameShortcutImg}
                                    alt="Shortcut"
                                    title="Shortcut"
                                />
                            </div>
                        )}
                        {activeValue === "accessibility" && (
                            <div>
                                <Image
                                    src={frameAccessibilityImg}
                                    alt="Accessibility"
                                    title="Accessibility"
                                />
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </section>
    )
}