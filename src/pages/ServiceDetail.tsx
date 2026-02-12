import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { serviceComponents } from "./serviceComponents";
import NotFound from "./NotFound";
import ServiceNav from '@/components/ServiceNav';

export default function ServiceDetail() {
  const { slug } = useParams<{ slug?: string }>();
  const [Component, setComponent] = useState<null | React.ComponentType>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!slug) {
      setLoading(false);
      return;
    }

    const loader = serviceComponents[slug];
    if (!loader) {
      setLoading(false);
      setComponent(null);
      return;
    }

    setLoading(true);
    loader()
      .then((mod) => {
        if (mod && mod.default) {
          setComponent(() => mod.default);
        } else {
          // Module exists but has no default export — show placeholder
          setComponent(() => () => <div className="container mx-auto p-8">This service page is being prepared.</div>);
        }
      })
      .catch((err) => {
        console.error("Failed to load service module", err);
        setComponent(null);
      })
      .finally(() => setLoading(false));
  }, [slug]);

  if (loading) return <div className="container mx-auto p-8">Loading...</div>;
  if (!slug) return <NotFound />;
  if (!Component) return <NotFound />;

  const Render = Component;
  return (
    <>
      <ServiceNav />
      <Render />
    </>
  );
}
