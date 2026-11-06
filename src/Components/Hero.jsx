import { useState, useEffect, useRef } from 'react';
import slide1 from "../assets/IT-IMAGES1.jpg";
import slide2 from "../assets/IT-IMAGES2.jpg";
import slide3 from "../assets/IT-IMAGES4.jpg";
import slide4 from "../assets/IT-IMAGES5.jpg";
import slide5 from "../assets/IT-IMAGES6.jpg";

/**
 * ----------------------------------------------------------------------------------
 * HERO SECTION - DATALYTIX
 * ----------------------------------------------------------------------------------
 * Palettes: Dark Blue (#040814), Vibrant Blue (#2563EB, #3B82F6), White
 * Features:
 *   - Slider with 5 slides
 *   - Auto-advance with pause on hover
 *   - Bespoke left & right data waves behind the text
 *   - Smooth animated transitions for both images and text
 *   - Sleek slider controls & slide progress indicator
 *   - Zero CTA buttons as requested to ensure a bold, standout aesthetic
 *   - Fully desktop & mobile responsive
 * ----------------------------------------------------------------------------------
 */

const SLIDES = [
    {
        id: 1,
        tag: "BUSINESS ANALYTICS",
        title: "BUSINESS INTELLIGENCE AND ANALYTICS",
        subtitle:
            "We help businesses transform data into meaningful insights that support informed decisions and better business performance.",
        image: slide1,
        alt: "Data Analytics Visualization"
    },
    {
        id: 2,
        tag: "IT SOLUTIONS",
        title: "INFORMATION TECHNOLOGY SOLUTION DELIVERY",
        subtitle:
            "We provide tailored IT solutions that help businesses improve operations, solve technical challenges and achieve their goals.",
        image: slide2,
        alt: "Futuristic AI Circuit and Neural Tech"
    },
    {
        id: 3,
        tag: "DATA CENTER",
        title: "DATA CENTER AND NETWORKING SOLUTIONS",
        subtitle:
            "We deliver reliable data centre and networking solutions that support secure connectivity, efficient infrastructure and business continuity.",
        image: slide3,
        alt: "Global Data Cloud Network"
    },
    {
        id: 4,
        tag: "EDUCATIONAL PORTAL",
        title: "EDUCATIONAL PORTAL AND MANAGEMENT SOLUTION",
        subtitle:
            "We build digital learning platforms and management solutions that support online education, e-learning delivery, student engagement and efficient institutional administration.",
        image: slide4,
        alt: "Interactive Analytics Telemetry"
    },
    {
        id: 5,
        tag: "BUSINESS PROCESS AUTOMATION",
        title: "BUSINESS PROCESS AUTOMATION AND DOCUMENT MANAGEMENT SOLUTION ",
        subtitle:
            "We simplify business operations through automated workflows and effective document management, improving efficiency and productivity.",
        image: slide5,
        alt: "Cybersecurity and Data Encryption"
    }
];

const Hero = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [isHovered, setIsHovered] = useState(false);
    const [touchStart, setTouchStart] = useState(0);
    const [touchEnd, setTouchEnd] = useState(0);
    const slideInterval = useRef(null);

    const totalSlides = SLIDES.length;

    // Auto-play slider timer (6 seconds per slide), pauses on hover
    useEffect(() => {
        if (!isHovered) {
            slideInterval.current = setInterval(() => {
                setCurrentSlide((prev) => (prev + 1) % totalSlides);
            }, 4000);
        }
        return () => clearInterval(slideInterval.current);
    }, [isHovered, totalSlides]);

    const goToSlide = (index) => {
        setCurrentSlide(index);
    };

    const nextSlide = () => {
        setCurrentSlide((prev) => (prev + 1) % totalSlides);
    };

    const prevSlide = () => {
        setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
    };

    // Touch swipe support for mobile devices
    const handleTouchStart = (e) => {
        setTouchStart(e.targetTouches[0].clientX);
    };

    const handleTouchMove = (e) => {
        setTouchEnd(e.targetTouches[0].clientX);
    };

    const handleTouchEnd = () => {
        if (!touchStart || !touchEnd) return;
        const distance = touchStart - touchEnd;
        const isLeftSwipe = distance > 50;
        const isRightSwipe = distance < -50;

        if (isLeftSwipe) nextSlide();
        if (isRightSwipe) prevSlide();

        setTouchStart(0);
        setTouchEnd(0);
    };

    const activeSlide = SLIDES[currentSlide];

    return (
        <section
            id="home"
            className="relative w-full h-[88vh] min-h-[620px] max-h-[920px] bg-[#040814] overflow-hidden select-none flex items-center justify-center"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
            aria-label="Hero Showcase Slider"
        >
            {/* ------------------------------------------------------------- */}
            {/* BACKGROUND IMAGES (CROSSFADE & SUBTLE ZOOM ANIMATION)         */}
            {/* ------------------------------------------------------------- */}
            <div className="absolute inset-0 z-0">
                {SLIDES.map((slide, index) => {
                    const isActive = index === currentSlide;
                    return (
                        <div
                            key={slide.id}
                            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${isActive ? "opacity-100" : "opacity-0 pointer-events-none"
                                }`}
                        >
                            {/* Background Image with subtle Ken Burns slow scale on active */}
                            <img
                                src={slide.image}
                                alt={slide.alt}
                                className={`w-full h-full object-cover object-center transform transition-transform duration-[7000ms] ease-out ${isActive ? "scale-105" : "scale-100"
                                    }`}
                            />

                            {/* Deep Blue Overlays for Text Contrast */}
                            <div className="absolute inset-0 bg-gradient-to-t from-[#040814]/30 via-[#040814]/10 to-transparent" />
                            <div className="absolute inset-0 bg-gradient-to-r from-[#040814]/35 via-[#040814]/10 to-transparent" />
                            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(11,25,60,0.12)_0%,rgba(4,8,20,0.25)_100%)]" />
                        </div>
                    );
                })}
            </div>

            {/* ------------------------------------------------------------- */}
            {/* SUBTLE AMBIENT BLUE GLOW IN CENTER BEHIND CONTENT             */}
            {/* ------------------------------------------------------------- */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[350px] bg-blue-600/15 rounded-full blur-[140px] pointer-events-none z-10" />

            {/* ------------------------------------------------------------- */}
            {/* LEFT WAVES (BEHIND THE TEXT - LEFT SIDE)                      */}
            {/* ------------------------------------------------------------- */}
            <div className="absolute left-0 top-1/2 -translate-y-1/2 w-48 sm:w-72 md:w-96 lg:w-[460px] h-[480px] pointer-events-none z-10 opacity-75 sm:opacity-90 overflow-hidden">
                <svg
                    viewBox="0 0 500 500"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-full h-full text-blue-500 transform -translate-x-12 sm:-translate-x-6 animate-[pulse_6s_ease-in-out_infinite]"
                >
                    <defs>
                        <linearGradient id="waveGradLeft1" x1="0%" y1="50%" x2="100%" y2="50%">
                            <stop offset="0%" stopColor="#2563EB" stopOpacity="0.8" />
                            <stop offset="60%" stopColor="#3B82F6" stopOpacity="0.4" />
                            <stop offset="100%" stopColor="#60A5FA" stopOpacity="0" />
                        </linearGradient>
                        <linearGradient id="waveGradLeft2" x1="0%" y1="50%" x2="100%" y2="50%">
                            <stop offset="0%" stopColor="#1D4ED8" stopOpacity="0.6" />
                            <stop offset="50%" stopColor="#38BDF8" stopOpacity="0.3" />
                            <stop offset="100%" stopColor="#93C5FD" stopOpacity="0" />
                        </linearGradient>
                    </defs>

                    {/* Left Wave Harmonic Ribbons */}
                    <path
                        d="M-50 140C50 190 120 100 240 180C340 250 390 180 490 230"
                        stroke="url(#waveGradLeft1)"
                        strokeWidth="3"
                        strokeLinecap="round"
                        className="filter drop-shadow-[0_0_8px_rgba(59,130,246,0.5)]"
                    />
                    <path
                        d="M-50 200C60 250 140 160 270 230C380 290 420 220 500 280"
                        stroke="url(#waveGradLeft2)"
                        strokeWidth="2.5"
                        strokeLinecap="round"
                    />
                    <path
                        d="M-50 260C40 310 130 220 250 290C360 340 410 270 490 320"
                        stroke="url(#waveGradLeft1)"
                        strokeWidth="2"
                        strokeDasharray="6 6"
                        strokeOpacity="0.7"
                    />
                    <path
                        d="M-50 320C70 370 150 280 280 340C390 400 430 330 510 370"
                        stroke="url(#waveGradLeft2)"
                        strokeWidth="1.5"
                        strokeOpacity="0.5"
                    />

                    {/* Subtle Particle Nodes along wave crests */}
                    <circle cx="240" cy="180" r="3" fill="#60A5FA" />
                    <circle cx="270" cy="230" r="3.5" fill="#38BDF8" />
                    <circle cx="250" cy="290" r="2.5" fill="#93C5FD" />
                </svg>
            </div>

            {/* ------------------------------------------------------------- */}
            {/* RIGHT WAVES (BEHIND THE TEXT - RIGHT SIDE)                     */}
            {/* ------------------------------------------------------------- */}
            <div className="absolute right-0 top-1/2 -translate-y-1/2 w-48 sm:w-72 md:w-96 lg:w-[460px] h-[480px] pointer-events-none z-10 opacity-75 sm:opacity-90 overflow-hidden">
                <svg
                    viewBox="0 0 500 500"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-full h-full text-blue-500 transform translate-x-12 sm:translate-x-6 scale-x-[-1] animate-[pulse_7s_ease-in-out_infinite]"
                >
                    <defs>
                        <linearGradient id="waveGradRight1" x1="0%" y1="50%" x2="100%" y2="50%">
                            <stop offset="0%" stopColor="#2563EB" stopOpacity="0.8" />
                            <stop offset="60%" stopColor="#3B82F6" stopOpacity="0.4" />
                            <stop offset="100%" stopColor="#60A5FA" stopOpacity="0" />
                        </linearGradient>
                        <linearGradient id="waveGradRight2" x1="0%" y1="50%" x2="100%" y2="50%">
                            <stop offset="0%" stopColor="#1D4ED8" stopOpacity="0.6" />
                            <stop offset="50%" stopColor="#38BDF8" stopOpacity="0.3" />
                            <stop offset="100%" stopColor="#93C5FD" stopOpacity="0" />
                        </linearGradient>
                    </defs>

                    {/* Right Wave Harmonic Ribbons */}
                    <path
                        d="M-50 140C50 190 120 100 240 180C340 250 390 180 490 230"
                        stroke="url(#waveGradRight1)"
                        strokeWidth="3"
                        strokeLinecap="round"
                        className="filter drop-shadow-[0_0_8px_rgba(59,130,246,0.5)]"
                    />
                    <path
                        d="M-50 200C60 250 140 160 270 230C380 290 420 220 500 280"
                        stroke="url(#waveGradRight2)"
                        strokeWidth="2.5"
                        strokeLinecap="round"
                    />
                    <path
                        d="M-50 260C40 310 130 220 250 290C360 340 410 270 490 320"
                        stroke="url(#waveGradRight1)"
                        strokeWidth="2"
                        strokeDasharray="6 6"
                        strokeOpacity="0.7"
                    />
                    <path
                        d="M-50 320C70 370 150 280 280 340C390 400 430 330 510 370"
                        stroke="url(#waveGradRight2)"
                        strokeWidth="1.5"
                        strokeOpacity="0.5"
                    />

                    {/* Subtle Particle Nodes along wave crests */}
                    <circle cx="240" cy="180" r="3" fill="#60A5FA" />
                    <circle cx="270" cy="230" r="3.5" fill="#38BDF8" />
                    <circle cx="250" cy="290" r="2.5" fill="#93C5FD" />
                </svg>
            </div>

            {/* ------------------------------------------------------------- */}
            {/* MAIN TEXT CONTENT (FOCUSED, STANDOUT, ZERO BUTTONS)           */}
            {/* ------------------------------------------------------------- */}
            <div className="relative z-20 max-w-5xl mx-auto px-6 sm:px-8 text-center flex flex-col items-center">

                {/* Headline with dynamic smooth keyframe change */}
                <h1
                    key={`title-${currentSlide}`}
                    className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-white tracking-tight leading-[1.12] sm:leading-[1.1] max-w-4xl drop-shadow-md animate-[fadeInUp_0.7s_ease-out]"
                >
                    {activeSlide.title}
                </h1>

                {/* Subtitle description */}
                <p
                    key={`sub-${currentSlide}`}
                    className="mt-5 sm:mt-6 text-base sm:text-lg md:text-xl text-blue-100/80 font-normal max-w-2xl leading-relaxed animate-[fadeInUp_0.85s_ease-out]"
                >
                    {activeSlide.subtitle}
                </p>

                {/* NO CTA BUTTONS - intentionally uncluttered and striking */}
            </div>

            {/* ------------------------------------------------------------- */}
            {/* SLIDER NAVIGATION & PROGRESS BAR (BOTTOM CONTROLS)            */}
            {/* ------------------------------------------------------------- */}
            <div className="absolute bottom-8 left-0 right-0 z-30 flex items-center justify-between max-w-6xl mx-auto px-6 sm:px-10">

                {/* Left Arrow Nav */}
                <button
                    onClick={prevSlide}
                    aria-label="Previous Slide"
                    className="group p-2.5 rounded-full bg-white/5 border border-white/10 hover:border-blue-400/50 hover:bg-blue-600/20 text-white/70 hover:text-white transition-all backdrop-blur-md focus:outline-none"
                >
                    <svg className="w-5 h-5 group-hover:-translate-x-0.5 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
                    </svg>
                </button>

                {/* Center: Slide Indicators with dynamic progress bar */}
                <div className="flex items-center gap-3 sm:gap-4">
                    {SLIDES.map((slide, idx) => {
                        const isCurrent = idx === currentSlide;
                        return (
                            <button
                                key={slide.id}
                                onClick={() => goToSlide(idx)}
                                aria-label={`Go to slide ${idx + 1}`}
                                className="group relative py-2 focus:outline-none cursor-pointer"
                            >
                                {/* Minimalist Bar Indicator */}
                                <div
                                    className={`h-1.5 rounded-full transition-all duration-500 ease-out ${isCurrent
                                        ? "w-8 sm:w-12 bg-gradient-to-r from-blue-500 to-blue-300 shadow-[0_0_12px_rgba(59,130,246,0.8)]"
                                        : "w-3 sm:w-4 bg-white/20 hover:bg-white/40"
                                        }`}
                                />
                            </button>
                        );
                    })}
                </div>

                {/* Right Arrow Nav + Numerical Slide Counter */}
                <div className="flex items-center gap-4">
                    <div className="hidden sm:flex items-center text-sm font-mono font-medium tracking-widest text-blue-200/70">
                        <span className="text-white font-bold text-sm">0{currentSlide + 1}</span>
                        <span className="mx-1 text-white/30">/</span>
                        <span>0{totalSlides}</span>
                    </div>

                    <button
                        onClick={nextSlide}
                        aria-label="Next Slide"
                        className="group p-2.5 rounded-full bg-white/5 border border-white/10 hover:border-blue-400/50 hover:bg-blue-600/20 text-white/70 hover:text-white transition-all backdrop-blur-md focus:outline-none"
                    >
                        <svg className="w-5 h-5 group-hover:translate-x-0.5 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                        </svg>
                    </button>
                </div>
            </div>

        </section>
    );
};

export default Hero;
