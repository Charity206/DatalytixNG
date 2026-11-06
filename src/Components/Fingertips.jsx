
function Fingertips() {
    return (
        <section className="flex flex-col w-full items-center justify-center bg-[#0A2540] px-5 py-12 text-center md:py-16">

            <h3 className="mb-8 max-w-4xl text-3xl font-extrabold leading-tight tracking-tight text-white md:text-5xl lg:text-6xl">
                IT Solutions & Services at Your
                <span className="block text-[#3CB5D0]">
                    Fingertips.
                </span>
            </h3>

            <a
                href="/#services"
                className="inline-flex items-center justify-center rounded-full bg-[#3CB5D0] px-10 py-4 text-base sm:text-lg font-bold 
                text-white shadow-lg transition-all duration-300 hover:-translate-y-1 hover:bg-white hover:text-[#0A2540] hover:shadow-xl"
            >
                Discover Our Services
            </a>

        </section>
    );
}

export default Fingertips;
