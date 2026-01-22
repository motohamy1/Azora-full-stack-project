
const Footer = () => {
    return (
        <footer className="bg-primary text-white pt-20 pb-10 px-4 md:px-20 border-t border-white/10">
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
                    {/* Logo and Newsletter */}
                    <div className="space-y-8">
                        <div className="flex items-center gap-2">
                            <svg viewBox="0 0 100 100" className="w-6 h-6 fill-[#ebb491]">
                                <rect x="35" y="0" width="30" height="30" transform="rotate(45 50 15)" />
                                <rect x="0" y="35" width="30" height="30" transform="rotate(45 15 50)" />
                                <rect x="70" y="35" width="30" height="30" transform="rotate(45 85 50)" />
                                <rect x="35" y="70" width="30" height="30" transform="rotate(45 50 85)" />
                                <rect x="35" y="35" width="30" height="30" transform="rotate(45 50 50)" />
                            </svg>
                            <span className="font-bold tracking-widest text-lg">SETAPP</span>
                        </div>

                        <div className="space-y-4">
                            <p className="text-gray-400 text-sm">
                                Updates from our team, written with love ❤️
                            </p>
                            <div className="flex max-w-sm rounded-lg overflow-hidden bg-white/10 p-1">
                                <input
                                    type="email"
                                    placeholder="Enter your email"
                                    className="bg-transparent border-none outline-none grow px-4 py-2 text-sm text-white placeholder-gray-500"
                                />
                                <button className="bg-white text-primary p-2 rounded-md hover:bg-white/90 transition-colors">
                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                    </svg>
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Links Column 1 */}
                    <div className="space-y-4">
                        <h4 className="font-medium">Company</h4>
                        <ul className="space-y-2 text-sm text-gray-400">
                            <li><a href="#" className="hover:text-white transition-colors">Home</a></li>
                            <li><a href="#" className="hover:text-white transition-colors">How It Works</a></li>
                            <li><a href="#" className="hover:text-white transition-colors">All Apps</a></li>
                            <li><a href="#" className="hover:text-white transition-colors">Pricing</a></li>
                            <li><a href="#" className="hover:text-white transition-colors">Setapp for Teams</a></li>
                            <li><a href="#" className="hover:text-white transition-colors">Blog</a></li>
                            <li><a href="#" className="hover:text-white transition-colors">Podcast</a></li>
                            <li><a href="#" className="hover:text-white transition-colors">Download</a></li>
                        </ul>
                    </div>

                    {/* Links Column 2 */}
                    <div className="space-y-4">
                        <h4 className="font-medium">Support</h4>
                        <ul className="space-y-2 text-sm text-gray-400">
                            <li><a href="#" className="hover:text-white transition-colors">About</a></li>
                            <li><a href="#" className="hover:text-white transition-colors">Support</a></li>
                            <li><a href="#" className="hover:text-white transition-colors">Education Discount</a></li>
                            <li><a href="#" className="hover:text-white transition-colors">Family Plan</a></li>
                            <li><a href="#" className="hover:text-white transition-colors">For Developers</a></li>
                            <li><a href="#" className="hover:text-white transition-colors">Gift Cards</a></li>
                            <li><a href="#" className="hover:text-white transition-colors">Redeem Card or Code</a></li>
                            <li><a href="#" className="hover:text-white transition-colors">Setapp Reviews</a></li>
                            <li><a href="#" className="hover:text-white transition-colors">Affiliate Program</a></li>
                            <li><a href="#" className="hover:text-white transition-colors">Mac Developer Survey 2023</a></li>
                        </ul>
                    </div>

                    {/* Links Column 3 */}
                    <div className="space-y-4">
                        <h4 className="font-medium">Guides</h4>
                        <ul className="space-y-2 text-sm text-gray-400">
                            <li><a href="#" className="hover:text-white transition-colors">Getting started with Setapp</a></li>
                            <li><a href="#" className="hover:text-white transition-colors">Remote access to other Mac</a></li>
                            <li><a href="#" className="hover:text-white transition-colors">Fix macOS Ventura problems</a></li>
                            <li><a href="#" className="hover:text-white transition-colors">Best productivity apps</a></li>
                            <li><a href="#" className="hover:text-white transition-colors">Best YouTube downloaders</a></li>
                            <li><a href="#" className="hover:text-white transition-colors">Uninstall apps</a></li>
                        </ul>
                    </div>
                </div>

                {/* Badges and Language */}
                <div className="flex flex-col md:flex-row justify-between items-center py-8 border-t border-white/10 gap-4">
                    <div className="flex items-center gap-4">
                        <div className="bg-gray-800 text-[10px] px-2 py-1 rounded font-bold border border-gray-700">
                            DMCA PROTECTED
                        </div>
                    </div>

                    <button className="flex items-center gap-2 text-sm text-gray-400 hover:text-white transition-colors">
                        <span className="w-5 h-5 flex items-center justify-center">🇺🇸</span>
                        English
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                    </button>
                </div>

                {/* Bottom Bar */}
                <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-6">
                    <div className="text-xs text-gray-500 text-center md:text-left">
                        <p>© 2023 Setapp Limited, 9 Tallow Street, Youghal, Co. Cork, P36YE14, Ireland. Reg. 584165. VAT ID: IE3425001BH</p>
                        <div className="mt-2 space-x-4">
                            <a href="#" className="hover:text-white transition-colors">Terms of Use</a>
                            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
                        </div>
                    </div>

                    <div className="flex gap-4">
                        {[1, 2, 3, 4].map((i) => (
                            <div key={i} className="w-8 h-8 rounded-full bg-gray-600 flex items-center justify-center cursor-pointer hover:bg-gray-500 transition-colors">
                                <div className="w-4 h-4 bg-gray-400 rounded-sm"></div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
