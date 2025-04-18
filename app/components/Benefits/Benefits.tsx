import "./Benefits.css";
import { getTranslation } from '../../utils/i18n';

interface Benefits {
    icon: string;
    title: string;
    subtitle: string;
}

interface BenefitsProps {
    locale: string;
    benefitsProps: Benefits[];
}

export default function Benefits({ locale, benefitsProps }: BenefitsProps) {
    const translations = getTranslation(locale);
    const benefitsCards = benefitsProps;

    return (
        <div className="benefits-container">
            {benefitsCards.map((card, index) => (
                <div key={index} className="benefit-card">
                    <i className={`benefit-icon ${card.icon}`}></i>
                    <div>
                        <h5 className="benefit-title">{translations.benefitsCards[index].title}</h5>
                        <p className="benefit-subtitle">{translations.benefitsCards[index].subtitle}</p>
                    </div>
                </div>
            ))}
        </div>
    )
}