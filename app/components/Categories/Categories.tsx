import './Categories.css';

import Image from 'next/image';

import { getTranslation } from '../../utils/i18n';

interface Card {
    image: string;
    title: string;
}

interface CategoriesProps {
    cardsData: Card[];
    locale: string;
}

export default function Categories({ cardsData, locale }: CategoriesProps) {
    const translations = getTranslation(locale);

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
                    />

                    <span className="category-label">
                        {translations.categoriesCards[index]?.title}
                    </span>
                </div>
            ))}
        </section>
    );
}
