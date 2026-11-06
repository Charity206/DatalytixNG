import { FaAward, FaLightbulb, FaBriefcase } from "react-icons/fa";

function WhyChooseUs() {
    const reasons = [
        {
            number: "01",
            title: "Recognized & Certified",
            description:
                "We bring recognized industry certifications and technology partnerships that demonstrate our commitment to delivering trusted IT solutions.",
            icon: <FaAward />,
        },
        {
            number: "02",
            title: "Awesome Proficiency",
            description:
                "Our team combines technical expertise and practical knowledge to deliver effective solutions across different areas of information technology.",
            icon: <FaLightbulb />,
        },
        {
            number: "03",
            title: "Vast Experience",
            description:
                "Our team draws on over 40 years of combined experience to provide reliable technology solutions and support business objectives.",
            icon: <FaBriefcase />,
        },
    ];

    return (
        <section className="bg-[#0A2540] px-5 py-24 md:px-10 lg:px-16">
            <div className="mx-auto max-w-7xl">

                {/* Heading */}
                <div className="mb-14 text-center">
                    <h2 className="text-3xl font-bold text-white md:text-5xl">
                        Why Choose Datalytix NG?
                    </h2>

                    <p className="mx-auto mt-5 max-w-2xl text-base sm:text-lg leading-8 text-slate-300">
                        We combine recognized expertise, technical proficiency and
                        extensive experience to deliver solutions that help businesses
                        achieve their technology goals.
                    </p>
                </div>

                {/* Feature Cards */}
                <div className="grid grid-cols-1 gap-7 md:grid-cols-3">
                    {reasons.map((reason) => (
                        <div
                            key={reason.number}
                            className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white p-8 transition-all duration-500 hover:-translate-y-3 hover:border-[#3CB5D0] hover:shadow-2xl"
                        >
                            <div className="mb-8 flex items-center justify-between">
                                <div className="flex h-16 w-16 items-center justify-center rounded-xl bg-[#3CB5D0]/10 text-3xl text-[#3CB5D0] transition-all duration-300 group-hover:bg-[#3CB5D0] group-hover:text-white">
                                    {reason.icon}
                                </div>

                                <span className="text-4xl font-bold text-gray-100">
                                    {reason.number}
                                </span>
                            </div>

                            <h3 className="mb-4 text-2xl font-bold text-[#0A2540]">
                                {reason.title}
                            </h3>

                            <p className="text-base sm:text-lg leading-relaxed text-slate-600">
                                {reason.description}
                            </p>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
}

export default WhyChooseUs;
