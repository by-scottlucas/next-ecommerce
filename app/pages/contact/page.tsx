"use client";

import './ContactPage.css';

import FAQ from '@/app/components/FAQ/FAQ';
import Footer from '@/app/components/Footer/Footer';
import Header from '@/app/components/Header/Header';
import { useLanguage } from '@/app/contexts/LanguageContext';

import ContactForm from './components/ContactForm/ContactForm';
import ContactInfo from './components/ContactInfo/ContactInfo';
import Map from './components/Map/Map';

export default function ContactPage() {
    const { translations } = useLanguage();
    const data = translations.contactPage;

    return (
        <div className="contact-page-container">
            <Header />
            <div className="contact-page-content">
                <ContactForm />
                <ContactInfo />
            </div>

            <div className="map-box">
                <h2 className="map-box-title">{data.mapBoxTitle}</h2>
                <Map />
            </div>

            <div className="faq-box">
                <h2 className="faq-box-title">{data.faqBoxTitle}</h2>
                <FAQ faqsData={translations.faqComponent} />
            </div>

            <Footer footerData={translations.footer} />
        </div>
    );
}