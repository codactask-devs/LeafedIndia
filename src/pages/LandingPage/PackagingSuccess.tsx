import { motion } from 'framer-motion';
import footprintIcon from '../../assets/ffodabox-reduce-footprint.webp';
import ecoIcon from '../../assets/foodabox-eco-friendl.webp';
import uniqueIcon from '../../assets/foodabox-unique-product.webp';
import { Quote } from 'lucide-react';

const PackagingSuccess = () => {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.15
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
    };

    return (
        <section className="w-full bg-[#f6f3e5] py-20 px-4 md:px-10 overflow-hidden">
            <div className="max-w-7xl mx-auto flex flex-col">

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.8 }}
                    className="mb-12"
                >
                    <h2
                        style={{ fontFamily: "'Montserrat', sans-serif" }}
                        className="text-[32px] md:text-[48px] lg:text-[58px] font-black leading-[1.1] text-[#0d6e41] mb-4"
                    >
                        Our Custom  <br />
                        <span className='text-[#fb923c]'>Packaging Success </span>
                    </h2>
                    <p
                        style={{ fontFamily: "'Montserrat', sans-serif" }}
                        className="text-gray-500 text-[15px] md:text-[16px] leading-relaxed font-semibold max-w-2xl"
                    >
                        A greener, more eco-friendly packaging solution that delivers results.
                    </p>
                </motion.div>

                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }}
                    className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full"
                >

                    {/* Card 1 */}
                    <motion.div variants={itemVariants} className="bg-[#fcfbfa]/60 backdrop-blur-sm border border-gray-200/50 rounded-[32px] p-8 flex flex-col justify-between min-h-[380px] shadow-sm hover:shadow-md transition-all duration-300">
                        <div>
                            <span
                                style={{ fontFamily: "'Montserrat', sans-serif" }}
                                className="text-[54px] md:text-[64px] font-black text-[#86bc25] leading-none block mb-4"
                            >
                                60%
                            </span>
                            <p
                                style={{ fontFamily: "'Montserrat', sans-serif" }}
                                className="text-[#1a2b4b]/90 text-[15px] md:text-[16px] leading-relaxed font-bold"
                            >
                                Reduction in your overall carbon footprint by lowering emissions.
                            </p>
                        </div>
                        <div className="w-14 h-14 flex items-center justify-start mt-6">
                            <img src={footprintIcon} alt="Carbon footprint reduction" className="w-full h-full object-contain" />
                        </div>
                    </motion.div>

                    {/* Card 2 */}
                    <motion.div variants={itemVariants} className="bg-[#fcfbfa]/60 backdrop-blur-sm border border-gray-200/50 rounded-[32px] p-8 flex flex-col justify-between min-h-[380px] shadow-sm hover:shadow-md transition-all duration-300">
                        <div>
                            <span
                                style={{ fontFamily: "'Montserrat', sans-serif" }}
                                className="text-[54px] md:text-[64px] font-black text-[#86bc25] leading-none block mb-4"
                            >
                                25%
                            </span>
                            <p
                                style={{ fontFamily: "'Montserrat', sans-serif" }}
                                className="text-[#1a2b4b]/90 text-[15px] md:text-[16px] leading-relaxed font-bold"
                            >
                                Lower shipping cost from material reduction and other optimizations.
                            </p>
                        </div>
                        <div className="w-14 h-14 flex items-center justify-start mt-6">
                            <img src={ecoIcon} alt="Eco-friendly packaging" className="w-full h-full object-contain" />
                        </div>
                    </motion.div>

                    {/* Card 3 */}
                    <motion.div variants={itemVariants} className="bg-[#fcfbfa]/60 backdrop-blur-sm border border-gray-200/50 rounded-[32px] p-8 flex flex-col justify-between min-h-[380px] shadow-sm hover:shadow-md transition-all duration-300">
                        <div>
                            <span
                                style={{ fontFamily: "'Montserrat', sans-serif" }}
                                className="text-[54px] md:text-[64px] font-black text-[#86bc25] leading-none block mb-4"
                            >
                                45%
                            </span>
                            <p
                                style={{ fontFamily: "'Montserrat', sans-serif" }}
                                className="text-[#1a2b4b]/90 text-[15px] md:text-[16px] leading-relaxed font-bold"
                            >
                                Better product visibility and shelf appeal with branded packaging.
                            </p>
                        </div>
                        <div className="w-14 h-14 flex items-center justify-start mt-6">
                            <img src={uniqueIcon} alt="Unique product appeal" className="w-full h-full object-contain" />
                        </div>
                    </motion.div>

                    {/* Card 4: Solid Green Card */}
                    <motion.div variants={itemVariants} className="bg-[#86bc25] rounded-[32px] p-8 flex flex-col justify-between min-h-[380px] shadow-md hover:shadow-lg transition-all duration-300">
                        <p
                            style={{ fontFamily: "'Montserrat', sans-serif" }}
                            className="text-white text-[16px] md:text-[18px] leading-relaxed font-bold"
                        >
                            LeafedIndia's mission is to help businesses maximise success in brand building through sustainable food packaging.
                        </p>

                        <div className="mt-8">
                            <span
                                style={{ fontFamily: "'Montserrat', sans-serif" }}
                                className="text-[#1a2b4b] font-black text-[17px] tracking-wide block"
                            >
                                Prithvi Raj
                            </span>
                            <div className="flex items-center gap-1.5 mt-1 text-[#1a2b4b]/80 font-bold text-[14px]">
                                <Quote size={12} fill="currentColor" className="rotate-180 shrink-0" />
                                <span style={{ fontFamily: "'Montserrat', sans-serif" }}>LeafedIndia Director</span>
                            </div>
                        </div>
                    </motion.div>

                </motion.div>

            </div>
        </section>
    );
};

export default PackagingSuccess;
