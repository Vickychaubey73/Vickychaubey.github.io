import React, { useEffect, useState } from "react";
import {
  User,
  Briefcase,
  GraduationCap,
  Download,
  CircleUserRound,
  Mail,
  ArrowRight,
  ChevronDown,
  ChevronUp 
} from "lucide-react";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { db } from "../../firebase";
import { collection, getDocs } from 'firebase/firestore';

const About = () => {
  const [showAllExperience, setShowAllExperience] = useState(false);
  const [showAllAchievements, setShowAllAchievements] = useState(false);
  const [experienceData, setExperienceData] = useState([]);
  const [achievementsData, setAchievementsData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    AOS.init({
      duration: 800,
      once: false,
      mirror: false,
      offset: 100,
      easing: 'ease-out-cubic',
    });
  }, []);

  useEffect(() => {
    AOS.refresh();
  }, [showAllExperience, showAllAchievements]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Fetch experience data
        const experienceCollection = collection(db, "experience");
        const experienceSnapshot = await getDocs(experienceCollection);
        const experienceList = experienceSnapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data()
        }));
        
        experienceList.sort((a, b) => (a.order || 0) - (b.order || 0));
        setExperienceData(experienceList);

        // Fetch achievements data
        const achievementsCollection = collection(db, "achievements");
        const achievementsSnapshot = await getDocs(achievementsCollection);
        const achievementsList = achievementsSnapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data()
        }));
        
        achievementsList.sort((a, b) => (a.order || 0) - (b.order || 0));
        setAchievementsData(achievementsList);

        setLoading(false);
      } catch (error) {
        console.error("Error fetching data: ", error);
        setLoading(false);
        setExperienceData([]);
        setAchievementsData([]);
      }
    };

    fetchData();
  }, []);

  const displayedExperience = experienceData && experienceData.length > 0
    ? (showAllExperience ? experienceData : experienceData.slice(0, 2))
    : [];

  const displayedAchievements = achievementsData && achievementsData.length > 0
    ? (showAllAchievements ? achievementsData : achievementsData.slice(0, 3))
    : [];

  const actionButtons = [
    {
      text: "Download CV",
      icon: <Download className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />,
      href: "https://drive.google.com/file/d/1uBsaJSAK3e5rFFkIVnXU9gup4dnD74iS/view?usp=drivesdk",
      target: "_blank"
    },
    {
      text: "View Projects",
      icon: <CircleUserRound className="relative top-[2px] w-4 h-4 sm:w-5 sm:h-5 mr-2" />,
      href: "/#Projects"
    },
    {
      text: "Contact Me",
      icon: <Mail className="relative top-[2px] w-4 h-4 sm:w-5 sm:h-5 mr-2" />,
      href: "#Contact"
    }
  ];

  if (loading) {
    return (
      <div className="min-h-screen text-gray-100 flex items-center justify-center">
        <div className="text-xl">Loading...</div>
      </div>
    );
  }

  return (
    <main className="min-h-screen text-gray-100 relative" id="About">
      <section className="relative min-h-[85vh] flex items-center">
        <div className="container mx-auto px-4 py-16 relative z-10">
          <div className="w-full mx-auto">
            <div className="flex flex-col items-center gap-16">
              {/* Header with Title */}
              <div className="text-center space-y-4 w-full">
                <div 
                  className="inline-flex items-center space-x-2 px-4 py-2 rounded-full bg-purple-500/10 border border-purple-500/20" 
                  data-aos="zoom-in"
                  data-aos-delay="100"
                >
                  <User size={16} className="text-purple-400" />
                  <span className="text-sm text-purple-200">About Me</span>
                </div>

                <h1 
                  className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl flex-col flex lg:flex-row justify-center gap-x-5 font-bold tracking-tight"
                  data-aos="fade-up"
                  data-aos-delay="200"
                  data-aos-duration="1000"
                >
                  <span className="block text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-500">
                    Passionate
                  </span>
                  <span className="block text-white">Developer</span>
                </h1>

                <p 
                  className="text-lg sm:text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto px-4"
                  data-aos="fade-up"
                  data-aos-delay="300"
                  data-aos-duration="1000"
                >
                  Innovative problem-solver with a passion for creating
                  impactful digital experiences that merge cutting-edge
                  technology with intuitive design.
                </p>
              </div>

              {/* Profile Section */}
              <div 
                className="relative w-full max-w-6xl" 
                data-aos="flip-up"
                data-aos-delay="400"
                data-aos-duration="1200"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-pink-500/20 blur-3xl"></div>
                <div className="relative backdrop-blur-sm border border-purple-500/20 rounded-2xl p-6 sm:p-8 md:p-12 bg-purple-900/10">
                  <div className="flex flex-col md:flex-row gap-8 md:gap-12 items-center">
                    {/* Profile Image with Hover Effect */}
                    <div 
                      className="relative group" 
                      data-aos="zoom-in-right"
                      data-aos-delay="500"
                      data-aos-duration="1000"
                    >
                      <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-pink-500/20 blur-xl rounded-full"></div>
                      <div className="relative h-48 w-48 sm:h-64 sm:w-64 rounded-full overflow-hidden border-purple-500/20 transition-transform duration-300 group-hover:scale-105">
                        <div className="w-full h-full bg-gradient-to-br from-purple-500/20 via-teal-500/20 to-pink-500/20">
                          <div className="w-full h-full overflow-hidden">
                            <img
                              src="https://cdn.leonardo.ai/users/3cc2d765-c884-4ea6-9b33-43d5550d67e2/generations/5ef48ee9-49cd-4091-8ba6-54ab177328d8/Leonardo_Phoenix_09_a_mesmerizing_highcontrast_illustration_of_3.jpg?w=512"
                              alt=""
                              className="w-full h-full object-cover transform transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3"
                            />
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Bio Information */}
                    <div 
                      className="flex-1 space-y-6 md:space-y-8 text-center md:text-left" 
                      data-aos="zoom-in-left"
                      data-aos-delay="600"
                      data-aos-duration="1000"
                    >
                      <h2 className="text-3xl sm:text-4xl font-bold text-white">
                        Hi, I'm Vicky-Chaubey
                      </h2>
                      <p className="text-base sm:text-lg md:text-xl text-gray-300 px-4 md:px-0">
                        a young programming enthusiast. Currently studying in Nims University, learning full stack development alongside game development, cybersecurity and AI & ML. Hit me up if you are interested in any projects and want to grow while learning.
                      </p>
                      <div className="flex flex-wrap justify-center md:justify-start gap-3 sm:gap-4">
                        {actionButtons.map((button, index) => (
                          <a
                            key={button.text}
                            href={button.href}
                            target={button.target}
                            className="flex items-center px-4 sm:px-5 py-2 sm:py-3 rounded-full bg-purple-500/10 text-sm sm:text-base text-purple-200 border border-purple-500/20 hover:bg-purple-500/20 transition-colors cursor-pointer"
                            data-aos="fade-up"
                            data-aos-delay={700 + (index * 100)}
                          >
                            {button.icon}
                            {button.text}
                          </a>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Journey Header */}
      <div
        className="relative pt-8 sm:pt-12 md:pt-16 flex flex-col items-center px-4 sm:px-6 md:px-8"
        data-aos="fade-down"
        data-aos-duration="1000"
      >
        <h1 className="text-[1.6rem] sm:text-3xl lg:text-4xl xl:text-5xl flex flex-row sm:flex-col md:flex-row justify-center gap-2 sm:gap-y-3 md:gap-x-5 font-bold tracking-tight mb-3 sm:mb-4 text-center">
          <span
            className="block text-white"
            data-aos="fade-right"
            data-aos-delay="100"
          >
            My Journey
          </span>
          <span
            className="block text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-500"
            data-aos="fade-left"
            data-aos-delay="200"
          >
            of Growth
          </span>
        </h1>
        <div
          className="w-16 sm:w-20 md:w-24 h-0.5 sm:h-1 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full mt-0 sm:mt-3 md:mt-4"
          data-aos="zoom-in"
          data-aos-delay="300"
        ></div>
      </div>

      {/* Experience & Achievement */}
      <section className="py-12 relative">
        <div className="px-0 sm:px-[10%] mx-auto">
          <div className="w-full px-4 mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
              {/* Experience Card */}
              <div 
                className="group relative" 
                data-aos="flip-left"
                data-aos-duration="1200"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-teal-500 to-blue-500 opacity-0 group-hover:opacity-10 transition-opacity rounded-2xl blur-xl" />
                <div className="relative h-full bg-purple-900/10 backdrop-blur-sm rounded-2xl p-6 sm:p-8 md:p-10 border border-purple-500/20 transition-transform hover:-translate-y-2">
                  <div className="mb-8">
                    <Briefcase className="w-8 sm:w-10 h-8 sm:h-10 text-teal-400" />
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-bold mb-8 text-white">
                    Experience
                  </h3>

                  <div className="space-y-8 sm:space-y-10">
                    {displayedExperience.map((job, index) => (
                      <div
                        key={job.id || index}
                        className="relative pl-10 border-l-2 border-purple-500/20"
                        data-aos="fade-right"
                        data-aos-delay={200 * (index + 1)}
                      >
                        <div className="absolute left-0 top-1.5 w-4 h-4 rounded-full bg-teal-400 -translate-x-2"></div>
                        <h4 className="text-lg sm:text-xl font-semibold text-white">
                          Full Stack Development & Artificial Intelligence
                        </h4>
                        <div className="text-base sm:text-lg text-purple-200 mb-3">
                          
                        </div>
                        <div className="text-gray-300 text-base sm:text-lg space-y-2">
                          {(job.descriptions || []).map((desc, i) => (
                            <div 
                              key={i} 
                              className="flex items-start"
                              data-aos="fade-up"
                              data-aos-delay={100 * (i + 1)}
                            >
                              <ArrowRight className="h-5 w-5 text-teal-400 flex-shrink-0 mt-[4px] pr-1" />
                              <span className="ml-1">{desc}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>

                  {experienceData.length > 2 && (
                    <button
                      onClick={() => setShowAllExperience(!showAllExperience)}
                      className="mt-6 flex items-center justify-center w-full px-4 py-2 text-sm font-medium text-purple-200 bg-purple-500/10 rounded-full hover:bg-purple-500/20 transition-colors"
                    >
                      {showAllExperience ? (
                        <>
                          View Less <ChevronUp className="ml-2 h-4 w-4" />
                        </>
                      ) : (
                        <>
                      View More <ChevronDown className="ml-2 h-4 w-4" />
                        </>
                      )}
                    </button>
                  )}
                </div>
              </div>

              {/* Achievements Card */}
              <div 
                className="group relative" 
                data-aos="flip-right"
                data-aos-duration="1200"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 opacity-0 group-hover:opacity-10 transition-opacity rounded-2xl blur-xl" />
                <div className="relative h-full bg-purple-900/10 backdrop-blur-sm rounded-2xl p-6 sm:p-8 md:p-10 border border-purple-500/20 transition-transform hover:-translate-y-2">
                  <div className="mb-8">
                    <GraduationCap className="w-8 sm:w-10 h-8 sm:h-10 text-purple-400" />
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-bold mb-8 text-white">
                    Achievements
                  </h3>

                  <div className="space-y-8 sm:space-y-10">
                    {displayedAchievements.map((achievement, index) => (
                      <div
                        key={achievement.id || index}
                        className="relative pl-10 border-l-2 border-purple-500/20"
                        data-aos="fade-left"
                        data-aos-delay={200 * (index + 1)}
                      >
                        <div className="absolute left-0 top-1.5 w-4 h-4 rounded-full bg-teal-400 -translate-x-2"></div>
                        <h4 className="text-lg sm:text-xl font-semibold text-white">
                          Bachelor of technology
                          (Computer Science & Engineering)
                        </h4>
                        <div className="text-base sm:text-lg text-purple-200 mb-3">
                          NIMS UNIVERSITY(Rajasthan,jaipur)| 2022-2026 - persent
                        </div>
                        <div className="text-gray-300 text-base sm:text-lg space-y-2">
                          {(achievement.descriptions || []).map((desc, i) => (
                            <div 
                              key={i} 
                              className="flex items-start"
                              data-aos="fade-up"
                              data-aos-delay={100 * (i + 1)}
                            >
                              <ArrowRight className="h-5 w-5 text-teal-400 flex-shrink-0 mt-[4px] pr-1" />
                              <span className="ml-1">{desc}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>

                  {achievementsData.length > 3 && (
                    <button
                      onClick={() => setShowAllAchievements(!showAllAchievements)}
                      className="mt-6 flex items-center justify-center w-full px-4 py-2 text-sm font-medium text-purple-200 bg-purple-500/10 rounded-full hover:bg-purple-500/20 transition-colors"
                    >
                      {showAllAchievements ? (
                        <>
                          View Less <ChevronUp className="ml-2 h-4 w-4" />
                        </>
                      ) : (
                        <>
                          View More <ChevronDown className="ml-2 h-4 w-4" />
                        </>
                      )}
                    </button>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default About;