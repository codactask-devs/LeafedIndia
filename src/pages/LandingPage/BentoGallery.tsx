import { useEffect, useState, useRef } from 'react';

import cupMain from "../../assets/bento-gallery/cup-main.webp";
import bowlMain from "../../assets/bento-gallery/bowl-main.jpg";
import burgerMain from "../../assets/bento-gallery/burger-main.webp";
import foodMain from "../../assets/bento-gallery/food-main.webp";
import noodleMain from "../../assets/bento-gallery/noodle-main.webp";
import pizzaMain from "../../assets/bento-gallery/pizza-main.webp";
import trayMain from "../../assets/bento-gallery/tray-main.webp";
import burgermain2 from "../../assets/bento-gallery/burger-main2.webp";
import burgermain3 from "../../assets/bento-gallery/burger-main3.webp";

const bentoItems = [
    { src: cupMain, alt: "Paper Cups", colSpan: "col-span-2", rowSpan: "row-span-2" },
    { src: trayMain, alt: "Food Tray", colSpan: "col-span-1", rowSpan: "row-span-1" },
    { src: pizzaMain, alt: "Pizza Box", colSpan: "col-span-1", rowSpan: "row-span-1" },
    { src: foodMain, alt: "Food Box", colSpan: "col-span-2", rowSpan: "row-span-1" },
    { src: noodleMain, alt: "Noodle Box", colSpan: "col-span-1", rowSpan: "row-span-1" },
    { src: bowlMain, alt: "Bowls", colSpan: "col-span-1", rowSpan: "row-span-1" },
    { src: burgerMain, alt: "Burger Box", colSpan: "col-span-2", rowSpan: "row-span-2" },
    { src: burgermain2, alt: "Burger Box 2", colSpan: "col-span-1", rowSpan: "row-span-1" },
    { src: burgermain3, alt: "Burger Box 3", colSpan: "col-span-1", rowSpan: "row-span-1" },
];

interface BentoGalleryProps {
    setFormOpen: (open: boolean) => void;
}

const BentoGallery = ({ setFormOpen }: BentoGalleryProps) => {
    const [isVisible, setIsVisible] = useState(false);
    const [lightbox, setLightbox] = useState<{ src: string; alt: string } | null>(null);
    const sectionRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => { if (entry.isIntersecting) setIsVisible(true); },
            { threshold: 0.1 }
        );
        if (sectionRef.current) observer.observe(sectionRef.current);
        return () => observer.disconnect();
    }, []);

    useEffect(() => {
        const onKey = (e: KeyboardEvent) => {
            if (e.key === 'Escape') { setLightbox(null); setFormOpen(false); }
        };
        window.addEventListener('keydown', onKey);
        return () => window.removeEventListener('keydown', onKey);
    }, [setFormOpen]);

    return (
        <>
            <style>{`
                @keyframes fadeIn  { from { opacity:0 } to { opacity:1 } }
                @keyframes scaleIn { from { transform:scale(0.88);opacity:0 } to { transform:scale(1);opacity:1 } }
            `}</style>


            <section ref={sectionRef} className="w-full py-20 px-6 lg:px-20 bg-white overflow-hidden">
                <div className="max-w-7xl mx-auto">


                    <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 mb-14 px-4">
                        <div className={`transition-all duration-1000 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
                            <h2 style={{ fontFamily: "'Montserrat', sans-serif" }} className="text-[32px] md:text-[48px] lg:text-[58px] font-black leading-[1.1]">
                                <span className="text-[#0d6e41] block">Be Inspired by</span>
                                <span className="text-[#fb923c] block md:ml-16">Trendy Creations</span>
                            </h2>
                        </div>
                        <div className={`transition-all duration-1000 delay-300 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'}`}>
                            <div className="w-10 h-1 bg-[#fb923c] mb-3" />
                            <p style={{ fontFamily: "'Montserrat', sans-serif" }} className="text-gray-500 font-semibold text-sm max-w-[240px] leading-relaxed">
                                Crafted for quality, designed for the planet. Browse our curated selection of premium sustainable packaging.
                            </p>
                        </div>
                    </div>


                    <div className="grid grid-cols-2 md:grid-cols-4 auto-rows-[140px] md:auto-rows-[220px] gap-3 md:gap-4 grid-flow-row-dense">
                        {bentoItems.map((item, i) => {
                            const colClass = item.colSpan === "col-span-2" ? "col-span-2" : "col-span-1";
                            const rowClass = item.rowSpan === "row-span-2" ? "row-span-2" : "row-span-1";
                            return (
                                <div
                                    key={i}
                                    className={`group relative rounded-2xl md:rounded-3xl overflow-hidden bg-white shadow-sm transition-all duration-500 cursor-pointer ${colClass} ${rowClass} ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-16 opacity-0'}`}
                                    style={{ transitionDelay: `${180 + i * 60}ms` }}
                                    onClick={() => setLightbox({ src: item.src, alt: item.alt })}
                                >
                                    <img
                                        src={item.src}
                                        alt={item.alt}
                                        loading={i < 3 ? "eager" : "lazy"}
                                        className="w-full h-full object-cover transition-transform duration-[250ms] group-hover:scale-110"
                                    />
                                </div>
                            );
                        })}
                    </div>


                    <div className="flex justify-center mt-14">
                        <button
                            onClick={() => setFormOpen(true)}
                            style={{ fontFamily: "'Montserrat', sans-serif" }}
                            className="group flex items-center gap-3 px-10 py-4 rounded-full border-2 border-[#fb923c] text-[#0d6e41] font-black text-[16px] md:text-[18px] bg-transparent hover:bg-[#fb923c] hover:text-white transition-all duration-300 cursor-pointer"
                        >
                            Start Crafting My Packaging
                            <span className="text-[#fb923c] group-hover:text-white transition-colors duration-300 text-xl">›</span>
                        </button>
                    </div>

                </div>
            </section>


            {lightbox && (
                <div
                    className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/80 backdrop-blur-sm"
                    onClick={() => setLightbox(null)}
                    style={{ animation: 'fadeIn 0.2s ease' }}
                >
                    <div
                        className="relative max-w-[90vw] max-h-[90vh]"
                        onClick={e => e.stopPropagation()}
                        style={{ animation: 'scaleIn 0.25s ease' }}
                    >
                        <img src={lightbox.src} alt={lightbox.alt} className="max-w-[90vw] max-h-[90vh] rounded-2xl object-contain shadow-2xl" />
                        <button
                            onClick={() => setLightbox(null)}
                            className="absolute -top-4 -right-4 w-10 h-10 rounded-full cursor-pointer bg-white text-gray-800 flex items-center justify-center text-lg font-bold shadow-lg hover:bg-gray-100 transition-colors"
                        >✕</button>
                    </div>
                </div>
            )}        </>
    );
};

export default BentoGallery;
