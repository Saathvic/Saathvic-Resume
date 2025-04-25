import { useEffect, useState, useRef } from 'react';

// More sophisticated animation system with professional sequencing
export function useSectionTransitions() {
  const [activeSectionId, setActiveSectionId] = useState<string>('hero');
  const observersRef = useRef<IntersectionObserver[]>([]);
  const animationsApplied = useRef<Set<Element>>(new Set());

  useEffect(() => {
    // Clean up any existing observers
    if (observersRef.current.length > 0) {
      observersRef.current.forEach(observer => observer.disconnect());
      observersRef.current = [];
    }
    
    // Professional animation configuration
    const animationConfigs = {
      // Heading animations
      headings: {
        initial: { opacity: 0, transform: 'translateY(-30px)' },
        animate: { opacity: 1, transform: 'translateY(0)' },
        transition: 'all 0.7s cubic-bezier(0.16, 1, 0.3, 1)'
      },
      
      // Paragraph and text animations
      text: {
        initial: { opacity: 0, transform: 'translateY(20px)' },
        animate: { opacity: 1, transform: 'translateY(0)' },
        transition: 'all 0.6s cubic-bezier(0.16, 1, 0.3, 1)'
      },
      
      // Card and container animations with subtle scaling
      cards: {
        initial: { opacity: 0, transform: 'translateY(40px) scale(0.97)' },
        animate: { opacity: 1, transform: 'translateY(0) scale(1)' },
        transition: 'all 0.8s cubic-bezier(0.16, 1, 0.3, 1)'
      },
      
      // Images and media with subtle rotation
      media: {
        initial: { opacity: 0, transform: 'translateY(30px) rotate(-2deg)' },
        animate: { opacity: 1, transform: 'translateY(0) rotate(0)' },
        transition: 'all 0.9s cubic-bezier(0.16, 1, 0.3, 1)'
      },
      
      // Buttons and interactive elements with pop effect
      buttons: {
        initial: { opacity: 0, transform: 'scale(0.9)' },
        animate: { opacity: 1, transform: 'scale(1)' },
        transition: 'all 0.5s cubic-bezier(0.34, 1.56, 0.64, 1)'
      },
      
      // List items with staggered effect
      listItems: {
        initial: { opacity: 0, transform: 'translateX(-20px)' },
        animate: { opacity: 1, transform: 'translateX(0)' },
        transition: 'all 0.6s cubic-bezier(0.16, 1, 0.3, 1)'
      }
    };
    
    // Helper to apply animation style based on element type
    const applyAnimationStyle = (element: Element, type: keyof typeof animationConfigs, delay: number) => {
      if (animationsApplied.current.has(element)) return;
      
      const config = animationConfigs[type];
      const el = element as HTMLElement;
      
      // Apply initial state (invisible)
      Object.entries(config.initial).forEach(([prop, value]) => {
        el.style[prop as any] = value as string;
      });
      
      // Add class for transition properties
      el.style.transition = config.transition;
      el.style.transitionDelay = `${delay}s`;
      
      // Mark as having animations applied
      animationsApplied.current.add(element);
    };
    
    // Helper to trigger animation to final state (visible)
    const triggerAnimation = (element: Element, type: keyof typeof animationConfigs) => {
      const config = animationConfigs[type];
      const el = element as HTMLElement;
      
      // Apply final animated state
      Object.entries(config.animate).forEach(([prop, value]) => {
        el.style[prop as any] = value as string;
      });
    };
    
    // Function to determine element animation type
    const getElementType = (element: Element): keyof typeof animationConfigs => {
      const tagName = element.tagName.toLowerCase();
      const classList = Array.from(element.classList);
      
      if (['h1', 'h2', 'h3', 'h4', 'h5', 'h6'].includes(tagName)) {
        return 'headings';
      } else if (tagName === 'p' || tagName === 'span') {
        return 'text';
      } else if (tagName === 'button' || classList.some(c => c.includes('button'))) {
        return 'buttons';
      } else if (tagName === 'img' || classList.some(c => c.includes('image'))) {
        return 'media';
      } else if (tagName === 'li' || classList.some(c => c.includes('list-item'))) {
        return 'listItems';
      } else if (classList.some(c => c.includes('card') || c.includes('glass'))) {
        return 'cards';
      }
      
      // Default to cards animation for most other elements
      return 'cards';
    };
    
    // Map all animatable elements and prepare them
    const prepareAnimations = () => {
      const sections = document.querySelectorAll('section');
      
      sections.forEach(section => {
        // Define which elements should animate in each section
        const elementSelectors = [
          'h1', 'h2', 'h3', 'h4', 'h5', 'h6',
          'p', 'span:not(.icon)',
          'button', '.button', 'a.glass',
          '.card', '.glass-card', '.glass',
          'img', '.image',
          'li', '.list-item',
          '.grid > div', '.flex > div:not(.icon)',
          'form', 'input', 'textarea'
        ].join(',');
        
        const elementsToAnimate = Array.from(section.querySelectorAll(elementSelectors))
          // Filter out nested elements to prevent duplicate animations
          .filter(el => {
            const parent = el.parentElement;
            if (!parent) return true;
            // Skip if parent is already being animated and is a container
            const parentIsCard = parent.classList.contains('card') || 
                                parent.classList.contains('glass-card') ||
                                parent.classList.contains('glass');
            const parentIsCell = parent.classList.contains('grid-item') ||
                               parent.parentElement?.classList.contains('grid');
            return !(parentIsCard || parentIsCell);
          });
        
        // Apply initial states with staggered delays
        elementsToAnimate.forEach((element, index) => {
          const baseDelay = 0.07; // Base delay between elements
          const delay = baseDelay * (index % 10); // Reset after 10 elements
          const type = getElementType(element);
          applyAnimationStyle(element, type, delay);
        });
      });
    };
    
    // Call once at init
    setTimeout(prepareAnimations, 50);
    
    // Track active section
    const sectionObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting && entry.intersectionRatio > 0.1) {
            setActiveSectionId(entry.target.id);
          }
        });
      },
      { threshold: [0.1], rootMargin: '-10% 0px -10% 0px' }
    );
    
    document.querySelectorAll('section[id]').forEach(section => {
      sectionObserver.observe(section);
    });
    
    observersRef.current.push(sectionObserver);
    
    // Create precise observer for animating elements
    const elementObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const element = entry.target;
            const type = getElementType(element);
            triggerAnimation(element, type);
            
            // Once triggered, no need to observe this element
            elementObserver.unobserve(element);
          }
        });
      },
      { 
        threshold: [0.15],
        rootMargin: '-5% 0px -5% 0px'
      }
    );
    
    // Wait for DOM to settle, then observe all prepared elements
    setTimeout(() => {
      animationsApplied.current.forEach(element => {
        elementObserver.observe(element);
      });
      
      // For elements already in view
      animationsApplied.current.forEach(element => {
        const rect = element.getBoundingClientRect();
        const viewHeight = Math.max(document.documentElement.clientHeight, window.innerHeight);
        if (!(rect.bottom < 0 || rect.top - viewHeight >= 0)) {
          const type = getElementType(element);
          triggerAnimation(element, type);
          elementObserver.unobserve(element);
        }
      });
    }, 200);
    
    observersRef.current.push(elementObserver);
    
    return () => {
      observersRef.current.forEach(observer => observer.disconnect());
    };
  }, []);

  return { activeSectionId };
}