'use client';

import { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';
import { buildWhatsAppInquiryUrl } from '@/utils/whatsapp';

export interface FaqItem {
  question: string;
  answer: string;
}

export const faqs: FaqItem[] = [
  {
    question: 'How do I buy authentic Andhra pickles online from Aruh Foods?',
    answer:
      'You can select your desired pickle jars (Chicken Pickle, Gongura Chicken, Coastal Prawns, Pandu Mirchi, or Tomato Pickle) and preferred jar sizes (250g, 500g, 1kg) directly on our website and click "Order via WhatsApp" or "Proceed to Checkout". You can also send us a direct message on WhatsApp with your delivery address.',
  },
  {
    question: 'Are Aruh pickles 100% homemade with zero preservatives?',
    answer:
      'Yes, absolutely! Every single batch of Aruh pickles is slow-cooked in small handcrafted batches using 100% pure cold-pressed sesame oil (gingelly oil), hand-roasted spices, aged tamarind, and sun-dried Guntur red chillies. We NEVER use artificial chemical preservatives, synthetic vinegar, or food coloring.',
  },
  {
    question: 'Where do you deliver Aruh pickles?',
    answer:
      'We offer fast local delivery across all areas of Hyderabad, Kakinada, Samarlkot, Pithapuram, and surrounding villages. We also ship spill-proof packaged jars across India upon request via courier.',
  },
  {
    question: 'What is the shelf life of Aruh Non-Veg & Veg pickles?',
    answer:
      'Our non-veg pickles (Chicken, Gongura Chicken, Prawns) remain fresh and delicious for 3 to 6 months when refrigerated and handled with a clean, dry spoon. Our veg pickles (Pandu Mirchi, Tomato) have a shelf life of up to 6 to 9 months at room temperature.',
  },
  {
    question: 'What makes Aruh Non-Veg Pickles unique compared to store brands?',
    answer:
      'Commercial store-bought pickles are often 80-90% oil and gravy with tiny meat scraps and heavy vinegar. At Aruh Foods, our non-veg pickles are packed generously with succulent, juicy, farm-fresh meat and coastal prawns in every spoon, marinated in traditional Andhra stone-ground spice tadka.',
  },
  {
    question: 'Can I request custom spice levels or place bulk/party orders?',
    answer:
      'Yes! Because we prepare pickles in small artisanal batches, we accept custom spice adjustments (Extra Spicy, Mild, Less Salt) and special bulk orders for weddings, family functions, and corporate gifts. Contact us via WhatsApp to customize your order.',
  },
];

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };

  return (
    <section className="py-16 bg-warmIvory border-b border-warmTaupe/15" aria-label="Frequently Asked Questions">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-oliveGreen/10 border border-oliveGreen/20 text-oliveGreen text-xs font-semibold px-4 py-1.5 rounded-full mb-3 uppercase tracking-wider">
            <HelpCircle size={14} />
            <span>Got Questions? We Have Answers</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-espresso leading-tight">
            Frequently Asked Questions (FAQ)
          </h2>
          <p className="text-warmTaupe text-sm sm:text-base max-w-xl mx-auto mt-2 leading-relaxed">
            Everything you need to know about ordering our authentic Andhra & Rayalaseema pickles online.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={faq.question}
                className="bg-pureWhite rounded-2xl border border-warmTaupe/15 overflow-hidden transition-all duration-200 shadow-xs"
              >
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full text-left p-5 sm:p-6 flex items-center justify-between gap-4 focus:outline-none focus-visible:ring-2 focus-visible:ring-oliveGreen"
                  aria-expanded={isOpen}
                >
                  <h3 className="font-serif font-bold text-base sm:text-lg text-espresso pr-2">
                    {faq.question}
                  </h3>
                  <div
                    className={`w-8 h-8 rounded-full bg-warmIvory flex items-center justify-center text-espresso shrink-0 transition-transform duration-300 ${
                      isOpen ? 'rotate-180 bg-oliveGreen text-white' : ''
                    }`}
                  >
                    <ChevronDown size={18} />
                  </div>
                </button>
                {isOpen && (
                  <div className="px-5 pb-6 sm:px-6 sm:pb-6 text-warmTaupe text-sm leading-relaxed border-t border-warmTaupe/10 pt-4 bg-softCream/30">
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        <div className="mt-10 p-6 rounded-2xl bg-oliveGreen/10 border border-oliveGreen/20 text-center">
          <p className="text-espresso font-semibold text-sm mb-2">Have a specific custom request or delivery question?</p>
          <a
            href={buildWhatsAppInquiryUrl('Hi Aruh! 👋 I have a question about ordering pickles.')}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 bg-oliveGreen hover:bg-forestGreen text-white text-xs sm:text-sm font-bold px-6 py-2.5 rounded-full transition-all shadow-sm"
          >
            Ask Us Directly on WhatsApp →
          </a>
        </div>
      </div>
    </section>
  );
}
