import { ArrowDown, ArrowRight, Handshake, MessageCircle, Sparkles } from 'lucide-react';
import { Link } from 'react-router';
import { ButtonLink } from '../components/ButtonLink';
import { PartnerLogos } from '../components/PartnerLogos';
import { ProgramCarousel } from '../components/ProgramCarousel';
import { SectionHeading } from '../components/SectionHeading';
import { Typewriter } from '../utils/Typewriter';

export function HomePage() {
  return (
    <>
      <section className="relative overflow-hidden border-b border-line">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_15%,color-mix(in_srgb,var(--color-brand-300)_25%,transparent),transparent_42%)] dark:bg-[radial-gradient(circle_at_50%_15%,color-mix(in_srgb,var(--color-brand-800)_28%,transparent),transparent_45%)]" />
        <div className="relative mx-auto flex min-h-[calc(100svh-4rem)] max-w-7xl flex-col justify-center px-5 py-20 sm:px-8 lg:py-24">
          <div className="mx-auto max-w-4xl text-center">
            <div className="mx-auto mb-6 inline-flex items-center gap-2 rounded-full border border-brand-200 bg-brand-50 px-3.5 py-1.5 text-xs font-medium text-brand-800 dark:border-brand-800 dark:bg-brand-950/60 dark:text-brand-200">
              <Sparkles size={14} />
              Opportunities grow through community
            </div>
            <Typewriter
                text="pamwechete,"
                className="text-balance text-5xl font-semibold tracking-[-0.065em] text-ink sm:text-7xl lg:text-[5.8rem] lg:leading-[0.98]"
              />
            <Typewriter
                text="tinosvika kure."
                delay={0.9}
                className="text-balance text-5xl font-semibold tracking-[-0.065em] text-ink sm:text-7xl lg:text-[5.8rem] lg:leading-[0.98]"
              />
            {/* <p className="mx-auto mt-7 max-w-2xl text-pretty text-base leading-7 text-ink-muted sm:text-lg sm:leading-8">
              Pamwechete is a student-led initiative bridging the gap between opportunities, talent and resources — one conversation at a time.
            </p> */}
            <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <ButtonLink to="/programs" showArrow>
                Explore our programs
              </ButtonLink>
              <ButtonLink to="/about#contact" variant="secondary">
                Become a partner
              </ButtonLink>
            </div>
          </div>

          <a href="#programs" className="mx-auto mt-16 inline-flex items-center gap-2 text-xs font-medium uppercase tracking-[0.16em] text-ink-subtle transition hover:text-brand-700 dark:hover:text-brand-300">
            Discover what we are doing <ArrowDown size={14} />
          </a>
        </div>
      </section>

      <section id="programs" className="border-b border-line py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="flex flex-col gap-8 sm:flex-row sm:items-end sm:justify-between">
            <SectionHeading
              eyebrow="Our programs"
              title="Small connections can open much bigger doors."
              description="Explore the programmes through which Pamwechete turns conversations and partnerships into practical opportunities."
            />
            <ButtonLink to="/programs" variant="quiet" showArrow className="self-start sm:self-auto">
              View all programs
            </ButtonLink>
          </div>
          <div className="mt-10">
            <ProgramCarousel />
          </div>
        </div>
      </section>

      <section className="border-b border-line bg-subtle py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="grid gap-8 lg:grid-cols-[1fr_1.4fr] lg:items-end">
            <SectionHeading
              eyebrow="Why pamwechete"
              title="The value you need may be closer than you think."
            />
            <p className="max-w-2xl text-base leading-7 text-ink-muted sm:text-lg sm:leading-8">
              We believe meaningful progress often starts with one person knowing another person, sharing what they know, or opening a door. Our role is to create the foundation for those conversations to happen more often.
            </p>
          </div>
          <div className="mt-12 grid gap-px overflow-hidden rounded-3xl border border-line bg-line md:grid-cols-3">
            {[
              { icon: MessageCircle, title: 'Start a conversation', text: 'Create a connection that can reveal a path forward.' },
              { icon: Handshake, title: 'Build a partnership', text: 'Bring skills, resources and opportunities into the community.' },
              { icon: ArrowRight, title: 'Move forward', text: 'Turn access into action and action into progress.' },
            ].map(({ icon: Icon, title, text }) => (
              <div key={title} className="bg-surface p-7 sm:p-9">
                <div className="grid size-10 place-items-center rounded-full bg-brand-50 text-brand-700 dark:bg-brand-950/70 dark:text-brand-300">
                  <Icon size={18} />
                </div>
                <h3 className="mt-6 font-semibold tracking-[-0.02em] text-ink">{title}</h3>
                <p className="mt-2 text-sm leading-6 text-ink-muted">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="flex flex-col items-center text-center">
            <SectionHeading
              eyebrow="Our partners"
              title="Some of our proud partners"
              description="The organisations that help make the work possible."
              align="center"
            />
            <div className="mt-10 w-full">
              <PartnerLogos />
            </div>
            <Link to="/about#contact" className="mt-8 inline-flex items-center gap-2 text-sm font-medium text-brand-700 hover:text-brand-800 dark:text-brand-300 dark:hover:text-brand-200">
              Become a partner <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
