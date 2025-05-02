"use client";

import './ContactForm.css';

import { ClipboardCheck, Mail, MessageSquare, User } from 'lucide-react';
import React, { useState } from 'react';
import { toast } from 'sonner';

interface FormData {
    name: string;
    email: string;
    subject: string;
    message: string;
}

interface InputProps {
    id: keyof FormData;
    type?: string;
    label: string;
    placeholder: string;
    icon: React.ReactNode;
    value: string;
    error?: string;
    onChange: (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
    textarea?: boolean;
}

function FormField({
    id,
    type = 'text',
    label,
    placeholder,
    icon,
    value,
    error,
    onChange,
    textarea = false
}: InputProps) {
    const wrapperClass = textarea ? 'textarea-icon-wrapper' : 'icon-wrapper';

    return (
        <div className="form-control">
            <label htmlFor={id} className="label-base">{label}</label>
            <div className="relative">
                <div className={wrapperClass}>{icon}</div>
                {textarea ? (
                    <textarea
                        id={id}
                        name={id}
                        rows={4}
                        value={value}
                        onChange={onChange}
                        className="input-base input-icon"
                        placeholder={placeholder}
                    />
                ) : (
                    <input
                        id={id}
                        type={type}
                        name={id}
                        value={value}
                        onChange={onChange}
                        className="input-base input-icon"
                        placeholder={placeholder}
                    />
                )}
            </div>
            {error && <p className="error-text">{error}</p>}
        </div>
    );
}


export default function ContactForm() {
    const [formData, setFormData] = useState<FormData>({
        name: '',
        email: '',
        subject: '',
        message: ''
    });

    const [errors, setErrors] = useState<Partial<FormData>>({});

    const validate = (): boolean => {
        const newErrors: Partial<FormData> = {};
        if (!formData.name.trim()) newErrors.name = 'O nome é obrigatório';
        if (!formData.email.trim()) {
            newErrors.email = 'O e-mail é obrigatório';
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            newErrors.email = 'O e-mail é inválido';
        }
        if (!formData.message.trim()) newErrors.message = 'A mensagem é obrigatória';

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));

        if (errors[name as keyof FormData]) {
            setErrors(prev => ({ ...prev, [name]: undefined }));
        }
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        if (validate()) {
            console.log('Form submitted:', formData);
            toast(
                <>
                    <strong>Mensagem Enviada!</strong><br />
                    Entraremos em contato com você o mais breve possível!
                </>
            );

            setFormData({ name: '', email: '', subject: '', message: '' });
        }
    };

    return (
        <form onSubmit={handleSubmit} className="form-container">
            <h3 className="form-title">Nos envie uma mensagem</h3>

            <FormField
                id="name"
                label="Seu Nome"
                placeholder="Seu nome aqui"
                icon={<User className="icon-style" />}
                value={formData.name}
                error={errors.name}
                onChange={handleChange}
            />

            <FormField
                id="email"
                type="email"
                label="Seu E-mail"
                placeholder="nome@email.com"
                icon={<Mail className="icon-style" />}
                value={formData.email}
                error={errors.email}
                onChange={handleChange}
            />

            <FormField
                id="subject"
                label="Assunto"
                placeholder="Como podemos ajudar você?"
                icon={<ClipboardCheck className="icon-style" />}
                value={formData.subject}
                onChange={handleChange}
            />

            <FormField
                id="message"
                label="Sua Mensagem"
                placeholder="Sua mensagem aqui..."
                icon={<MessageSquare className="icon-style" />}
                value={formData.message}
                error={errors.message}
                onChange={handleChange}
                textarea
            />

            <button type="submit" className="button-submit">
                Enviar
            </button>
        </form>
    );
}
