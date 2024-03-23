"use client"
import Image from "next/image"
import { Html } from "@react-three/drei"
import { loaderImg } from "@/utils"

export const Loader = () => {
    return (
        <Html>
            <Image
                src={loaderImg}
                alt="Loading"
                width={30}
                height={30}
            />
        </Html>
    )
}