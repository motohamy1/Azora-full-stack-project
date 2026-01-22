
const UserFeedback = () => {
    const testimonials = [
        {
            id: 1,
            text: "Have been using Setapp for almost two years, and I have to say it's the best and the most cost-effective way of having apps on Mac.",
            author: "Arash Pourhabibi",
            handle: "@ArashPourhabibi",
            color: "bg-[#7c7499]",
            icon: <img src="/icons/Item ⏵ Link - Setapp on Twitter ⏵ SVG.png" alt="Twitter" className="w-5 h-5" />
        },
        {
            id: 2,
            text: "My favorites ❤️ from @Setapp Ulysses, CleanMyMac X, Paste, MindNode, Swift Publisher.",
            author: "Mauricio Sanchez",
            handle: "@m741s",
            color: "bg-[#e1ad87]",
            icon: <img src="/icons/Item ⏵ Link - Setapp on Instagram ⏵ SVG.png" alt="Instagram" className="w-5 h-5" />
        },
        {
            id: 3,
            text: "For those of you that wonder where I discover/get all the awesome apps for my Mac that I use, a lot of them are from Setapp!",
            author: "Meredith Sweet",
            handle: "@meredith.sweet.silberstein",
            color: "bg-[#8b4b66]",
            icon: <img src="/icons/Item ⏵ Link - Setapp on Facebook ⏵ SVG.png" alt="Facebook" className="w-5 h-5" />
        }
    ];

    return (
        <section className="bg-white py-20 px-4 md:px-20 overflow-hidden">
            <div className="max-w-7xl mx-auto">
                {/* Header Section */}
                <div className="flex flex-col md:flex-row md:items-center justify-between mb-16 gap-8">
                    <div className="space-y-4">
                        <h2 className="text-4xl md:text-5xl font-bold text-[#26252b]">
                            Setapp in your words.
                        </h2>
                    </div>

                    <div className="flex flex-col md:flex-row items-start md:items-center gap-8">
                        <p className="text-gray-500 max-w-[200px] leading-snug">
                            What you say about how Setapp powers you up.
                        </p>

                        {/* Social Icons */}
                        <div className="flex gap-3">
                            <div className="w-10 h-10 rounded-full bg-[#3b5998] flex items-center justify-center text-white cursor-pointer hover:opacity-90 transition-opacity">
                                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" /></svg>
                            </div>
                            <div className="w-10 h-10 rounded-full bg-[#00acee] flex items-center justify-center text-white cursor-pointer hover:opacity-90 transition-opacity">
                                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.84 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" /></svg>
                            </div>
                            <div className="w-10 h-10 rounded-full bg-[#E4405F] flex items-center justify-center text-white cursor-pointer hover:opacity-90 transition-opacity">
                                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" /></svg>
                            </div>
                            <div className="w-10 h-10 rounded-full bg-[#ff0000] flex items-center justify-center text-white cursor-pointer hover:opacity-90 transition-opacity">
                                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" /></svg>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Cards Area */}
                <div className="relative">
                    {/* Navigation Arrows */}
                    <div className="absolute -top-12 right-0 flex gap-4 z-10">
                        <button className="text-gray-400 hover:text-gray-900 transition-colors">
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
                        </button>
                        <button className="text-gray-400 hover:text-gray-900 transition-colors">
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                        </button>
                    </div>

                    {/* Grid of Testimonials */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {testimonials.map((t) => (
                            <div key={t.id} className="bg-[#f2f2f2] rounded-3xl overflow-hidden shadow-sm flex flex-col h-full hover:shadow-md transition-shadow">
                                {/* Colored Top Part */}
                                <div className={`${t.color} p-8 pt-12 flex-grow min-h-[280px] rounded-b-3xl`}>
                                    <p className="text-white text-lg font-medium leading-relaxed">
                                        {t.text}
                                    </p>
                                </div>

                                {/* Info Bottom Part */}
                                <div className="p-8 flex items-center justify-between">
                                    <div className="flex flex-col">
                                        <span className="text-[#26252b] font-bold text-sm">
                                            {t.author}
                                        </span>
                                        <span className="text-gray-400 text-xs">
                                            {t.handle}
                                        </span>
                                    </div>
                                    <div>
                                        {t.icon}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Carousel Indicators */}
                    <div className="flex justify-center gap-3 mt-12">
                        <div className="w-2.5 h-2.5 rounded-full bg-black cursor-pointer"></div>
                        <div className="w-2.5 h-2.5 rounded-full bg-gray-200 hover:bg-gray-300 cursor-pointer transition-colors"></div>
                        <div className="w-2.5 h-2.5 rounded-full bg-gray-200 hover:bg-gray-300 cursor-pointer transition-colors"></div>
                        <div className="w-2.5 h-2.5 rounded-full bg-gray-200 hover:bg-gray-300 cursor-pointer transition-colors"></div>
                        <div className="w-2.5 h-2.5 rounded-full bg-gray-200 hover:bg-gray-300 cursor-pointer transition-colors"></div>
                        <div className="w-2.5 h-2.5 rounded-full bg-gray-200 hover:bg-gray-300 cursor-pointer transition-colors"></div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default UserFeedback;
