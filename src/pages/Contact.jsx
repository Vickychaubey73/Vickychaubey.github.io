import React, { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import {
  Mail,
  MessageSquare,
  Send,
  Github,
  Linkedin,
  Twitter,
  ArrowRight,
  Instagram,
  Phone
} from 'lucide-react';
import Swal from 'sweetalert2';

const Contact = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
      easing: 'ease-out'
    });
  }, []);

  const [isSubmitting, setIsSubmitting] = useState(false);

  const socialLinks = [
    { 
      icon: <Github className="w-5 h-5" />, 
      label: "Github",
      href: "https://github.com/Vickychaubey73"
    },
    { 
      icon: <Linkedin className="w-5 h-5" />, 
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/vicky-chaubey?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
    },
    { 
      icon: <Twitter className="w-5 h-5" />, 
      label: "Twitter",
      href: "#"
    },
    { 
      icon: <Instagram className="w-5 h-5" />, 
      label: "Instagram",
      href: "https://www.instagram.com/vicky_chaubey373"
    }
  ];

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    const form = e.target;
    const formData = new FormData(form);
    
    try {
      const response = await fetch('https://formsubmit.co/ajax/vickychaubey373@Gmail.com', {
        method: 'POST',
        body: formData
      });
      
      const data = await response.json();
      
      if (data.success) {
        Swal.fire({
          title: 'Message Sent!',
          text: 'Thank you for reaching out. I will get back to you soon!',
          icon: 'success',
          confirmButtonColor: '#8B5CF6'
        });
        form.reset();
      } else {
        throw new Error('Form submission failed');
      }
    } catch (error) {
      Swal.fire({
        title: 'Oops!',
        text: 'Something went wrong. Please try again later.',
        icon: 'error',
        confirmButtonColor: '#8B5CF6'
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <main className="h-auto text-gray-100 pt-[3%]" id='Contact'>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-purple-900/40 via-black to-black" />
      
      <div className="container mx-auto px-4 py-16 relative">
        <div className="flex flex-col lg:flex-row gap-12 lg:items-stretch">
          <div className="w-full lg:flex lg:flex-col" data-aos="fade-right">
            <div className="flex-1 flex flex-col p-8 lg:p-10 rounded-3xl border border-purple-500/20 bg-gradient-to-r from-purple-500/5 to-transparent backdrop-blur-sm">
              <div className="space-y-8">
                <div className="space-y-4">
                  <div className="inline-flex items-center space-x-2 px-4 py-2 rounded-full bg-purple-500/10 border border-purple-500/20" data-aos="fade-down" data-aos-delay="100">
                    <MessageSquare size={16} className="text-purple-400" />
                    <span className="text-sm text-purple-200">Contact</span>
                  </div>
                  
                  <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight" data-aos="fade-up" data-aos-delay="200">
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-500">
                      Let's Build
                    </span>
                    <br />
                    <span className="text-white">Something Great</span>
                  </h1>

                  <p className="text-lg text-gray-300 max-w-lg" data-aos="fade-up" data-aos-delay="300">
                    Got a project in mind? Let's discuss how we can work together to create something extraordinary.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3" data-aos="fade-up" data-aos-delay="400">
                  <div className="group flex items-center gap-4 p-4 rounded-xl bg-gradient-to-r from-purple-500/5 to-transparent border border-purple-500/10 hover:bg-purple-500/10 transition-colors">
                    <Mail className="w-5 h-5 text-purple-400" />
                    <div>
                      <p className="text-sm text-gray-400">Mail me at</p>
                      <p className="text-base text-gray-200">Vickychaubey373@gmail.com</p>
                    </div>
                  </div>

                  <div className="group flex items-center gap-4 p-4 rounded-xl bg-gradient-to-r from-purple-500/5 to-transparent border border-purple-500/10 hover:bg-purple-500/10 transition-colors">
                    <Phone className="w-5 h-5 text-purple-400" />
                    <div>
                      <p className="text-sm text-gray-400">Call me at</p>
                      <p className="text-base text-gray-200">+91 99-3970-7286</p>
                    </div>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2" data-aos="fade-up" data-aos-delay="500">
                  {socialLinks.map((social, index) => (
                    <a
                      key={index}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 rounded-lg bg-purple-500/5 hover:bg-purple-500/10 border border-purple-500/10 hover:border-purple-500/20 transition-colors"
                    >
                      {social.icon}
                      <span className="text-sm">{social.label}</span>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="w-full lg:flex lg:flex-col" data-aos="fade-left">
            <div className="relative h-full">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500/15 to-pink-500/15 blur-2xl rounded-3xl" />
              <div className="relative h-full backdrop-blur-xl rounded-3xl border border-purple-500/20 p-8 lg:p-10">
                <form onSubmit={handleSubmit} className="h-full flex flex-col space-y-6">
                  {/* Hidden inputs for FormSubmit configuration */}
                  <input type="hidden" name="_subject" value="New Contact Form Submission" />
                  <input type="hidden" name="_captcha" value="false" />
                  <input type="hidden" name="_template" value="box" />

                  <div data-aos="fade-up" data-aos-delay="100">
                    <input
                      type="text"
                      name="name"
                      placeholder="Full Name"
                      className="w-full bg-purple-500/5 border border-purple-500/20 rounded-xl px-6 py-4 focus:outline-none focus:border-purple-500/40 transition-colors placeholder:text-gray-500 text-base"
                      required
                    />
                  </div>

                  <div data-aos="fade-up" data-aos-delay="200">
                    <input
                      type="email"
                      name="email"
                      placeholder="Email Address"
                      className="w-full bg-purple-500/5 border border-purple-500/20 rounded-xl px-6 py-4 focus:outline-none focus:border-purple-500/40 transition-colors placeholder:text-gray-500 text-base"
                      required
                    />
                  </div>

                  <div className="flex-1" data-aos="fade-up" data-aos-delay="300">
                    <textarea
                      name="message"
                      rows={5}
                      placeholder="Tell me about your project..."
                      className="w-full h-full bg-purple-500/5 border border-purple-500/20 rounded-xl px-6 py-4 focus:outline-none focus:border-purple-500/40 transition-colors placeholder:text-gray-500 text-base resize-none"
                      required
                    />
                  </div>

                  <button 
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full group flex items-center justify-center gap-3 text-base font-medium bg-gradient-to-r from-purple-500 to-pink-500 text-white px-6 py-4 rounded-xl hover:opacity-90 transition-all duration-300 hover:gap-4 disabled:opacity-70"
                    data-aos="fade-up"
                    data-aos-delay="400"
                  >
                    {isSubmitting ? 'Sending...' : 'Send Message'}
                    <ArrowRight className="w-5 h-5 transition-all duration-300" />
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Contact;