import React, { useCallback, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { services } from '@/data/servicesData';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export default function ServiceNav() {
  const navigate = useNavigate();
  const { slug } = useParams<{ slug?: string }>();

  const index = services.findIndex((s) => s.slug === slug);
  const safeIndex = index === -1 ? 0 : index;

  const prev = services[(safeIndex - 1 + services.length) % services.length];
  const next = services[(safeIndex + 1) % services.length];

  const goTo = useCallback((targetSlug?: string) => {
    if (!targetSlug) return;
    navigate(`/services/${targetSlug}`);
  }, [navigate]);

  // keyboard navigation
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') goTo(prev.slug);
      if (e.key === 'ArrowRight') goTo(next.slug);
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [goTo, prev, next]);

  return (
    <>
      {/* Left arrow */}
      <button
        aria-label={`Previous: ${prev.title}`}
        className="fixed left-4 top-1/2 -translate-y-1/2 z-40 p-2 bg-white/80 rounded-full shadow-lg hover:bg-white"
        onClick={() => goTo(prev.slug)}
      >
        <ChevronLeft />
      </button>

      {/* Right arrow */}
      <button
        aria-label={`Next: ${next.title}`}
        className="fixed right-4 top-1/2 -translate-y-1/2 z-40 p-2 bg-white/80 rounded-full shadow-lg hover:bg-white"
        onClick={() => goTo(next.slug)}
      >
        <ChevronRight />
      </button>

      {/* Top navigation (compact buttons) */}
      <div className="fixed top-24 left-1/2 -translate-x-1/2 z-40 bg-white/90 rounded-full px-2 py-0.5 shadow-md flex gap-2 overflow-x-auto max-w-[85%] text-sm">
        {services.map((s) => (
          <button
            key={s.slug}
            onClick={() => goTo(s.slug)}
            className={`px-3 py-1 rounded-full text-sm ${s.slug === slug ? 'bg-primary text-white' : 'bg-transparent text-muted-foreground hover:bg-card'}`}
          >
            {s.title}
          </button>
        ))}
      </div>
      {/* spacer to offset fixed top pill so page titles are not overlapped */}
      <div className="h-24" aria-hidden />
    </>
  );
}

