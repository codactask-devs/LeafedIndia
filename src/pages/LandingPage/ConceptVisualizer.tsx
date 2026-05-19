import { motion } from 'framer-motion';
import handHold from '../../assets/visu/hand-hold-paper-lunch-box-common-use-foodabox.webp';
import demo1 from '../../assets/visu/foodabox-demo-1.webp';
import demo21 from '../../assets/visu/foodabox-demo-21-e1743066507879.webp';
import demo3 from '../../assets/visu/foodabox-demo-3.webp';

const ConceptVisualizer = () => {
    return (
        <section className="w-full bg-[#f6f3e5] py-20 px-4 md:px-10 overflow-hidden">
            <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-10 items-start justify-between">

                <motion.div 
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.8 }}
                    className="w-full lg:w-[48%] flex flex-col"
                >
                    <h2
                        style={{ fontFamily: "'Montserrat', sans-serif" }}
                        className="text-[32px] md:text-[40px] lg:text-[44px] font-black leading-tight text-[#0d6e41] mb-6"
                    >
                        Visualize Your Custom<br className="hidden md:block" /><span className='text-[#fb923c]'> Packaging Idea Instantly</span>
                    </h2>

                    <p
                        style={{ fontFamily: "'Montserrat', sans-serif" }}
                        className="text-gray-500 text-[15px] md:text-[16px] leading-relaxed font-medium mb-10 max-w-md"
                    >
                        Experience firsthand how your ideas can transform into captivating packaging designs with us.
                    </p>

                    <div className="w-full overflow-hidden shadow-sm rounded-2xl md:rounded-3xl">
                        <img
                            src={handHold}
                            alt="Hand holding lunchbox filled with food"
                            className="w-full h-auto object-cover hover:scale-102 transition-transform duration-500"
                        />
                    </div>
                </motion.div>

                <motion.div 
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="w-full sm:flex sm:gap-6 lg:flex-col lg:w-[24%] gap-6 flex flex-col lg:pt-12"
                >
                    <div className="w-full h-[240px] sm:h-[300px] lg:h-[280px] overflow-hidden rounded-[24px] md:rounded-[32px] shadow-sm">
                        <img
                            src={demo21}
                            alt="Custom box structures design blueprint"
                            className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                        />
                    </div>
                    <div className="w-full h-[280px] sm:h-[360px] lg:h-[360px] overflow-hidden rounded-[24px] md:rounded-[32px] shadow-sm">
                        <img
                            src={demo3}
                            alt="Kraft paper packaging box layout"
                            className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                        />
                    </div>
                </motion.div>

                <motion.div 
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="w-full lg:w-[28%] lg:pt-24 flex"
                >
                    <div className="w-full h-[320px] sm:h-[480px] lg:h-[616px] overflow-hidden rounded-[24px] md:rounded-[32px] shadow-sm">
                        <img
                            src={demo1}
                            alt="Hand drawing packaging templates blueprints"
                            className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                        />
                    </div>
                </motion.div>

            </div>
        </section>
    );
};

export default ConceptVisualizer;
