import React, { useState, useRef, useEffect } from 'react';
import './ProductZoom.css';

interface ProductZoomProps {
  imageSrc: string;
  highResImageSrc: string;
  zoomLevel?: number;
  altText?: string;
}

const ProductZoom: React.FC<ProductZoomProps> = ({ imageSrc, highResImageSrc, zoomLevel = 1.2, altText = "Product Image" }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const zoomedImageSideRef = useRef<HTMLImageElement>(null);
  const lensRef = useRef<HTMLDivElement>(null); // Ref for the lens area
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current || !isHovering || !lensRef.current) return;

    const containerRect = containerRef.current.getBoundingClientRect();
    const x = e.clientX - containerRect.left;
    const y = e.clientY - containerRect.top;

    setMousePos({ x, y });

    // Calculate lens position (center the lens on the mouse)
    const lensX = x - lensRef.current.offsetWidth / 2;
    const lensY = y - lensRef.current.offsetHeight / 2;

    // Keep lens *completely* within image bounds.  Crucial!
    const maxX = containerRect.width - lensRef.current.offsetWidth;
    const maxY = containerRect.height - lensRef.current.offsetHeight;

    const clampedX = Math.max(0, Math.min(lensX, maxX));
    const clampedY = Math.max(0, Math.min(lensY, maxY));


    lensRef.current.style.left = clampedX + 95 + 'px';
    lensRef.current.style.top = clampedY + 85 + 'px';
    // Calculate zoom image position to show the correct area
    if (zoomedImageSideRef.current) {
      const zoomX = -clampedX * (zoomLevel - 1); // Adjust for zoom level
      const zoomY = -clampedY * (zoomLevel - 1);
      
      zoomedImageSideRef.current.style.left = zoomX + 'px';
      zoomedImageSideRef.current.style.top = zoomY + 'px';
      lensRef.current.style.width = 100 + 'px';
      lensRef.current.style.height = 100 + 'px';

    }
  };

  useEffect(() => {
    if (zoomedImageSideRef.current && containerRef.current && isHovering) {
      const containerRect = containerRef.current.getBoundingClientRect();
      const offsetX = (mousePos.x / containerRect.width) * 100;
      const offsetY = (mousePos.y / containerRect.height) * 100;

      zoomedImageSideRef.current.style.transformOrigin = `${offsetX}% ${offsetY}%`;
    }
  }, [mousePos, isHovering]);

  return (
    <div className="product-container">
      <div className="image-gallery">
      <div className="main-image-container" ref={containerRef} onMouseMove={handleMouseMove} onMouseEnter={() => setIsHovering(true)} onMouseLeave={() => setIsHovering(false)}>
          <img className="product-image" src={imageSrc} alt={altText} />
          <div className={`absolute z-10 border border-red-500 cursor-cell`} ref={lensRef} style={{ display: isHovering ? 'block' : 'none' }}></div> {/* Lens area */}
          <div className="overlay" style={{ display: isHovering ? 'block' : 'none' }}></div> {/* Overlay to dim rest of image */}
        </div>
      </div>
      <div className="zoomed-image-side" style={{ display: isHovering ? 'block' : 'none' }}>
        <img
          ref={zoomedImageSideRef}
          src={highResImageSrc}
          alt={altText}
          style={{ transform: `scale(${zoomLevel})`, maxWidth: '100%', height: 'auto' }}
        />
      </div>
      <div className="product-details">
         {/* Product details content */}
        <h2>Product Details</h2>
        <p>Toned Milk</p>
        <p>Healthy and fresh</p>
        {/* ... more details */}
      </div>
    </div>
  );
};

export default ProductZoom;