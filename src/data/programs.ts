export type ProgramStatus = 'in-progress' | 'completed';

export interface Program {
  id: string;
  title: string;
  shortDescription: string;
  description: string;
  image: string;
  status: ProgramStatus;
  tags: string[];
}

/**
 * Single source of truth for programme content.
 * Homepage and Programs page both consume this array.
 */
export const PROGRAMS: Program[] = [
  {
    id: 'mentorship-connect',
    title: 'Mentorship Connect',
    shortDescription: 'Connecting young people with mentors who can help them navigate their next step.',
    description:
      'A structured space for conversations between young people and professionals, students and community members who can share experience, perspective and practical guidance.',
    image: '/assets/programs/mentorship-connect.svg',
    status: 'in-progress',
    tags: ['Mentorship', 'Career', 'Community'],
  },
  {
    id: 'scholarship-pathways',
    title: 'Scholarship Pathways',
    shortDescription: 'Making scholarship and education opportunities easier to discover and pursue.',
    description:
      'We surface relevant scholarship opportunities and connect people with information, guidance and networks that can help them take the next step in their education.',
    image: '/assets/programs/scholarship-pathways.svg',
    status: 'in-progress',
    tags: ['Education', 'Scholarships', 'Access'],
  },
  {
    id: 'resource-drive',
    title: 'Resource Drive',
    shortDescription: 'Turning community generosity into practical resources for people who need them.',
    description:
      'A partnership-led programme for collecting and directing useful resources such as learning materials, devices, books and other essentials.',
    image: '/assets/programs/resource-drive.svg',
    status: 'completed',
    tags: ['Resources', 'Giving', 'Community'],
  },
  {
    id: 'opportunity-conversations',
    title: 'Opportunity Conversations',
    shortDescription: 'Creating the conversations that connect people to opportunities already around them.',
    description:
      'We create spaces where students, professionals, organisations and community members can meet, exchange knowledge and discover ways to collaborate.',
    image: '/assets/programs/opportunity-conversations.svg',
    status: 'completed',
    tags: ['Networking', 'Opportunity', 'Partnerships'],
  },
];

export const getProgramsByStatus = (status: ProgramStatus) =>
  PROGRAMS.filter((program) => program.status === status);
