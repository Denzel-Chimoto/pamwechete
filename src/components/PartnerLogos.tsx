import { PARTNERS } from '../data/partners';

export function PartnerLogos() {
  return (
    <div className="grid grid-cols-2 gap-px overflow-hidden rounded-3xl border border-line bg-line sm:grid-cols-3 lg:grid-cols-5">
      {PARTNERS.map((partner) => (
        <div
          key={partner.id}
          className="flex min-h-28 items-center justify-center bg-surface px-6 py-7 grayscale transition duration-200 hover:grayscale-0 dark:bg-surface-elevated"
        >
          <img src={partner.logo} alt={partner.name} className="max-h-12 max-w-[150px] object-contain opacity-75" />
        </div>
      ))}
    </div>
  );
}
