"use client"
import Image from "next/image"
import Link from "next/link"
import { appleImg } from "@/utils"

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
                    <div className="flex gap-x-20 pt-12">
                        <ul className="flex flex-col gap-y-2">
                            <li className="text-sm font-light text-zinc-600">
                                Explore iPhone
                            </li>
                            <li className="text-2xl font-semibold text-white">
                                Explore All iPhone
                            </li>
                            <li className="text-2xl font-semibold text-white">
                                iPhone 15 Pro
                            </li>
                            <li className="text-2xl font-semibold text-white">
                                iPhone 15
                            </li>
                            <li className="text-2xl font-semibold text-white">
                                iPhone 14
                            </li>
                            <li className="text-2xl font-semibold text-white">
                                iPhone 13
                            </li>
                            <li className="text-2xl font-semibold text-white">
                                iPhone SE
                            </li>
                        </ul>
                        <ul className="flex flex-col gap-y-2">
                            <li className="text-sm font-light text-zinc-600">
                                Go Further
                            </li>
                            <li className="text-sm font-semibold text-white">
                                iPhone Support
                            </li>
                            <li className="text-sm font-semibold text-white">
                                AppleCare+ for iPhone
                            </li>
                            <li className="text-sm font-semibold text-white">
                                iOS 17
                            </li>
                            <li className="text-sm font-semibold text-white">
                                Apps by Apple
                            </li>
                            <li className="text-sm font-semibold text-white">
                                iPhone Privacy
                            </li>
                            <li className="text-sm font-semibold text-white">
                                iCloud+
                            </li>
                            <li className="text-sm font-semibold text-white">
                                Wallet, Pay, Card
                            </li>
                            <li className="text-sm font-semibold text-white">
                                Siri
                            </li>
                        </ul>
                        <ul className="flex flex-col gap-y-2">
                            <li className="text-sm font-light text-zinc-600">
                                Compare iPhone
                            </li>
                            <li className="text-sm font-semibold text-white">
                                Switch from Android
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    )
}