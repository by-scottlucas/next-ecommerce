import './Footer.css';

import Image from 'next/image';
import Link from 'next/link';

import { FooterProps } from './models/footer';

export default function Footer({ footerData }: FooterProps) {
  return (
    <footer className="footer-container">
      <div className="footer-content">
        <div className="footer-middle">
          <div>
            <div className="brand-box">
              <Image
                width={160}
                height={80}
                src={footerData.brandLogo}
                alt={footerData.brandLogoLabel}
              />
            </div>
            <p className="brand-description">
              {footerData.brandDescription}
            </p>
          </div>

          {footerData.sections.map((section, sectionIndex) => (
            <div key={sectionIndex}>
              <h4 className="list-title">{section.title}</h4>
              <ul className="list-items">
                {section.list.map((item, itemIndex) => (
                  <li key={itemIndex}>
                    <Link href={item.path} className="list-item">
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="footer-bottom">
          <p className="footer-bottom-label">
            © {new Date().getFullYear()} {footerData.bottomTitle}
          </p>
          <div className="social-icons">
            <Link href="#" className="social-icon"><i className="bi bi-instagram"></i></Link>
            <Link href="#" className="social-icon"><i className="bi bi-facebook"></i></Link>
            <Link href="#" className="social-icon"><i className="bi bi-youtube"></i></Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
