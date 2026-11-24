import type { SVGProps } from 'react';
import {
  Cloud,
  Code2,
  Cpu,
  Database,
  Globe,
  KeyRound,
  Layers,
  Network,
  RefreshCw,
  ShieldCheck,
  Smartphone,
} from 'lucide-react';

interface TechLogoProps {
  name: string;
  className?: string;
}

type SvgIconProps = SVGProps<SVGSVGElement>;

function ReactLogo(props: SvgIconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <circle cx="12" cy="12" r="2.1" fill="#61DAFB" />
      <ellipse cx="12" cy="12" rx="10" ry="3.8" stroke="#61DAFB" strokeWidth="1.4" />
      <ellipse
        cx="12"
        cy="12"
        rx="10"
        ry="3.8"
        stroke="#61DAFB"
        strokeWidth="1.4"
        transform="rotate(60 12 12)"
      />
      <ellipse
        cx="12"
        cy="12"
        rx="10"
        ry="3.8"
        stroke="#61DAFB"
        strokeWidth="1.4"
        transform="rotate(120 12 12)"
      />
    </svg>
  );
}

function Html5Logo(props: SvgIconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <path d="M4 3h16l-1.5 16.5L12 21.5l-6.5-2L4 3z" fill="#E34F26" />
      <path d="M12 4.5v15.5l5.2-1.6L18.4 4.5H12z" fill="#EF652A" />
      <path
        d="M7.5 7.5h9l-.3 2.5H9.8l.2 2.4h6l-.6 5.2-3.4 1-3.4-1-.2-2.5h2.2l.1 1.1 1.3.4 1.3-.4.2-2H7.9L7.5 7.5z"
        fill="#FFFFFF"
      />
    </svg>
  );
}

function Css3Logo(props: SvgIconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <path d="M4 3h16l-1.5 16.5L12 21.5l-6.5-2L4 3z" fill="#1572B6" />
      <path d="M12 4.5v15.5l5.2-1.6L18.4 4.5H12z" fill="#33A9DC" />
      <path
        d="M7.5 7.5h9l-.3 2.4h-6.2l.2 2.2h5.8l-.6 5.4-3.4 1-3.4-1-.2-2.4h2.2l.1 1 1.3.4 1.3-.4.2-1.9H7.9l-.2-2.2h6.1l.2-2.1H7.5z"
        fill="#FFFFFF"
      />
    </svg>
  );
}

function JsLogo(props: SvgIconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <rect x="2.5" y="2.5" width="19" height="19" rx="3" fill="#F7DF1E" />
      <path
        d="M11 17.5c0 1.4-.8 2.1-2.1 2.1-.9 0-1.6-.4-2-1.1l1.2-.8c.2.4.5.6.9.6.4 0 .6-.2.6-.8v-4.8H11v4.8zm2.3.1c.4.7 1 1.1 1.9 1.1.8 0 1.3-.4 1.3-.9 0-.6-.5-.9-1.4-1.3l-.5-.2c-1.4-.6-2.2-1.3-2.2-2.7 0-1.3 1-2.3 2.6-2.3 1.1 0 2 .4 2.5 1.4l-1.3.8c-.3-.5-.6-.7-1.1-.7-.5 0-.9.3-.9.7 0 .5.3.7 1.2 1.1l.5.2c1.6.7 2.4 1.4 2.4 2.9 0 1.6-1.3 2.5-3 2.5-1.6 0-2.7-.8-3.2-1.8l1.2-.8z"
        fill="#101820"
      />
    </svg>
  );
}

function TsLogo(props: SvgIconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <rect x="2.5" y="2.5" width="19" height="19" rx="3" fill="#3178C6" />
      <text
        x="13.5"
        y="18.2"
        textAnchor="middle"
        fill="#FFFFFF"
        fontSize="9.2"
        fontWeight="700"
        fontFamily="system-ui, sans-serif"
      >
        TS
      </text>
    </svg>
  );
}

function TailwindLogo(props: SvgIconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <path
        d="M12 6.5c-2.6 0-4.2 1.3-4.9 3.9 1-1.3 2.1-1.8 3.5-1.5.7.2 1.3.7 1.9 1.3 1 1 2.1 2.1 4.5 2.1 2.6 0 4.2-1.3 4.9-3.9-1 1.3-2.1 1.8-3.5 1.5-.7-.2-1.3-.7-1.9-1.3-1-1-2.1-2.1-4.5-2.1zM7.1 12.2c-2.6 0-4.2 1.3-4.9 3.9 1-1.3 2.1-1.8 3.5-1.5.7.2 1.3.7 1.9 1.3 1 1 2.1 2.1 4.5 2.1 2.6 0 4.2-1.3 4.9-3.9-1 1.3-2.1 1.8-3.5 1.5-.7-.2-1.3-.7-1.9-1.3-1-1-2.1-2.1-4.5-2.1z"
        fill="#38BDF8"
      />
    </svg>
  );
}

function BootstrapLogo(props: SvgIconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <rect x="2.5" y="3" width="19" height="18" rx="4" fill="#7952B3" />
      <text
        x="12"
        y="16.3"
        textAnchor="middle"
        fill="#FFFFFF"
        fontSize="12"
        fontWeight="700"
        fontFamily="system-ui, sans-serif"
      >
        B
      </text>
    </svg>
  );
}

function PythonLogo(props: SvgIconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <path
        d="M11.9 3C8.8 3 9 4.4 9 4.4v1.5h3v.5H7.7C5.9 6.4 4.5 7.7 4.5 10.6c0 2.9 1.2 4.1 3 4.1h1.3v-1.8c0-1.4 1.1-2.6 2.6-2.6h4.2c1.2 0 2.1-1 2.1-2.2V5.3C17.7 3.9 16.4 3 11.9 3zm-1.4 1.8a.8.8 0 1 1 0 1.6.8.8 0 0 1 0-1.6z"
        fill="#3776AB"
      />
      <path
        d="M12.1 21c3.1 0 2.9-1.4 2.9-1.4v-1.5h-3v-.5h4.3c1.8 0 3.2-1.3 3.2-4.2 0-2.9-1.2-4.1-3-4.1h-1.3v1.8c0 1.4-1.1 2.6-2.6 2.6H8.4c-1.2 0-2.1 1-2.1 2.2v2.8C6.3 20.1 7.6 21 12.1 21zm1.4-1.8a.8.8 0 1 1 0-1.6.8.8 0 0 1 0 1.6z"
        fill="#FFD43B"
      />
    </svg>
  );
}

function JavaLogo(props: SvgIconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <path
        d="M9.5 17.5c3.5.8 7.5.2 7.5-1.1 0-.7-1-.9-1-.9M7.8 14.8c2.6.6 6.2.4 7.7-.6M10.4 12c1.6.4 4 .2 4.9-.5"
        stroke="#5382A1"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <path
        d="M12.2 3.2c.8 1.5-1.6 2.6-.7 4.2.5.9 2.2 1.1 1.4 2.6"
        stroke="#F89820"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <path
        d="M7 19.8c3.2.9 7.8.7 10-.3"
        stroke="#F89820"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
    </svg>
  );
}

function CLogo(props: SvgIconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <path d="M12 2.2 20.5 7v10L12 21.8 3.5 17V7L12 2.2z" fill="#00599C" />
      <path
        d="M15.4 9.2A4.4 4.4 0 1 0 15.4 14.8"
        stroke="#FFFFFF"
        strokeWidth="2.4"
        strokeLinecap="round"
      />
    </svg>
  );
}

function PhpLogo(props: SvgIconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <ellipse cx="12" cy="12" rx="10.5" ry="6.5" fill="#777BB4" />
      <text
        x="12"
        y="14.4"
        textAnchor="middle"
        fill="#FFFFFF"
        fontSize="7.4"
        fontWeight="700"
        fontFamily="system-ui, sans-serif"
      >
        PHP
      </text>
    </svg>
  );
}

function NodeJsLogo(props: SvgIconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <path
        d="M12 2.2 20.5 7v10L12 21.8 3.5 17V7L12 2.2z"
        fill="#539E43"
        fillOpacity="0.2"
        stroke="#539E43"
        strokeWidth="1.6"
      />
      <text
        x="12"
        y="14.3"
        textAnchor="middle"
        fill="#68D358"
        fontSize="7"
        fontWeight="700"
        fontFamily="monospace"
      >
        JS
      </text>
    </svg>
  );
}

function ExpressLogo(props: SvgIconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <rect
        x="2.5"
        y="4.5"
        width="19"
        height="15"
        rx="3.5"
        fill="#101820"
        stroke="#94A3B8"
        strokeWidth="1.3"
      />
      <text
        x="12"
        y="14.3"
        textAnchor="middle"
        fill="#E2E8F0"
        fontSize="7.5"
        fontWeight="600"
        fontFamily="monospace"
      >
        ex
      </text>
    </svg>
  );
}

function LaravelLogo(props: SvgIconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <path
        d="M5 5.5 9.5 3 14 5.5v5L9.5 13 5 10.5v-5z"
        stroke="#FF2D20"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
      <path
        d="M9.5 13v5.5L14 21l5.5-3v-5.5L15 10l-5.5 3z"
        stroke="#FF2D20"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
      <path d="M14 10.5 19.5 7.5v5" stroke="#FF2D20" strokeWidth="1.5" strokeLinejoin="round" />
    </svg>
  );
}

function MySqlLogo(props: SvgIconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <ellipse
        cx="12"
        cy="6.5"
        rx="7"
        ry="3"
        fill="#00758F"
        fillOpacity="0.3"
        stroke="#00A6CE"
        strokeWidth="1.5"
      />
      <path
        d="M5 6.5v11c0 1.66 3.13 3 7 3s7-1.34 7-3v-11"
        stroke="#00A6CE"
        strokeWidth="1.5"
      />
      <path d="M5 12c0 1.66 3.13 3 7 3s7-1.34 7-3" stroke="#F29111" strokeWidth="1.4" />
    </svg>
  );
}

function SqlLogo(props: SvgIconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <rect
        x="2.5"
        y="4"
        width="19"
        height="16"
        rx="3.5"
        fill="#0F172A"
        stroke="#38BDF8"
        strokeWidth="1.4"
      />
      <text
        x="12"
        y="14.5"
        textAnchor="middle"
        fill="#38BDF8"
        fontSize="7.4"
        fontWeight="700"
        fontFamily="monospace"
      >
        SQL
      </text>
    </svg>
  );
}

function MongoDbLogo(props: SvgIconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <path
        d="M12 2.5C9.2 6.3 7.3 9.7 7.3 13.4c0 3.2 2 5.6 4.7 6.8 2.7-1.2 4.7-3.6 4.7-6.8 0-3.7-1.9-7.1-4.7-10.9z"
        fill="#00ED64"
        fillOpacity="0.22"
        stroke="#00ED64"
        strokeWidth="1.5"
      />
      <path d="M12 7v14.5" stroke="#00ED64" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

function DartLogo(props: SvgIconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <path d="M6.5 6.5 14 4l6 6v7.5L13 20l-6.5-6.5v-7z" fill="#0175C2" />
      <path d="M6.5 6.5 14 4l4 4H8.5l-2-1.5z" fill="#29B6F6" />
      <path d="M4 9.5 6.5 6.5v7L13 20l-3.5-.5L4 14V9.5z" fill="#00D2B8" />
    </svg>
  );
}

function GitLogo(props: SvgIconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <rect
        x="12"
        y="2.5"
        width="13.4"
        height="13.4"
        rx="2.2"
        transform="rotate(45 12 2.5)"
        fill="#F05032"
      />
      <circle cx="12" cy="8.5" r="1.4" fill="#FFFFFF" />
      <circle cx="12" cy="15.5" r="1.4" fill="#FFFFFF" />
      <circle cx="15.5" cy="12" r="1.4" fill="#FFFFFF" />
      <path d="M12 9.5v5M12.8 9.3l2 2" stroke="#FFFFFF" strokeWidth="1.4" />
    </svg>
  );
}

function GitHubLogo(props: SvgIconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12 2C6.48 2 2 6.58 2 12.23c0 4.52 2.87 8.35 6.84 9.7.5.1.68-.22.68-.49 0-.24-.01-1.05-.01-1.9-2.78.62-3.37-1.21-3.37-1.21-.46-1.18-1.11-1.49-1.11-1.49-.91-.63.07-.62.07-.62 1 .07 1.53 1.05 1.53 1.05.9 1.57 2.35 1.12 2.92.85.09-.66.35-1.12.64-1.37-2.22-.26-4.56-1.14-4.56-5.06 0-1.12.39-2.03 1.03-2.75-.1-.26-.45-1.3.1-2.71 0 0 .84-.27 2.75 1.05A9.4 9.4 0 0 1 12 6.94c.85 0 1.71.12 2.51.35 1.91-1.32 2.75-1.05 2.75-1.05.55 1.41.2 2.45.1 2.71.64.72 1.03 1.63 1.03 2.75 0 3.93-2.34 4.8-4.57 5.05.36.32.68.94.68 1.9 0 1.37-.01 2.48-.01 2.82 0 .27.18.6.69.49A10.22 10.22 0 0 0 22 12.23C22 6.58 17.52 2 12 2z"
      />
    </svg>
  );
}

function VsCodeLogo(props: SvgIconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <path
        d="M17.5 3.5 21 5.2v13.6l-3.5 1.7-8.2-7.5-4.3 3.3-2-1.3V9l2-1.3 4.3 3.3 8.2-7.5z"
        fill="#007ACC"
      />
      <path d="M17.5 3.5v17L21 18.8V5.2l-3.5-1.7z" fill="#1F9CF0" />
    </svg>
  );
}

function ViteLogo(props: SvgIconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <path d="M21 4.5 12.4 20a.6.6 0 0 1-1 0L3 4.5a.5.5 0 0 1 .6-.7l8.4 1.6a.6.6 0 0 0 .2 0l8.2-1.6a.5.5 0 0 1 .6.7z" fill="#646CFF" />
      <path d="m15.8 3.2-4.7 1a.3.3 0 0 0-.2.3l-.5 6.8a.3.3 0 0 0 .4.3l1.7-.4c.3-.1.5.2.4.5l-.6 3c-.1.3.3.5.5.3l3.6-5.2c.2-.3 0-.6-.3-.5l-1.4.3c-.3.1-.5-.2-.4-.5l1.8-5.4c.1-.3-.1-.5-.3-.5z" fill="#FFCE2B" />
    </svg>
  );
}

function PostmanLogo(props: SvgIconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <circle cx="12" cy="12" r="9.5" fill="#FF6C37" />
      <path d="m14.8 8.4-5.4 5.4M14.8 8.4l-1.4 3.7M14.8 8.4l-3.7 1.4" stroke="#FFFFFF" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function VercelLogo(props: SvgIconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M12 4 21 19.5H3L12 4z" />
    </svg>
  );
}

export default function TechLogo({ name, className = 'h-4 w-4' }: TechLogoProps) {
  const key = name.trim().toLowerCase();

  switch (key) {
    case 'react.js':
    case 'react':
    case 'react hooks':
    case 'jsx':
      return <ReactLogo className={className} />;
    case 'html5':
    case 'html':
      return <Html5Logo className={className} />;
    case 'css3':
    case 'css':
      return <Css3Logo className={className} />;
    case 'javascript':
    case 'js':
      return <JsLogo className={className} />;
    case 'typescript':
    case 'ts':
      return <TsLogo className={className} />;
    case 'tailwind css':
    case 'tailwindcss':
      return <TailwindLogo className={className} />;
    case 'bootstrap':
      return <BootstrapLogo className={className} />;
    case 'python':
      return <PythonLogo className={className} />;
    case 'java':
      return <JavaLogo className={className} />;
    case 'c':
    case 'c programming':
      return <CLogo className={className} />;
    case 'php':
      return <PhpLogo className={className} />;
    case 'node.js':
      return <NodeJsLogo className={className} />;
    case 'express.js':
      return <ExpressLogo className={className} />;
    case 'laravel':
      return <LaravelLogo className={className} />;
    case 'mysql':
      return <MySqlLogo className={className} />;
    case 'sql':
      return <SqlLogo className={className} />;
    case 'mongodb':
      return <MongoDbLogo className={className} />;
    case 'dart':
      return <DartLogo className={className} />;
    case 'git':
      return <GitLogo className={className} />;
    case 'github':
    case 'git & github':
      return <GitHubLogo className={`${className} text-slate-200`} />;
    case 'vs code':
      return <VsCodeLogo className={className} />;
    case 'vite':
      return <ViteLogo className={className} />;
    case 'postman':
      return <PostmanLogo className={className} />;
    case 'vercel':
      return <VercelLogo className={`${className} text-white`} />;
    case 'rest api development':
    case 'rest apis':
    case 'rest api':
      return <Cloud className={`${className} text-[#00C853]`} aria-hidden="true" />;
    case 'responsive web design':
      return <Smartphone className={`${className} text-[#00C853]`} aria-hidden="true" />;
    case 'authentication and authorization':
    case 'auth':
      return <ShieldCheck className={`${className} text-[#00C853]`} aria-hidden="true" />;
    case 'crud operations':
      return <RefreshCw className={`${className} text-[#00C853]`} aria-hidden="true" />;
    case 'networking fundamentals':
    case 'networking':
      return <Network className={`${className} text-[#00C853]`} aria-hidden="true" />;
    case 'software development principles':
      return <Cpu className={`${className} text-[#00C853]`} aria-hidden="true" />;
    case 'event handling':
      return <Code2 className={`${className} text-[#00C853]`} aria-hidden="true" />;
    default:
      if (key.includes('auth')) return <KeyRound className={`${className} text-[#00C853]`} aria-hidden="true" />;
      if (key.includes('db') || key.includes('sql')) return <Database className={`${className} text-[#00C853]`} aria-hidden="true" />;
      if (key.includes('web')) return <Globe className={`${className} text-[#00C853]`} aria-hidden="true" />;
      return <Layers className={`${className} text-[#00C853]`} aria-hidden="true" />;
  }
}
