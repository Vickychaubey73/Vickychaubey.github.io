import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import CardProject from "../components/CardProject";
import useFetchProjects from "../hooks/useFetchProjects";
import { useLocation } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

const Projects = () => {
  const { projects, loading, error } = useFetchProjects();
  const [currentPage, setCurrentPage] = useState(1);
  const projectsPerPage = 6;
  const location = useLocation();

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
      easing: 'ease-out'
    }); 
  }, []);

  // Hitung total halaman dan proyek yang ditampilkan
  const totalPages = Math.ceil(projects.length / projectsPerPage);
  const indexOfLastProject = currentPage * projectsPerPage;
  const indexOfFirstProject = indexOfLastProject - projectsPerPage;
  const currentProjects = projects.slice(indexOfFirstProject, indexOfLastProject);

  // Tampilkan loading atau error jika diperlukan
  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <main className="min-h-screen text-gray-100" id="Projects">
      <div className="relative pt-16 pb-12 flex flex-col items-center" id="Tes">
        <h1 
          className="text-3xl sm:text-4xl md:text-5xl flex justify-center gap-x-2 sm:gap-x-5 font-bold tracking-tight mb-4"
          data-aos="fade-down"
        >
          <span className="block text-white">My</span>
          <span className="block text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-500">
            Projects
          </span>
        </h1>
        <div 
          className="w-24 h-1 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full mt-0 sm:mt-4"
          data-aos="fade-up"
          data-aos-delay="200"
        ></div>
      </div>
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {currentProjects.map((project, index) => (
            <div
              key={project.id}
              data-aos="fade-up"
              data-aos-delay={100 * (index % 3)}
            >
              <CardProject
                title={project.title}
                description={project.description}
                imageUrl={project.imageUrl}
                projectUrl={`/project/${project.id}`}
              />
            </div>
          ))}
        </div>
        {totalPages > 1 && (
          <div 
            className="flex justify-center items-center mt-16 space-x-3"
            data-aos="fade-up"
            data-aos-delay="400"
          >
            <button
              onClick={() => setCurrentPage(currentPage - 1)}
              disabled={currentPage === 1}
              className="px-6 py-3 mx-1 rounded-xl text-sm font-medium transition-all duration-300 backdrop-blur-md border border-white/10 bg-white/5 text-gray-300 hover:bg-white/10 hover:text-white hover:border-white/20"
            >
              <div className="flex items-center">
                <ChevronLeft className="w-5 h-5 mr-2" />
                <span>Previous</span>
              </div>
            </button>
            {Array.from({ length: totalPages }, (_, i) => i + 1).map((number) => (
              <button
                key={number}
                onClick={() => setCurrentPage(number)}
                className={`px-6 py-3 mx-1 rounded-xl text-sm font-medium transition-all duration-300 backdrop-blur-md border ${
                  currentPage === number
                    ? "bg-purple-500/30 text-white border-purple-500/50 shadow-lg shadow-purple-500/20"
                    : "bg-white/5 text-gray-300 hover:bg-white/10 hover:text-white hover:border-white/20"
                }`}
              >
                {number}
              </button>
            ))}
            <button
              onClick={() => setCurrentPage(currentPage + 1)}
              disabled={currentPage === totalPages}
              className="px-6 py-3 mx-1 rounded-xl text-sm font-medium transition-all duration-300 backdrop-blur-md border border-white/10 bg-white/5 text-gray-300 hover:bg-white/10 hover:text-white hover:border-white/20"
            >
              <div className="flex items-center">
                <span>Next</span>
                <ChevronRight className="w-5 h-5 ml-2" />
              </div>
            </button>
          </div>
        )}
      </div>
    </main>
  );
};

export default Projects;