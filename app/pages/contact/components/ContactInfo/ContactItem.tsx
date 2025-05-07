import './ContactInfo.css';

import { ContactItemProps } from './models/contact-item';

export function ContactItem({ icon: Icon, title, info, subinfo }: ContactItemProps) {
    return (
        <div className="contact-info-contact-item">
            <div className="contact-info-icon-wrapper">
                <Icon className="contact-info-icon" />
            </div>
            <div>
                <h4 className="contact-info-item-title">{title}</h4>
                {Array.isArray(info) ? (info.map((line, i) =>
                    <p key={i} className="contact-info-item-info">{line}</p>
                )
                ) : (
                    <p className="contact-info-item-info">{info}</p>
                )}
                {subinfo && <p className="contact-info-item-subinfo">{subinfo}</p>}
            </div>
        </div>
    );
}