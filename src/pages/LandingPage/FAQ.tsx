import { useState } from 'react';
import { Plus, Minus } from 'lucide-react';
import { motion } from 'framer-motion';

const QnA = ({ qna }: { qna: { question: string; answer: string } }) => {
    const [open, setOpen] = useState(false);

    return (
        <div
            className={`bg-[#fafafa] rounded-xl p-5 mb-4 cursor-pointer transition-all border border-gray-100/50 duration-300 ${!open && "hover:bg-gray-50 hover:px-6"} ${open ? "shadow-sm border-gray-200" : ""}`}
            onClick={() => setOpen(!open)}
        >
            <div className="flex justify-between items-center gap-6">
                <p
                    style={{ fontFamily: "'Montserrat', sans-serif" }}
                    className={`font-montserrat font-extrabold text-[17px] md:text-[18px] transition-colors duration-300 ${open ? "text-[#fb923c]" : "text-[#1a2b4b]"}`}
                >
                    {qna.question}
                </p>

                <div className={`shrink-0 w-10 h-10 rounded-[10px] flex items-center justify-center transition-all duration-500 ${open ? "bg-[#fb923c] text-white rotate-180 shadow-md shadow-orange-100" : "bg-white text-[#1a2b4b] border border-gray-200"}`}>
                    {open ? <Minus size={18} strokeWidth={3} /> : <Plus size={18} strokeWidth={3} />}
                </div>
            </div>

            <div
                className={`overflow-hidden transition-all duration-500 ease-in-out ${open ? "max-h-[500px] mt-4 opacity-100" : "max-h-0 opacity-0"}`}
            >
                <div className="h-px bg-gray-200/60 mb-4" />
                <p
                    style={{ fontFamily: "'Montserrat', sans-serif" }}
                    className="text-[14px] md:text-[15px] text-gray-500 font-medium leading-relaxed whitespace-pre-line"
                >
                    {qna.answer}
                </p>
            </div>
        </div>
    );
};

const FAQ = () => {
    const questionsAndAnswers = [
        {
            question: "How do you calculate the shipping cost?",
            answer: "Our shipping costs are calculated based on factors such as shipping distance, delivery times, and volumetric weight. For businesses located out of the Klang Valley, our system will assist to compute the cost prior to checking out. For businesses located within the Klang Valley, there’s free shipping available for an order of more than RM1,000.",
        },
        {
            question: "What is the shelf life of your products?",
            answer: "Our packaging typically has a shelf life of 2–3 years when stored in a dry, room-temperature environment. However, white paper may gradually discolor and develop a slight yellowish tint over time, especially with prolonged exposure to direct sunlight.",
        },
        {
            question: "Can I exchange the products if I purchase them wrongly? Do you offer returns or refunds?",
            answer: "Exchange is allowed subject to the stock’s availability. There will be a processing fee of RM30 imposed on each exchange.",
        },
        {
            question: "How long does it take for customers to receive their order after placing an order?",
            answer: "If the stocks are available, the shipment usually takes between 3-5 business days. Kindly contact your respective Sales Representative for customized orders.",
        },
        {
            question: "Is customization allowed?",
            answer: "Yes. Customized printing, structures, and dimensions are all allowed. Kindly contact your respective Sales Representative to find out more.",
        },
    ];

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
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.4 } }
    };

    return (
        <section className="w-full bg-[#f6f3e5] py-20 overflow-hidden">
            <div id="faq" className="items-center border bg-white border-gray-200 px-6 md:px-16 flex flex-col w-full mx-auto gap-5 py-12 relative shadow-sm">

                <motion.div 
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-10"
                >
                    <h2
                        style={{ fontFamily: "'Montserrat', sans-serif" }}
                        className="font-black text-[32px] md:text-[48px] lg:text-[58px] leading-[1.1] text-[#0d6e41]"
                    >
                        Frequently Asked Questions <span className='text-[#fb923c]'> (FAQ) </span>
                    </h2>
                </motion.div>

                <motion.div 
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.1 }}
                    className="w-full sm:w-[80%] lg:w-[60%]"
                >
                    {questionsAndAnswers.map((qna) => (
                        <motion.div variants={itemVariants} key={qna.question}>
                            <QnA qna={qna} />
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default FAQ;
