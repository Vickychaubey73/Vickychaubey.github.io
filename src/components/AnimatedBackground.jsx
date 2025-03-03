import React from 'react';

const AnimatedBackground = () => {
  return (
    <div className="fixed inset-0 w-full h-full min-h-screen bg-black">

      {/* Animated gradient circles */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_0%_0%,#4f46e5,transparent_40%)] animate-pulse" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_100%_100%,#7c3aed,transparent_40%)] animate-pulse delay-75" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_100%_0%,#2dd4bf,transparent_40%)] animate-pulse delay-150" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_0%_100%,#f472b6,transparent_40%)] animate-pulse delay-300" />
      
      {/* Overlay gradients */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-purple-900/30 to-black" />
      
      {/* Noise texture overlay */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMDAiIGhlaWdodD0iMzAwIj48ZmlsdGVyIGlkPSJhIiB4PSIwIiB5PSIwIj48ZmVUdXJidWxlbmNlIGJhc2VGcmVxdWVuY3k9Ii43NSIgc3RpdGNoVGlsZXM9InN0aXRjaCIgdHlwZT0iZnJhY3RhbE5vaXNlIi8+PGZlQ29sb3JNYXRyaXggdHlwZT0ic2F0dXJhdGUiIHZhbHVlcz0iMCIvPjwvZmlsdGVyPjxyZWN0IHdpZHRoPSIzMDAiIGhlaWdodD0iMzAwIiBmaWx0ZXI9InVybCgjYSkiIG9wYWNpdHk9IjAuMDUiLz48L3N2Zz4=')] opacity-50" />
    </div>
  );
};

export default AnimatedBackground;