import bowlIcon from '../../assets/NavBar/bowl.webp';
import paperCupIcon from '../../assets/NavBar/paper-cup.webp';
import foodBoxIcon from '../../assets/NavBar/food-box.webp';
import burgerBoxIcon from '../../assets/NavBar/burger-box.webp';
import cutleryIcon from '../../assets/NavBar/food-tray.webp';
import hexagonBoxIcon from '../../assets/NavBar/hexagon-box.webp';

interface CustomBrandPackagingProps {
    setFormOpen: (open: boolean) => void;
}

const CustomBrandPackaging = ({ setFormOpen }: CustomBrandPackagingProps) => {
    const products = [
        {
            name: "Paper Lunch Box",
            image: foodBoxIcon,
            alt: "Paper Lunch Box layout"
        },
        {
            name: "Paper Cups",
            image: paperCupIcon,
            alt: "Paper Cups layout"
        },
        {
            name: "Paper Bowls",
            image: bowlIcon,
            alt: "Paper Bowls layout"
        },
        {
            name: "Paper Lunch Box",
            image: burgerBoxIcon,
            alt: "Paper Lunch Box Kraft bag"
        },
        {
            name: "Cutlery",
            image: cutleryIcon,
            alt: "Wooden Cutlery fork spoon knife"
        },
        {
            name: "Other Food Packaging",
            image: hexagonBoxIcon,
            alt: "Other Food Packaging box layout"
        }
    ];

    return (
        <section className="w-full bg-[#fcfbfa] py-20 px-4 md:px-10">
            <div className="max-w-6xl mx-auto flex flex-col items-center">

                <div className="text-center mb-16 max-w-3xl">
                    <h2
                        style={{ fontFamily: "'Montserrat', sans-serif" }}
                        className="text-[32px] md:text-[44px] lg:text-[48px] font-black leading-tight text-[#0d6e41] mb-6"
                    >
                        Your Brand. Your Box. <br />
                        <span className='text-[#fb923c]'> Your Way</span>
                    </h2>
                    <p
                        style={{ fontFamily: "'Montserrat', sans-serif" }}
                        className="text-gray-500 text-[15px] md:text-[16px] leading-relaxed font-semibold"
                    >
                        From takeaway boxes to cup holders, find food-safe, eco-friendly custom packaging designed to keep your products fresh and your brand unforgettable.
                    </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 w-full mb-12">
                    {products.map((product, index) => (
                        <div
                            key={index}
                            className="bg-white border-2 border-gray-100 rounded-[32px] p-8 flex flex-col items-center justify-between min-h-[340px] hover:border-[#86bc25] hover:shadow-lg transition-all duration-300 group"
                        >
                            <div className="w-full flex-1 flex items-center justify-center p-4">
                                <img
                                    src={product.image}
                                    alt={product.alt}
                                    className="max-h-[160px] object-contain group-hover:scale-105 transition-transform duration-300"
                                />
                            </div>
                            <span
                                style={{ fontFamily: "'Montserrat', sans-serif" }}
                                className="text-[#1a2b4b] font-extrabold text-[17px] tracking-wide mt-6 text-center"
                            >
                                {product.name}
                            </span>
                        </div>
                    ))}
                </div>

                <div className="flex justify-center mt-4">
                    <button
                        onClick={() => setFormOpen(true)}
                        style={{ fontFamily: "'Montserrat', sans-serif" }}
                        className="group inline-flex items-center gap-2 px-9 py-4 rounded-full border-2 border-[#fb923c] text-[#0d6e41] font-black text-[15px] bg-transparent hover:bg-[#fb923c] hover:text-white transition-all duration-300 cursor-pointer shadow-sm"
                    >
                        Request For Sample <span className="text-[#fb923c] group-hover:text-white transition-colors duration-300 text-lg">›</span>
                    </button>
                </div>

            </div>
        </section>
    );
};

export default CustomBrandPackaging;
