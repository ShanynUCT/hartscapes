import React from 'react';
import type { ReactNode } from 'react';

type Feature = {
  icon: ReactNode;
  title: string;
  text: string;
};

export default function ServiceFeatures({ features }: { features: Feature[] }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
      {features.map((f, i) => (
        <div key={i} className="flex items-start gap-4 p-4 bg-card/40 rounded-lg shadow-sm">
          <div className="p-3 bg-primary/10 rounded-md">
            {f.icon}
          </div>
          <div>
            <h4 className="font-semibold">{f.title}</h4>
            <p className="text-sm text-muted-foreground">{f.text}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
