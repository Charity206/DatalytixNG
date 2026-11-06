import { useState } from "react";
import services from "./ServicesData";

function Services() {
    const [activeService, setActiveService] = useState(0);

    const selectedService = services[activeService];

    return (
        <section id="services" className="bg-white px-6 py-20 sm:px-10 lg:px-[7%]">

            <div className="mx-auto max-w-[1400px]">

                {/* Section heading */}
                <div className="mb-12">
                    <h2 className="text-4xl font-bold text-[#0A2540] sm:text-5xl">
                        What We Do
                    </h2>

                    <p className="mt-3 max-w-xl text-base sm:text-lg leading-7 text-gray-600">
                        Explore our range of technology solutions and services.
                    </p>
                </div>

                {/* Main layout */}
                <div className="grid grid-cols-1 items-start gap-8 lg:grid-cols-[1fr_3fr] lg:gap-6">

                    {/* Left: All Services */}
                    <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">

                        <h3 className="mb-6 text-2xl font-bold text-[#0A2540]">
                            All Services
                        </h3>

                        <div className="flex flex-col gap-3">

                            {services.map((service, index) => (
                                <button
                                    key={index}
                                    onClick={() => setActiveService(index)}
                                    className={`w-full px-5 py-5 text-left text-base font-semibold transition-colors duration-300 ${activeService === index
                                        ? "bg-[#3CB5D0] text-[#0A2540] font-semibold"
                                        : "bg-gray-100 text-slate-700 hover:bg-[#3CB5D0]/20 hover:text-[#0A2540]"
                                        }`}
                                >
                                    {service.title}
                                </button>
                            ))}

                        </div>
                    </div>

                    {/* Right: Service details */}
                    <div className="min-w-0 rounded-xl border border-gray-200 bg-white p-6 shadow-sm sm:p-10">

                        <div className="grid grid-cols-1 items-center gap-8 md:grid-cols-2">

                            {/* Service Image */}
                            <div className="min-h-[280px]">
                                <img
                                    src={selectedService.image}
                                    alt={selectedService.title}
                                    className="h-full min-h-[300px] w-full rounded-xl object-cover md:min-h-[400px] lg:min-h-[450px]"
                                />
                            </div>

                            {/* Service content */}
                            <div>

                                <h3 className="mb-5 text-3xl font-bold text-[#3CB5D0] sm:text-4xl">
                                    {selectedService.title}
                                </h3>

                                <p className="mb-8 text-base sm:text-lg leading-8 text-slate-600">
                                    {selectedService.description}
                                </p>

                                <div className="flex flex-col gap-4">

                                    {selectedService.points.map((point, index) => (
                                        <div key={index} className="flex items-start gap-3">

                                            <div className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#3CB5D0] text-white">
                                                <svg
                                                    className="h-3 w-3"
                                                    fill="none"
                                                    viewBox="0 0 24 24"
                                                    stroke="currentColor"
                                                    strokeWidth="3"
                                                >
                                                    <path
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        d="M5 13l4 4L19 7"
                                                    />
                                                </svg>
                                            </div>

                                            <span className="text-base font-medium text-slate-700">
                                                {point}
                                            </span>

                                        </div>
                                    ))}

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Services;
