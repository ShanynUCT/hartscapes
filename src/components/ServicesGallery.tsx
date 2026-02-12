import React, { useEffect, useState } from 'react';

interface Props {
  folder: string; // e.g. 'Decking' -> looks up 'Services/Decking' in index.json
}

export default function ServicesGallery({ folder }: Props) {
  const [images, setImages] = useState<string[]>([]);

  useEffect(() => {
    let mounted = true;
    fetch('/gallery/index.json')
      .then((res) => res.ok ? res.json() : Promise.reject())
      .then((index: Record<string, string[]>) => {
        if (!mounted) return;
        const key = `Services/${folder}`;
        const arr = index[key] || [];
        setImages(arr);
      })
      .catch(() => {
        // fallback: attempt to build a few likely filenames
        const fallback: string[] = [];
        for (let i = 1; i <= 12; i++) {
          fallback.push(`/gallery/Services/${folder}/${i}.jpeg`);
        }
        if (mounted) setImages(fallback);
      });

    return () => { mounted = false; };
  }, [folder]);

  if (!images || images.length === 0) return null;

  return (
    <div className="w-full">
      <div className="columns-1 sm:columns-2 lg:columns-3 gap-4">
        {images.map((img, i) => (
          <div key={i} className="mb-4 break-inside-avoid overflow-hidden rounded-xl border border-border/60 bg-card/40 shadow-sm">
            <img
              src={img}
              alt={`${folder} ${i + 1}`}
              className="w-full h-auto object-contain"
              loading="lazy"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
