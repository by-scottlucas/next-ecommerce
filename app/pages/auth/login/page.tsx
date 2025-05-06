"use client";

import '../Auth.css';

import Header from '@/app/components/Header/Header';
import { useLanguage } from '@/app/contexts/LanguageContext';

import AuthForm from '../components/AuthForm/AuthForm';

export default function LoginPage() {
    const { translations } = useLanguage();

    return (
        <>
            <Header />
            <main className="auth-container">
                <div className="auth-card">
                    <div className="auth-card-content">
                        <h1 className="auth-heading">
                            {translations.authPage.loginPage.title}
                        </h1>
                        <AuthForm type="login" />
                    </div>
                </div>
            </main>
        </>
    );
}
