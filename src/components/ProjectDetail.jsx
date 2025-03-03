import { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import useFetchProjects from "../hooks/useFetchProjects";
import AOS from "aos";
import "aos/dist/aos.css";

const ProjectDetail = () => {
  const { projects, loading, error } = useFetchProjects();
  const { id } = useParams();
  const navigate = useNavigate();
  const project = projects.find((p) => p.id === id);

  useEffect(() => {
    window.scrollTo(0, 0);
    AOS.init({
      duration: 1000,
      once: true,
      easing: 'ease-out'
    });
  }, []);

  const handleBackClick = (e) => {
    e.preventDefault();
    navigate('/');
    
    setTimeout(() => {
     
      const isMobile = window.innerWidth <= 768; 
      
   
      const scrollFactor = isMobile ? 4.5 : 2.9;
      
    
      const scrollPosition = window.innerHeight * scrollFactor;
      
    
      window.scrollTo({
        top: scrollPosition,
        behavior: 'smooth'
      });
    }, 700); // Menambah timeout untuk memastikan navigasi selesai dahulu
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-purple-500"></div>
      </div>
    );
  }

  if (error || !project) {
    return (
      <div className="min-h-screen flex items-center justify-center text-white">
        <div className="bg-red-500/20 p-6 rounded-lg border border-red-500/20">
          <h2 className="text-xl font-bold mb-2">Error</h2>
          <p>{error?.message || "Project not found"}</p>
        </div>
      </div>
    );
  }

  return (
    <main className="min-h-[91vh] text-white p-4 md:p-8 relative flex items-center justify-center">
      <div className="max-w-7xl mx-auto">
  
        <button
          onClick={handleBackClick}
          className="inline-flex items-center text-purple-400 hover:text-purple-300 mb-6"
          data-aos="fade-right"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Projects
        </button>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Left Column - Main Content */}
          <div className="h-full flex flex-col">
            {/* Hero Card */}
            <div 
              className="bg-purple-900/20 backdrop-blur-sm rounded-2xl border border-purple-500/20 shadow-xl overflow-hidden mb-8"
              data-aos="fade-up"
            >
              <div className="relative h-72 md:h-80 group">
                <img
                  src={project.imageUrl}
                  alt={project.title}
                  className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-purple-900 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h1 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-400">
                    {project.title}
                  </h1>
                </div>
              </div>
            </div>

            {/* Description Card */}
            <div 
              className="bg-purple-900/20 backdrop-blur-sm rounded-2xl p-6 border border-purple-500/20 shadow-xl mb-8"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <div className="space-y-4">
                <h2 className="text-2xl font-semibold text-white">About the Project</h2>
                <p className="text-gray-300 leading-relaxed text-lg">
                  {project.description}
                </p>
              </div>
            </div>

            {/* Technologies Preview */}
            <div 
              className="bg-purple-900/20 backdrop-blur-sm rounded-2xl p-6 border border-purple-500/20 shadow-xl"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <h2 className="text-2xl font-semibold mb-4 text-white">Tech Stack</h2>
              <div className="flex flex-wrap gap-3">
                {project.technologies.map((tech, index) => (
                  <span
                    key={index}
                    className="px-4 py-2 bg-purple-500/10 rounded-full text-purple-200 border border-purple-500/20 transition-all duration-300 hover:bg-purple-500/20 hover:scale-105 cursor-default"
                    data-aos="fade-up"
                    data-aos-delay={250 + (index * 50)}
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column - Features */}
          <div className="h-full flex flex-col">
            <div 
              className="flex-1 bg-purple-900/20 backdrop-blur-sm rounded-2xl p-6 border border-purple-500/20 shadow-xl"
              data-aos="fade-left"
              data-aos-delay="300"
            >
              <h2 className="text-2xl font-semibold mb-6 text-white">Key Features</h2>
              <div className="grid gap-4">
                {project.Features?.map((feature, index) => (
                  <div
                    key={index}
                    className="group p-4 bg-purple-500/10 rounded-xl border border-purple-500/20 hover:bg-purple-500/20 transition-all duration-300 transform hover:-translate-y-1"
                    data-aos="fade-left"
                    data-aos-delay={350 + (index * 100)}
                  >
                    <div className="flex items-start space-x-4">
                      <div className="w-8 h-8 bg-purple-400/20 rounded-lg flex items-center justify-center group-hover:bg-purple-400/30 transition-colors">
                        <span className="font-bold text-purple-300">{index + 1}</span>
                      </div>
                      <p className="text-gray-300 flex-1">{feature}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default ProjectDetail;