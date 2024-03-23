"use client"
import Link from "next/link"

const NotFoundPage = () => {
    return (
        <section>
            <div className="h-[100dvh] w-full bg-black">
                <div className="flex flex-col justify-center items-center w-full h-[calc(100%-60px)]">
                    <h1 className="text-[70px] font-bold leading-none white">
                        404
                    </h1>
                    <h2 className="text-[15px] leading-none text-white">
                        Ooops, page not found.
                    </h2>
                    <button
                        type="button"
                        className="mt-5 font-cormorant text-xl font-bold bg-zinc-900 outline-none hover:opacity-85 duration-300"
                    >
                        <Link
                            href="/"
                            className="px-10 py-4 flex justify-center items-center w-full h-full outline-none"
                        >
                            Go to home
                        </Link>
                    </button>
                </div>
            </div>
        </section>
    )
}

export default NotFoundPage