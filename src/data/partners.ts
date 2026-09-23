export interface Partner {
  id: string;
  name: string;
  logo: string;
}

/** Replace these static placeholder files with real partner logos. */
export const PARTNERS: Partner[] = [
  { id: 'partner-01', name: 'Anzisha Connect', logo: '/assets/partners/anzisha.jpeg' },
  { id: 'partner-02', name: 'CABS', logo: '/assets/partners/cabs.jpeg' },
  { id: 'partner-03', name: 'Enactus UZ', logo: '/assets/partners/enactus.jpeg' },
  { id: 'partner-04', name: 'Mabvuku High', logo: '/assets/partners/mabvuku.jpeg' },
  { id: 'partner-05', name: 'Moot Society', logo: '/assets/partners/moot.jpeg' },
];
