import React, { useRef, useState } from 'react';
import { ExternalLink } from 'lucide-react';
import { Link } from 'react-router-dom';

const CardProject = ({
  title,
  description,
  imageUrl = "/api/placeholder/400/250",
  projectUrl = "#",
  className = ""
}) => {
  const divRef = useRef(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [opacity, setOpacity] = useState(0);

  const handleMouseMove = (e) => {
    if (!divRef.current) return;
    const rect = divRef.current.getBoundingClientRect();
    setPosition({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  const handleMouseEnter = () => {
    setOpacity(0.6);
  };

  const handleMouseLeave = () => {
    setOpacity(0);
  };

  return (
    <div
      ref={divRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={`group relative rounded-2xl border border-purple-500/20 bg-purple-900/20 backdrop-blur-sm overflow-hidden transition-transform duration-300 hover:-translate-y-2 ${className} shadow-2xl
        md:h-[32rem] lg:h-[33rem] 2xl:h-[32rem] flex flex-col`} // Added flex column
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 ease-in-out"
        style={{
          opacity,
          background: `radial-gradient(600px circle at ${position.x}px ${position.y}px, rgba(168, 85, 247, 0.15), transparent 40%)`,
        }}
      />
      
      <div className="relative h-64 w-full overflow-hidden"> {/* Kept original height */}
        <img
          src={imageUrl}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-purple-900/50 to-transparent" />
      </div>

      <div className="p-6 flex-1 flex flex-col justify-between"> {/* Added flex container with justify-between */}
        <div className="space-y-4">
          <h3 className="text-2xl font-bold text-white">{title}</h3>
          <p className="text-gray-300">{description}</p>
        </div>
        
        <div className="mt-4 flex justify-start"> {/* Button container with justify-start */}
          <Link
            to={projectUrl}
            className="inline-flex items-center px-4 py-2 rounded-full bg-purple-500/10 text-purple-200 border border-purple-500/20 hover:bg-purple-500/20 transition-colors duration-300"
          >
            View Detail
            <ExternalLink className="ml-2 w-4 h-4" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CardProject;