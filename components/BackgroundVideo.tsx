'use client';

interface BackgroundVideoProps {
  src: string;
  overlay?: boolean;
  className?: string;
}

export default function BackgroundVideo({
  src,
  overlay = true,
  className = '',
}: BackgroundVideoProps) {
  return (
    <div className={`absolute inset-0 -z-10 overflow-hidden ${className}`}>
      {/* Video */}
      <video
        src={src}
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        className="w-full h-full object-cover"
      />

      {/* Optional dark overlay */}
      {overlay && <div className="absolute inset-0 bg-black/40" />}
    </div>
  );
}
