"use client"
import { useScroll } from "@/hooks/use-scroll"
import { scrollImg } from "@/utils"
import Image from "next/image"

export const ScrollTop = () => {
    const scrolled = useScroll()

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        })
    }

    return (
        <div className="fixed bottom-4 right-4 md:bottom-7 md:right-8 z-[99]">
            <button
                onClick={scrollToTop}
                className={`${scrolled ? "flex" : "hidden"} flex-col gap-y-1 justify-center items-center w-14 h-14 bg-zinc-900 outline-none cursor-pointer`}
            >
                <div>
                    <Image
                        src={scrollImg}
                        width={35}
                        height={35}
                        alt="Scroll top"
                    />
                </div>
            </button>
        </div>
    )
}