import { FC, ReactNode, useRef, useState } from "react";
const HorizontalCardList:FC<{children: ReactNode}> = ({children}) => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [showLeft, setShowLeft] = useState(false);
  const [showRight, setShowRight] = useState(true);
  const handleScroll = () => {
    if (scrollRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
      setShowLeft(scrollLeft > 0);
      setShowRight(scrollLeft + clientWidth < scrollWidth);
    }
  };
  const scrollLeft = () => scrollRef.current?.scrollBy({ left: -800, behavior: 'smooth' });
  const scrollRight = () => scrollRef.current?.scrollBy({ left: 800, behavior: 'smooth' });
  return (
      <div className="horizontal-card-list" ref={scrollRef} onScroll={handleScroll}>
         {showLeft && <button onClick={scrollLeft} className="absolute left-0 top-1/2 -translate-y-1/2 bg-white p-2 shadow-md rounded-full z-10 hover:bg-gray-100"><i className="fa-solid fa-angle-left"></i></button>}
        {children}
        {showRight && <button onClick={scrollRight} className="absolute right-0 top-1/2 -translate-y-1/2 bg-white p-2 shadow-md rounded-full z-10 hover:bg-gray-100"><i className="fa-solid fa-angle-right"></i></button>}
      </div>
  );
};
export default HorizontalCardList;
