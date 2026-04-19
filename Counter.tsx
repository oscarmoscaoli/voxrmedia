// src/components/Counter.jsx
import { useEffect, useState } from 'react';

export default function Counter({ value = 0, suffix = "" }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const target = Number(value);
    if (isNaN(target)) return;

    let start = 0;
    const duration = 2000;
    const increment = target / (duration / 16);

    const timer = setInterval(() => {
      start += increment;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);

    return () => clearInterval(timer);
  }, [value]);

  return <span className="tabular-nums font-[900]">{count}{suffix}</span>;
}