import { Brain, Scale, Users, Vote, Briefcase, Zap, Heart, Handshake, Mic2, BookOpen } from 'lucide-react';

const purposes = [
  {
    icon: Brain,
    title: 'Champion Intellectual Freedom',
    description: 'Creating a space where ideas can be debated freely, challenged boldly, and explored without fear of reprisal.',
  },
  {
    icon: Scale,
    title: 'Demystify National Policy & Legislation',
    description: 'Breaking down complex bills, budgets, and policies into language every student can understand and act on.',
  },
  {
    icon: Users,
    title: 'Foster Inclusivity Across KU Schools',
    description: 'Uniting students from every faculty and campus under one shared civic identity — regardless of background.',
  },
  {
    icon: Vote,
    title: 'Empower Civic Participation',
    description: 'Equipping members with the knowledge, confidence, and tools to actively shape the society they live in.',
  },
  {
    icon: Briefcase,
    title: 'Support Student Entrepreneurship & Talent',
    description: 'Spotlighting and nurturing the business ideas, creative skills, and ambitions of our members.',
  },
  {
    icon: Zap,
    title: 'Serve as a Rapid Response Forum',
    description: 'Mobilising fast, informed, and collective responses whenever urgent national or campus issues arise.',
  },
  {
    icon: Heart,
    title: 'Hold Community Outreach Programs',
    description: 'Taking our energy beyond the campus gate — giving back to communities that need it most.',
  },
  {
    icon: Handshake,
    title: 'Conduct Social Welfare Activities',
    description: 'Looking out for the wellbeing of our members and the communities we serve through intentional care.',
  },
  {
    icon: BookOpen,
    title: 'Promote Peer Learning & Mentorship',
    description: 'Building a culture where knowledge flows freely between seniors, juniors, alumni, and allies.',
  },
  {
    icon: Mic2,
    title: 'Amplify the Youth Voice',
    description: 'Making sure the opinions, frustrations, and visions of young Kenyans are heard — loudly and clearly.',
  },
];

const Objectives = () => {
  return (
    <section id="objectives" className="py-24 bg-brand-gray">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-brand-red font-bold tracking-widest uppercase text-sm mb-3">Our Reason for Being</p>
          <h2 className="text-3xl md:text-5xl font-extrabold text-brand-black mb-5 leading-tight">
            Purpose of <span className="text-brand-red">The Consent_KE</span>
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto text-lg leading-relaxed">
            Over the years The Consent_KE has metamorphosed from just being a political group to engaging
            in discussions that are crucial in our daily lives.
          </p>
        </div>

        {/* Grid — 2 cols on mobile, 3 on md, with the 10th card centred on its own row */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {purposes.map(({ icon: Icon, title, description }, i) => {
            // Make the last card (10th) span full width on lg so it centres in a 3-col grid
            const isLast = i === purposes.length - 1;
            return (
              <div
                key={i}
                className={`group relative bg-white rounded-2xl p-7 border border-gray-100 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300 flex gap-5 items-start ${
                  isLast ? 'lg:col-start-2' : ''
                }`}
              >
                {/* Icon */}
                <div className="shrink-0 w-11 h-11 rounded-xl bg-brand-red/10 flex items-center justify-center group-hover:bg-brand-red group-hover:text-white transition-colors duration-300">
                  <Icon size={20} className="text-brand-red group-hover:text-white transition-colors duration-300" />
                </div>

                {/* Text */}
                <div>
                  <h3 className="font-extrabold text-brand-black text-base mb-1 leading-snug">{title}</h3>
                  <p className="text-sm text-gray-500 leading-relaxed">{description}</p>
                </div>

                {/* Subtle number watermark */}
                <span className="absolute top-4 right-5 text-4xl font-black text-gray-50 select-none pointer-events-none leading-none">
                  {String(i + 1).padStart(2, '0')}
                </span>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default Objectives;