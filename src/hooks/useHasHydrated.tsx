import { useState, useEffect } from 'react';

function useHasHydrated() {
    const [hasHydrated, setHasHydrated] = useState(false);
  
    useEffect(() => {
      setHasHydrated(true);
    }, []);
  
    return hasHydrated;
}
  
export default useHasHydrated;