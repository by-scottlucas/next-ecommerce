import './Benefits.css';

import { useLanguage } from '@/app/contexts/LanguageContext';

import { BenefitProp } from './models/Benefits';

interface BenefitsProps {
    benefitsData: BenefitProp[];
}

export default function Benefits({ benefitsData }: BenefitsProps) {
    const { translations } = useLanguage();

    return (
        <section className="benefits-container">
            <div className="benefits-content">
                {benefitsData.map((card, index) => (
                    <div key={index} className="benefit-card">
                        <i
                            aria-hidden="true"
                            className={`benefit-icon ${card.icon}`}
                        ></i>

                        <div>
                            <h5 className="benefit-title">
                                {translations.benefitsCards[index].title}
                            </h5>
                            <p className="benefit-subtitle">
                                {translations.benefitsCards[index].subtitle}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}