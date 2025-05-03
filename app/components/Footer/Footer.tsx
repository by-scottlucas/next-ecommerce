import Link from 'next/link';
import './Footer.css';

import Image from 'next/image';

interface FooterLink {
  label: string;
  path: string;
}

interface FooterSection {
  title: string;
  list: FooterLink[];
}

interface FooterData {
  brandLogo: string;
  brandDescription: string;
  sections: FooterSection[];
  bottomTitle: string;
}

interface FooterProps {
  footerData: FooterData;
}

export default function Footer({ footerData }: FooterProps) {
  return (
    <footer className="footer-container">
      <div className="footer-content">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="brand-box">
              <Image src={footerData.brandLogo} alt="TechPoint" width={160} height={80} />
            </div>
            <p className="brand-description">{footerData.brandDescription}</p>
          </div>

          {footerData.sections.map((section, index) => (
            <div key={index}>
              <h4 className="list-title">{section.title}</h4>
              <ul className="list-items">
                {section.list.map((item, i) => (
                  <li key={i}>
                    <Link href={item.path} className="list-item">{item.label}</Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="footer-bottom">
          <p className="footer-bottom-label">© {new Date().getFullYear()} {footerData.bottomTitle}</p>
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
