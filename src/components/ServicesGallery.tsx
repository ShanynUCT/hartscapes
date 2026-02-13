import React, { useEffect, useState } from 'react';
import ImageLightbox from './ImageLightbox';

interface Props {
  folder: string; // e.g. 'Decking' -> looks up 'Services/Decking' in index.json
}

export default function ServicesGallery({ folder }: Props) {
  const [images, setImages] = useState<string[]>([]);
  const [loading, setLoading] = useState(true);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  useEffect(() => {
    let mounted = true;
    setLoading(true);
    fetch('/gallery/index.json')
      .then((res) => res.ok ? res.json() : Promise.reject())
      .then((index: Record<string, string[]>) => {
        if (!mounted) return;
        const key = `Services/${folder}`;
        const arr = index[key] || [];
        setImages(arr);
        setLoading(false);
      })
      .catch(() => {
        // fallback: attempt to build a few likely filenames
        const fallback: string[] = [];
        for (let i = 1; i <= 12; i++) {
          fallback.push(`/gallery/Services/${folder}/${i}.jpeg`);
        }
        if (mounted) {
          setImages(fallback);
          setLoading(false);
        }
      });

    return () => { mounted = false; };
  }, [folder]);

  const openLightbox = (index: number) => {
    setLightboxIndex(index);
    setLightboxOpen(true);
  };

  if (loading) {
    return (
      <div className="w-full">
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-4">
          {[...Array(6)].map((_, i) => (
            <div key={i} className="mb-4 break-inside-avoid">
              <div className="animate-pulse bg-muted rounded-xl h-64" />
            </div>
          ))}
        </div>
      </div>
    );
  }

  if (!images || images.length === 0) return null;

  return (
    <>
      <div className="w-full">
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-4">
          {images.map((img, i) => (
            <div 
              key={i} 
              className="mb-4 break-inside-avoid overflow-hidden rounded-xl border border-border/60 bg-card/40 shadow-sm cursor-pointer group transition-transform hover:scale-[1.02]"
              onClick={() => openLightbox(i)}
            >
              <img
                src={img}
                alt={`${folder} ${i + 1}`}
                className="w-full h-auto object-contain group-hover:opacity-90 transition-opacity"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>
      
      {lightboxOpen && (
        <ImageLightbox
          images={images}
          initialIndex={lightboxIndex}
          onClose={() => setLightboxOpen(false)}
        />
      )}
    </>
  );
}
