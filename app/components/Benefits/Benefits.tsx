import './Benefits.css';

import { useLanguage } from '@/app/contexts/LanguageContext';

interface Benefits {
    icon: string;
    title: string;
    subtitle: string;
}

interface BenefitsProps {
    benefitsProps: Benefits[];
}

export default function Benefits({ benefitsProps }: BenefitsProps) {
    const { translations } = useLanguage();

    return (
        <div className="benefits-container">
            <div className="benefits-content">
                {benefitsProps.map((card, index) => (
                    <div key={index} className="benefit-card">
                        <i aria-hidden="true" className={`benefit-icon ${card.icon}`}></i>
                        <div>
                            <h5 className="benefit-title">{translations.benefitsCards[index].title}</h5>
                            <p className="benefit-subtitle">{translations.benefitsCards[index].subtitle}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
