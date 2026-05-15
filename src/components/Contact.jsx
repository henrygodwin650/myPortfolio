import React from 'react';
import { 
  AiFillGithub, 
  AiFillLinkedin, 
  AiOutlineMail, 
  AiOutlineWhatsApp 
} from "react-icons/ai";

const Contact = () => {
  return (
    <section id="contact" className="py-16 md:py-20 px-5 bg-white dark:bg-slate-950">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl dark:text-white/80 font-bold mb-3">Contact Me</h2>
          <p className="text-gray-600 dark:text-gray-400">
            Let’s connect — I’m open to opportunities and collaborations
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
          <a href="https://github.com/henrygodwin650" target="_blank" rel="noopener noreferrer" className="group">
            <div className="contact-card">
              <AiFillGithub className="text-5xl group-hover:scale-110 transition" />
              <p className="mt-4 font-semibold">GitHub</p>
            </div>
          </a>

          <a href="https://linkedin.com/in/Henry-Godwin" target="_blank" rel="noopener noreferrer" className="group">
            <div className="contact-card">
              <AiFillLinkedin className="text-5xl text-blue-600 group-hover:scale-110 transition" />
              <p className="mt-4 font-semibold text-blue-600">LinkedIn</p>
            </div>
          </a>

          <a href="https://wa.me/2349074229485" target="_blank" rel="noopener noreferrer" className="group">
            <div className="contact-card">
              <AiOutlineWhatsApp className="text-5xl text-green-600 group-hover:scale-110 transition" />
              <p className="mt-4 font-semibold text-green-600">WhatsApp</p>
            </div>
          </a>

          <a href="mailto:henrygodwin650@gmail.com" className="group">
            <div className="contact-card">
              <AiOutlineMail className="text-5xl text-red-500 group-hover:scale-110 transition" />
              <p className="mt-4 font-semibold text-red-500">Email</p>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;