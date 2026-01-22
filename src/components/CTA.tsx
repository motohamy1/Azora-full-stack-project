
const CTA = () => {
    return (
        <section className="relative px-4 md:px-20 pb-24">
            {/* Top half - white */}
            <div className="absolute inset-0 bg-white h-1/2"></div>
            {/* Bottom half - primary */}
            <div className="absolute inset-0 bg-primary h-1/2 top-1/2"></div>

            <div className="max-w-7xl mx-auto relative">
                <div className="bg-[#f7f7f7] rounded-[3rem] p-12 md:p-24 flex flex-col items-start gap-8 shadow-2xl">
                    {/* Decorative Icon */}
                    <div className="relative w-16 h-16">
                        <svg
                            viewBox="0 0 100 100"
                            className="w-full h-full fill-[#ebb491]"
                        >
                            {/* Diamond pattern */}
                            <rect x="35" y="0" width="30" height="30" transform="rotate(45 50 15)" />
                            <rect x="0" y="35" width="30" height="30" transform="rotate(45 15 50)" />
                            <rect x="70" y="35" width="30" height="30" transform="rotate(45 85 50)" />
                            <rect x="35" y="70" width="30" height="30" transform="rotate(45 50 85)" />
                            <rect x="35" y="35" width="30" height="30" transform="rotate(45 50 50)" />
                        </svg>
                    </div>

                    {/* Heading */}
                    <div className="space-y-2">
                        <h2 className="text-4xl md:text-5xl font-bold text-primary leading-[1.1]">
                            Superpowers starting $9.99/month.
                        </h2>
                        <h2 className="text-4xl md:text-5xl font-bold text-primary leading-[1.1]">
                            Free for 7 days.
                        </h2>
                    </div>

                    {/* Buttons */}
                    <div className="flex flex-wrap gap-4 mt-4">
                        <button className="bg-primary text-white px-8 py-4 rounded-lg font-bold text-sm hover:bg-[#322f38] transition-colors">
                            Get started now
                        </button>
                        <button className="bg-white text-primary border border-gray-300 px-8 py-4 rounded-lg font-bold text-sm hover:bg-gray-50 transition-colors">
                            More about Setapp
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CTA;
