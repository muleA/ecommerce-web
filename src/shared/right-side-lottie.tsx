import React, { useEffect, useRef } from 'react';
import lottie from 'lottie-web';

export const LottieAnimation = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const animation = lottie.loadAnimation({
      container: containerRef.current as any,
      renderer: 'svg',
      loop: true,
      autoplay: true,
      path: 'https://assets9.lottiefiles.com/packages/lf20_9Jbc9SbbyR.json',
      // Replace the path with your actual HTTPS URL
    });

    return () => {
      animation.destroy();
    };
  }, []);

  return <div ref={containerRef} />;
};


