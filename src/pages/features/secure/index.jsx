import { HeroPatternSecure } from "../../../components/features/HeroPatternSecure";
import LayoutSecure from "../../../components/features/LayoutSecure";
import { FooterWithNewsletter } from "../../../components/FooterWithNewsletter";

export default function Secure() {

    return (
        <>
            <div className="pt-16 pb-8 pl-6 mx-auto max-w-7xl lg:pl-8">
                <HeroPatternSecure />
                <div>
                    <LayoutSecure></LayoutSecure>
                </div>
                <div className="mt-24">
                    <FooterWithNewsletter></FooterWithNewsletter>
                </div>
            </div>
        </>
    );
}