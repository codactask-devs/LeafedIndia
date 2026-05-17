import NavBar from '../../shared/NavBar';
import HeroImage from '../../assets/HeroImage.webp';
import CircularText from '../../animations/CircularFont';
import { useState, useEffect } from 'react';
import directFactory from '../../assets/hero/foodabox-direct-manufacturer.webp';
import ecoFriendly from '../../assets/hero/foodabox-environmentally-friendly.webp';
import customizable from '../../assets/hero/foodabox-fully-customizable.webp';
import Gallery from './Gallery';
import BentoGallery from './BentoGallery';
import DifferenceSection from './DifferenceSection';
import TrustedBrands from './TrustedBrands';
import Testimonials from './Testimonials';
import FAQ from './FAQ';
import ConceptVisualizer from './ConceptVisualizer';
import PackagingSuccess from './PackagingSuccess';
import CustomBrandPackaging from './CustomBrandPackaging';
import popupImg from '../../assets/popup.jpg';
import BrandFreshLook from './BrandFreshLook';
import RotatingQuotes from './RotatingQuotes';

const HomePage = () => {
    const [formOpen, setFormOpen] = useState(false);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        setIsVisible(true);
    }, []);

    useEffect(() => {
        const onKey = (e: KeyboardEvent) => {
            if (e.key === 'Escape') { setFormOpen(false); }
        };
        window.addEventListener('keydown', onKey);
        return () => window.removeEventListener('keydown', onKey);
    }, []);

    return (
        <>
            <style>{`
                @keyframes fadeIn  { from { opacity:0 } to { opacity:1 } }
                @keyframes scaleIn { from { transform:scale(0.88);opacity:0 } to { transform:scale(1);opacity:1 } }
            `}</style>
            <div className="w-full min-h-screen relative">
                <NavBar setFormOpen={setFormOpen} />

                <section className="absolute inset-0 z-0 pointer-events-none">
                    <div className="bg-[#0d6e41] w-full" />
                    <div className="flex h-full w-full">
                        <div className="flex-1 h-full bg-[#fefbea] " />
                        <div className="w-[18%] h-full bg-[#fb923c] hidden md:block " />
                    </div>
                </section>

                <section className="relative z-10">
                    <div className="max-w-7xl mx-auto px-6 lg:px-10 pt-[133px] md:pt-[190px] lg:pt-[171px] pb-[5%]">
                        <div className="flex flex-col lg:flex-row items-center lg:items-start justify-between gap-12 lg:gap-0">


                            <nav className="w-full lg:w-1/2 lg:pt-10 flex flex-col items-center lg:items-start text-center lg:text-left order-2 lg:order-1">
                                <h1
                                    style={{ fontFamily: "'Montserrat', sans-serif" }}
                                    className={`text-[34px] md:text-[80px] lg:text-[80px] font-black leading-10 md:leading-20 mb-8 tracking-tight transition-all duration-1000 delay-150 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'}`}
                                >
                                    <span className="text-[#0d6e41] block whitespace-nowrap">Make The Best</span>
                                    <span className="text-[#fb923c] block text-[40px] md:text-[86px] lg:text-[89px]">Packaging</span>
                                </h1>

                                <p
                                    style={{ fontFamily: "'Montserrat', sans-serif" }}
                                    className={`text-gray-500 text-lg md:text-[16px] max-w-[600px] leading-relaxed font-medium mb-10 transition-all duration-1000 delay-300 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}
                                >
                                    Food-grade, compostable paper packaging — engineered for performance, designed for your brand, manufactured at scale in India.
                                </p>


                                <div className="flex gap-5 transition-all items-center duration-1000 delay-500 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}">
                                    <div className="mb-6 transition-all duration-1000 delay-[400ms] transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}">
                                        <a
                                            href="#collections"
                                            style={{ fontFamily: "'Montserrat', sans-serif" }}
                                            className="inline-flex items-center gap-2 px-7 py-3 rounded-full bg-[#fb923c] text-white font-bold text-[14px] hover:bg-[#e8832b] transition-all duration-300 cursor-pointer shadow-md hover:shadow-lg"
                                        >
                                            ● Learn More
                                        </a>
                                    </div>

                                    <CircularText text="FROM EARTH ⭐ FOR EARTH ⭐ " className='hidden md:block text-[#0d6e41] text-[12px] ml-10' />


                                </div>

                                <div className="flex flex-wrap justify-center lg:justify-start gap-6 mt-10 mb-5 transition-all duration-1000 delay-700 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}">
                                    <div className="flex flex-col">
                                        <span style={{ fontFamily: "'Montserrat', sans-serif" }} className="text-[#1a2b4b] font-black text-[18px] md:text-[22px]">50K+</span>
                                        <span style={{ fontFamily: "'Montserrat', sans-serif" }} className="text-gray-400 font-medium text-[12px] mt-0.5">Units Shipped</span>
                                    </div>
                                    <div className="w-px bg-gray-200" />
                                    <div className="flex flex-col">
                                        <span style={{ fontFamily: "'Montserrat', sans-serif" }} className="text-[#1a2b4b] font-black text-[18px] md:text-[22px]">100%</span>
                                        <span style={{ fontFamily: "'Montserrat', sans-serif" }} className="text-gray-400 font-medium text-[12px] mt-0.5">Compostable</span>
                                    </div>
                                    <div className="w-px bg-gray-200" />
                                    <div className="flex flex-col">
                                        <span style={{ fontFamily: "'Montserrat', sans-serif" }} className="text-[#1a2b4b] font-black text-[18px] md:text-[22px]">ISO</span>
                                        <span style={{ fontFamily: "'Montserrat', sans-serif" }} className="text-gray-400 font-medium text-[12px] mt-0.5">Certified</span>
                                    </div>
                                </div>

                            </nav>


                            <nav className="w-full lg:pt-5 lg:w-1/2 flex justify-center lg:justify-end items-center relative order-1 lg:order-2 lg:translate-x-24 transition-all duration-1000 delay-300 transform ${isVisible ? 'translate-x-0 opacity-100' : 'translate-x-12 opacity-0'}">
                                <div className="w-[280px] md:w-[550px] lg:w-[650px]">
                                    <img
                                        src={HeroImage}
                                        alt="Sustainable Packaging Mockups"
                                        width={650}
                                        height={450}
                                        decoding="async"
                                        className="w-full h-auto drop-shadow-2xl"
                                    />
                                </div>
                            </nav>

                        </div>
                    </div>

                </section >
            </div>


            <div className="w-full bg-[#f6f3e5] py-10 md:py-6 transition-all duration-1000 delay-700 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'} relative border-b border-gray-200">
                <div className="max-w-7xl mx-auto px-6 lg:px-24 flex flex-col md:flex-row justify-between items-center gap-12 md:gap-0">
                    <div className="flex flex-col md:flex-row items-center justify-center text-center md:text-left gap-4 md:gap-5">
                        <img src={directFactory} alt="Direct From Factory" className="w-20 h-20 md:w-14 md:h-14 object-contain" />
                        <span style={{ fontFamily: "'Montserrat', sans-serif" }} className="text-[#1a2b4b] font-bold text-[16px] md:text-[17px]">Direct From Factory</span>
                    </div>
                    <div className="flex flex-col md:flex-row items-center justify-center text-center md:text-left gap-4 md:gap-5">
                        <img src={ecoFriendly} alt="Eco-Friendly" className="w-20 h-20 md:w-14 md:h-14 object-contain" />
                        <span style={{ fontFamily: "'Montserrat', sans-serif" }} className="text-[#1a2b4b] font-bold text-[16px] md:text-[17px]">Eco-Friendly</span>
                    </div>
                    <div className="flex flex-col md:flex-row items-center justify-center text-center md:text-left gap-4 md:gap-5">
                        <img src={customizable} alt="Fully Custom & Unique" className="w-20 h-20 md:w-14 md:h-14 object-contain" />
                        <span style={{ fontFamily: "'Montserrat', sans-serif" }} className="text-[#1a2b4b] font-bold text-[16px] md:text-[17px]">Fully Custom & Unique</span>
                    </div>
                </div>
            </div>

            <Gallery />
            <BentoGallery setFormOpen={setFormOpen} />
            <DifferenceSection />
            <TrustedBrands />
            <Testimonials />
            <ConceptVisualizer />
            <CustomBrandPackaging setFormOpen={setFormOpen} />
            <PackagingSuccess />
            <FAQ />
            <BrandFreshLook setFormOpen={setFormOpen} />
            <RotatingQuotes />

            {formOpen && (
                <div
                    className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/70 backdrop-blur-sm px-4"
                    onClick={() => setFormOpen(false)}
                    style={{ animation: 'fadeIn 0.2s ease' }}
                >
                    <div
                        className="relative bg-white rounded-2xl overflow-hidden shadow-2xl w-full max-w-4xl max-h-[90vh] flex flex-col md:flex-row"
                        onClick={e => e.stopPropagation()}
                        style={{ animation: 'scaleIn 0.25s ease' }}
                    >
                        <button
                            onClick={() => setFormOpen(false)}
                            className="absolute top-4 right-4 z-10 w-9 h-9 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center text-gray-600 font-bold text-lg transition-colors cursor-pointer"
                        >✕</button>

                        <div className="hidden md:block md:w-2/5 shrink-0">
                            <img src={popupImg} alt="Packaging inspiration" className="w-full h-full object-cover" />
                        </div>

                        <div className="flex-1 overflow-y-auto p-8 md:p-10">
                            <h2 style={{ fontFamily: "'Montserrat', sans-serif" }} className="text-[22px] md:text-[28px] font-black text-[#1a2b4b] leading-tight mb-1">
                                Get a Quote or Request a<br />Custom Product
                            </h2>
                            <h3 style={{ fontFamily: "'Montserrat', sans-serif" }} className="text-[16px] font-bold text-[#1a2b4b] mt-6 mb-4">Contact Us</h3>

                            <form className="space-y-4" onSubmit={e => e.preventDefault()}>
                                <div className="grid grid-cols-2 gap-4">
                                    <div>
                                        <label className="block text-[12px] font-semibold text-gray-600 mb-1">First Name<span className="text-red-500">*</span></label>
                                        <input required type="text" className="w-full bg-[#f0f4f8] rounded-md px-3 py-2.5 text-sm outline-none focus:ring-2 focus:ring-[#0d6e41]" />
                                    </div>
                                    <div>
                                        <label className="block text-[12px] font-semibold text-gray-600 mb-1">Last Name<span className="text-red-500">*</span></label>
                                        <input required type="text" className="w-full bg-[#f0f4f8] rounded-md px-3 py-2.5 text-sm outline-none focus:ring-2 focus:ring-[#0d6e41]" />
                                    </div>
                                </div>

                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                    <div>
                                        <label className="block text-[12px] font-semibold text-gray-600 mb-1">Phone Number<span className="text-red-500">*</span></label>
                                        <div className="flex w-full">
                                            <span className="bg-[#f0f4f8] border-r border-gray-300 px-3 py-2.5 rounded-l-md text-sm text-gray-500 flex items-center whitespace-nowrap shrink-0">🇮🇳 +91</span>
                                            <input required type="tel" placeholder="Enter phone" className="min-w-0 flex-1 bg-[#f0f4f8] rounded-r-md px-3 py-2.5 text-sm outline-none focus:ring-2 focus:ring-[#0d6e41]" />
                                        </div>
                                    </div>
                                    <div>
                                        <label className="block text-[12px] font-semibold text-gray-600 mb-1">Email<span className="text-red-500">*</span></label>
                                        <input required type="email" placeholder="Enter email" className="w-full bg-[#f0f4f8] rounded-md px-3 py-2.5 text-sm outline-none focus:ring-2 focus:ring-[#0d6e41]" />
                                    </div>
                                </div>

                                <div>
                                    <label className="block text-[12px] font-semibold text-gray-600 mb-1">Company Name<span className="text-red-500">*</span></label>
                                    <input required type="text" className="w-full bg-[#f0f4f8] rounded-md px-3 py-2.5 text-sm outline-none focus:ring-2 focus:ring-[#0d6e41]" />
                                </div>

                                <div>
                                    <label className="block text-[12px] font-semibold text-gray-600 mb-1">Which product are you interested in?<span className="text-red-500">*</span></label>
                                    <select required className="w-full bg-[#f0f4f8] rounded-md px-3 py-2.5 text-sm outline-none focus:ring-2 focus:ring-[#0d6e41]">
                                        <option value=""></option>
                                        <option>Paper Cups</option>
                                        <option>Paper Bowls</option>
                                        <option>Burger Box</option>
                                        <option>Food Box</option>
                                        <option>Food Tray</option>
                                        <option>Noodle Box</option>
                                        <option>Other</option>
                                    </select>
                                </div>

                                <div>
                                    <label className="block text-[12px] font-semibold text-gray-600 mb-1">Where did you hear about us?<span className="text-red-500">*</span></label>
                                    <select required className="w-full bg-[#f0f4f8] rounded-md px-3 py-2.5 text-sm outline-none focus:ring-2 focus:ring-[#0d6e41]">
                                        <option value=""></option>
                                        <option>Google Search</option>
                                        <option>Social Media</option>
                                        <option>Friend / Referral</option>
                                        <option>Trade Show</option>
                                        <option>Other</option>
                                    </select>
                                </div>

                                <div>
                                    <label className="block text-[12px] font-semibold text-gray-600 mb-1">Message</label>
                                    <textarea rows={3} className="w-full bg-[#f0f4f8] rounded-md px-3 py-2.5 text-sm outline-none focus:ring-2 focus:ring-[#0d6e41] resize-none" />
                                </div>

                                <button
                                    type="submit"
                                    style={{ fontFamily: "'Montserrat', sans-serif" }}
                                    className="w-full bg-[#0d6e41] hover:bg-[#0a5a34] text-white font-bold py-3 rounded-md text-sm transition-colors duration-200 cursor-pointer"
                                >
                                    Submit
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default HomePage;
