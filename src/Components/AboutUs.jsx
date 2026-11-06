/**
 * ----------------------------------------------------------------------------------
 * ABOUT US (3 CARDS SECTION) - DATALYTIX
 * ----------------------------------------------------------------------------------
 * Background: #3CB5D0 (Cyan Brand Color)
 * Clean, authentic 3-card presentation with zero decorative fluff.
 * Pure white cards, custom dark blue icon pods, and comfortably formatted text.
 * ----------------------------------------------------------------------------------
 */

const CARDS = [
  {
    id: 1,
    title: "Who We Are",
    copy: "We are an Information Technology Solutions Delivery Company certified across multiple OEM's such as Oracle, Microsoft and others, with competencies in Data Management, Business Intelligence and Analytics, Data Warehousing, Unified Messaging and Communication, Advanced infrastructure and Shared services solutions. Our Strength lies in our vast experience in the industry with combined experience of over 40 years helping us provide simple solutions to complex IT problems.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    )
  },
  {
    id: 2,
    title: "Our Approach",
    copy: "At Datalytix NG, we are currently updating and researching knowledge on products and services to ensure we are step ahead of the competition in providing complete solution to suit the business model of our clients. We are dedicated to supporting our client's business with superior technical and consultative approach resulting in efficient and effective solutions to their information technology needs. We utilize a three phased approach of Analysis, Design and Implementation to align technology with achievement of the strategic operational objectives.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    )
  },
  {
    id: 3,
    title: "Our Process",
    copy: "All project contracted to Datalytix NG goes through a comprehensive project management cycle that has at its core continuous communication with the client to ensure that expectation are managed and deliverables achieved within time and on budget. We are a company that holds integrity as a core value and this attribute is demonstrated by our engineers on site and backend office support.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    )
  }
];

const AboutUs = () => {
  return (
    <section id="about-us" className="relative w-full py-20 lg:py-28 bg-[#3CB5D0]">
      <div className="max-w-[1500px] mx-auto px-6 sm:px-10 lg:px-16">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-[#0A2540] mb-2 block">
            ABOUT DATALYTIX NG
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-[#0A2540] leading-tight">
            Built on Experience, Guided by Process
          </h2>
          <div className="w-12 h-1 bg-[#0A2540] rounded-full mx-auto mt-4" />
        </div>

        {/* 3 Pure White Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
          {CARDS.map((card) => (
            <div
              key={card.id}
              className="bg-white rounded-2xl p-8 sm:p-9 shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col justify-start"
            >
              {/* Dark Blue Icon Pod */}
              <div className="w-13 h-13 rounded-xl bg-[#0A2540] text-[#3CB5D0] flex items-center justify-center mb-6 shadow-sm">
                {card.icon}
              </div>

              {/* Card Title */}
              <h3 className="text-2xl font-bold text-[#0A2540] tracking-tight mb-4">
                {card.title}
              </h3>

              {/* Body Copy */}
              <p className="text-sm sm:text-base leading-relaxed text-slate-600 text-justify">
                {card.copy}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default AboutUs;
