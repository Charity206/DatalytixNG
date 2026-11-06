import logo from "../assets/datalytix-logo.png";
import services from "./ServicesData";

function Footer() {

    const companyLinks = [
        "Who we are",
        "Our Approach",
        "Services",
    ];

    return (
        <footer className="bg-[#FFFFFF] px-5 pb-12 pt-16 md:px-10 lg:px-16">

            <div className="mx-auto max-w-7xl">

                {/* Top Line */}
                <div className="mb-12 h-px w-full bg-[#0A2540]/15" />

                {/* Footer Content */}
                <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-[1.3fr_1fr_0.8fr_1.1fr] lg:gap-12">

                    {/* Logo and Description */}
                    <div>
                        <img
                            src={logo}
                            alt="Datalytix NG"
                            className="mb-6 h-14 w-auto object-contain"
                        />

                        <p className="max-w-sm text-base leading-relaxed text-[#0A2540]/75">
                            We deliver innovative technology solutions that help
                            businesses improve operations, manage data and achieve
                            their strategic objectives.
                        </p>
                    </div>

                    {/* Services */}
                    <div>
                        <h3 className="mb-7 text-lg font-extrabold text-[#0A2540]">
                            Services
                        </h3>

                        <ul className="space-y-5">
                            {services.map((services, index) => (
                                <li key={index}>
                                    <a
                                        href="/#services"
                                        className="text-base font-medium text-[#0A2540]/75 transition-colors duration-300 hover:text-[#3CB5D0]"
                                    >
                                        {services.title}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Company */}
                    <div>
                        <h3 className="mb-7 text-lg font-extrabold text-[#0A2540]">
                            Company
                        </h3>

                        <ul className="space-y-5">
                            {companyLinks.map((link, index) => (
                                <li key={index}>
                                    <a
                                        href={`/${link.toLowerCase().replaceAll(" ", "-")}`}
                                        className="text-base font-medium text-[#0A2540]/75 transition-colors duration-300 hover:text-[#3CB5D0]"
                                    >
                                        {link}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h3 className="mb-7 text-lg font-extrabold text-[#0A2540]">
                            Contact
                        </h3>

                        <ul className="space-y-5 text-base font-medium text-[#0A2540]/75">
                            <li>
                                <a
                                    href="mailto:info@datalytixs.ng"
                                    className="transition-colors hover:text-[#3CB5D0]"
                                >
                                    info@datalytixs.ng
                                </a>
                            </li>

                            <li>
                                <a
                                    href="tel:+234 8034174300"
                                    className="transition-colors hover:text-[#3CB5D0]"
                                >
                                    +234 8034174300
                                </a>
                            </li>

                            <li className="leading-8">
                                11, Kudirat Abiola Way, Oregun, Ikeja, Lagos State Nigeria
                            </li>
                        </ul>
                    </div>

                </div>

                {/* Bottom Footer */}
                <div className="mt-16 border-t border-[#0A2540]/15 pt-7 text-center">
                    <p className="text-sm text-[#0A2540]/65">
                        © {new Date().getFullYear()} Datalytix NG. All Rights Reserved.
                    </p>
                </div>

            </div>
        </footer>
    );
}

export default Footer;
