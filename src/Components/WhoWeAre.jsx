import { useState } from 'react';
import Image1 from "../assets/IT-IMAGES2.jpg";
import Image2 from "../assets/IT-IMAGES4.jpg";

/**
 * ----------------------------------------------------------------------------------
 * WHO WE ARE SECTION - DATALYTIX
 * ----------------------------------------------------------------------------------
 * Pure, authentic editorial layout based directly on enterprise reference.
 * Zero AI decorative fluff: no fake metric counters, no status pills, no blur blobs.
 * Features:
 *   - Stable dual-image stage: Containers remain in fixed positions to eliminate
 *     all hover clashes and flickering.
 *   - Smooth crossfade preview: Hovering over the overlapping thumbnail seamlessly
 *     reveals it in the large primary frame, and vice versa.
 *   - Directly uses imported assets (Image1, Image2) with customizable prop fallback.
 *   - Clean 2-column checklist with solid dark circular checkmarks.
 * ----------------------------------------------------------------------------------
 */

const CHECKPOINTS = [
  "IT Service Management",
  "IT Consulting and Outsourcing",
  "Data Center Solution",
  "Content Management",
  "Business Enterprise Software",
  "Business Process Management",
  "Business Intelligence and Analytics Solutions",
  "Advanced Infrastructure & Shared Services",
];

const WhoWeAre = ({
  image1 = Image1,
  image2 = Image2,
}) => {
  // 0 = image1 in main frame, image2 in thumbnail
  // 1 = image2 in main frame, image1 in thumbnail
  const [activeSlot, setActiveSlot] = useState(0);

  return (
    <section id="about" className="relative w-full py-20 lg:py-28 bg-white text-slate-900 border-t border-slate-100">
      <div className="max-w-[1500px] mx-auto px-6 sm:px-10 lg:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 xl:gap-20 items-center">
          
          {/* ========================================================= */}
          {/* LEFT: LARGE DUAL-IMAGE VIEWPORT-HEIGHT STAGE (~75vh)      */}
          {/* ========================================================= */}
          <div className="lg:col-span-6 xl:col-span-7">
            <div className="relative w-full h-[55vh] sm:h-[68vh] lg:h-[75vh] min-h-[500px] max-h-[760px] select-none">
              
              {/* PRIMARY (MAIN) IMAGE FRAME — FIXED TOP-LEFT POSITION */}
              <div
                onMouseEnter={() => setActiveSlot(0)}
                className="absolute left-0 top-0 w-[80%] h-[82%] rounded-2xl overflow-hidden shadow-xl z-10 bg-slate-100 transition-shadow duration-300 hover:shadow-2xl"
              >
                {/* Image 1 in Main */}
                <img
                  src={image1}
                  alt="Datalytix Engineering Primary"
                  className={`absolute inset-0 w-full h-full object-cover object-center transition-all duration-500 ease-in-out ${
                    activeSlot === 0 ? "opacity-100 scale-100" : "opacity-0 scale-105 pointer-events-none"
                  }`}
                />
                {/* Image 2 in Main */}
                <img
                  src={image2}
                  alt="Datalytix Engineering Detail"
                  className={`absolute inset-0 w-full h-full object-cover object-center transition-all duration-500 ease-in-out ${
                    activeSlot === 1 ? "opacity-100 scale-100" : "opacity-0 scale-105 pointer-events-none"
                  }`}
                />
              </div>

              {/* OVERLAPPING THUMBNAIL FRAME — FIXED BOTTOM-RIGHT POSITION */}
              {/* Hovering or clicking this smoothly switches the view with ZERO coordinate jump or clash */}
              <div
                onMouseEnter={() => setActiveSlot(1)}
                onMouseLeave={() => setActiveSlot(0)}
                onClick={() => setActiveSlot((prev) => (prev === 0 ? 1 : 0))}
                className="absolute right-0 bottom-3 sm:bottom-6 w-[54%] h-[54%] rounded-2xl overflow-hidden shadow-2xl border-4 border-white z-20 cursor-pointer transition-transform duration-300 ease-out hover:scale-105 bg-slate-100"
                title="Hover or click to switch view"
              >
                {/* Image 2 in Thumbnail (visible by default) */}
                <img
                  src={image2}
                  alt="Datalytix Secondary Preview"
                  className={`absolute inset-0 w-full h-full object-cover object-center transition-all duration-500 ease-in-out ${
                    activeSlot === 0 ? "opacity-100 scale-100" : "opacity-0 scale-105 pointer-events-none"
                  }`}
                />
                {/* Image 1 in Thumbnail (visible when swapped) */}
                <img
                  src={image1}
                  alt="Datalytix Primary Preview"
                  className={`absolute inset-0 w-full h-full object-cover object-center transition-all duration-500 ease-in-out ${
                    activeSlot === 1 ? "opacity-100 scale-100" : "opacity-0 scale-105 pointer-events-none"
                  }`}
                />
              </div>

            </div>
          </div>

          {/* ========================================================= */}
          {/* RIGHT: CLEAN, BOLD EDITORIAL CONTENT                      */}
          {/* ========================================================= */}
          <div className="lg:col-span-6 xl:col-span-5 flex flex-col justify-center">

            {/* Clear, bold headline */}
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0A2540] tracking-tight leading-[1.15]">
              Information Technology solutions Delivery
            </h2>

            {/* Natural, readable body copy */}
            <p className="mt-6 text-base sm:text-lg text-slate-600 leading-relaxed">
              We are an Information Technology Solutions Delivery Company certified across multiple OEM’s such as Oracle, Microsoft and others, with competencies in Data Management, Business Intelligence and Analytics, Data Warehousing, Unified Messaging and Communication, Advanced infrastructure and Shared services solutions.
            </p>

            {/* Clean 2-column checklist with solid checkmarks */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-4 mt-8 pt-6 border-t border-slate-100">
              {CHECKPOINTS.map((item, index) => (
                <div key={index} className="flex items-start gap-3">
                  <div className="w-5.5 h-5.5 rounded-full bg-[#0A2540] text-white flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="3">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-base font-semibold text-slate-800 leading-snug">
                    {item}
                  </span>
                </div>
              ))}
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};

export default WhoWeAre;
