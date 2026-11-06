
function CompanyStats() {
    const statistics = [
        {
            number: "100+",
            label: "Projects Delivered",
        },
        {
            number: "100+",
            label: " Products Built",
        },
        {
            number: "15",
            label: "Years Operating",
        },
    ];

    return (
        <section className="bg-white px-5 py-16 md:px-10 lg:px-16">
            <div className="mx-auto max-w-7xl">

                {/* Top Line */}
                <div className="h-px w-full bg-[#0A2540]/15" />

                {/* Statistics */}
                <div className="grid grid-cols-1 gap-10 py-14 sm:grid-cols-3 sm:gap-6">
                    {statistics.map((item, index) => (
                        <div key={index}>
                            <h2 className="text-4xl font-extrabold tracking-tight text-[#0A2540] md:text-5xl">
                                {item.number}
                            </h2>

                            <p className="mt-3 text-base sm:text-lg font-semibold text-[#0A2540]/75">
                                {item.label}
                            </p>
                        </div>
                    ))}
                </div>

                {/* Bottom Line */}
                <div className="h-px w-full bg-[#0A2540]/15" />

            </div>
        </section>
    );
}

export default CompanyStats;
