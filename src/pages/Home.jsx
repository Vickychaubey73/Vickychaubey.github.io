import React, { useEffect } from 'react';
import { Terminal } from 'lucide-react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Home = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      mirror: false,
      offset: 0,
      mobile: true,
    });
  }, []);

  return (
    <main className="min-h-screen text-gray-100 pt-14 md:pt-0" id='Home'>
      <section className="relative z-40 min-h-[calc(100vh-5rem)] md:min-h-screen flex items-center">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col md:flex-row items-center gap-12">
              {/* Left side - Main content */}
              <div className="flex-1 space-y-4 sm:space-y-8">
                <div 
                  data-aos="fade-down"
                  data-aos-delay="100"
                  className="inline-flex items-center space-x-2 px-4 py-2 rounded-full bg-purple-500/10 border border-purple-500/20"
                >
                  <Terminal size={16} className="text-purple-400" />
                  <span className="text-[10px] sm:text-sm text-purple-200">Full Stack Developer & Tech Enthusiast</span>
                </div>

                <h1 className="text-5xl md:text-8xl font-bold tracking-normal sm:tracking-tight">
                  <span 
                    data-aos="fade-right"
                    data-aos-delay="200"
                    className="block text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-500"
                   
                  >
                    Next Gen
                  </span>
                  <span 
                    data-aos="fade-right"
                    data-aos-delay="300"
                    className="block mt-0 sm:mt-2 text-white"
                  >
                    Developer
                  </span>
                </h1>

                <p 
                  data-aos="fade-up"
                  data-aos-delay="400"
                  className="sm:text-xl text-gray-300 max-w-2xl"
                >
                  <span>Driven to innovate in full stack development, game design, cybersecurity, and AI.</span> 
                  <span className="hidden sm:inline">Transforming ideas into reality through cutting-edge technology.</span>
                </p>

                <div 
                  data-aos="fade-up"
                  data-aos-delay="500"
                  className="flex gap-4"
                >
                  <button
                onClick={() => {
                  const element = document.getElementById('Projects');
                  if (element) {
                    const yOffset = -80; // Adjust this value based on your header height
                    const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
                    window.scrollTo({ top: y, behavior: 'smooth' });
                  }
                }}
                  className="group relative px-3 sm:px-5 py-2 sm:py-3 md:px-8 md:py-4 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl font-medium text-[0.9rem] sm:text-base md:text-lg transition-all hover:scale-105">
                    <span>Explore Projects</span>
                    <div className="absolute inset-0 rounded-xl bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </button>
                  <button
                onClick={() => {
                  const element = document.getElementById('About');
                  if (element) {
                    const yOffset = -80; // Adjust this value based on your header height
                    const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
                    window.scrollTo({ top: y, behavior: 'smooth' });
                  }
                }}
                  className="px-3 sm:px-5 py-2 sm:py-3 md:px-8 md:py-4 rounded-xl font-medium text-[0.9rem] sm:text-base md:text-lg border border-purple-500/20 hover:bg-purple-500/10 transition-all text-purple-200">
                    Learn More
                  </button>
                </div>
              </div>

              {/* Right Content - NFT Preview */}
              <div 
                data-aos="fade-left"
                data-aos-delay="600"
                className="relative block w-full md:w-auto max-w-full sm:max-w-xs mx-auto md:max-w-none md:mx-0"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-pink-500/20 blur-3xl"></div>
                <div className="relative backdrop-blur-sm border border-purple-500/20 rounded-2xl p-3 md:p-4 bg-purple-900/10">
                  <div className="aspect-square rounded-xl overflow-hidden">
                    <div className="w-full h-full bg-gradient-to-br from-purple-500/20 via-teal-500/20 to-pink-500/20 relative">
                      <img 
                        src="https://cdn.leonardo.ai/users/3cc2d765-c884-4ea6-9b33-43d5550d67e2/generations/5ef48ee9-49cd-4091-8ba6-54ab177328d8/Leonardo_Phoenix_09_a_mesmerizing_highcontrast_illustration_of_3.jpg?w=512"
                        alt="Tech Art"
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/40"></div>
                      <div className="absolute bottom-0 left-0 right-0 p-3 md:p-4">
                        <div className="backdrop-blur-sm bg-purple-900/30 rounded-lg p-3 md:p-4 border border-purple-500/20">
                          <div className="text-xs md:text-sm text-purple-200 mb-1">Innovation</div>
                          <div className="text-lg md:text-xl font-bold text-white">Never Ends</div>
                          <div className="text-xs md:text-sm text-purple-300">Dream Big, Code Bigger</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Home;