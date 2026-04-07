import React, { useState } from 'react';
import { ChevronDown, MessageSquare } from 'lucide-react';
import './FAQ.css';

const faqs = [
    {
        question: "How do I book a taxi with Ektha Cabs Cochin?",
        answer: "Booking is simple! You can use our 'Quick Booking' form on the home page, call us directly at +91 86060 36004, or simply click the WhatsApp button to chat with our booking assistant instantly."
    },
    {
        question: "Do you provide 24/7 airport transfers from Kochi (COK)?",
        answer: "Yes, we provide reliable 24/7 airport pickup and drop services. Our drivers monitor flight timings to ensure they are at the terminal exactly when you land."
    },
    {
        question: "What types of vehicles are available in your fleet?",
        answer: "We offer a diverse range of vehicles including premium hatchbacks, sedans (Dzire, Etios), SUVs (Innova Crysta, Marazzo), and luxury vehicles for weddings and tours."
    },
    {
        question: "Do you offer customized Kerala tour packages?",
        answer: "Absolutely! We specialize in curated tours to Munnar, Thekkady, Alleppey, and Varkala. We can customize any itinerary based on your preferences and budget."
    },
    {
        question: "Is it safe to travel with Ektha Cabs at night?",
        answer: "Safety is our #1 priority. All our drivers are professionally verified, and our vehicles are equipped with GPS tracking for your peace of mind during night journeys."
    }
];

const FAQ = () => {
    const [activeIndex, setActiveIndex] = useState(null);

    const toggleFAQ = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    // FAQ Schema for SEO 2026
    const faqSchema = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": faqs.map(faq => ({
            "@type": "Question",
            "name": faq.question,
            "acceptedAnswer": {
                "@type": "Answer",
                "text": faq.answer
            }
        }))
    };

    return (
        <section className="faq-section" id="faq">
            <script type="application/ld+json">
                {JSON.stringify(faqSchema)}
            </script>
            <div className="container">
                <div className="faq-header">
                    <div className="faq-label">
                        <MessageSquare size={16} />
                        <span>Got Questions?</span>
                    </div>
                    <h2 className="section-title">Frequently Asked <span className="highlight">Questions</span></h2>
                    <p className="description">Clear answers to your most common queries about our premium cab services in Cochin.</p>
                </div>

                <div className="faq-grid">
                    {faqs.map((faq, index) => (
                        <div 
                            key={index} 
                            className={`faq-item ${activeIndex === index ? 'active' : ''}`}
                            onClick={() => toggleFAQ(index)}
                        >
                            <div className="faq-question">
                                <h3>{faq.question}</h3>
                                <ChevronDown size={20} className="faq-icon" />
                            </div>
                            <div className="faq-answer">
                                <p>{faq.answer}</p>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="faq-cta">
                    <p>Still have more questions?</p>
                    <a href="tel:+918606036004" className="btn-secondary">Contact Support Directly</a>
                </div>
            </div>
        </section>
    );
};

export default FAQ;
