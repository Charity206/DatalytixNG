import { useEffect, useRef, useState } from "react";
import approachImage from "../assets/IT-IMAGES2.jpg";

function OurApproach() {
    const [loaded, setLoaded] = useState(false);
    const sectionRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setLoaded(true);
                    observer.disconnect();
                }
            },
            { threshold: 0.2 }
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => observer.disconnect();
    }, []);

    const steps = [
        {
            number: "01",
            title: "Research & Stay Ahead",
            description:
                "We continuously update our knowledge of products and services through research, ensuring we stay ahead of the competition."
        },
        {
            number: "02",
            title: "Understand & Analyse",
            description:
                "We take a technical and consultative approach to understand our clients' business models, IT needs and strategic objectives."
        },
        {
            number: "03",
            title: "Design Tailored Solutions",
            description:
                "We align technology with our clients' business requirements, designing solutions that support their operational goals."
        },
        {
            number: "04",
            title: "Implementation & Support",
            description:
                "We implement efficient and effective solutions that address our clients' information technology needs and support their business."
        }
    ];

    return (
        <section
            id="approach"
            ref={sectionRef}
            className="bg-[#0A2540] px-5 py-20 md:px-10 lg:px-16"
        >
            <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-14 lg:grid-cols-2">

                {/* LEFT: Our Approach and Stepper */}
                <div>
                    <h2 className="text-3xl font-bold text-white md:text-5xl">
                        Our Approach
                    </h2>

                    <p className="mb-12 mt-5 text-base sm:text-lg leading-8 text-slate-300">
                        We combine continuous research, technical expertise and a
                        consultative approach to deliver solutions that align
                        technology with our clients' business objectives.
                    </p>

                    {/* Vertical Stepper */}
                    <div className="relative space-y-9">

                        {/* Connecting Line */}
                        <div className="absolute bottom-8 left-[13px] top-3 w-[4px] rounded-full bg-white/20">
                            <div
                                className={`w-full rounded-full bg-[#3CB5D0] transition-all duration-[2500ms] ease-in-out ${loaded ? "h-full" : "h-0"
                                    }`}
                            />
                        </div>

                        {steps.map((step, index) => (
                            <div key={step.number} className="relative flex gap-6">

                                {/* Dot */}
                                <div
                                    className={`relative z-10 mt-1 flex h-7 w-7 shrink-0 items-center justify-center rounded-full border-[4px] border-[#3CB5D0] transition-all duration-700 ${loaded ? "scale-100 bg-[#3CB5D0]" : "scale-75 bg-[#0A2540]"
                                        }`}
                                    style={{ transitionDelay: `${index * 500}ms` }}
                                >
                                    <div className="h-2 w-2 rounded-full bg-white" />
                                </div>

                                {/* Step Content */}
                                <div
                                    className={`pb-2 transition-all duration-700 ${loaded
                                        ? "translate-y-0 opacity-100"
                                        : "translate-y-6 opacity-0"
                                        }`}
                                    style={{ transitionDelay: `${index * 300}ms` }}
                                >
                                    <p className="mb-2 text-sm sm:text-base font-bold text-[#3CB5D0]">
                                        STEP {step.number}
                                    </p>

                                    <h3 className="mb-2 text-xl sm:text-2xl font-bold text-white">
                                        {step.title}
                                    </h3>

                                    <p className="text-base leading-7 text-slate-300">
                                        {step.description}
                                    </p>
                                </div>

                            </div>
                        ))}
                    </div>
                </div>

                {/* RIGHT: Image */}
                <div
                    className={`transition-all duration-1000 ${loaded
                        ? "translate-x-0 opacity-100"
                        : "translate-x-8 opacity-0"
                        }`}
                >
                    <img
                        src={approachImage}
                        alt="Datalytix NG technical team working on IT solutions"
                        className="h-[450px] w-full rounded-2xl border border-[#3CB5D0]/30 object-cover shadow-2xl md:h-[600px]"
                    />
                </div>

            </div>
        </section>
    );
}

export default OurApproach;
