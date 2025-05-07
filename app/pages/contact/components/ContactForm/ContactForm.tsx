"use client";

import './ContactForm.css';

import { useLanguage } from '@/app/contexts/LanguageContext';
import { ClipboardCheck, Mail, MessageSquare, User } from 'lucide-react';
import React, { useState } from 'react';
import { toast } from 'sonner';

import FormField from './FormField';
import { FormData } from './models/formdata';

const iconMap = {
    User: <User className="icon-style" />,
    Mail: <Mail className="icon-style" />,
    ClipboardCheck: <ClipboardCheck className="icon-style" />,
    MessageSquare: <MessageSquare className="icon-style" />
};

export default function ContactForm() {
    const { translations } = useLanguage();
    const formDataText = translations.contactForm;

    const [formData, setFormData] = useState<FormData>({
        name: '',
        email: '',
        subject: '',
        message: ''
    });

    const [errors, setErrors] = useState<Partial<FormData>>({});

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
        if (errors[name as keyof FormData]) {
            setErrors(prev => ({ ...prev, [name]: undefined }));
        }
    };

    const validate = (): boolean => {
        const newErrors: Partial<FormData> = {};
        if (!formData.name.trim()) newErrors.name = formDataText.errors.name;
        if (!formData.email.trim()) {
            newErrors.email = formDataText.errors.emailRequired;
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            newErrors.email = formDataText.errors.emailInvalid;
        }
        if (!formData.message.trim()) newErrors.message = formDataText.errors.message;
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (!validate()) return;

        console.log('Form submitted:', formData);
        toast(
            <>
                <strong>{formDataText.toast.title}</strong><br />
                {formDataText.toast.description}
            </>
        );
        setFormData({ name: '', email: '', subject: '', message: '' });
    };

    return (
        <form onSubmit={handleSubmit} className="form-container">
            <h3 className="form-title">{formDataText.title}</h3>
            {formDataText.fields.map((field: any) => (
                <FormField
                    key={field.id}
                    id={field.id as keyof FormData}
                    type={field.type}
                    label={field.label}
                    placeholder={field.placeholder}
                    icon={iconMap[field.icon as keyof typeof iconMap]}
                    value={formData[field.id as keyof FormData]}
                    error={errors[field.id as keyof FormData]}
                    onChange={handleChange}
                    textarea={field.textarea}
                />
            ))}
            <button type="submit" className="button-submit">
                {formDataText.submitLabel}
            </button>
        </form>
    );
}
