import { useRef, useCallback, useEffect } from 'react';

export default function useScrollFadeIn(){
  const dom = useRef();
  
  const handleScroll = useCallback(([entry]) => {
      const { current } = dom;
    	
    	if(entry.isIntersecting) {
        current.classList.add('fadeInUp');
      }
    }, []);
  
  useEffect(() => {
    let observer;
    const { current } = dom;
    
    if (current) {
      observer = new IntersectionObserver(handleScroll, { threshold: 0.2 });
      observer.observe(current);
      
      return () => observer && observer.disconnect();
    };
  }, [handleScroll]);
  
    return {
    ref: dom,
    style: {
      opacity: 0
    }
  };
}
