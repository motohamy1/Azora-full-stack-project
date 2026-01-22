import "../App.css";

const FeatureShowcase = () => {
  return (
    <section className="bg-primary py-24 px-4 md:px-20">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="flex flex-col md:flex-row justify-between items-start mb-16 gap-8">
          <h2 className="text-2xl md:text-5xl font-bold text-white max-w-md leading-tight">
            What you get on Setapp.
          </h2>
          <p className="text-gray-400 max-w-sm text-base leading-relaxed pt-2">
            With a single monthly subscription at $9.99, you get 240+ apps for your Mac.
          </p>
        </div>

        {/* Feature Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Top Large Card: Keep your Mac clean */}
          <div className="md:col-span-2 bg-[#f194b8] rounded-[2.5rem] p-10 overflow-hidden flex flex-col items-start relative min-h-[500px]">
            <div className="flex items-center gap-5 mb-8 z-10">
              <div className="bg-white p-2 rounded-xl shadow-lg">
                <img src="/icons/icon-cmm.png.png" alt="CleanMyMac" className="w-10 h-10" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-primary">Keep your Mac clean</h3>
                <p className="text-primary/70 text-base font-medium">Remove junk, scan for malware, wipe email attachments</p>
              </div>
            </div>

            <div className="mt-auto w-full mx-auto shadow-2xl rounded-t-2xl overflow-hidden translate-y-6">
              <img src="/images/cmm-big@2x.png.png" alt="CleanMyMac Interface" className="w-full h-auto" />
            </div>
          </div>

          {/* Bottom Left Card: Write code */}
          <div className="bg-[#f7f3e8] rounded-[2.5rem] overflow-hidden flex flex-col min-h-[550px] shadow-sm">

            <img
              src="/images/coderunner@2x.png.png"
              alt="CodeRunner Interface"
              className="w-full h-auto rounded-xl "
            />

            <div className="p-10 pt-0">
              <div className="bg-white p-2 rounded-xl shadow-md inline-block mb-5 border border-gray-100">
                <img src="/icons/icon-coderunner.png.png" alt="CodeRunner" className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold text-primary mb-2 text-left">Write code</h3>
              <p className="text-primary/70 text-base font-medium text-left">Create applications in more than 25 languages</p>
            </div>
          </div>

          {/* Bottom Right Card: Join meetings */}
          <div className="bg-[#334b7a] rounded-[2.5rem] overflow-hidden flex flex-col min-h-[550px] shadow-sm px-10 pt-10 pb-0">
            <div className="flex flex-col items-center text-center mb-8">
              <div className="mb-6">
                <img src="/icons/icon-meeter.png.png" alt="Meeter" className="w-16 h-16" />
              </div>
              <h3 className="text-3xl font-bold text-white mb-2">Join meetings in a click</h3>
              <p className="text-white/70 text-base font-medium max-w-[280px]">Quickly access links to your meetings from menu bar</p>
            </div>

            <img
              src="/images/meeter@2x.png.png"
              alt="Meeter Interface"
              className="w-full h-auto rounded-xl lg:translate-y-6 mt-auto"
            />
          </div>
        </div>

        {/* Footer Link */}
        <div className="flex justify-center mt-16">
          <a href="#" className="flex items-center gap-3 text-white hover:text-blue-400 transition-all font-bold group">
            <span className="border-b-2 border-transparent group-hover:border-blue-400 pb-1">View all superpowers</span>
            <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>

        {/* Bottom Section: Journey */}
        <div className="mt-40 border-t border-white/10 pt-20 flex flex-col md:flex-row justify-between items-start gap-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white max-w-sm leading-tight">
            Your Setapp journey.
          </h2>
          <p className="text-gray-400 max-w-md text-base leading-relaxed pt-2">
            Type in your task into Setapp search and get instant app recommendations.
          </p>
        </div>

        {/* Placeholder for the line at the very bottom */}
        <div className="mt-20 w-full h-[1px] bg-white/10"></div>
      </div>
    </section>
  );
};

export default FeatureShowcase;
