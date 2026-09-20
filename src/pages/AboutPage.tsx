import { ArrowRight, BookOpen, Handshake, Mail, Users } from 'lucide-react';
import { ButtonLink } from '../components/ButtonLink';
import { PartnerLogos } from '../components/PartnerLogos';
import { SectionHeading } from '../components/SectionHeading';

const values = [
  { icon: Users, title: 'Community first', text: 'We create spaces where people can meet, listen, share and support one another.' },
  { icon: Handshake, title: 'Partnerships', text: 'We connect people and organisations with resources or expertise to people who can benefit from them.' },
  { icon: BookOpen, title: 'Access', text: 'We help make opportunities easier to discover, understand and act on.' },
];

export function AboutPage() {
  return (
    <>
      <section className="border-b border-line py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <SectionHeading eyebrow="Our story" title="The value you need may be the person next to you." />
          <div className="mt-10 grid gap-10 lg:grid-cols-[1fr_1.4fr] lg:gap-20">
            <p className="text-2xl font-medium leading-tight tracking-[-0.035em] text-ink sm:text-3xl">
              We are a student-led initiative to bridge the gap between opportunities, talent and resources.
            </p>
            <div className="space-y-6 text-base leading-7 text-ink-muted sm:text-lg sm:leading-8">
              <p>
                We believe that the value that you need is the person next to you. Sometimes, all you need is one conversation.
              </p>
              <p>
                Pamwechete exists to create a foundation for conversations that can change the lives of members of our community — through mentorship, scholarships, resources and partnerships.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-line bg-subtle py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="grid gap-12 lg:grid-cols-2">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-brand-700 dark:text-brand-300">Our mission</p>
              <h2 className="mt-4 text-3xl font-semibold tracking-[-0.04em] text-ink sm:text-4xl">To set up a foundation for conversations that change lives.</h2>
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-brand-700 dark:text-brand-300">Our vision</p>
              <h2 className="mt-4 text-3xl font-semibold tracking-[-0.04em] text-ink sm:text-4xl">A community where help lies everywhere when you are in need.</h2>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-line py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <SectionHeading eyebrow="How we work" title="A network is useful when people can actually find one another." />
          <div className="mt-10 grid gap-px overflow-hidden rounded-3xl border border-line bg-line md:grid-cols-3">
            {values.map(({ icon: Icon, title, text }) => (
              <article key={title} className="bg-surface p-7 sm:p-9">
                <Icon size={22} className="text-brand-700 dark:text-brand-300" />
                <h3 className="mt-7 font-semibold text-ink">{title}</h3>
                <p className="mt-2 text-sm leading-6 text-ink-muted">{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-line bg-subtle py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <SectionHeading eyebrow="Partners" title="The work grows through people who choose to contribute." description="Replace the placeholder logos with the organisations and individuals who support Pamwechete." />
          <div className="mt-10"><PartnerLogos /></div>
        </div>
      </section>

      <section id="contact" className="scroll-mt-20 py-16 sm:py-24">
        <div className="mx-auto max-w-5xl rounded-[2rem] border border-brand-200 bg-brand-50 p-8 dark:border-brand-800 dark:bg-brand-950/50 sm:p-12">
          <div className="flex flex-col gap-8 sm:flex-row sm:items-end sm:justify-between">
            <div className="max-w-2xl">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-brand-700 dark:text-brand-300">Partner with us</p>
              <h2 className="mt-4 text-3xl font-semibold tracking-[-0.04em] text-brand-950 dark:text-brand-50 sm:text-4xl">Have an opportunity, resource or idea to share?</h2>
              <p className="mt-4 text-base leading-7 text-brand-900/70 dark:text-brand-100/70">Start the conversation. The static site currently routes partnership enquiries to email; a backend can be added later without changing the UI architecture.</p>
            </div>
            <a
              href="mailto:hello@pamwechete.org"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-brand-600 px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-brand-700 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-brand-400"
            >
              <Mail size={16} />
              Contact us
              <ArrowRight size={16} />
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
