import { useState, useEffect } from 'react';

// Custom hook to handle media queries in a React-friendly way
// This hook works across different screen sizes
export function useMedia(query: string, defaultValue: boolean = false) {
  const [matches, setMatches] = useState(defaultValue);

  useEffect(() => {
    // On the client side, check if window and matchMedia are available
    if (typeof window !== 'undefined' && window.matchMedia) {
      const mediaQuery = window.matchMedia(query);
      
      // Set the initial value
      setMatches(mediaQuery.matches);
      
      // Define a callback function to handle changes to the media query
      const handleChange = (event: MediaQueryListEvent) => {
        setMatches(event.matches);
      };
      
      // Add the event listener
      mediaQuery.addEventListener('change', handleChange);
      
      // Clean up the event listener when the component unmounts
      return () => {
        mediaQuery.removeEventListener('change', handleChange);
      };
    }
    
    return undefined;
  }, [query]);
  
  return matches;
}
