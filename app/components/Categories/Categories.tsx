import './Categories.css';

import { useLanguage } from '@/app/contexts/LanguageContext';
import Image from 'next/image';

import { CategoriesProps } from './models/CategorieCard';

export default function Categories({ categoriesData }: CategoriesProps) {
    const { translations } = useLanguage();

    return (
        <section className="categories-container">
            {categoriesData.map((card, index) => (
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
