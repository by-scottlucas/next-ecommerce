import './ContactInfo.css';

import { Mail, MapPin, Phone } from 'lucide-react';
import { ContactItem } from './ContactItem';
import { useLanguage } from '@/app/contexts/LanguageContext';

export default function ContactInfo() {
    const { translations } = useLanguage();
    const data = translations.contactInfo;

    return (
        <div className="contact-info-contact-container">
            <h3 className="contact-info-contact-title">{data.title}</h3>

            <div className="contact-info-contact-section">
                <ContactItem
                    icon={Phone}
                    title={data.items.phone.title}
                    info={data.items.phone.info}
                    subinfo={data.items.phone.subinfo}
                />
                <ContactItem
                    icon={Mail}
                    title={data.items.email.title}
                    info={data.items.email.info}
                    subinfo={data.items.email.subinfo}
                />
                <ContactItem
                    icon={MapPin}
                    title={data.items.location.title}
                    info={data.items.location.info}
                    subinfo={data.items.location.subinfo}
                />
            </div>

            <div className="contact-info-social-section">
                <h4 className="contact-info-item-title">{data.social.title}</h4>
                <div className="contact-info-social-icons">
                    {data.social.links.map((link: any, index: number) => (
                        <a key={index} href={link.href} className="contact-info-social-link">
                            <i className={link.iconClass}></i>
                        </a>
                    ))}
                </div>
            </div>
        </div>
    );
}
