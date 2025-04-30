"use client";

import '../Auth.css';

import AuthForm from '../components/AuthForm/AuthForm';

import Header from '@/app/components/Header/Header';

export default function RegisterPage() {
    return (
        <>
            <Header />
            <main className="auth-container">
                <div className="auth-card">
                    <div className="auth-card-content">
                        <h1 className="auth-heading">Crie sua conta</h1>
                        <AuthForm type="register" />
                    </div>
                </div>
            </main>
        </>
    );
}
