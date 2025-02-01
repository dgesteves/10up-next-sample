import { useEffect, RefObject } from 'react';

type Event = MouseEvent | TouchEvent;

export function useClickOutside<T extends HTMLElement>(
  ref: RefObject<T | null>,
  handler: (event: Event) => void,
  excludeRefs: RefObject<T | null>[] = [],
  listenCapturing: boolean = true,
) {
  useEffect(() => {
    function handleClickOutside(event: Event) {
      const el = ref.current;

      if (!el || el.contains(event.target as Node)) {
        return;
      }

      const isClickInside = excludeRefs.some(
        (excludeRef) =>
          excludeRef.current &&
          excludeRef.current.contains(event.target as Node),
      );

      if (isClickInside) {
        return;
      }

      handler(event);
    }

    document.addEventListener('mousedown', handleClickOutside, listenCapturing);
    document.addEventListener(
      'touchstart',
      handleClickOutside,
      listenCapturing,
    );

    return () => {
      document.removeEventListener(
        'mousedown',
        handleClickOutside,
        listenCapturing,
      );
      document.removeEventListener(
        'touchstart',
        handleClickOutside,
        listenCapturing,
      );
    };
  }, [ref, excludeRefs, handler, listenCapturing]);
}
