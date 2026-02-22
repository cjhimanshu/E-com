import { useState, useEffect, useRef } from 'react';

const FALLBACK =
  "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='500' height='500' viewBox='0 0 500 500'%3E%3Crect width='500' height='500' fill='%23f3f4f6'/%3E%3Cg transform='translate(250,220)'%3E%3Crect x='-40' y='-30' width='80' height='60' rx='6' fill='%23d1d5db'/%3E%3Ccircle cx='0' cy='-50' r='18' fill='%23d1d5db'/%3E%3Cpath d='M-50,35 Q-30,10 0,20 Q30,30 50,35' fill='%23d1d5db'/%3E%3C/g%3E%3Ctext x='50%25' y='78%25' text-anchor='middle' fill='%239ca3af' font-size='16' font-family='sans-serif'%3EImage unavailable%3C/text%3E%3C/svg%3E";

interface LazyImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  alt: string;
  /** Extra className applied to the wrapper div */
  wrapperClassName?: string;
}

const LazyImage = ({ src, alt, className = '', wrapperClassName = '', ...rest }: LazyImageProps) => {
  const [inView, setInView] = useState(false);
  const [loaded, setLoaded] = useState(false);
  const [error, setError] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      { rootMargin: '200px' },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    setLoaded(false);
    setError(false);
  }, [src]);

  return (
    <div ref={ref} className={`relative overflow-hidden ${wrapperClassName}`}>
      {!loaded && (
        <div className="absolute inset-0 bg-gray-200 animate-pulse" aria-hidden="true" />
      )}
      {inView && (
        <img
          src={error ? FALLBACK : src}
          alt={alt}
          className={`${className} transition-opacity duration-300 ${loaded ? 'opacity-100' : 'opacity-0'}`}
          onLoad={() => setLoaded(true)}
          onError={() => { setError(true); setLoaded(true); }}
          {...rest}
        />
      )}
    </div>
  );
};

export default LazyImage;
