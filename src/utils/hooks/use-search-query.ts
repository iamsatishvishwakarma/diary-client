import { useMemo } from 'react';
import { useLocation } from 'react-router-dom';

export default function useSearchQuery() {
  const location = useLocation();
  return useMemo(() => new URLSearchParams(location.search), [location.search]);
}
