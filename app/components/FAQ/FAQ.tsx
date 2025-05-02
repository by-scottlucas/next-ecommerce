import './FAQ.css';

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

interface FAQItem {
    question: string;
    answer: string;
}

const faqs: FAQItem[] = [
    {
        question: 'Quais são os horários de funcionamento da loja?',
        answer: 'Nosso atendimento online funciona 24 horas por dia, 7 dias por semana. Já o atendimento físico ocorre de segunda a sexta, das 9h às 18h, e aos sábados, das 9h às 13h.'
    },
    {
        question: 'Vocês fazem entregas internacionais?',
        answer: 'Sim, realizamos entregas para diversos países. Os prazos e os valores do frete variam de acordo com o destino.'
    },
    {
        question: 'Qual é a política de devolução?',
        answer: 'Você pode devolver seu produto em até 30 dias após a compra, desde que esteja sem uso e na embalagem original.'
    },
    {
        question: 'Os produtos têm garantia?',
        answer: 'Sim, todos os nossos acessórios possuem garantia mínima de 1 ano. Alguns itens premium contam com garantia estendida.'
    },
    {
        question: 'Como acompanho o status do meu pedido?',
        answer: 'Assim que o pedido for enviado, você receberá por e-mail um código de rastreamento para acompanhar a entrega em tempo real.'
    }
];

export default function FAQ() {
    return (
        <div className="faq-container">
            <Accordion type="single" collapsible className="faq-content">
                {faqs.map((faq, index) => (
                    <AccordionItem key={index} value={`item-${index}`} className="faq-item">
                        <AccordionTrigger className="faq-button">
                            {faq.question}
                        </AccordionTrigger>
                        <AccordionContent className="faq-answer">
                            {faq.answer}
                        </AccordionContent>
                    </AccordionItem>
                ))}
            </Accordion>
        </div>
    );
};