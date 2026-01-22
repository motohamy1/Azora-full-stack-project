import "../App.css";

const FeatureShowcase = () => {
  return (
    <section className="bg-primary py-24 px-4 md:px-20">
      <div className="max-w-6xl mx-auto">
        {/* Header Section */}
        <div className="flex flex-col md:flex-row justify-between items-start mb-16 gap-8">
          <h2 className="text-3xl md:text-5xl font-bold text-white max-w-md leading-tight">
            What you get on Azora.
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
            
            {/* Mock App Interface */}
            <div className="mt-auto w-full max-w-4xl mx-auto shadow-2xl rounded-t-2xl overflow-hidden border border-white/20 translate-y-6">
              <div className="bg-[#1e1e1e] p-3 flex gap-2 border-b border-white/5">
                <div className="w-3 h-3 rounded-full bg-[#ff5f56]"></div>
                <div className="w-3 h-3 rounded-full bg-[#ffbd2e]"></div>
                <div className="w-3 h-3 rounded-full bg-[#27c93f]"></div>
              </div>
              <div className="bg-gradient-to-br from-[#d4488b] to-[#7b2f8a] h-72 w-full flex items-center justify-center relative">
                 {/* Decorative Circle UI */}
                 <div className="bg-white/5 backdrop-blur-xl rounded-full w-48 h-48 border border-white/20 flex items-center justify-center">
                    <div className="w-36 h-36 border-4 border-white/30 rounded-full border-t-white/80 animate-[spin_4s_linear_infinite]"></div>
                    <div className="absolute w-24 h-24 bg-white/10 rounded-full blur-2xl"></div>
                 </div>
                 {/* App UI List mock */}
                 <div className="absolute left-8 top-12 space-y-3 hidden lg:block">
                    {[1, 2, 3, 4].map(i => (
                      <div key={i} className="h-2 w-24 bg-white/20 rounded-full"></div>
                    ))}
                 </div>
              </div>
            </div>
          </div>

          {/* Bottom Left Card: Write code */}
          <div className="bg-[#f7f3e8] rounded-[2.5rem] p-10 overflow-hidden flex flex-col min-h-[550px]">
            <div className="bg-[#1e1e1e] rounded-2xl shadow-2xl w-full flex-grow mb-10 overflow-hidden border border-black/10 flex flex-col">
                <div className="bg-[#2d2d2d] p-3 flex gap-2 border-b border-white/5">
                  <div className="w-2.5 h-2.5 rounded-full bg-[#ff5f56]"></div>
                  <div className="w-2.5 h-2.5 rounded-full bg-[#ffbd2e]"></div>
                  <div className="w-2.5 h-2.5 rounded-full bg-[#27c93f]"></div>
                </div>
                <div className="p-6 font-mono text-sm h-full bg-[#1e1e1e]">
                  <p className="mb-1"><span className="text-pink-400">def</span> <span className="text-yellow-400">permute</span>(charset, string, result):</p>
                  <p className="ml-4 mb-1 text-gray-500">"""Recursively calculate permutations"""</p>
                  <p className="ml-4 mb-1 text-pink-400">if <span className="text-white">result == </span><span className="text-blue-400">None</span>:</p>
                  <p className="ml-8 mb-1">result = []</p>
                  <p className="ml-4 mb-1 text-pink-400">if <span className="text-white">len(charset) == </span><span className="text-blue-400">0</span>:</p>
                  <p className="ml-8 mb-1">result.append(string)</p>
                  <p className="ml-4 mb-1 text-pink-400">for <span className="text-white">i </span>in <span className="text-blue-400">range</span>(<span className="text-blue-400">len</span>(charset)):</p>
                  <p className="ml-8 text-white">newString = string + charset[i]</p>
                </div>
            </div>
            <div className="mt-auto">
              <div className="bg-white p-2 rounded-xl shadow-md inline-block mb-5">
                <img src="/icons/icon-coderunner.png.png" alt="CodeRunner" className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold text-primary mb-2">Write code</h3>
              <p className="text-primary/70 text-base font-medium">Create applications in more than 25 languages</p>
            </div>
          </div>

          {/* Bottom Right Card: Join meetings */}
          <div className="bg-[#334b7a] rounded-[2.5rem] p-10 overflow-hidden flex flex-col min-h-[550px]">
            <div className="flex items-center gap-5 mb-8">
              <div className="bg-white/10 p-2 rounded-xl backdrop-blur-md">
                <img src="/icons/icon-meeter.png.png" alt="Meeter" className="w-10 h-10" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white mb-1">Join meetings in a click</h3>
                <p className="text-white/70 text-base font-medium">Quickly access links to your meetings from menu bar</p>
              </div>
            </div>
            
            <div className="bg-[#1a1a1a] rounded-2xl shadow-2xl border border-white/10 p-6 mt-4 flex-grow">
                <div className="flex items-center gap-2 mb-6 border-b border-white/10 pb-4">
                  <div className="w-3 h-3 rounded-full bg-blue-500"></div>
                  <span className="text-sm font-bold text-white">Meeter</span>
                </div>
                <div className="space-y-4">
                  {[
                    { time: '8:45 PM', title: 'Global Design Conference', color: 'bg-blue-600' },
                    { time: '2:45 PM', title: 'ThinkTank: Fiz Meetings', color: 'bg-indigo-600' },
                    { time: '4:15 PM', title: 'Yacht Club Get-Together', color: 'bg-cyan-600' },
                    { time: '9:00 PM', title: '(Client) Treecard Inc | Review', color: 'bg-purple-600' }
                  ].map((meeting, i) => (
                    <div key={i} className="flex justify-between items-center p-3 rounded-xl bg-white/5 border border-white/5 hover:bg-white/10 transition-colors">
                      <div className="flex flex-col">
                        <span className="text-[10px] text-gray-400 uppercase tracking-wider mb-1">{meeting.time}</span>
                        <span className="text-xs font-medium text-white">{meeting.title}</span>
                      </div>
                      <button className={`${meeting.color} text-[10px] px-3 py-1.5 rounded-lg font-bold text-white hover:brightness-110 transition-all shadow-lg`}>
                        Join Call
                      </button>
                    </div>
                  ))}
                </div>
            </div>
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
          <h2 className="text-3xl md:text-5xl font-bold text-white max-w-sm leading-tight">
            Your Azora journey.
          </h2>
          <p className="text-gray-400 max-w-md text-base leading-relaxed pt-2">
            Type in your task into Azora search and get instant app recommendations.
          </p>
        </div>
        
        {/* Placeholder for the line at the very bottom */}
        <div className="mt-20 w-full h-[1px] bg-white/10"></div>
      </div>
    </section>
  );
};

export default FeatureShowcase;
