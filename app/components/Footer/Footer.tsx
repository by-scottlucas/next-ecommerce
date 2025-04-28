import './Footer.css';

import { useLanguage } from '@/app/contexts/LanguageContext';

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
  footerData: FooterData;
}

export default function Footer({ footerData }: FooterProps) {
  const { translations } = useLanguage();
  const translatedSections = translations.footer.sections;
  const translatedBottomTitle = translations.footer.bottomTitle;

  return (
    <footer className="footer-container">
      <div className="footer-content">
        <div className="footer-top">
          {footerData.sections.map((section, sectionIndex) => (
            <div key={sectionIndex}>
              <h2 className="footer-list-title">
                {translatedSections[sectionIndex]?.title}
              </h2>

              <ul className="footer-list">
                {section.list.map((item, itemIndex) => (
                  <li className="mb-4" key={itemIndex}>
                    <a href={item.path} className="footer-list-item">
                      {translatedSections[sectionIndex]?.list?.[itemIndex]?.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="footer-bottom">
          <span className="footer-bottom-title">{translatedBottomTitle}</span>
        </div>
      </div>
    </footer>
  );
}
