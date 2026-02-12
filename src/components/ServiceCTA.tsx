import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';
import { useCallback } from 'react';

type Props = {
  label?: string;
};

export default function ServiceCTA({ label = 'Get in touch' }: Props) {
  const navigate = useNavigate();

  const goToContact = useCallback(() => {
    const scrollToContact = () => {
      const el = document.getElementById('contact');
      if (el) {
        el.scrollIntoView({ behavior: 'smooth', block: 'start' });
        return true;
      }
      return false;
    };

    if (window.location.pathname === '/') {
      if (!scrollToContact()) window.location.hash = '#contact';
      return;
    }

    navigate('/', { replace: false });
    // try to scroll after navigation completes (small delay)
    setTimeout(() => {
      if (!scrollToContact()) window.location.hash = '#contact';
    }, 200);
  }, [navigate]);

  return (
    <div className="mt-12 text-center">
      <Button onClick={goToContact}>{label}</Button>
    </div>
  );
}
