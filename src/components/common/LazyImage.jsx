import React, { useState, useEffect } from 'react';

/**
 * LazyImage component for lazy loading images
 * @param {string} src - Image source URL
 * @param {string} alt - Alt text for the image
 * @param {string} className - CSS class for the image
 * @param {Object} style - Inline styles for the image
 * @param {Function} onLoad - Callback function when image loads
 * @param {string} placeholderSrc - Optional placeholder image to show while loading
 * @param {Object} props - Any additional props to pass to the img element
 */
const LazyImage = ({
  src,
  alt,
  className,
  style,
  onLoad,
  placeholderSrc,
  ...props
}) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [currentSrc, setCurrentSrc] = useState(placeholderSrc || null);

  useEffect(() => {
    // Create a new image object
    const img = new Image();
    img.src = src;

    img.onload = () => {
      setCurrentSrc(src);
      setIsLoaded(true);
      if (onLoad) onLoad();
    };

    return () => {
      // Clean up
      img.onload = null;
    };
  }, [src, onLoad]);

  return (
    <img
      src={currentSrc || src}
      alt={alt}
      className={className}
      style={{
        opacity: isLoaded ? 1 : 0.5,
        transition: 'opacity 0.3s ease-in-out',
        ...style
      }}
      loading="lazy"
      decoding="async"
      {...props}
    />
  );
};

export default LazyImage; 