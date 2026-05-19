import { motion } from 'framer-motion';
import burgerBoxMain from '../../assets/gallery/burgerBoxMain.webp';
import bowlMain from '../../assets/gallery/bowlMain.webp';
import foodBoxMain from '../../assets/gallery/foodBoxMain.webp';
import noodlesBoxMain from '../../assets/gallery/noodlesBoxMain.webp';

interface BrandFreshLookProps {
    setFormOpen: (open: boolean) => void;
}

const BrandFreshLook = ({ setFormOpen }: BrandFreshLookProps) => {
    const images = [
        { src: burgerBoxMain, alt: "Sustainable Burger Box Packaging mockup" },
        { src: bowlMain, alt: "Eco-friendly Paper Bowls mockup" },
        { src: foodBoxMain, alt: "Fully customized Lunch Box packaging mockup" },
        { src: noodlesBoxMain, alt: "Sustainable Noodle Box packaging mockup" }
    ];

    return (
        <section className="w-full bg-[#f6f3e5] overflow-hidden">
            <motion.div 
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{ duration: 0.8, staggerChildren: 0.2 }}
                className="grid grid-cols-2 md:grid-cols-4 gap-0 w-full"
            >
                {images.map((img, idx) => (
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: idx * 0.1 }}
                        key={idx}
                        className="h-[180px] sm:h-[240px] md:h-[280px] lg:h-[320px] w-full overflow-hidden border-b border-gray-100"
                    >
                        <img
                            src={img.src}
                            alt={img.alt}
                            className="w-full h-full object-cover hover:scale-105 transition-transform duration-700 ease-in-out cursor-pointer"
                        />
                    </motion.div>
                ))}
            </motion.div>

            <div className="max-w-6xl mx-auto py-20 px-6 flex flex-col items-center text-center">
                <motion.h2
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.8 }}
                    style={{ fontFamily: "'Montserrat', sans-serif" }}
                    className="text-[34px] sm:text-[44px] md:text-[54px] lg:text-[60px] font-black leading-tight text-[#1a2b4b] mb-8 tracking-tight"
                >
                    Give Your Food Brand a{" "}
                    <span className="text-[#a21c1c] relative inline-block whitespace-nowrap">
                        Fresh Look!
                        <svg
                            className="absolute -bottom-3 left-0 w-full h-[12px] text-[#86bc25]"
                            viewBox="0 0 100 10"
                            preserveAspectRatio="none"
                        >
                            <path
                                d="M3 5 C 33 9, 66 9, 97 4 M5 8 C 35 11, 65 11, 95 6"
                                stroke="currentColor"
                                strokeWidth="3"
                                strokeLinecap="round"
                                fill="none"
                            />
                        </svg>
                    </span>
                </motion.h2>

                <motion.p
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    style={{ fontFamily: "'Montserrat', sans-serif" }}
                    className="text-gray-500 text-[15px] sm:text-[16px] md:text-[17px] leading-relaxed font-semibold max-w-3xl mb-12"
                >
                    Contact our team today for a personalized consultation and let's craft custom packaging that refreshes and revitalizes your food brand!
                </motion.p>

                <motion.div 
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    className="flex justify-center"
                >
                    <button
                        onClick={() => setFormOpen(true)}
                        style={{ fontFamily: "'Montserrat', sans-serif" }}
                        className="group inline-flex items-center gap-2 px-9 py-4 rounded-full border-2 border-[#fb923c] text-[#0d6e41] font-black text-[15px] bg-transparent hover:bg-[#fb923c] hover:text-white transition-all duration-300 cursor-pointer shadow-sm"
                    >
                        Customized My Packaging <span className="text-[#fb923c] group-hover:text-white transition-colors duration-300 text-lg">›</span>
                    </button>
                </motion.div>
            </div>
        </section>
    );
};

export default BrandFreshLook;
