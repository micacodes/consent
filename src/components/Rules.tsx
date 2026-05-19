import { RULES } from '@/lib/data';
import { Scale, AlertTriangle, ShieldCheck } from 'lucide-react';

const Rules = () => {
  return (
    <div className="bg-gray-950 min-h-screen relative overflow-hidden">

      {/* ── TOP FLAG STRIPE ── */}
      <div className="w-full flex">
        <div className="flex-1 h-2 bg-black" />
        <div className="flex-1 h-2 bg-red-600" />
        <div className="flex-1 h-2 bg-white" />
        <div className="flex-1 h-2 bg-green-700" />
      </div>

      {/* ── GIANT WATERMARK ── */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden">
        <span className="text-[20vw] font-black text-white/[0.02] tracking-tighter leading-none">
          CONSENT
        </span>
      </div>

      {/* ── LEFT SIDE ACCENT BAR ── */}
      <div className="fixed left-0 top-0 h-full w-1 bg-red-600 z-10" />

      <div className="relative max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 py-24">

        {/* ── SPLIT HEADER LAYOUT ── */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24">

          {/* Left — title block */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-1 h-12 bg-red-600 rounded-full" />
              <span className="text-red-500 text-xs font-bold uppercase tracking-[0.3em]">
                Consent_KE · Est. 2019
              </span>
            </div>
            <h1 className="text-6xl sm:text-7xl lg:text-8xl font-black text-white tracking-tighter leading-[0.9] mb-8">
              THE<br />
              <span className="text-red-500">CONSTI</span><br />
              TUTION
            </h1>
            <div className="flex items-center gap-4">
              <div className="w-12 h-px bg-gray-700" />
              <p className="text-gray-500 text-sm uppercase tracking-widest">Governing Principles</p>
            </div>
          </div>

          {/* Right — intro + scale icon */}
          <div className="relative">
            <div className="absolute -top-6 -right-6 text-white/[0.04]">
              <Scale size={280} strokeWidth={0.5} />
            </div>
            <div className="border-l-2 border-red-600 pl-8">
              <p className="text-gray-300 text-xl leading-relaxed mb-6">
                These are the principles that bind and guide every member of The Consent_KE community.
              </p>
              <p className="text-gray-500 text-sm leading-relaxed">
                Violation of these rules may result in removal. By being a member, you agree to uphold each of these principles unconditionally.
              </p>
            </div>
          </div>
        </div>

        {/* ── RULES — ALTERNATING LAYOUT ── */}
        <div className="space-y-3 mb-16">
          {RULES.map((rule, index) => (
            <div
              key={index}
              className={`group flex items-center gap-6 p-6 rounded-2xl border transition-all duration-300 cursor-default
                ${index % 2 === 0
                  ? 'bg-white/5 border-white/10 hover:border-red-600/50 flex-row'
                  : 'bg-white/[0.03] border-white/5 hover:border-red-600/30 flex-row-reverse'
                }
              `}
            >
              {/* Number */}
              <div className="flex-shrink-0 w-16 h-16 rounded-2xl bg-red-600/10 border border-red-600/20 group-hover:bg-red-600 group-hover:border-red-600 flex items-center justify-center transition-all duration-300">
                <span className="text-red-400 group-hover:text-white font-black text-xl transition-colors duration-300">
                  {String(index + 1).padStart(2, '0')}
                </span>
              </div>

              {/* Rule text */}
              <p className={`text-gray-200 text-lg leading-relaxed flex-1 ${index % 2 !== 0 ? 'text-right' : ''}`}>
                {rule}
              </p>

              {/* Decorative line */}
              <div className={`flex-shrink-0 h-px w-12 bg-white/10 group-hover:bg-red-600/50 transition-colors duration-300 ${index % 2 !== 0 ? 'order-first' : ''}`} />
            </div>
          ))}
        </div>

        {/* ── PARDONING CLAUSE ── */}
        <div className="relative overflow-hidden rounded-3xl border border-yellow-500/20 bg-yellow-500/5 p-10">
          <div className="absolute top-0 right-0 w-64 h-64 bg-yellow-500/5 rounded-full -translate-y-1/2 translate-x-1/2 pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-32 h-32 bg-yellow-500/5 rounded-full translate-y-1/2 -translate-x-1/2 pointer-events-none" />

          <div className="relative flex items-start gap-6">
            <div className="flex-shrink-0 w-14 h-14 rounded-2xl bg-yellow-500/15 border border-yellow-500/30 flex items-center justify-center">
              <AlertTriangle className="text-yellow-400" size={24} />
            </div>
            <div>
              <p className="text-yellow-400 font-black text-xs uppercase tracking-[0.3em] mb-3">
                Pardoning of Law Breakers
              </p>
              <p className="text-white text-2xl font-semibold leading-snug mb-3">
                Share an unconditional apology to the group.
              </p>
              <p className="text-gray-500 text-sm">
                Applies specifically to Parents &amp; Spamming violations.
              </p>
            </div>
          </div>
        </div>

        {/* ── CLOSING SEAL ── */}
        <div className="mt-20 flex flex-col items-center gap-4 text-center">
          <div className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center mb-2">
            <ShieldCheck className="text-green-500" size={22} />
          </div>
          <p className="text-gray-600 text-xs uppercase tracking-[0.3em]">
            By joining, you agree to uphold these principles
          </p>
          <div className="flex items-center gap-4">
            <div className="w-10 h-px bg-gray-800" />
            <span className="text-gray-700 text-xs tracking-widest">Consent_KE · Est. 2019</span>
            <div className="w-10 h-px bg-gray-800" />
          </div>
        </div>

      </div>

      {/* ── BOTTOM FLAG STRIPE ── */}
      <div className="w-full flex">
        <div className="flex-1 h-2 bg-green-700" />
        <div className="flex-1 h-2 bg-white" />
        <div className="flex-1 h-2 bg-red-600" />
        <div className="flex-1 h-2 bg-black" />
      </div>

    </div>
  );
};

export default Rules;