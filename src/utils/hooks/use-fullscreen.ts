import { useCallback, useEffect, useState } from 'react';

export const useFullscreen = () => {
  const [isFullscreen, setIsFullscreen] = useState(false);

  const enter = useCallback((element: HTMLElement | null) => {
    if (!element) return;
    element.requestFullscreen?.();
    setIsFullscreen(true);
  }, []);

  const exit = useCallback(() => {
    document.exitFullscreen?.();
    setIsFullscreen(false);
  }, []);

  useEffect(() => {
    const onChange = () => setIsFullscreen(!!document.fullscreenElement);
    document.addEventListener('fullscreenchange', onChange);
    return () => document.removeEventListener('fullscreenchange', onChange);
  }, []);

  return { isFullscreen, enter, exit };
};
