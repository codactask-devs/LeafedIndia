import { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.svg';
import { Menu, ChevronDown, X } from 'lucide-react';

import bowlIcon from '../assets/NavBar/bowl.webp';
import burgerBoxIcon from '../assets/NavBar/burger-box.webp';
import foodBoxIcon from '../assets/NavBar/food-box.webp';
import hexagonBoxIcon from '../assets/NavBar/hexagon-box.webp';
import paperCupIcon from '../assets/NavBar/paper-cup.webp';
import pizzaBoxIcon from '../assets/NavBar/pizza-box.webp';

interface NavBarProps {
    setFormOpen?: (open: boolean) => void;
}

const NavBar = ({ setFormOpen }: NavBarProps) => {
    const [isProductsOpen, setIsProductsOpen] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isMobileProductsOpen, setIsMobileProductsOpen] = useState(false);

    return (
        <header className="w-full relative">
            <div className="fixed top-0 left-0 w-full z-80 transition-all duration-300 opacity-100">
                <nav className="bg-white/70 backdrop-blur-md border-b border-[#f2f2f2] md:border-none h-[70px] md:h-[90px] px-4 md:px-10 flex items-center justify-between">
                    <div className="">
                        <Link to="/" onClick={() => setIsProductsOpen(false)}>
                            <img
                                src={logo}
                                alt="LeafedIndia Logo"
                                width={180}
                                height={60}
                                decoding="async"
                                className="h-15 md:h-25"
                            />
                        </Link>
                    </div>

                    <div style={{ fontFamily: "Montserrat" }} className="hidden lg:flex flex-1 justify-between pl-20 items-center gap-[2%] font-semibold text-[#333]">
                        <Link to="/" onClick={() => setIsProductsOpen(false)} className="text-[#0a5d3c] hover:text-[#fb923c] transition-colors">Home</Link>
                        <Link to="/#about" onClick={() => setIsProductsOpen(false)} className="text-[#0a5d3c] hover:text-[#fb923c] transition-colors">About Us</Link>

                        <div
                            className="group/mega flex items-center gap-1 cursor-pointer text-[#0a5d3c] hover:text-[#fb923c] transition-colors py-8"
                            onMouseEnter={() => setIsProductsOpen(true)}
                            onMouseLeave={() => setIsProductsOpen(false)}
                        >
                            <span>Products</span>
                            <ChevronDown className={`w-4 h-4 mt-0.5 transition-transform ${isProductsOpen ? 'rotate-180' : ''}`} />

                            <div className={`absolute left-1/2 -translate-x-1/2 top-full pt-2 w-[850px] transition-all duration-300 z-50 ${isProductsOpen ? 'visible opacity-100' : 'invisible opacity-0'}`}>
                                <div className="bg-white rounded-[40px] shadow-[0_20px_50px_rgba(0,0,0,0.15)] overflow-hidden flex min-h-[380px]">
                                    <div className="flex-1 p-10 pr-6">
                                        <Link to="/products" onClick={() => setIsProductsOpen(false)} className="text-[#0d6e41] text-xl font-bold mb-8 hover:text-[#fb923c] transition-colors block">SEE All Products</Link>

                                        <div className="grid grid-cols-2 gap-x-12 gap-y-8">
                                            <Link to="/product/food-box" onClick={() => setIsProductsOpen(false)} className="flex items-center gap-6 group/item cursor-pointer">
                                                <div className="w-14 h-14 bg-[#fefbea] rounded-xl flex items-center justify-center overflow-hidden group-hover/item:bg-[#86bc25] transition-colors p-0.5">
                                                    <img src={foodBoxIcon} alt="Food Box" className="w-full h-full object-contain" />
                                                </div>
                                                <div className="border-b border-gray-100 flex-1 pb-3 group-hover/item:border-[#86bc25] transition-colors">
                                                    <span className="text-[#0d6e41] text-md font-bold group-hover/item:text-[#86bc25]">Paper Food Box</span>
                                                </div>
                                            </Link>

                                            <Link to="/product/paper-bowls" onClick={() => setIsProductsOpen(false)} className="flex items-center gap-6 group/item cursor-pointer">
                                                <div className="w-14 h-14 bg-[#fefbea] rounded-xl flex items-center justify-center overflow-hidden group-hover/item:bg-[#86bc25] transition-colors p-0.5">
                                                    <img src={bowlIcon} alt="Bowl" className="w-full h-full object-contain" />
                                                </div>
                                                <div className="border-b border-gray-100 flex-1 pb-3 group-hover/item:border-[#86bc25] transition-colors">
                                                    <span className="text-[#0d6e41] text-md font-bold group-hover/item:text-[#86bc25]">Bowls</span>
                                                </div>
                                            </Link>

                                            <Link to="/product/burger-box" onClick={() => setIsProductsOpen(false)} className="flex items-center gap-6 group/item cursor-pointer">
                                                <div className="w-14 h-14 bg-[#fefbea] rounded-xl flex items-center justify-center overflow-hidden group-hover/item:bg-[#86bc25] transition-colors p-0.5">
                                                    <img src={burgerBoxIcon} alt="Burger Box" className="w-full h-full object-contain" />
                                                </div>
                                                <div className="border-b border-gray-100 flex-1 pb-3 group-hover/item:border-[#86bc25] transition-colors">
                                                    <span className="text-[#0d6e41] text-md font-bold group-hover/item:text-[#86bc25]">Burger box</span>
                                                </div>
                                            </Link>

                                            <Link to="/product/paper-cups" onClick={() => setIsProductsOpen(false)} className="flex items-center gap-6 group/item cursor-pointer">
                                                <div className="w-14 h-14 bg-[#fefbea] rounded-xl flex items-center justify-center overflow-hidden group-hover/item:bg-[#86bc25] transition-colors p-0.5">
                                                    <img src={paperCupIcon} alt="Paper Cup" className="w-full h-full object-contain" />
                                                </div>
                                                <div className="border-b border-gray-100 flex-1 pb-3 group-hover/item:border-[#86bc25] transition-colors">
                                                    <span className="text-[#0d6e41] text-md font-bold group-hover/item:text-[#86bc25]">Paper cups</span>
                                                </div>
                                            </Link>

                                            <Link to="/product/pizza-box" onClick={() => setIsProductsOpen(false)} className="flex items-center gap-6 group/item cursor-pointer">
                                                <div className="w-14 h-14 bg-[#fefbea] rounded-xl flex items-center justify-center overflow-hidden group-hover/item:bg-[#86bc25] transition-colors p-0.5">
                                                    <img src={pizzaBoxIcon} alt="Pizza Box" className="w-full h-full object-contain" />
                                                </div>
                                                <div className="border-b border-gray-100 flex-1 pb-3 group-hover/item:border-[#86bc25] transition-colors">
                                                    <span className="text-[#0d6e41] text-md font-bold group-hover/item:text-[#86bc25]">Pizza box</span>
                                                </div>
                                            </Link>

                                            <div className="flex items-center gap-6 group/item cursor-pointer">
                                                <div className="w-14 h-14 bg-[#fefbea] rounded-xl flex items-center justify-center overflow-hidden group-hover/item:bg-[#86bc25] transition-colors p-0.5">
                                                    <img src={hexagonBoxIcon} alt="Other Packaging" className="w-full h-full object-contain" />
                                                </div>
                                                <div className="border-b border-gray-100 flex-1 pb-3 group-hover/item:border-[#86bc25] transition-colors">
                                                    <Link to="/products" onClick={() => setIsProductsOpen(false)} className="text-[#0d6e41] text-md font-bold group-hover/item:text-[#86bc25] transition-colors">Other Food Packaging</Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="w-[340px] p-6 flex shrink-0">
                                        <div className="bg-[#1a2b4b] rounded-[28px] p-6 w-full flex flex-col justify-between shadow-lg relative overflow-hidden">
                                            <div>
                                                <h3 style={{ fontFamily: "'Montserrat', sans-serif" }} className="text-[#86bc25] text-[18px] font-black leading-snug mb-3">
                                                    Need Help Finding the<br />Right Packaging?
                                                </h3>
                                                <p style={{ fontFamily: "'Montserrat', sans-serif" }} className="text-white text-[12px] leading-relaxed font-semibold opacity-95 mb-5">
                                                    Not sure which food packaging best suits your brand or product? Speak to our friendly team for a free, <span className="underline decoration-2 decoration-[#86bc25] underline-offset-2">no-obligation consultation.</span>
                                                </p>
                                            </div>

                                            <div>
                                                <div className="flex -space-x-3 mb-5 pl-1">
                                                    <img
                                                        className="inline-block h-10 w-10 rounded-full ring-2 ring-[#1a2b4b] object-cover"
                                                        src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop"
                                                        alt="Team member 1"
                                                    />
                                                    <img
                                                        className="inline-block h-10 w-10 rounded-full ring-2 ring-[#1a2b4b] object-cover"
                                                        src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop"
                                                        alt="Team member 2"
                                                    />
                                                    <img
                                                        className="inline-block h-10 w-10 rounded-full ring-2 ring-[#1a2b4b] object-cover"
                                                        src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop"
                                                        alt="Team member 3"
                                                    />
                                                </div>

                                                <button
                                                    onClick={() => {
                                                        setIsProductsOpen(false);
                                                        if (setFormOpen) {
                                                            setFormOpen(true);
                                                        } else {
                                                            const element = document.getElementById('contact');
                                                            if (element) element.scrollIntoView({ behavior: 'smooth' });
                                                        }
                                                    }}
                                                    style={{ fontFamily: "'Montserrat', sans-serif" }}
                                                    className="w-full bg-white hover:bg-[#86bc25] text-[#1a2b4b] hover:text-white font-extrabold text-[13px] py-3 px-5 rounded-full border border-gray-100 hover:border-[#86bc25] shadow-md hover:shadow-lg transition-all duration-300 cursor-pointer flex items-center justify-center gap-2 group/btn"
                                                >
                                                    Get Free Quote <span className="text-[#86bc25] group-hover/btn:text-white transition-colors duration-300 font-bold">›</span>
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <Link to="/#footer" onClick={() => setIsProductsOpen(false)} className="flex items-center gap-1 cursor-pointer text-[#0a5d3c] hover:text-[#fb923c] transition-colors group">
                            <span>Contact</span>
                        </Link>
                    </div>

                    <div className="w-1/4 flex justify-end">
                        <Link to="/studio">
                            <button
                                className="hidden lg:block group text-[14px] px-10  py-3  md:text-[16px]  text-center
                    text-white font-medium 
                    border border-transparent
                    hover:border-[#0d6e41]
                    rounded-full
                    transition-all duration-300
                  
                  hover:bg-[#fefbea]
                  hover:text-[#0d6e41]
                    
                    hover:-translate-x-[4px]
                    hover:-translate-y-[4px]
                    
                    hover:shadow-[4px_4px_0px_#0d6e41]
                    hover: cursor-pointer
                    bg-[#0d6e41]
                    flex items-center 
                    "
                            >          Customize Package
                            </button>
                        </Link>
                        <button
                            className="lg:hidden text-[#0d6e41] p-2 bg-white/80 rounded-xl hover:bg-gray-100 transition-colors pointer-events-auto"
                            onClick={() => setIsMobileMenuOpen(true)}
                            aria-label="Open menu"
                        >
                            <Menu strokeWidth={3} className='w-7 h-7' />
                        </button>
                    </div>
                </nav>
            </div>

            <div
                className={`fixed inset-0 z-[100000] lg:hidden transition-all duration-500 ${isMobileMenuOpen ? 'visible' : 'invisible'}`}
            >
                <div
                    className={`absolute inset-0 bg-black/40 backdrop-blur-sm transition-opacity duration-500 ${isMobileMenuOpen ? 'opacity-100' : 'opacity-0'}`}
                    onClick={() => setIsMobileMenuOpen(false)}
                />

                <div
                    className={`absolute top-0 right-0 bottom-0 w-full sm:w-[400px] bg-white shadow-2xl transition-transform duration-500 ease-out flex flex-col ${isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}
                >
                    <div className="p-6 flex items-center justify-between border-b-2 border-gray-100">
                        <Link to="/" onClick={() => setIsMobileMenuOpen(false)}>
                            <img src={logo} alt="LeafedIndia Logo" className="h-10 w-auto" />
                        </Link>
                        <button
                            onClick={() => setIsMobileMenuOpen(false)}
                            className="p-2 text-[#4b5563] hover:bg-gray-100 rounded-full transition-colors"
                        >
                            <X className="w-7 h-7" />
                        </button>
                    </div>

                    <div className="flex-1 overflow-y-auto w-full">
                        <Link
                            to="/"
                            onClick={() => setIsMobileMenuOpen(false)}
                            className="block w-full py-5 text-center text-lg font-medium text-[#1a2b4b] border-b border-gray-100"
                        >
                            Home
                        </Link>

                        <div className="border-b border-gray-100">
                            <button
                                onClick={() => setIsMobileProductsOpen(!isMobileProductsOpen)}
                                className="w-full py-5 flex items-center justify-center gap-2 text-lg font-medium text-[#1a2b4b]"
                            >
                                <span>Product</span>
                                <ChevronDown className={`w-4 h-4 transition-transform ${isMobileProductsOpen ? 'rotate-180' : ''}`} />
                            </button>

                            <div className={`overflow-hidden transition-all duration-300 bg-[#f9fafb] ${isMobileProductsOpen ? 'max-h-[1000px] opacity-100 py-8' : 'max-h-0 opacity-0 py-0'}`}>
                                <Link
                                    to="/products"
                                    onClick={() => setIsMobileMenuOpen(false)}
                                    className="block text-center text-[#86bc25] font-bold text-xl mb-10"
                                >
                                    SEE All Products
                                </Link>
                                <div className="grid grid-cols-2 gap-y-10 gap-x-4 px-4 w-full max-w-[320px] mx-auto">
                                    {[
                                        { to: "/product/food-box", name: "Paper Lunch Box", icon: foodBoxIcon },
                                        { to: "/product/paper-bowls", name: "Paper Bowls", icon: bowlIcon },
                                        { to: "/product/paper-cups", name: "Paper Cups", icon: paperCupIcon },
                                        { to: "/product/paper-bags", name: "Paper Bag", icon: burgerBoxIcon },
                                        { to: "/product/cutlery", name: "Cutlery", icon: burgerBoxIcon },
                                        { to: "/products", name: "Other Food Packaging", icon: hexagonBoxIcon }
                                    ].map((item) => (
                                        <Link
                                            key={item.name}
                                            to={item.to}
                                            onClick={() => setIsMobileMenuOpen(false)}
                                            className="flex flex-col items-center gap-3 group"
                                        >
                                            <div className="h-16 flex items-center justify-center">
                                                <img src={item.icon} alt={item.name} className="w-16 h-16 object-contain mix-blend-multiply" />
                                            </div>
                                            <span className="text-sm font-semibold text-[#1a2b4b] border-b border-transparent group-hover:border-[#fb923c] pb-1 px-1 text-center transition-colors">
                                                {item.name}
                                            </span>
                                        </Link>
                                    ))}
                                </div>
                            </div>
                        </div>

                        <Link
                            to="/#about"
                            onClick={() => setIsMobileMenuOpen(false)}
                            className="block w-full py-5 text-center text-lg font-medium text-[#1a2b4b] border-b border-gray-100"
                        >
                            About Us
                        </Link>

                        <Link
                            to="/#blog"
                            onClick={() => setIsMobileMenuOpen(false)}
                            className="block w-full py-5 text-center text-lg font-medium text-[#1a2b4b] border-b border-gray-100"
                        >
                            Blog
                        </Link>

                        <Link
                            to="/#footer"
                            onClick={() => setIsMobileMenuOpen(false)}
                            className="block w-full py-5 text-center text-lg font-medium text-[#1a2b4b] border-b border-gray-100"
                        >
                            Contact
                        </Link>

                    </div>
                </div>

            </div>
        </header>
    );
};

export default NavBar;
