export interface Partner {
  id: string;
  name: string;
  logo: string;
}

/** Replace these static placeholder files with real partner logos. */
export const PARTNERS: Partner[] = [
  { id: 'partner-01', name: 'Partner One', logo: '/assets/partners/partner-01.svg' },
  { id: 'partner-02', name: 'Partner Two', logo: '/assets/partners/partner-02.svg' },
  { id: 'partner-03', name: 'Partner Three', logo: '/assets/partners/partner-03.svg' },
  { id: 'partner-04', name: 'Partner Four', logo: '/assets/partners/partner-04.svg' },
  { id: 'partner-05', name: 'Partner Five', logo: '/assets/partners/partner-05.svg' },
];
