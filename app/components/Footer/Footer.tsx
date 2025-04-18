import "./Footer.css";
import { getTranslation } from '../../utils/i18n';

interface FooterLink {
    label: string;
    path: string;
}

interface FooterSection {
    title: string;
    list: FooterLink[];
}

interface FooterData {
    sections: FooterSection[];
    bottomTitle: string;
}


interface FooterProps {
    locale: string;
    footerData: FooterData;
}

export default function Footer({ locale, footerData }: FooterProps) {
    const translations = getTranslation(locale);

    return (
        <footer className="footer-container">
            <div className="footer-content">
                <div className="footer-top">
                    {footerData.sections.map((section, index) => (
                        <div key={index}>
                            <h2 className="footer-list-title">
                                {getTranslation(locale).footer[0].sections[index].title}
                            </h2>
                            <ul className="footer-list">
                                {section.list.map((item, idx) => (
                                    <li className="mb-4" key={idx}>
                                        <a href={item.path} className="footer-list-item">
                                            {getTranslation(locale).footer[0].sections[index].list[idx].label}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>

                <div className="footer-bottom">
                    <span className="footer-bottom-title">
                        {translations.footer[0].bottomTitle}
                    </span>
                </div>
            </div>
        </footer>
    );
}
