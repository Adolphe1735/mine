import { useState } from 'react';
import { Code2 } from 'lucide-react';

interface ImageWithFallbackProps {
  src: string;
  alt: string;
  className?: string;
  fallbackTitle?: string;
}

export default function ImageWithFallback({
  src,
  alt,
  className = '',
  fallbackTitle,
}: ImageWithFallbackProps) {
  const [hasError, setHasError] = useState(false);

  if (hasError || !src) {
    return (
      <div
        role="img"
        aria-label={alt}
        className={`flex flex-col items-center justify-center bg-gradient-to-br from-[#101820] via-[#0B0F14] to-[#00C853]/15 p-6 text-center ${className}`}
      >
        <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-xl border border-white/10 bg-[#101820] text-[#00C853]">
          <Code2 className="h-6 w-6" aria-hidden="true" />
        </div>
        {fallbackTitle && (
          <p className="font-display text-sm font-semibold text-white/90">{fallbackTitle}</p>
        )}
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      referrerPolicy="no-referrer"
      loading="lazy"
      onError={() => setHasError(true)}
      className={className}
    />
  );
}
