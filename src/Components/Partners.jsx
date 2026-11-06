/**
 * ----------------------------------------------------------------------------------
 * PARTNERS / OUR PARTNER SECTION - DATALYTIX
 * ----------------------------------------------------------------------------------
 * Palette: Crisp Bright White, Brand Cyan (#3CB5D0), Deep Navy (#0A2540)
 * Features:
 *   - Bright, high-contrast presentation designed to make partner logos pop with 100% sharpness
 *   - Pure white card capsules with subtle depth shadows and brand hover glow
 *   - Reduced sleek height for optimal balance between Hero and Who We Are
 *   - Continuous infinite sliding marquee carousel without any scrollbars
 *   - Seamless edge fades to blend smoothly into the viewport
 *   - Hover-to-pause functionality for easy inspection
 * ----------------------------------------------------------------------------------
 */

import partner1 from '../assets/nimble.png';
import partner2 from '../assets/hp.png';
import partner3 from '../assets/weavy.png';
import partner4 from '../assets/McAfee.png';
import partner5 from '../assets/symantec.png';
import partner6 from '../assets/oracle.png';
import partner7 from '../assets/AVG.png';
import partner8 from '../assets/commvault.png';

const DEFAULT_LOGOS = [
    { id: 1, name: "Nimble Storage", image: partner1 },
    { id: 2, name: "HP", image: partner2 },
    { id: 3, name: "Weavy", image: partner3 },
    { id: 4, name: "McAfee", image: partner4 },
    { id: 5, name: "Symantec", image: partner5 },
    { id: 6, name: "Oracle", image: partner6 },
    { id: 7, name: "AVG Technologies", image: partner7 },
    { id: 8, name: "Commvault", image: partner8 },
];

const Partners = ({ partners = DEFAULT_LOGOS, theme = "light" }) => {
    // Duplicate the array to create a continuous, seamless infinite loop
    const doublePartners = [...partners, ...partners];

    const isLight = theme === "light";

    return (
        <section
            className={`relative w-full py-8 sm:py-10 md:py-12 overflow-hidden transition-colors duration-300 ${isLight
                    ? "bg-gradient-to-b from-slate-50/90 via-white to-slate-50/90 border-t border-b border-slate-200/80"
                    : "bg-[#0A2540] border-t border-b border-[#3CB5D0]/20"
                }`}
        >
            {/* Ambient Lighting Gradient */}
            <div
                className={`absolute inset-0 pointer-events-none ${isLight
                        ? "bg-[radial-gradient(circle_at_50%_0%,rgba(60,181,208,0.08)_0%,transparent_65%)]"
                        : "bg-[radial-gradient(circle_at_50%_0%,rgba(60,181,208,0.15)_0%,transparent_60%)]"
                    }`}
            />

            {/* ------------------------------------------------------------- */}
            {/* SECTION HEADING                                               */}
            {/* ------------------------------------------------------------- */}
            <div className="relative max-w-7xl mx-auto px-6 mb-6 sm:mb-8 text-center">
                {/* Crisp High-Contrast Heading */}
                <h2
                    className={`text-2xl sm:text-3xl font-extrabold tracking-tight ${isLight ? "text-[#0A2540]" : "text-white"
                        }`}
                >
                    Our Partners
                </h2>
            </div>

            {/* ------------------------------------------------------------- */}
            {/* INFINITE MARQUEE CAROUSEL (WITHOUT BAR)                       */}
            {/* ------------------------------------------------------------- */}
            <div className="relative w-full overflow-hidden">
                {/* Left Gradient Edge Fade */}
                <div
                    className={`pointer-events-none absolute left-0 top-0 bottom-0 w-20 sm:w-36 md:w-48 z-10 ${isLight
                            ? "bg-gradient-to-r from-slate-50 via-slate-50/90 to-transparent"
                            : "bg-gradient-to-r from-[#0A2540] via-[#0A2540]/90 to-transparent"
                        }`}
                />

                {/* Right Gradient Edge Fade */}
                <div
                    className={`pointer-events-none absolute right-0 top-0 bottom-0 w-20 sm:w-36 md:w-48 z-10 ${isLight
                            ? "bg-gradient-to-l from-slate-50 via-slate-50/90 to-transparent"
                            : "bg-gradient-to-l from-[#0A2540] via-[#0A2540]/90 to-transparent"
                        }`}
                />

                {/* Continuous Auto-Scrolling Track */}
                <div className="animate-marquee flex items-center gap-5 sm:gap-7 py-2">
                    {doublePartners.map((item, index) => (
                        <div
                            key={`${item.id}-${index}`}
                            className="flex-shrink-0 group"
                            title={item.name}
                        >
                            {/* PURE BRIGHT WHITE CARD CAPSULE */}
                            <div className="w-44 sm:w-52 h-16 sm:h-20 px-5 py-2.5 rounded-xl bg-white border border-slate-200/90 shadow-[0_4px_16px_rgba(10,37,64,0.06)] hover:shadow-[0_10px_26px_rgba(60,181,208,0.28)] hover:border-[#3CB5D0] hover:scale-105 transition-all duration-300 flex items-center justify-center cursor-pointer">
                                <img
                                    src={item.image}
                                    alt={item.name}
                                    className="max-h-9 sm:max-h-11 max-w-[120px] sm:max-w-[140px] w-auto h-auto object-contain filter-none opacity-100 transition-transform duration-300 group-hover:scale-105"
                                    loading="lazy"
                                />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Partners;
