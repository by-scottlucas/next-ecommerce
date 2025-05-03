"use client";

import './ContactPage.css';

import Header from '@/app/components/Header/Header';

import ContactForm from './components/ContactForm/ContactForm';
import ContactInfo from './components/ContactInfo/ContactInfo';
import Map from './components/Map/Map';
import FAQ from '@/app/components/FAQ/FAQ';
import Footer from '@/app/components/Footer/Footer';
import { useLanguage } from '@/app/contexts/LanguageContext';

export default function ContactPage() {
    const { translations } = useLanguage();

    return (
        <div className="contact-page-container">
            <Header />
            <div className="contact-page-content">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
                    <div id="contact-form">
                        <ContactForm />
                    </div>
                    <div>
                        <ContactInfo />
                    </div>
                </div>
            </div>

            <div className="map-box">
                <h2 className="map-box-title">Estamos localizados em</h2>
                <Map />
            </div>

            <div className="faq-box">
                <h3 className="faq-box-title">Perguntas frequentes</h3>
                <FAQ />
            </div>

            <Footer footerData={translations.footer} />
        </div>
    );
}