import { ChevronDown } from 'lucide-react';
import { useState } from 'react';
import { SectionHeading } from '../components/SectionHeading';

const FAQS = [
  {
    question: 'What is Pamwechete?',
    answer: 'Pamwechete is a student-led initiative that connects opportunities, talent and resources through partnerships, mentorship, scholarships, donations and conversations.',
  },
  {
    question: 'Who can participate?',
    answer: 'Young people can engage with relevant programmes and opportunities, while professionals, organisations, institutions and community members can contribute time, resources, knowledge or partnerships.',
  },
  {
    question: 'What kinds of support does Pamwechete connect people to?',
    answer: 'Depending on the programme, this can include mentorship, scholarship information, learning resources, equipment, training, networking and other opportunities contributed by partners.',
  },
  {
    question: 'How can an organisation become a partner?',
    answer: 'Start a conversation with the Pamwechete team. Partners can contribute funding, expertise, opportunities, resources, venues, mentorship or other forms of support that align with the programme.',
  },
  {
    question: 'Do you have a database or application process?',
    answer: 'Not in this initial website version. The site is intentionally static. Programme content and partner assets are maintained locally in the codebase while the project is being established.',
  },
];

export function FaqPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-16 sm:py-24">
      <div className="mx-auto max-w-5xl px-5 sm:px-8">
        <SectionHeading eyebrow="Frequently asked questions" title="Questions, answered simply." description="A lightweight accordion keeps the initial site easy to maintain without a database or CMS." />
        <div className="mt-10 space-y-3">
          {FAQS.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div key={faq.question} className="overflow-hidden rounded-2xl border border-line bg-surface-elevated">
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  aria-expanded={isOpen}
                  className="flex w-full items-center justify-between gap-6 px-5 py-5 text-left sm:px-6"
                >
                  <span className="font-medium text-ink">{faq.question}</span>
                  <ChevronDown size={19} className={`shrink-0 text-ink-subtle transition-transform ${isOpen ? 'rotate-180 text-brand-600' : ''}`} />
                </button>
                {isOpen && (
                  <div className="border-t border-line px-5 pb-6 pt-5 sm:px-6">
                    <p className="max-w-3xl text-sm leading-7 text-ink-muted">{faq.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
