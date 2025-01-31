import { useEffect, useState } from "react";
import "../styles/cursor.css";

const Cursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isExpanded, setIsExpanded] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setPosition({ x: e.pageX - 15, y: e.pageY - 15 });
    };

    const handleClick = () => {
      setIsExpanded(true);
      setTimeout(() => setIsExpanded(false), 500);
    };

    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("click", handleClick);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("click", handleClick);
    };
  }, []);

  if (typeof window === "undefined") {
    return null; // Ensure the component only renders in the browser
  }

  return (
    <div
      className={`cursor ${isExpanded ? "expand" : ""}`}
      style={{ left: `${position.x}px`, top: `${position.y}px` }}
    >
      <div className="cursor-center"></div>
    </div>
  );
};

export default Cursor;
