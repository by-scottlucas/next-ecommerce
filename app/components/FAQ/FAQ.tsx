import './FAQ.css';

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

import { FAQProps } from './models/faq';

export default function FAQ({ faqsData }: FAQProps) {
    return (
        <div className="faq-container">
            <Accordion type="single" collapsible className="faq-content">
                {faqsData.map((faq, index) => (
                    <AccordionItem key={index} value={`item-${index}`} className="faq-item">
                        <AccordionTrigger className="faq-button">{faq.question}</AccordionTrigger>
                        <AccordionContent className="faq-answer">{faq.answer}</AccordionContent>
                    </AccordionItem>
                ))}
            </Accordion>
        </div>
    );
};