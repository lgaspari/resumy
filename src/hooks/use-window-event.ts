import { useEffect } from 'react';

/**
 * Reference https://mantine.dev/hooks/use-window-event/
 */
export function useWindowEvent<K extends keyof WindowEventMap>(
  type: K,
  listener: (this: Window, ev: WindowEventMap[K]) => void,
  options?: boolean | AddEventListenerOptions,
) {
  useEffect(() => {
    window.addEventListener(type, listener, options);
    return () => window.removeEventListener(type, listener, options);
  }, [listener, type]);
}
