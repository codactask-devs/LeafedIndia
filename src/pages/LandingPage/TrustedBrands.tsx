import { motion } from 'framer-motion';
import brandsImg from '../../assets/brands.png';
import globeImg from '../../assets/globe.png';
import logo1 from '../../assets/CompanyLogos/logo1.webp';
import logo2 from '../../assets/CompanyLogos/logo2.webp';
import logo3 from '../../assets/CompanyLogos/logo3.webp';
import logo4 from '../../assets/CompanyLogos/logo4.webp';
import logo5 from '../../assets/CompanyLogos/logo5.webp';
import logo6 from '../../assets/CompanyLogos/logo6.webp';
import logo7 from '../../assets/CompanyLogos/logo7.webp';
import logo8 from '../../assets/CompanyLogos/logo8.webp';
import logo9 from '../../assets/CompanyLogos/logo9.webp';
import logo10 from '../../assets/CompanyLogos/logo10.webp';
import logo11 from '../../assets/CompanyLogos/logo11.webp';
import logo12 from '../../assets/CompanyLogos/logo12.webp';
import logo13 from '../../assets/CompanyLogos/logo13.webp';
import logo14 from '../../assets/CompanyLogos/logo14.webp';
import logo15 from '../../assets/CompanyLogos/logo15.webp';
import logo16 from '../../assets/CompanyLogos/logo16.webp';
import logo17 from '../../assets/CompanyLogos/logo17.webp';

const logos = [
    logo1, logo2, logo3, logo4, logo5, logo6, logo7, logo8, logo9,
    logo10, logo11, logo12, logo13, logo14, logo15, logo16, logo17,
];

const TrustedBrands = () => {
    return (
        <section className="w-full bg-[#f6f3e5] overflow-hidden">

            <div className="w-full relative flex flex-col lg:flex-row items-center pt-16">

                <div className="w-full lg:w-3/5 px-6 lg:pl-20 lg:pr-10">
                    <motion.h2
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ duration: 0.8 }}
                        style={{ fontFamily: "'Montserrat', sans-serif" }}
                        className="text-[32px] md:text-[48px] lg:text-[58px] font-black text-[#0d6e41] leading-[1.1] mb-6"
                    >
                        Trusted by Brands<br />
                        Who <span className="text-[#fb923c]">Love the Planet</span>
                    </motion.h2>

                    <motion.img
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        src={brandsImg}
                        alt="Trusted brand logos"
                        className="w-full max-w-[580px] h-auto mb-8 object-contain"
                    />

                    <motion.p
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        style={{ fontFamily: "'Montserrat', sans-serif" }}
                        className="text-gray-500 text-[16px] md:text-[17px] leading-relaxed max-w-[520px] mb-10"
                    >
                        Dedicated to preserving the environment, our sustainable food packaging solutions not only protect your products but also the planet. Learn more about our eco-friendly practices.
                    </motion.p>
                </div>

                <motion.div 
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="w-full lg:w-2/5 flex justify-center lg:justify-end items-center overflow-visible"
                >
                    <img
                        src={globeImg}
                        alt="Globe held by hand"
                        className="w-[300px] md:w-[420px] lg:w-[520px] h-auto object-contain"
                    />
                </motion.div>
            </div>

            <motion.div 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 0.5 }}
                className="w-full pb-14 overflow-hidden bg-[#f6f3e5] mt-10 lg:mt-0"
            >
                <p
                    style={{ fontFamily: "'Montserrat', sans-serif" }}
                    className="text-center text-[14px] md:text-[15px] font-medium text-gray-400 tracking-widest uppercase mb-6"
                >
                    Trusted by leading companies worldwide
                </p>

                <div className="relative w-full overflow-hidden">
                    <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-[#f6f3e5] to-transparent z-10 pointer-events-none" />
                    <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-[#f6f3e5] to-transparent z-10 pointer-events-none" />

                    <div className="flex w-fit animate-scroll" style={{ willChange: 'transform' }}>
                        {[...logos, ...logos].map((src, i) => (
                            <div key={i} className="shrink-0 flex items-center justify-center mx-10 md:mx-14">
                                <img
                                    src={src}
                                    alt={`partner-logo-${i}`}
                                    loading="lazy"
                                    decoding="async"
                                    width={120}
                                    height={56}
                                    className="h-10 md:h-14 w-auto object-contain"
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </motion.div>

        </section>
    );
};

export default TrustedBrands;
