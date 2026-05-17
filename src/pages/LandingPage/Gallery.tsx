import React, { useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import cup1 from "../../assets/gallery/cup1.webp";
import cup2 from "../../assets/gallery/cup2.webp";
import cup3 from "../../assets/gallery/cup3.webp";

import bowl1 from "../../assets/gallery/bowl.webp";
import bowl2 from "../../assets/gallery/bowl1.webp";

import burgerbox1 from "../../assets/gallery/burgerbox1.webp";

import foodbox1 from "../../assets/gallery/foodbox1.webp";

import foodtray1 from "../../assets/gallery/foodtray1.webp";
import foodtray2 from "../../assets/gallery/foodtray2.webp";
import foodtray3 from "../../assets/gallery/foodtray3.webp";

import noodlebox1 from "../../assets/gallery/noodlebox1.webp";
import hexagonbox1 from "../../assets/gallery/hexagonbox1.webp";

import InfiniteMenu, { type InfiniteMenuHandle } from "../../animations/InfiniteMenu";

export const images = [
    cup1, cup2, cup3,
    bowl1, bowl2,
    burgerbox1,
    foodbox1,
    foodtray1, foodtray2, foodtray3,
    noodlebox1, hexagonbox1
];

const categoriesConfig = [
    { name: 'Cups', images: [cup1, cup2, cup3], defaultImg: cup1, desc: 'Designed for drinks, crafted for brands.' },
    { name: 'Bowls', images: [bowl1, bowl2], defaultImg: bowl1, desc: 'Serve hearty meals with confidence.' },
    { name: 'Burger Box', images: [burgerbox1], defaultImg: burgerbox1, desc: 'Packaging made for the ultimate bite.' },
    { name: 'Food Box', images: [foodbox1], defaultImg: foodbox1, desc: 'Reliable boxes for every takeaway.' },
    { name: 'Food Tray', images: [foodtray1, foodtray2, foodtray3], defaultImg: foodtray1, desc: 'Perfect trays for quick bites.' },
    { name: 'Noodles Box', images: [noodlebox1, hexagonbox1], defaultImg: noodlebox1, desc: 'Designed for flavors that travel.' },
];

const items = categoriesConfig.flatMap(cat => {
    const selection = cat.images.length > 0 ? cat.images.slice(0, 4) : [cat.defaultImg];

    // Map category names to actual product IDs in productData.tsx
    let productId = "";
    const name = cat.name.toLowerCase();
    if (name.includes('cup')) productId = 'paper-cups';
    else if (name.includes('bowl')) productId = 'paper-bowls';
    else if (name.includes('burger')) productId = 'burger-box';
    else if (name.includes('food box')) productId = 'food-box';
    else if (name.includes('tray')) productId = 'paper-tray';
    else if (name.includes('noodles')) productId = 'hexagon-box'; // Using hexagon as proxy if noodles page missing
    else productId = 'products'; // Fallback to all products

    return selection.map(img => ({
        image: img,
        link: productId === 'products' ? '/products' : `/product/${productId}`,
        title: cat.name,
        description: cat.desc
    }));
});

const Gallery: React.FC = () => {
    const menuRef = useRef<InfiniteMenuHandle>(null);
    const containerRef = useRef<HTMLDivElement>(null);
    const hasPulsed = useRef(false);
    const navigate = useNavigate();

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting && !hasPulsed.current) {
                    setTimeout(() => {
                        menuRef.current?.pulse();
                        hasPulsed.current = true;
                    }, 500);
                }
            },
            { threshold: 0.3 }
        );

        if (containerRef.current) {
            observer.observe(containerRef.current);
        }

        return () => observer.disconnect();
    }, []);

    return (
        <div id="collections" ref={containerRef} className="w-full mx-auto bg-[#f6f3e5] pb-20 pt-10">
            <h2 style={{ fontFamily: "'Montserrat', sans-serif" }} className='text-[35px] md:text-[50px] lg:text-[65px] leading-none text-center font-black mb-16 uppercase tracking-tight'>
                <span className="text-[#0d6e41]">Our </span>
                <span className="text-[#fb923c]">Eco</span>
                <span className="text-[#0d6e41]"> Collections</span>
            </h2>

            <div style={{ height: '600px', position: 'relative' }} className="w-[100%] md:w-[100%] mx-auto overflow-hidden">
                <InfiniteMenu
                    ref={menuRef}
                    items={items}
                    scale={1}
                    onButtonClick={(item) => navigate(item.link)}
                />
            </div>
        </div>
    );
};

export default Gallery;