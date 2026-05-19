import Image from 'next/image';
import Link from 'next/link';
import { SITE_CONFIG } from '@/lib/data';
import { FileText, Award, BookOpen } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* ── IDENTITY SECTION ── */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-28">
          <div className="relative">
            <div className="absolute top-0 left-0 w-full h-full border-4 border-red-600 rounded-xl transform translate-x-4 translate-y-4" />
            <div className="relative bg-gray-50 p-8 rounded-xl border-l-8 border-green-600 shadow-lg">
              <h3 className="text-2xl font-bold text-black mb-4 flex items-center gap-2">
                <Award className="text-red-600" /> OUR IDENTITY
              </h3>
              <p className="text-xl font-medium text-green-700 italic leading-relaxed">
                "Consent is not just a word! It's our principle. It stands for informed dialogue, mutual respect and collective agreement."
              </p>
            </div>
          </div>
          <div>
            <h2 className="text-4xl font-extrabold text-black mb-6 tracking-tighter">
              A Youth-Led Political & Social Forum
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed mb-6">
              {SITE_CONFIG.description}
            </p>
            <p className="text-gray-600 text-lg leading-relaxed">
              Established in 2019, we have grown to over 1,000 members.
              95% of our members are students and alumni dedicated to dialogue and change.
            </p>
          </div>
        </div>

        {/* ── TEAM SECTION ── */}
        <div className="mb-24">
          <div className="mb-10">
            <p className="text-xs font-semibold uppercase tracking-widest text-gray-400 mb-1">Meet the team</p>
            <h2 className="text-2xl font-semibold text-gray-900">The Consent Rangers</h2>
            <div className="w-8 h-0.5 bg-red-600 rounded mt-3" />
          </div>

          {/* ── 3x2 EQUAL GRID ── */}
          <div className="grid grid-cols-3 gap-3">
            {[
              { name: "Mosinga",     role: "Head of Comms",       img: "/Mosinga.jpeg"  },
              { name: "Juliet",      role: "H. Finance",          img: "/Owino.jpeg"    },
              { name: "Otema Beryl", role: "Managing Director",   img: "/Beryl.jpeg"    },
              { name: "Sandra",      role: "Marketing Associate", img: "/Sandra.jpeg"   },
              { name: "Darius",      role: "Project Manager",     img: "/Darius.jpeg"   },
              { name: "Emmanuel",    role: "Digital Marketing",   img: "/Emmanuel.jpeg" },
            ].map((member, i) => (
              <div
                key={i}
                className={`relative overflow-hidden bg-gray-100 group
                  ${i === 0 ? 'rounded-tl-2xl' : ''}
                  ${i === 2 ? 'rounded-tr-2xl' : ''}
                  ${i === 3 ? 'rounded-bl-2xl' : ''}
                  ${i === 5 ? 'rounded-br-2xl' : ''}
                `}
                style={{ aspectRatio: '3/4' }}
              >
                <Image
                  src={member.img}
                  alt={member.name}
                  fill
                  className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                />
                {/* Subtle dark base so name is always readable */}
                <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/70 via-black/30 to-transparent">
                  <p className="text-white font-semibold text-sm">{member.name}</p>
                  <p className="text-red-300 text-xs uppercase tracking-wider mt-0.5">{member.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ── BIZ TALK SECTION ── */}
        <div className="bg-gray-900 rounded-3xl p-8 md:p-12 text-white">
          <h2 className="text-3xl font-bold flex items-center gap-3 mb-8">
            <BookOpen className="text-red-500" /> Biz Talk Stories
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <Link href="/THE BILLY. M BIZ TALK STORY.doc" target="_blank" className="bg-gray-800/50 p-6 rounded-2xl border border-gray-700 hover:border-red-500 transition-all group">
              <span className="text-xs font-bold text-green-500 uppercase">Entrepreneurship</span>
              <h3 className="text-xl font-bold mt-2 group-hover:text-red-500 transition-colors">The Billy M. Biz Talk Story</h3>
              <p className="text-gray-400 text-sm mt-2 flex items-center gap-2">Read Story <FileText size={14} /></p>
            </Link>
            <Link href="/Miss Chatty Biz Talk story.docx" target="_blank" className="bg-gray-800/50 p-6 rounded-2xl border border-gray-700 hover:border-red-500 transition-all group">
              <span className="text-xs font-bold text-green-500 uppercase">Community Voice</span>
              <h3 className="text-xl font-bold mt-2 group-hover:text-red-500 transition-colors">Miss Chatty Biz Talk Story</h3>
              <p className="text-gray-400 text-sm mt-2 flex items-center gap-2">Read Story <FileText size={14} /></p>
            </Link>
          </div>
        </div>

      </div>
    </section>
  );
};

export default About;