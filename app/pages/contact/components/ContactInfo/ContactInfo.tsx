import './ContactInfo.css';

import { LucideIcon, Mail, MapPin, Phone } from 'lucide-react';

interface ContactItemProps {
    icon: LucideIcon;
    title: string;
    info: string | string[];
    subinfo?: string;
}

function ContactItem({ icon: Icon, title, info, subinfo }: ContactItemProps) {
    return (
        <div className="contact-info-contact-item">
            <div className="contact-info-icon-wrapper">
                <Icon className="contact-info-icon" />
            </div>
            <div>
                <h4 className="contact-info-item-title">{title}</h4>
                {Array.isArray(info) ? (
                    info.map((line, i) => <p key={i} className="contact-info-item-info">{line}</p>)
                ) : (
                    <p className="contact-info-item-info">{info}</p>
                )}
                {subinfo && <p className="contact-info-item-subinfo">{subinfo}</p>}
            </div>
        </div>
    );
}

interface SocialLink {
    href: string;
    iconClass: string;
}

const socialLinks: SocialLink[] = [
    { href: '#', iconClass: 'bi bi-facebook' },
    { href: '#', iconClass: 'bi bi-instagram' },
    { href: '#', iconClass: 'bi bi-tiktok' },
    { href: '#', iconClass: 'bi bi-youtube' },
];

export default function ContactInfo() {
    return (
        <div className="contact-info-contact-container">
            <h3 className="contact-info-contact-title">
                Informações de Contato
            </h3>

            <div className="contact-info-contact-section">
                <ContactItem
                    icon={Phone}
                    title="Telefone"
                    info="+55 (13) 99999-9999"
                    subinfo="Segunda à Sexta, das 9h às 18h"
                />
                <ContactItem
                    icon={Mail}
                    title="E-mail"
                    info="contato@techpoint.com"
                    subinfo="Responderemos o mais breve possível"
                />
                <ContactItem
                    icon={MapPin}
                    title="Localização"
                    info={["Av. Pres. Costa e Silva - Boqueirão, 7070", "Praia Grande - SP, Brazil"]}
                    subinfo="Visite nossa loja física"
                />
            </div>

            <div className="contact-info-social-section">
                <h4 className="contact-info-item-title">
                    Nos Siga nas Redes Sociais
                </h4>
                <div className="contact-info-social-icons">
                    {socialLinks.map((link, index) => (
                        <a key={index} href={link.href} className="contact-info-social-link">
                            <i className={link.iconClass}></i>
                        </a>
                    ))}
                </div>
            </div>
        </div>
    );
}