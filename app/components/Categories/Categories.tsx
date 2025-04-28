import './Categories.css';

import { useLanguage } from '@/app/contexts/LanguageContext';
import Image from 'next/image';

interface Card {
    image: string;
    title: string;
}

interface CategoriesProps {
    cardsData: Card[];
}

export default function Categories({ cardsData }: CategoriesProps) {
    const { translations } = useLanguage();

    return (
        <section className="categories-container">
            {cardsData.map((card, index) => (
                <div key={index} className="text-center">
                    <Image
                        width={170}
                        height={170}
                        src={card.image}
                        alt={card.title}
                        className="category-image"
                        priority={index === 0}
                    />
                    <span className="category-label">
                        {translations.categoriesCards[index]?.title}
                    </span>
                </div>
            ))}
        </section>
    );
}
