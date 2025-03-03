import React, { useState, useEffect } from 'react';
import { MessageSquare, Send, User } from 'lucide-react';
import AOS from 'aos';
import 'aos/dist/aos.css';

import {
  collection,
  query,
  orderBy,
  onSnapshot,
  addDoc,
  serverTimestamp
} from 'firebase/firestore';
import { db } from '../../firebase';

const Comment = () => {
  const [messages, setMessages] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [newComment, setNewComment] = useState('');
  const [sender, setSender] = useState('');

  useEffect(() => {
    // Initialize AOS
    AOS.init({
      duration: 1000,
      offset:20,
      once: false,
      easing: 'ease-out'
    });

    // Set up real-time listener for messages
    const messagesRef = collection(db, 'messages');
    const q = query(messagesRef, orderBy('timestamp', 'desc'));
    
    const unsubscribe = onSnapshot(q, (snapshot) => {
      const messagesData = snapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data(),
        timestamp: doc.data().timestamp?.toDate() || new Date(),
      }));
      setMessages(messagesData);
      setIsLoading(false);
    });
    
    return () => unsubscribe();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!newComment.trim() || !sender.trim()) return;

    try {
      await addDoc(collection(db, 'messages'), {
        sender: sender,
        message: newComment,
        timestamp: serverTimestamp()
      });
      setNewComment('');
      setSender('');
    } catch (error) {
      console.error('Error adding comment: ', error);
    }
  };

  return (
    <div className="h-auto flex items-center justify-center px-4 sm:px-[10.6%] pb-12 relative">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-purple-900/40 via-black to-black" />
      
      <style jsx global>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 8px;
        }
        
        .custom-scrollbar::-webkit-scrollbar-track {
          background: rgba(139, 92, 246, 0.1);
          border-radius: 10px;
        }
        
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: linear-gradient(to bottom, #8b5cf6, #ec4899);
          border-radius: 10px;
        }
        
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: linear-gradient(to bottom, #9f6eff, #f87bc5);
        }
      `}</style>
      
      <div 
        className="w-full mx-auto bg-gradient-to-r from-purple-500/5 to-transparent backdrop-blur-sm rounded-3xl overflow-hidden shadow-xl border border-purple-500/20 relative"
        data-aos="fade-up"
      >
        {/* Header with Input Form */}
        <div className="p-6">
          <div className="flex items-center" data-aos="fade-right" data-aos-delay="100">
            <div className="inline-flex items-center space-x-2 px-4 py-2 rounded-full bg-purple-500/10 border border-purple-500/20">
              <MessageSquare size={16} className="text-purple-400" />
              <span className="text-sm text-purple-200">Messages</span>
              <div className="bg-gradient-to-r from-purple-500 to-pink-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center ml-2">
                {messages.length}
              </div>
            </div>
            <span className="ml-4 text-gray-300 text-[0.55rem] sm:text-sm ">Here are the messages or comments shared by others.</span>
          </div>

          {/* Comment Input Form */}
          <form onSubmit={handleSubmit} className="mt-6 flex flex-col md:flex-row gap-3" data-aos="fade-up" data-aos-delay="200">
            <input
              type="text"
              value={sender}
              onChange={(e) => setSender(e.target.value)}
              placeholder="Your name"
              className="px-6 py-3 bg-purple-500/5 border border-purple-500/20 rounded-xl focus:outline-none focus:border-purple-500/40 transition-colors placeholder:text-gray-500 text-base text-white flex-grow md:w-1/4"
              required
            />
            <input
              type="text"
              value={newComment}
              onChange={(e) => setNewComment(e.target.value)}
              placeholder="Add a comment..."
              className="px-6 py-3 bg-purple-500/5 border border-purple-500/20 rounded-xl focus:outline-none focus:border-purple-500/40 transition-colors placeholder:text-gray-500 text-base text-white flex-grow"
              required
            />
            <button
              type="submit"
              className="group flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-xl hover:opacity-90 transition-all duration-300 hover:gap-3"
            >
              <span>Send</span>
              <Send size={16} className="transition-all duration-300" />
            </button>
          </form>
        </div>
        
        {/* Messages List with Custom Scrollbar */}
        {isLoading ? (
          <div className="flex justify-center items-center p-12">
            <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-purple-500 border-r-2"></div>
          </div>
        ) : (
          <div className="relative px-6 pb-6" data-aos="fade-up" data-aos-delay="300">
            <div className="custom-scrollbar max-h-[400px] overflow-x-hidden overflow-y-auto pr-2 space-y-2">
              {messages.map((message, index) => (
                <div
                  key={message.id}
                  className="bg-gradient-to-r from-purple-500/10 to-transparent rounded-xl p-4 border border-purple-500/10 hover:border-purple-500/20 transition-all"
                  data-aos="fade-left"
                  data-aos-delay={400 + (index * 100)}
                >
                  <div className="flex items-center">
                    <div className="flex-shrink-0 w-9 h-9 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center mr-4">
                      <User size={16} className="text-white" />
                    </div>
                    <div>
                      <div className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-500 text-sm font-medium">
                        {message.sender || message.name}
                      </div>
                      <div className="text-gray-200 text-sm">{message.phone || message.message}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Comment;