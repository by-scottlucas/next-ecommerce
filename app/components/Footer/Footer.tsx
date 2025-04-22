"use client";

import "./Footer.css";
import { useLanguage } from "@/app/contexts/LanguageContext";

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
  const translatedSections = translations.footer[0].sections;
  const translatedBottomTitle = translations.footer[0].bottomTitle;

  return (
    <footer className="footer-container">
      <div className="footer-content">
        <div className="footer-top">
          {footerData.sections.map((section, index) => (
            <div key={index}>
              <h2 className="footer-list-title">
                {translatedSections[index]?.title}
              </h2>
              <ul className="footer-list">
                {section.list.map((item, idx) => (
                  <li className="mb-4" key={idx}>
                    <a href={item.path} className="footer-list-item">
                      {translatedSections[index]?.list[idx]?.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="footer-bottom">
          <span className="footer-bottom-title">
            {translatedBottomTitle}
          </span>
        </div>
      </div>
    </footer>
  );
}
