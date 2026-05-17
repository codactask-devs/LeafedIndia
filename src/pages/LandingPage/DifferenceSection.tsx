import { useState } from 'react';

const DifferenceSection = () => {
    const [playing, setPlaying] = useState(false);

    return (
        <section className="w-full bg-white">
            <div className="flex flex-col lg:flex-row">

                <div className="w-full lg:w-1/2 relative aspect-video bg-black">
                    {!playing ? (
                        <>
                            <iframe
                                src="https://www.youtube.com/embed/apJHXCO273E?mute=1&autoplay=0"
                                className="w-full h-full pointer-events-none"
                                allow="autoplay; encrypted-media"
                                allowFullScreen
                                title="LeafedIndia Video"
                            />
                            <div
                                className="absolute inset-0 flex items-center justify-center cursor-pointer group"
                                onClick={() => setPlaying(true)}
                            >
                                <div className="w-16 h-16 rounded-full bg-red-600 flex items-center justify-center shadow-2xl group-hover:scale-110 transition-transform duration-200">
                                    <svg viewBox="0 0 24 24" fill="white" className="w-7 h-7 ml-1">
                                        <path d="M8 5v14l11-7z" />
                                    </svg>
                                </div>
                            </div>
                        </>
                    ) : (
                        <iframe
                            src="https://www.youtube.com/embed/apJHXCO273E?autoplay=1"
                            className="w-full h-full"
                            allow="autoplay; encrypted-media"
                            allowFullScreen
                            title="LeafedIndia Video"
                        />
                    )}
                </div>

                <div className="w-full lg:w-1/2 flex items-center px-6 md:px-16 py-12 lg:py-0 bg-white">
                    <div className="max-w-lg">
                        <h2
                            style={{ fontFamily: "'Montserrat', sans-serif" }}
                            className="text-[36px] md:text-[44px] lg:text-[50px] font-black leading-[1.1] mb-6"
                        >
                            <span className="text-[#0d6e41] block">The LeafedIndia</span>
                            <span className="text-[#fb923c] block">Difference</span>
                        </h2>

                        <p
                            style={{ fontFamily: "'Montserrat', sans-serif" }}
                            className="text-gray-500 text-[15px] leading-relaxed mb-4"
                        >
                            At LeafedIndia, we merge innovation with sustainability to create food packaging solutions that tell your story.
                        </p>

                        <p
                            style={{ fontFamily: "'Montserrat', sans-serif" }}
                            className="text-gray-500 text-[15px] leading-relaxed mb-10"
                        >
                            With our in-house manufacturing expertise and commitment to environmentally friendly practices, we're uniquely positioned to bring your vision to life.
                        </p>

                        <a
                            href="/about"
                            style={{ fontFamily: "'Montserrat', sans-serif" }}
                            className="group inline-flex items-center gap-2 px-8 py-3.5 rounded-full border-2 border-[#fb923c] text-[#0d6e41] font-black text-[15px] bg-transparent hover:bg-[#fb923c] hover:text-white transition-all duration-300 cursor-pointer"
                        >
                            Know more about us <span className="text-[#fb923c] group-hover:text-white transition-colors duration-300 text-lg">›</span>
                        </a>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default DifferenceSection;
