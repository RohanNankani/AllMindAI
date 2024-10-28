export default function GetStartedSection() {
  return (
      <section className="get-started-section py-20 bg-neutral-900 text-white text-center rounded-xl shadow-lg max-w-5xl mx-auto my-16">
          <div className="max-w-3xl mx-auto px-6">
              <h2 className="text-4xl font-bold mb-6">Get started for free</h2>
              <p className="text-lg mb-10 leading-relaxed">
                  Level up your equity management for $0 — no credit card required. Flat-rate paid plans start at $100 per month for unlimited stakeholders.
              </p>
              <div className="flex justify-center gap-10">
                  <button className="cta-button bg-white text-black px-8 py-3 rounded-full uppercase hover:bg-gray-200 transition-all">
                      See a Demo
                  </button>
                  <button className="cta-button bg-white text-black px-8 py-3 rounded-full uppercase hover:bg-gray-200 transition-all">
                      Get Started
                  </button>
              </div>
          </div>
      </section>
  );
}
