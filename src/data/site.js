/**
 * All website copy lives here.
 * Edit this file to update content across the site — no component changes needed.
 */

export const org = {
  name: 'Sahyog Yuva Samiti',
  tagline: 'Youth • Service • Prosperity',
  taglineHi: 'साथ · समर्पण · समृद्धि',
  registration: 'JJ-6043',
  state: 'Madhya Pradesh',
  country: 'India',
  phone: '9302991155',
  phoneHref: 'tel:+919302991155',
  email: 'sahyog.yuva.samiti@gmail.com',
  whatsapp: 'https://wa.me/919302991155',
  social: {
    facebook: { handle: '@Sahyog Yuva Samiti', url: 'https://facebook.com/' },
    instagram: { handle: '@sahyog.yuva', url: 'https://instagram.com/sahyog.yuva' },
    x: { handle: '@SahyogYuvaSamiti', url: 'https://x.com/SahyogYuvaSamiti' },
  },
}

export const hero = {
  eyebrow: 'Organizational profile',
  title: 'Connecting youth with opportunity, healthy engagement and purpose',
  subtitle:
    'A grassroots youth organization working across Madhya Pradesh — and a last-mile delivery partner for educational, technology, sports, skilling and social-impact organizations.',
  primaryCta: { label: 'Partner with us', to: '/partner' },
  secondaryCta: { label: 'See our programs', to: '/programs' },
}

export const stats = [
  { value: 19, suffix: '', label: 'Active districts', note: 'Across four regions of Madhya Pradesh' },
  { value: 4, suffix: '', label: 'Program areas', note: 'Education, sports, awareness, community' },
  { value: 7, suffix: '', label: 'Partner tracks', note: 'Modular ways to work with us' },
  { value: 8, suffix: ' wks', label: 'Pilot cycle', note: 'Align, prepare, deliver, review' },
]

export const about = {
  headline: 'A youth-focused organization built on local relationships',
  intro:
    'Sahyog Yuva Samiti works with students and young people through local volunteers, teachers, educational institutions and community networks.',
  body: 'Our work combines education and career access with sports, healthy recreation, social awareness, responsible citizenship and community action. We create a last-mile platform through which credible partners can reach young people in rural and underserved areas.',
  approach: [
    {
      title: 'Local mobilisation and physical outreach',
      text: 'Volunteers and coordinators bring young people into the room — in schools, colleges and community spaces.',
    },
    {
      title: 'Age-appropriate learning and mentoring',
      text: 'Sessions are shaped for the cohort in front of us, from school students to first-time job seekers.',
    },
    {
      title: 'Follow-up through volunteers and teachers',
      text: 'Participation, referrals and next steps are tracked locally so a session is never a one-off event.',
    },
  ],
  vision: {
    statement:
      'Every young person should have access to guidance, skills, healthy opportunities and the confidence to build a purposeful future.',
    detail:
      'We envision an aware, capable, physically active and socially responsible generation contributing to stronger communities and a developed India.',
  },
}

export const programs = [
  {
    id: 'education',
    index: '01',
    title: 'Education & career access',
    kicker: 'Learning and opportunity',
    summary:
      'Career counselling, AI and technology exposure, skilling, mentorship and competitive-exam guidance.',
    details: [
      'Aptitude orientation and course pathways',
      'Scholarship and admission awareness',
      'Competitive-exam study planning',
      'Mentor interactions with role models',
    ],
    accent: 'saffron',
  },
  {
    id: 'sports',
    index: '02',
    title: 'Sports & recreation',
    kicker: 'Energy, discipline and teamwork',
    summary: 'Local sports, fitness, team activities, youth clubs and positive recreational spaces.',
    details: [
      'Village and ward level tournaments',
      'Fitness and daily-play routines',
      'Youth clubs with local ownership',
      'Safe, inclusive spaces for girls and boys',
    ],
    accent: 'leaf',
  },
  {
    id: 'nasha-mukti',
    index: '03',
    title: 'Nasha Mukti Abhiyan',
    kicker: 'Healthy and substance-free youth',
    summary:
      'A youth awareness initiative under MY Bharat, conducted through the Yuva Jagran Yatra platform.',
    details: [
      'School and college awareness sessions',
      'Pledge drives and street outreach',
      'Peer-led conversations on substance use',
      'Referral support through local networks',
    ],
    accent: 'navy',
  },
  {
    id: 'community',
    index: '04',
    title: 'Community engagement',
    kicker: 'Responsible citizenship',
    summary:
      'Awareness drives, padyatras, pledge activities, volunteer action and participation in local development.',
    details: [
      'Padyatras and public awareness marches',
      'Cleanliness and environment drives',
      'Volunteer mobilisation for local needs',
      'Participation in government youth programs',
    ],
    accent: 'plum',
  },
]

export const valueProps = [
  {
    title: 'District-to-district reach',
    text: 'Volunteer presence across Madhya Pradesh helps partners enter new locations through an existing local network.',
  },
  {
    title: 'Student connectivity',
    text: 'Direct relationships with students, youth and families improve mobilisation, trust and participation.',
  },
  {
    title: 'Volunteer base',
    text: 'A large volunteer network supports outreach, event delivery, documentation and sustained follow-up.',
  },
  {
    title: 'Teacher network',
    text: 'Teachers and educational contacts help identify learners, coordinate institutions and reinforce learning locally.',
  },
  {
    title: 'Physical last-mile delivery',
    text: 'Sahyog can take partner content into schools, colleges and communities through on-ground sessions.',
  },
  {
    title: 'Continuity after the event',
    text: 'Local coordinators can track participation, referrals, mentoring needs and next-step actions.',
  },
]

export const partnerTracks = [
  {
    title: 'Career counselling',
    text: 'Aptitude orientation, course and career pathways, scholarship awareness.',
  },
  {
    title: 'AI & technology',
    text: 'AI literacy, safe use, prompt skills, coding exposure and live demonstrations.',
  },
  {
    title: 'Skilling workshops',
    text: 'Communication, employability, entrepreneurship and practical projects.',
  },
  {
    title: 'IIT-JEE guidance',
    text: 'Exam orientation, study planning, mentor interactions and learning resources.',
  },
  {
    title: 'Mentorship',
    text: 'Role-model sessions, learning circles and structured follow-up.',
  },
  {
    title: 'Teacher support',
    text: 'Session kits and orientation for educators and local coordinators.',
  },
  {
    title: 'Sports & recreation',
    text: 'Local sports, fitness, team activities, youth clubs and constructive recreation.',
  },
]

export const collaboration = {
  sahyog: [
    'Identify student groups and institutions',
    'Coordinate permissions, schedules and venues',
    'Mobilise students and communicate with parents',
    'Nominate local coordinators and support attendance',
    'Record participation, feedback and follow-up needs',
  ],
  partner: [
    'Design age-appropriate learning content',
    'Provide qualified trainers, counsellors or mentors',
    'Offer learning tools, resources or scholarships',
    'Orient local coordinators where required',
    'Review outcomes and shape the next cycle',
  ],
  standards: ['Child safety', 'Consent', 'Inclusion', 'Quality', 'Measurable participation'],
}

export const pilot = {
  intro:
    'Start with a defined cohort and service track, review the evidence, then expand by geography or program area.',
  steps: [
    {
      step: '01',
      title: 'Align',
      text: 'Youth cohort, district, partner scope and success measures.',
      weeks: 'Week 1',
    },
    {
      step: '02',
      title: 'Prepare',
      text: 'Program design, trainers, schedule, consent and local coordinators.',
      weeks: 'Weeks 2–3',
    },
    {
      step: '03',
      title: 'Deliver',
      text: 'Workshops, sports activities, awareness sessions and mentoring.',
      weeks: 'Weeks 4–7',
    },
    {
      step: '04',
      title: 'Review',
      text: 'Participation, feedback, referrals and next-step actions.',
      weeks: 'Week 8',
    },
  ],
  output: 'A documented, repeatable program model ready for district-wise scale-up.',
  deliverables: ['Participation', 'Feedback', 'Referrals', 'Scale-up plan'],
}

export const regions = [
  {
    name: 'Central & Narmada',
    accent: 'saffron',
    districts: ['Bhopal', 'Vidisha', 'Raisen', 'Sehore', 'Narmadapuram'],
  },
  {
    name: 'Mahakoshal',
    accent: 'leaf',
    districts: ['Jabalpur', 'Narsinghpur', 'Seoni', 'Balaghat'],
  },
  {
    name: 'Bundelkhand',
    accent: 'navy',
    districts: ['Sagar', 'Damoh', 'Panna', 'Chhatarpur', 'Tikamgarh'],
  },
  {
    name: 'Malwa, North & East',
    accent: 'plum',
    districts: ['Indore', 'Ujjain', 'Gwalior', 'Bhind', 'Rewa'],
  },
]

export const navLinks = [
  { label: 'Home', to: '/' },
  { label: 'About', to: '/about' },
  { label: 'Programs', to: '/programs' },
  { label: 'Our presence', to: '/presence' },
  { label: 'Gallery', to: '/gallery' },
  { label: 'Partner with us', to: '/partner' },
  { label: 'Contact', to: '/contact' },
]
