// src/lib/data.ts

export const SITE_CONFIG = {
  title: "THE CONSENT_KE 🇰🇪",
  subtitle: "Politically Fit & A Consumer of Legal Information.",
  description: "Consent is not just a word! It’s our principle. It stands for informed dialogue, mutual respect and collective agreement to build a stronger community.",
  whatsappLink: "https://whatsapp.com/channel/0029Vb1YoqJCMY0Pod02FL3M",
  instagramLink: "https://www.instagram.com/theconsent_ke?igsh=eDRoZWF3MGRvMnhr",
  email: "theconsentke@gmail.com"
};

export const RULES = [
  "No spamming.",
  "Parents should never be dragged in our altercations.",
  "All inactive members must be removed. The Consent is not a zoo.",
  "Admins should enforce the rules."
];

// ─── ADD THIS TO THE BOTTOM OF src/lib/data.ts ───────────────────────────────

export interface CabinetMember {
  slug: string;
  name: string;
  title: string;
  tagline: string;
  coverImage: string;         // hero / banner image (first photo)
  photos: string[];           // up to 8 photos (filenames in /public)
  videoUrl?: string;          // optional – add when ready
  story: string[];            // each item = one paragraph
}

export const CABINET_MEMBERS: CabinetMember[] = [
  {
    slug: "joan-joy",
    name: "Joan Joy",
    title: "Miss Independent International Africa",
    tagline: "From the halls of Kenyatta University to the international stage.",
    coverImage: "/JJ1.jpeg",   
    photos: [
      "/JJ1.jpeg",
      "/JJ2.jpeg",
      "/JJ3.jpeg",
      "/JJ4.jpeg",
      "/JJ5.jpeg",
      "/JJ6.jpeg",
      "/JJ7.jpeg",
      "/JJ8.jpeg",
    ],
    story: [
      "Before the crown, before the cameras, before the international stage, there was simply a young girl with a dream and the courage to believe in it.",
      "Being crowned Miss Independent International Africa is more than just winning a title for me — it is the manifestation of years of faith, sacrifice, resilience, and the unwavering support of people who believed in me even when I struggled to believe in myself. I call it my international dream.",
      "My modelling journey began at Kenyatta University while I was pursuing my Bachelor's degree. That is where I discovered not just my passion for modelling, but the confidence to pursue it seriously. Kenyatta University did not just shape my academic journey; it became the birthplace of my dream.",
      "It was there that I won the title of Miss Kenyatta University, a defining moment that marked the true beginning of my modelling and pageantry career. More than a title, it was affirmation. It was proof that the dream in my heart was valid and worth pursuing. Being recognized as an outstanding queen within the university community gave me confidence and belief in my potential.",
      "A special part of that beginning was my first trainer, Sharon Shirley, who taught me my very first catwalk and turns. Through those early lessons, she helped build the foundation of the poised and polished queen I am today.",
      "As my ambitions grew beyond campus and onto national and international stages, Kenyatta University remained one of my greatest pillars of support. During my participation in Miss World Kenya and later Miss Independent International, the university community rallied behind me — students, peers, alumnus and supporters contributing financially and pushing votes to help propel me forward. That support reminded me that this dream was never mine alone.",
      "Preparing for the international stage was one of the most demanding seasons of my life. Behind the glamour was sacrifice — grueling gym sessions, endless catwalk rehearsals, wardrobe fittings, rebranding, mental conditioning, and the emotional pressure of carrying both personal and collective expectations.",
      "There were days I nearly gave up. Days I cried. Days I questioned whether I was truly enough for the stage I was preparing for. But even in those moments, I was never alone.",
      "My family — Father, Mother, sisters, and brother — stood firmly beside me. They have been my strongest pillar. From attending all my events till late hours, cheering their hearts out, endless calls, wiping my tears and smiling at every crown I got. I truly owe them this one.",
      "My close friends and extended family came together in extraordinary ways to help raise funds for my journey to Bangkok, Thailand, where I would represent Africa on the international stage — an act of love and belief I will carry with me forever.",
      "My manager, Sure Morema, remained a steadfast source of guidance and encouragement throughout the process, supporting me through every breakdown, every difficult day, and every moment of uncertainty. My friends Mitchell & Chantell were another constant source of strength, reminding me who I was whenever pressure threatened to make me forget.",
      "I am equally grateful to every person and organisation that poured into my preparation: MG Kenya who designed my breathtaking national costume; Delight School of Fashion who curated my wardrobe for the entire international trip; DnD Couture for the amazing Kitenge fits; MJ Ateliers who designed my dinner gown; and Grandeur Modeling Hub, led by Darius Abala, who refined my catwalk, poise, and stage presence.",
      "Winning Miss Independent International Africa was not simply a personal victory. It was the culmination of years of discipline. Of prayers whispered in private. Of tears shed behind closed doors. Of a village that refused to let my dream die.",
      "To every young girl who dreams of walking the runway or wearing a crown one day: do not despise small beginnings. My journey started in a university hall, learning my first catwalk. You do not need perfect circumstances to begin — you only need the courage to start, the discipline to continue, and the faith to keep going when the road gets hard.",
      "From the halls of Kenyatta University to the international stage, my story is living proof that sometimes the most extraordinary journeys begin in the most ordinary places. And for me, this crown is not the destination. It is only the beginning.",
    ],
  },
];