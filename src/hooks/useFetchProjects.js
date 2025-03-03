import { useState, useEffect } from "react";
import { db } from "../../firebase";
import { collection, getDocs } from "firebase/firestore";

const useFetchProjects = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        console.log("Fetching projects from Firestore...");
        
        const querySnapshot = await getDocs(collection(db, "projects"));
        console.log("Documents fetched:", querySnapshot.docs.length);

        const projectsData = querySnapshot.docs.map((doc) => {
          const data = doc.data();
          console.log("Raw Data:", data); // Log data mentah dari Firestore

          return {
            id: doc.id, 
            title: data.Title, 
            description: data.Description,
            imageUrl: data.Img,
            Features: data.Features || [],
            technologies: data["Technologies "] || [], // Pastikan tidak ada typo/spasi
          };
        });

        console.log("Processed Projects:", projectsData);
        setProjects(projectsData);
      } catch (err) {
        console.error("Error fetching projects:", err);
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    fetchProjects();
  }, []);

  return { projects, loading, error };
};

export default useFetchProjects;
