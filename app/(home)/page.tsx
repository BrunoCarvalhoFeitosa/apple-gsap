import { HeroSection } from "@/components/sections/hero-section"
import { HighlightsSection } from "@/components/sections/highlights-sections"
import { ModelSection } from "@/components/sections/model-section"
import { FeaturesSection } from "@/components/sections/features-section"
import { ChipSection } from "@/components/sections/chip-section"
import { CaptureSection } from "@/components/sections/capture-section"
import { CameraSection } from "@/components/sections/camera-section"
import { ZoomSection } from "@/components/sections/zoom-section"
import { ActionButtonSection } from "@/components/sections/action-button-section"
import { TransferSection } from "@/components/sections/transfer-section"
import { SafetySection } from "@/components/sections/safety-section"
import { SystemSection } from "@/components/sections/system-section"
import { WaysToShopSection } from "@/components/sections/ways-to-shop-section"
import "swiper/css"
import "swiper/css/effect-coverflow"
import "swiper/css/pagination"
import "swiper/css/navigation"
import "swiper/css/keyboard"

const Home = () => {
    return (
        <main>
            <HeroSection />
            <HighlightsSection />
            <ModelSection />
            <FeaturesSection />
            <ChipSection />
            <CaptureSection />
            <CameraSection />
            <ZoomSection />
            <ActionButtonSection />
            <TransferSection />
            <SafetySection />
            <SystemSection />
            <WaysToShopSection />
        </main>
    )
}

export default Home