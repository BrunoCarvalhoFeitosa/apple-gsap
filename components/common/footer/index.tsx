"use client"
import Link from "next/link"

export const Footer = () => {
    return (
        <footer>
            <div className="common-padding bg-black">
                <div className="screen-max-width">
                    <div>
                        <h3 className="text-5xl font-semibold text-zinc-600">
                            iPhone
                        </h3>
                    </div>
                    <div className="flex flex-col md:flex-row gap-20 pt-12">
                        <ul className="flex flex-col gap-y-2">
                            <li className="text-sm font-light text-zinc-600">
                                Explore iPhone
                            </li>
                            <li className="text-2xl font-semibold text-white cursor-pointer">
                                <Link href="https://www.apple.com/iphone">
                                    Explore All iPhone
                                </Link>
                            </li>
                            <li className="text-2xl font-semibold text-white cursor-pointer">
                                <Link href="https://www.apple.com/iphone-15-pro">
                                    iPhone 15 Pro
                                </Link>
                            </li>
                            <li className="text-2xl font-semibold text-white cursor-pointer">
                                <Link href="https://www.apple.com/iphone-15">
                                    iPhone 15
                                </Link>
                            </li>
                            <li className="text-2xl font-semibold text-white cursor-pointer">
                                <Link href="https://www.apple.com/iphone-14">
                                    iPhone 14
                                </Link>
                            </li>
                            <li className="text-2xl font-semibold text-white cursor-pointer">
                                <Link href="https://www.apple.com/iphone-13">
                                    iPhone 13
                                </Link>
                            </li>
                            <li className="text-2xl font-semibold text-white cursor-pointer">
                                <Link href="https://www.apple.com/iphone-se">
                                    iPhone SE
                                </Link>
                            </li>
                        </ul>
                        <ul className="flex flex-col gap-y-2">
                            <li className="text-sm font-light text-zinc-600">
                                Go Further
                            </li>
                            <li className="text-sm font-semibold text-white">
                                <Link href="https://support.apple.com/iphone?cid=gn-ols-iphone-psp-explore">
                                    iPhone Support
                                </Link>
                            </li>
                            <li className="text-sm font-semibold text-white">
                                <Link href="https://www.apple.com/support/products/iphone">
                                    AppleCare+ for iPhone
                                </Link>
                            </li>
                            <li className="text-sm font-semibold text-white">
                                <Link href="https://www.apple.com/ios/ios-17">
                                    iOS 17
                                </Link>
                            </li>
                            <li className="text-sm font-semibold text-white">
                                <Link href="https://www.apple.com/apps">
                                    Apps by Apple
                                </Link>
                            </li>
                            <li className="text-sm font-semibold text-white">
                                <Link href="https://www.apple.com/privacy">
                                    iPhone Privacy
                                </Link>
                            </li>
                            <li className="text-sm font-semibold text-white">
                                <Link href="https://www.apple.com/icloud">
                                    iCloud+
                                </Link>
                            </li>
                            <li className="text-sm font-semibold text-white">
                                <Link href="https://www.apple.com/wallet">
                                    Wallet, Pay, Card
                                </Link>
                            </li>
                            <li className="text-sm font-semibold text-white">
                                <Link href="https://www.apple.com/siri">
                                    Siri
                                </Link>
                            </li>
                        </ul>
                        <ul className="flex flex-col gap-y-2">
                            <li className="text-sm font-light text-zinc-600">
                                Compare iPhone
                            </li>
                            <li className="text-sm font-semibold text-white">
                                <Link href="https://www.apple.com/iphone/switch">
                                    Switch from Android
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    )
}