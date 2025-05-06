import './AdditionalInfo.css';
import { Award, RotateCcw, Share2, Truck } from 'lucide-react';
import { useLanguage } from '@/app/contexts/LanguageContext';

const icons = [Truck, RotateCcw, Award, Share2];

export default function AdditionalInfo() {
    const { translations } = useLanguage();
    const labels = translations.additionalInfoComponent.items;

    return (
        <div className="additional-infos-grid">
            {labels.map((label: string, index: number) => {
                const Icon = icons[index];
                return (
                    <div key={label} className="flex items-center">
                        <Icon className="additional-info-icon" />
                        <span className="additional-info-label">{label}</span>
                    </div>
                );
            })}
        </div>
    );
}
