/**
 * Every photograph used on the site is listed here.
 *
 * 
 *
 * Good alt text matters: describe what is happening in the photo, not "image".
 */

export const img = {
  hero: {
    src: '/images/01hero.jpeg', // 3:2 landscape, 1800px wide or more
    // alt: 'Students taking part in a Sahyog Yuva Samiti session',
  },
  aboutHero:{
    src: '/images/hero.png'
  },
  contact:{
    src: '/images/crowd 4.png'},
  aboutMain: {
    src: '/images/02-4by5.jpg', // 4:5 portrait
    // alt: 'Volunteers setting up a community session',
  },
  aboutInset: {
    src: '/images/Untitled design (3).jpg', // square
    // alt: 'A teacher guiding a student through course options',
  },
  vision: {
    src: '/images/Untitled design (4).jpg', // 16:10
    // alt: 'Young people at a school assembly',
  },
  presence: {
    src: '/images/Untitled design (3) (1).jpg', // 16:10
    // alt: 'Volunteers walking through a village during an outreach visit',
  },
  partner: {
    src: '/images/partner_wrokshop.png', // 7:5
    // alt: 'A partner trainer running a workshop with students',
  },
  impact: {
    src: '/images/hero.png', // wide banner
    // alt: 'A large group of young participants after a programme',
  },
  cta: {
    src: '/images/Untitled design (9).jpg', // 16:9
    // alt: 'Youth padyatra through a town',
  },
}

/** Program photos are keyed by the program id used in data/site.js */
export const programImages = {
  education: { src: '/images/career-1.jpeg', alt: 'A career counselling session in a classroom' },
  sports: { src: '/images/career-2.png', alt: 'Young people playing a local sports match' },
  'nasha-mukti': {
    src: '/images/career-3.png',
    // alt: 'Students taking a pledge during a Nasha Mukti awareness drive',
  },
  community: {
    src: '/images/career-5.png',
    // alt: 'Volunteers taking part in a community cleanliness drive',
  },
}

/**
 * Gallery. Add as many entries as you like — the grid and filters adapt on their own.
 * `tag` must be one of the labels in `galleryTags` below.
 */
export const gallery = [
  {
    src: '/images/G-1.JPG',
    // alt: 'Career guidance session with school students',
    // caption: 'Career counselling session',
    // place: 'Bhopal',
    // tag: 'Education',
  },
  {
    src: '/images/G-2.JPG',
    // alt: 'A local football match organised for youth',
    // caption: 'Inter-village football match',
    // place: 'Seoni',
    // tag: 'Sports',
  },
  {
    src: '/images/G-4.JPG',
    // alt: 'Students taking the Nasha Mukti pledge',
    // caption: 'Nasha Mukti pledge drive',
    // place: 'Sagar',
    // tag: 'Awareness',
  },
  {
    src: '/images/G-5.JPG',
    // alt: 'Volunteers during a padyatra through a town',
    // caption: 'Yuva Jagran padyatra',
    // place: 'Damoh',
    // tag: 'Community',
  },
  {
    src: '/images/G-6.JPG',
    // alt: 'A technology demonstration for students',
    // caption: 'AI and technology exposure workshop',
    // place: 'Indore',
    // tag: 'Education',
  },
  {
    src: '/images/G-7.jpeg',
    // alt: 'Volunteers distributing learning material',
    // caption: 'Learning material distribution',
    // place: 'Vidisha',
    // tag: 'Community',
  },
  {
    src: 'public/images/G-8.jpeg',
    // alt: 'Girls taking part in an athletics event',
    // caption: 'Girls athletics meet',
    // place: 'Jabalpur',
    // tag: 'Sports',
  },
  {
    src: '/images/G-9.jpeg',
    // alt: 'Street play during an awareness campaign',
    // caption: 'Street play on substance awareness',
    // place: 'Chhatarpur',
    // tag: 'Awareness',
  },
  {
    src: '/images/G-10.jpg',
    // // alt: 'Mentor speaking to a group of students',
    // caption: 'Mentorship circle',
    // place: 'Gwalior',
    // tag: 'Education',
  },
]

export const galleryTags = ['All', 'Education', 'Sports', 'Awareness', 'Community']

/** Short field notes shown beside photos on the home page. */
export const stories = [
  {
    quote:
      'The counselling session was the first time anyone explained what comes after Class 12 in our block.',
    name: 'Student, Class 12',
    // place: 'Raisen district',
  },
  {
    quote:
      'Our ground had no equipment and no fixtures. Now there is a match every Sunday and the girls have their own team.',
    name: 'Local coordinator',
    // place: 'Balaghat district',
  },
  {
    quote:
      'Sahyog filled the room, handled consent and brought the teachers along. We only had to teach.',
    name: 'Partner trainer',
    // place: 'Skilling workshop, Indore',
  },
]
