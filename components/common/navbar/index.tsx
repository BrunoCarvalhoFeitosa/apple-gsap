import Image from "next/image"
import Link from "next/link"
import { appleImg, searchImg, bagImg } from "@/utils"
import { navLists } from "@/utils/constants"

export const Navbar = () => {
    return (
        <header className="w-full py-5 sm:px-10 px-5">
            <nav className="flex justify-between items-center screen-max-width">
                <div>
                    <Link href="/" className="outline-none">
                        <Image
                            src={appleImg}
                            alt="Apple"
                            title="Apple"
                            width={15}
                            height={15}
                        />
                    </Link>
                </div>
                <div className="hidden md:block">
                    <ul className="flex items-center gap-x-4">
                        {navLists.map((item, index) => (
                            <li key={index} className="text-xs">
                                <a className="transition-all duration-100 hover:text-gray-400 hover:scale-110 cursor-pointer">
                                    {item}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
                <div>
                    <ul className="flex items-center gap-x-3">
                        <li>
                            <Image
                                src={searchImg}
                                alt="Apple"
                                title="Apple"
                                width={15}
                                height={15}
                            />
                        </li>
                        <li>
                            <Image
                                src={bagImg}
                                alt="Apple"
                                title="Apple"
                                width={15}
                                height={15}
                            />
                        </li>
                    </ul>
                </div>
            </nav>
        </header>
    )
}