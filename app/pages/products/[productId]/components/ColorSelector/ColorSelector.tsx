import './ColorSelector.css';

import { useLanguage } from '@/app/contexts/LanguageContext';

import { ColorSelectorProps } from './models/color-selector';

export default function ColorSelector({
    colors,
    selectedColor,
    onColorSelect
}: ColorSelectorProps) {
    const { translations } = useLanguage();
    return (
        <div className="selector-container">
            <h3 className="color-label">{translations.colorSelectorComponent.title}</h3>
            <div className="color-grid">
                {colors.map((color) => (
                    <button key={color.name}
                        onClick={() => onColorSelect(color)}
                        className={`color-button ${selectedColor?.name === color.name
                            ? "color-selected"
                            : "color-unselected"
                            }`}
                        title={color.name}
                    >
                        <span className="color-circle" style={{ backgroundColor: color.value }} />
                    </button>
                ))}
            </div>
            <p className="color-description">
                {translations.colorSelectorComponent.label}: {selectedColor?.name}
            </p>
        </div>
    );
}
