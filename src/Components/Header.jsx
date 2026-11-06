// 
import { useState } from 'react';
import { FaMapMarkerAlt, FaPhoneAlt, FaBars, FaTimes } from "react-icons/fa";
import logo from "../assets/datalytix-logo.png";

const Header = ({
    logoText = "Datalytix",
    address = "11, Kudirat Abiola Way, Oregun, Ikeja, Lagos State",
    phone = " +234 8034174300",
    phoneHref = "tel: +234 8034174300"
}) => {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    const navLinks = [

        { label: "Who We Are", href: "/#about" },
        { label: "Our Approach", href: "/#approach" },
        { label: "Services", href: "/#services" },
        { label: "Contact Us", href: "/#contact" },
    ];

    return (
        <header className="sticky top-0 z-50 w-full bg-white/95 backdrop-blur-md border-b border-gray-100 shadow-xs transition-all">
            <div className="max-w-[1500px] mx-auto px-6 sm:px-10 lg:px-16">
                <div className="flex items-center justify-between h-20">

                    {/* Left: Logo */}
                    <div className="flex-shrink-0">
                        <a href="#" className="flex items-center gap-2.5 group">
                            <img src={logo} alt="Datalytix Logo" className="w-36 h-auto object-contain transition-transform duration-300 group-hover:scale-105" />
                        </a>
                    </div>

                    {/* Middle: Navigation Links */}
                    <nav className="hidden md:flex items-center space-x-8 lg:space-x-10">
                        {navLinks.map((link) => (
                            <a
                                key={link.label}
                                href={link.href}
                                className="text-base font-semibold text-slate-700 hover:text-[#3CB5D0] transition-colors duration-200 relative py-1 after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 hover:after:w-full after:bg-[#3CB5D0] after:transition-all after:duration-300"
                            >
                                {link.label}
                            </a>
                        ))}
                    </nav>

                    {/* Right: Address & Phone stacked in a Grid */}
                    <div className="hidden lg:grid grid-rows-2 gap-1 text-right">

                        {/* Top Row: Address */}
                        <div className="flex items-center justify-end gap-1.5 text-sm text-slate-500">
                            <FaMapMarkerAlt className="w-3.5 h-3.5 text-[#0A2540] flex-shrink-0" />

                            <span className="max-w-[240px] truncate" title={address}>
                                {address}
                            </span>
                        </div>

                        {/* Bottom Row: Phone Number */}
                        <div className="flex items-center justify-end gap-1.5 text-sm font-bold text-slate-800">
                            <FaPhoneAlt className="w-3.5 h-3.5 text-[#0A2540] flex-shrink-0" />

                            <a
                                href={phoneHref}
                                className="hover:text-[#3CB5D0] transition-colors"
                            >
                                {phone}
                            </a>
                        </div>
                    </div>

                    {/* Mobile Menu Hamburger Button */}
                    <div className="flex md:hidden">
                        <button
                            type="button"
                            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                            className="p-2 rounded-lg text-slate-700 hover:text-[#3CB5D0] hover:bg-slate-100 focus:outline-none focus:ring-2 focus:ring-[#3CB5D0]"
                            aria-label="Toggle mobile menu"
                            aria-expanded={mobileMenuOpen}
                        >
                            {mobileMenuOpen ? (
                                <FaTimes className="w-6 h-6" />
                            ) : (
                                <FaBars className="w-6 h-6" />
                            )}
                        </button>
                    </div>

                </div>
            </div>

            {/* Mobile Dropdown Menu */}
            {mobileMenuOpen && (
                <div className="md:hidden border-t border-gray-100 bg-white/98 px-6 pt-3 pb-6 shadow-xl">
                    <nav className="flex flex-col space-y-3 pb-4 border-b border-gray-100">
                        {navLinks.map((link) => (
                            <a
                                key={link.label}
                                href={link.href}
                                onClick={() => setMobileMenuOpen(false)}
                                className="text-base font-medium text-slate-800 hover:text-[#3CB5D0] py-1 transition-colors"
                            >
                                {link.label}
                            </a>
                        ))}
                    </nav>

                    {/* Mobile Address & Phone */}
                    <div className="grid grid-rows-2 gap-2 pt-4 text-sm">

                        <div className="flex items-center gap-2 text-slate-600">
                            <FaMapMarkerAlt className="w-4 h-4 text-[#0A2540] flex-shrink-0" />

                            <span>{address}</span>
                        </div>

                        <div className="flex items-center gap-2 font-medium text-slate-800">
                            <FaPhoneAlt className="w-4 h-4 text-[#0A2540] flex-shrink-0" />

                            <a href={phoneHref} className="text-[#3CB5D0] font-semibold hover:underline">
                                {phone}
                            </a>
                        </div>
                    </div>
                </div>
            )}
        </header>
    );
};

export default Header;
