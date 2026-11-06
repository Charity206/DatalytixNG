import { useState } from "react";
import ContactImg from "../assets/contactus.jpg";

function ContactUs() {
    const [email, setEmail] = useState("");
    const [showForm, setShowForm] = useState(false);

    function handleContinue() {
        if (email.trim() !== "") {
            setShowForm(true);
        }
    }

    return (
        <section id="contact" className="w-full bg-white px-5 py-20 md:px-10 lg:px-20">
            <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 lg:grid-cols-2">

                {/* Left Image */}
                <div className="h-[350px] overflow-hidden rounded-2xl md:h-[500px]">
                    <img
                        src={ContactImg}
                        alt="Contact Datalytix NG"
                        className="h-full w-full object-cover"
                    />
                </div>

                {/* Right Content */}
                <div className="w-full py-10">

                    {!showForm ? (
                        <div className="h-[350px] rounded-2xl md:h-[500px]">
                            <h2 className="mb-6 text-3xl font-bold text-[#0A2540] md:text-4xl">
                                Let's Talk About Your Next Project.
                            </h2>

                            <p className="mb-8 text-base sm:text-lg leading-8 text-slate-600">
                                Have a question or need a reliable IT solution for your
                                business? Enter your email address to get started.
                                Our team would be happy to hear from you.
                            </p>

                            {/* Email Input and Button */}
                            <div className="flex w-full items-center rounded-full border border-gray-300 p-2 focus-within:border-[#3CB5D0]">
                                <input
                                    type="email"
                                    placeholder="Enter your email address"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    className="min-w-0 flex-1 bg-transparent px-4 py-3 text-base text-[#0A2540] outline-none"
                                />

                                <button
                                    type="button"
                                    onClick={handleContinue}
                                    disabled={!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)}
                                    className="rounded-full bg-[#3CB5D0] px-6 py-3 text-base font-semibold text-white transition hover:bg-[#0A2540] disabled:cursor-not-allowed disabled:opacity-40"
                                >
                                    Continue
                                </button>
                            </div>
                        </div>
                    ) : (
                        <div>
                            <h2 className="mb-3 text-3xl font-bold text-[#0A2540]">
                                Send Us a Message
                            </h2>

                            <p className="mb-6 text-base sm:text-lg text-slate-600">
                                Tell us a little about what you need.
                            </p>

                            <form className="space-y-5">
                                <input
                                    type="text"
                                    placeholder="Full Name"
                                    required
                                    className="w-full rounded-lg border border-gray-300 px-4 py-4 outline-none focus:border-[#3CB5D0]"
                                />

                                <input
                                    type="email"
                                    value={email}
                                    readOnly
                                    className="w-full rounded-lg border border-gray-300 bg-gray-50 px-4 py-4 outline-none"
                                />

                                <input
                                    type="text"
                                    placeholder="Subject"
                                    required
                                    className="w-full rounded-lg border border-gray-300 px-4 py-4 outline-none focus:border-[#3CB5D0]"
                                />

                                <textarea
                                    placeholder="Your Message"
                                    rows="5"
                                    required
                                    className="w-full resize-none rounded-lg border border-gray-300 px-4 py-4 outline-none focus:border-[#3CB5D0]"
                                />

                                <button
                                    type="submit"
                                    className="rounded-full bg-[#3CB5D0] px-8 py-4 font-semibold text-white transition hover:bg-[#0A2540]"
                                >
                                    Send Message
                                </button>
                            </form>
                        </div>
                    )}

                </div>
            </div>
        </section>
    );
}

export default ContactUs;
