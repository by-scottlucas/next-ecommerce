import "./LanguageSelector.css";
import { useLanguage } from '@/app/contexts/LanguageContext';

const languages = [
    { value: "pt-BR", label: "Português" },
    { value: "en-US", label: "English" },
    { value: "es-ES", label: "Español" },
]

export default function LanguageSelector() {
    const { locale, setLocale } = useLanguage();

    return (
        <div className="language-selector-container p-2">
            <select value={locale} className="select-input" onChange={(event) => setLocale(event.target.value as 'pt-BR' | 'en-US' | 'es-ES')}>
                {languages.map((language, index) => (
                    <option className="select-option" key={index} value={language.value}>
                        {language.label}
                    </option>
                ))}
            </select>
        </div>
    );
}
