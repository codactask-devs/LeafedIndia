import { useState } from 'react';
import { motion } from 'framer-motion';

const DifferenceSection = () => {
    const [playing, setPlaying] = useState(false);

    return (
        <section className="w-full bg-white overflow-hidden">
            <div className="flex flex-col lg:flex-row">

                <motion.div 
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.8 }}
                    className="w-full lg:w-1/2 relative aspect-video bg-black"
                >
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
                </motion.div>

                <div className="w-full lg:w-1/2 flex items-center px-6 md:px-16 py-12 lg:py-0 bg-white">
                    <div className="max-w-lg">
                        <motion.h2
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.3 }}
                            transition={{ duration: 0.8 }}
                            style={{ fontFamily: "'Montserrat', sans-serif" }}
                            className="text-[32px] md:text-[52px] lg:text-[52px] font-black leading-[1.1] mb-6"
                        >
                            <span className="text-[#0d6e41] block">The LeafedIndia</span>
                            <span className="text-[#fb923c] block">Difference</span>
                        </motion.h2>

                        <motion.p
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.3 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            style={{ fontFamily: "'Montserrat', sans-serif" }}
                            className="text-gray-500 text-[14px] md:text-[18px] leading-relaxed mb-4 font-semibold"
                        >
                            At LeafedIndia, we merge innovation with sustainability to create food packaging solutions that tell your story.
                        </motion.p>

                        <motion.p
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.3 }}
                            transition={{ duration: 0.8, delay: 0.4 }}
                            style={{ fontFamily: "'Montserrat', sans-serif" }}
                            className="text-gray-500 text-[14px] md:text-[18px] leading-relaxed mb-10 font-semibold"
                        >
                            With our in-house manufacturing expertise and commitment to environmentally friendly practices, we're uniquely positioned to bring your vision to life.
                        </motion.p>

                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true, amount: 0.3 }}
                            transition={{ duration: 0.5, delay: 0.6 }}
                        >
                            <a
                                href="/about"
                                style={{ fontFamily: "'Montserrat', sans-serif" }}
                                className="group inline-flex items-center gap-2 px-8 py-3.5 rounded-full border-2 border-[#fb923c] text-[#0d6e41] font-black text-[15px] md:text-[18px] bg-transparent hover:bg-[#fb923c] hover:text-white transition-all duration-300 cursor-pointer"
                            >
                                Know more about us <span className="text-[#fb923c] group-hover:text-white transition-colors duration-300 text-lg">›</span>
                            </a>
                        </motion.div>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default DifferenceSection;
