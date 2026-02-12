import React, { useEffect, useState } from 'react';

interface Props {
  folder: string;
}

export default function ServicesThumbs({ folder }: Props) {
  const [thumbs, setThumbs] = useState<string[]>([]);

  useEffect(() => {
    let mounted = true;
    fetch('/gallery/index.json')
      .then((res) => res.ok ? res.json() : Promise.reject())
      .then((index: Record<string, string[]>) => {
        if (!mounted) return;
        const key = `Services/${folder}`;
        const arr = index[key] || [];
        setThumbs(arr.slice(0, 4));
      })
      .catch(() => {
        const fallback: string[] = [];
        for (let i = 1; i <= 4; i++) fallback.push(`/gallery/Services/${folder}/${i}.jpeg`);
        if (mounted) setThumbs(fallback);
      });

    return () => { mounted = false; };
  }, [folder]);

  if (!thumbs || thumbs.length === 0) return null;
  return (
    <div className="mt-6 w-full">
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-2 gap-4">
        {thumbs.map((img, i) => (
          <div key={i} className="aspect-[5/4] overflow-hidden rounded-lg">
            <img src={img} alt={`${folder} thumb ${i + 1}`} className="w-full h-full object-cover" loading="lazy" />
          </div>
        ))}
      </div>
    </div>
  );
}
