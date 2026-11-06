import TestimonialsData from "./TestimonialData";
import { FaQuoteLeft } from "react-icons/fa";

function Testimonials() {
    return (
        <section className="bg-[#FFFFFF] px-5 py-28 md:px-10 lg:px-16">
            <div className="mx-auto max-w-7xl">

                {/* Heading */}
                <div className="mb-14">
                    <h2 className="text-3xl font-extrabold text-[#0A2540] md:text-5xl">
                        What Our Clients Say
                    </h2>
                </div>

                {/* Testimonial Cards */}
                <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
                    {TestimonialsData.map((item, index) => (
                        <div
                            key={index}
                            className="group flex flex-col justify-between rounded-2xl border border-[#3CB5D0]/15 bg-[#0A2540] p-8 shadow-sm transition-all duration-500 hover:-translate-y-2 hover:border-[#3CB5D0] hover:shadow-xl"
                        >

                            <div>
                                {/* Quote Mark */}
                                <div className="mb-6 text-5xl font-extrabold text-[#FFFFFF]">
                                    <FaQuoteLeft />
                                </div>

                                {/* Testimony */}
                                <p className="text-base sm:text-lg font-medium leading-relaxed text-[#FFFFFF]">
                                    {item.message}
                                </p>
                            </div>

                            {/* Client Details */}
                            <div className="mt-10 flex items-center gap-4 border-t border-[#0A2540]/15 pt-6">

                                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-[#FFFFFF] text-lg font-extrabold text-[#0A2540]">
                                    {item.initials}
                                </div>

                                <div>
                                    <h3 className="text-base sm:text-lg font-extrabold text-[#FFFFFF]">
                                        {item.name}
                                    </h3>

                                    <p className="mt-1 text-sm sm:text-base font-medium text-[#FFFFFF]/75">
                                        {item.title}
                                    </p>
                                </div>

                            </div>

                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
}

export default Testimonials;
