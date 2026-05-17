import footerLogo from '../assets/leafedIndiaFooterLogo.png';
import { Link } from 'react-router-dom';

const InstagramIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="transition-transform group-hover:scale-110">
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
    </svg>
);

const LinkedinIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="transition-transform group-hover:scale-110">
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
        <rect x="2" y="9" width="4" height="12"></rect>
        <circle cx="4" cy="4" r="2"></circle>
    </svg>
);

const FacebookIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="transition-transform group-hover:scale-110">
        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
    </svg>
);

const GlobeIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="transition-transform group-hover:scale-110">
        <circle cx="12" cy="12" r="10"></circle>
        <line x1="2" y1="12" x2="22" y2="12"></line>
        <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
    </svg>
);

const Footer = () => {
    return (
        <footer id="footer" className="w-full">
            <div className="mx-auto bg-[#12263a] p-10 md:p-20 text-white relative overflow-hidden">

                <div className="absolute top-60 left-0 w-[800px] h-[500px] bg-white/5 rounded-full -translate-x-1/2 -translate-y-1/2 pointer-events-none hidden md:block" />

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 relative z-10">

                    <div className="flex flex-col gap-8 col-span-1 lg:col-span-1">
                        <div>
                            <img src={footerLogo} alt="LeafedIndia Logo" className="h-[90px] md:h-[130px] object-contain" />
                        </div>
                        <p className="text-gray-400 text-sm md:text-base leading-relaxed max-w-[300px]">
                            Sustainable packaging solutions designed for modern brands. Eco-friendly, customizable, and crafted to elevate your product experience.
                        </p>
                        <div className="flex gap-2">
                            {[...Array(8)].map((_, i) => (
                                <div key={i} className="w-1.5 h-1.5 rounded-full bg-gray-600" />
                            ))}
                        </div>
                    </div>

                    <div className="flex flex-col ml-5 gap-6">
                        <h3 className="text-xl font-bold">Contact</h3>
                        <ul className="flex flex-col gap-4 text-gray-400 font-medium">
                            <li className="font-medium text-gray-400 hover:text-white transition-all">Tamil Nadu, India</li>
                            <li className="font-medium text-gray-400 hover:text-white transition-all"><a href="tel:+919025044947">+91 9025044947</a></li>
                            <li className="font-medium text-gray-400 hover:text-white transition-all"><a href="mailto:sales@leafedindia.com">sales@leafedindia.com</a></li>
                        </ul>
                    </div>

                    <div className="flex flex-col gap-6">
                        <h3 className="text-xl font-bold">About</h3>
                        <ul className="flex flex-col gap-4 text-gray-400 font-medium">
                            <li className="hover:ml-2 hover:cursor-pointer hover:text-white transition-all duration-200"><Link to="/">Home</Link></li>
                            <li className="hover:ml-2 hover:cursor-pointer hover:text-white transition-all duration-200"><Link to="/products">Products</Link></li>
                            <li className="hover:ml-2 hover:cursor-pointer hover:text-white transition-all duration-200"><Link to="/#faq">FAQ</Link></li>
                        </ul>
                    </div>

                    <div className="flex flex-col gap-6">
                        <h3 className="text-xl font-bold whitespace-nowrap">Connect With Us</h3>
                        <div className="flex flex-col gap-8">
                            <p className="text-gray-400 text-sm md:text-base leading-relaxed">
                                Join our community and stay updated with our latest sustainable innovations and packaging solutions.
                            </p>
                            <div className="flex gap-5">
                                <a href="https://www.instagram.com/leafedindia/" target="_blank" rel="noopener noreferrer" className="p-2.5 rounded-full border border-white/10 hover:bg-[#fb923c] hover:border-[#fb923c] transition-all text-white/80 hover:text-white group flex items-center justify-center">
                                    <InstagramIcon />
                                </a>
                                <a href="https://www.linkedin.com/company/leafed-india/" target="_blank" rel="noopener noreferrer" className="p-2.5 rounded-full border border-white/10 hover:bg-[#fb923c] hover:border-[#fb923c] transition-all text-white/80 hover:text-white group flex items-center justify-center">
                                    <LinkedinIcon />
                                </a>
                                <a href="https://www.facebook.com/LeafedIndia/" target="_blank" rel="noopener noreferrer" className="p-2.5 rounded-full border border-white/10 hover:bg-[#fb923c] hover:border-[#fb923c] transition-all text-white/80 hover:text-white group flex items-center justify-center">
                                    <FacebookIcon />
                                </a>
                                <a href="mailto:sales@leafedindia.com" className="p-2.5 rounded-full border border-white/10 hover:bg-[#fb923c] hover:border-[#fb923c] transition-all text-white/80 hover:text-white group flex items-center justify-center">
                                    <GlobeIcon />
                                </a>
                            </div>
                            <p className="text-gray-500 text-sm">© 2026 LeafedIndia • All Rights Reserved</p>
                        </div>
                    </div>

                </div>
            </div>
        </footer>
    );
};

export default Footer;
