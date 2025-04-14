import './Categories.css';

import Image from 'next/image';

export default function Categories() {
    const cardImages = [
        { image: "/categories/1.png", title: "Airpods" },
        { image: "/categories/2.png", title: "Smartwatch" },
        { image: "/categories/3.png", title: "Headset" },
        { image: "/categories/4.png", title: "Microfone" },
        { image: "/categories/5.png", title: "Ring Ligth" },
        { image: "/categories/6.png", title: "Tripés" },
    ];

    return (
        <section className="categories-container">
            {cardImages.map((card, index) => (
                <div key={index} className="text-center">
                    <Image
                        width={170}
                        height={170}
                        src={card.image}
                        alt={card.title}
                        className="category-image"
                    />

                    <span className="category-label">
                        {card.title}
                    </span>
                </div>
            ))}
        </section>
    );
}
