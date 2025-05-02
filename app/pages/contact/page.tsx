"use client";
import "./ContactPage.css";
import Header from "@/app/components/Header/Header";

import ContactForm from "./components/ContactForm/ContactForm";
import ContactInfo from "./components/ContactInfo/ContactInfo";

export default function ContactPage() {
    return (
        <>
            <Header />
            <div className="contact-page-container">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
                    <div id="contact-form">
                        <ContactForm />
                    </div>
                    <div>
                        <ContactInfo />
                    </div>
                </div>
            </div>
        </>
    );
}