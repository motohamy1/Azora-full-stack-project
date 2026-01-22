import "../App.css";

const Hero = () => {
  return (
    <section className="relative w-full min-h-[90vh] flex flex-col items-center justify-center text-center px-4 overflow-hidden bg-primary pt-20">
      {/* Floating Badges - Left Side */}
      <div className="absolute left-[15%] top-[15%] hidden lg:block">
        <img src="/images/pics.svg.png" alt="Work with pics" className="w-46 rotate-[-15deg] shadow-lg" />
      </div>

      <div className="absolute left-[20%] top-[32%] hidden lg:block">
        <img src="/images/pdf.svg.png" alt="PDF VPN" className="w-38 rotate-[10deg] shadow-lg" />
      </div>

      <div className="absolute left-[15%] top-[52%] hidden lg:block">
        <img src="/images/teamwork.svg.png" alt="Boost teamwork" className="w-55 rotate-[10deg] shadow-lg" />
      </div>

      <div className="absolute left-[15%] top-[62%] hidden lg:block">
        <img src="/images/secure.svg.png" alt="Stay secure" className="w-38 rotate-[6deg] shadow-lg" />
      </div>

      {/* Central Content */}
      <div className="z-10 flex flex-col items-center max-w-4xl">
        <div className="mb-8 p-6 bg-black rounded-[2.5rem] shadow-2xl inline-block border border-white/10">
          <img src="/icons/Vector.svg" alt="Azora Logo" className="w-16 h-16 brightness-200" />
        </div>

        <h1 className="text-4xl md:text-7xl font-bold text-white mb-4 tracking-tight">
          Dozens of apps. <br />
          One subscription. <br />
          $9.99
        </h1>

        <div className="flex flex-col md:flex-row items-center gap-4 mt-8">
          <button className="bg-white text-black px-10 py-4 rounded-xl font-semibold text-lg hover:bg-white/90 transition-all">
            Try free for 7 days
          </button>
          
          <div className="flex gap-3">
            <div className="bg-white p-4 rounded-xl cursor-pointer hover:bg-white/20 transition-all">
                <img src="/icons/apple.svg.svg" alt="apple" /> 
            </div>
            <div className="bg-white p-4 rounded-xl cursor-pointer hover:bg-white/20 transition-all">
              <img src="/icons/google.svg.svg" alt="google" />
            </div>
          </div>
        </div>

        <p className="text-gray-400 text-sm mt-12 max-w-xs leading-relaxed">
          Power up your workflow with Azora, a smart way to get apps.
        </p>
      </div>

      {/* Floating Badges - Right Side */}
      <div className="absolute right-[10%] top-[15%] hidden lg:block">
        <img src="/images/wifi.svg.png" alt="Fix wifi" className="w-46 rotate-[5deg] shadow-lg" />
      </div>

      <div className="absolute right-[15%] top-[22%] hidden lg:block">
        <img src="/images/plan.svg.svg" alt="Plan your day" className="w-44 rotate-[-8deg] shadow-lg" />
      </div>

      <div className="absolute right-[8%] top-[33%] hidden lg:block">
        <img src="/images/converter.svg.png" alt="Convert HEIC" className="w-44 rotate-[12deg] shadow-lg" />
      </div>

      <div className="absolute right-[14%] top-[50%] hidden lg:block">
        <img src="/images/manage.svg.png" alt="Manage Mac" className="w-60 rotate-[-12deg] shadow-lg" />
      </div>

      <div className="absolute right-[8%] top-[60%] hidden lg:block">
        <img src="/images/code.svg.png" alt="Code easier" className="w-44 rotate-[15deg] shadow-lg" />
      </div>

      {/* Bottom Border */}
      <div className="absolute bottom-0 w-[90%] h-[1px] bg-white/10"></div>
    </section>
  );
};

export default Hero;
