import { useEffect, useRef, useState } from 'react';

interface UseCountUpOptions {
    end: number;
    duration?: number; // ms
    start?: number;
    decimals?: number;
    easing?: 'linear' | 'easeOut' | 'easeInOut';
}

function applyEasing(t: number, easing: string): number {
    switch (easing) {
        case 'easeOut':  return 1 - Math.pow(1 - t, 3);
        case 'easeInOut': return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
        default:         return t; // linear
    }
}

/**
 * Lightweight count-up hook that fires once when the ref element enters the viewport.
 * Uses IntersectionObserver + requestAnimationFrame — no extra libraries needed.
 *
 * @returns [displayValue, ref]  where displayValue is the current animated number (as a string)
 */
export function useCountUp(options: UseCountUpOptions): [string, React.RefObject<HTMLElement | null>] {
    const {
        end,
        duration = 1800,
        start = 0,
        decimals = 0,
        easing = 'easeOut',
    } = options;

    const ref = useRef<HTMLElement>(null);
    const [value, setValue] = useState(start);
    const hasRun = useRef(false);
    const rafId = useRef<number>(0);

    useEffect(() => {
        const el = ref.current;
        if (!el) return;

        const run = () => {
            if (hasRun.current) return;
            hasRun.current = true;

            let startTime: number | null = null;

            const step = (timestamp: number) => {
                if (!startTime) startTime = timestamp;
                const elapsed = timestamp - startTime;
                const progress = Math.min(elapsed / duration, 1);
                const eased = applyEasing(progress, easing);
                const current = start + (end - start) * eased;
                setValue(parseFloat(current.toFixed(decimals)));
                if (progress < 1) {
                    rafId.current = requestAnimationFrame(step);
                }
            };

            rafId.current = requestAnimationFrame(step);
        };

        const observer = new IntersectionObserver(
            ([entry]) => { if (entry.isIntersecting) run(); },
            { threshold: 0.4 }
        );
        observer.observe(el);

        return () => {
            observer.disconnect();
            cancelAnimationFrame(rafId.current);
        };
    }, [end, start, duration, decimals, easing]);

    return [value.toFixed(decimals), ref as React.RefObject<HTMLElement | null>];
}
