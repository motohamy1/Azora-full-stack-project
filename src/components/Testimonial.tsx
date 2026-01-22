import "../App.css";

const Testimonial = () => {
  return (
    <section className="bg-primary pb-32 px-4 md:px-20">
      <div className="max-w-6xl mx-auto relative">
        <div className="bg-[#814a68] rounded-[2.5rem] overflow-hidden flex flex-col md:flex-row items-center min-h-[500px] relative shadow-2xl">
          {/* Left Content */}
          <div className="md:w-1/2 p-12 md:p-20 z-10 flex flex-col items-start justify-center h-full">
            <p className="text-white text-xl md:text-2xl font-medium leading-relaxed mb-6">
              "Musicians like Jason use Azora to push the limits of their creativity, dancing through tasks for more time to play."
            </p>
            <p className="text-white/60 text-sm font-bold uppercase tracking-widest">
              Jason Becker
            </p>

            <button className="mt-12 w-14 h-14 bg-white rounded-full flex items-center justify-center hover:scale-110 transition-transform shadow-lg group">
              <svg className="w-5 h-5 text-[#814a68] ml-1 group-hover:scale-110 transition-transform" fill="currentColor" viewBox="0 0 24 24">
                <path d="M8 5v14l11-7z" />
              </svg>
            </button>
          </div>

          {/* Right Image Placeholder */}
          <div className="md:w-1/2 h-full absolute right-0 top-0 hidden md:block">
            <img 
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?fit=crop&w=800&q=80" 
              alt="Testimonial user" 
              className="w-full h-full object-cover grayscale-[20%] brightness-90"
            />
          </div>

          {/* Navigation Arrows (Top Right) */}
          <div className="absolute top-8 right-12 flex gap-4 z-20 hidden md:flex">
            <button className="text-white/40 hover:text-white transition-colors">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button className="text-white/40 hover:text-white transition-colors">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>

        {/* Carousel Indicators */}
        <div className="flex justify-center gap-3 mt-8">
          <div className="w-2 h-2 rounded-full bg-white"></div>
          <div className="w-2 h-2 rounded-full bg-white/20 hover:bg-white/40 cursor-pointer transition-colors"></div>
          <div className="w-2 h-2 rounded-full bg-white/20 hover:bg-white/40 cursor-pointer transition-colors"></div>
          <div className="w-2 h-2 rounded-full bg-white/20 hover:bg-white/40 cursor-pointer transition-colors"></div>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
