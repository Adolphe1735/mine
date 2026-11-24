import TechLogo from './TechLogo';

const STACK_ITEMS = [
  'React.js',
  'JavaScript',
  'TypeScript',
  'Tailwind CSS',
  'Node.js',
  'Express.js',
  'Laravel',
  'PHP',
  'Python',
  'MySQL',
  'MongoDB',
  'SQL',
  'HTML5',
  'CSS3',
  'Dart',
  'Java',
  'C',
  'Git',
  'GitHub',
  'VS Code',
  'Vite',
  'Postman',
  'REST APIs',
];

export default function TechMarquee() {
  return (
    <div
      aria-label="Core technology stack"
      className="relative overflow-hidden border-y border-white/[0.06] bg-[#101820]/65 py-3.5 backdrop-blur-sm"
    >
      {/* Left & right soft edge fade masks */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-[#0B0F14] to-transparent sm:w-28"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-[#0B0F14] to-transparent sm:w-28"
      />

      <div className="animate-marquee">
        {[0, 1].map((loopIndex) => (
          <div
            key={loopIndex}
            aria-hidden={loopIndex === 1}
            className="flex shrink-0 items-center"
          >
            {STACK_ITEMS.map((item) => (
              <span
                key={`${loopIndex}-${item}`}
                className="group inline-flex items-center text-xs font-mono font-medium tracking-wide text-slate-300 transition-colors hover:text-[#00E676]"
              >
                <span className="inline-flex items-center gap-2 px-4">
                  <TechLogo
                    name={item}
                    className="h-4 w-4 shrink-0 transition-transform duration-200 group-hover:scale-110"
                  />
                  <span>{item}</span>
                </span>
                <span aria-hidden="true" className="text-[#00C853]/60">
                  ·
                </span>
              </span>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
