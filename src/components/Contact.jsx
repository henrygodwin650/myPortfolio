import React from 'react';
import {
  AiFillGithub,
  AiFillLinkedin,
  AiOutlineMail,
  AiOutlineWhatsApp
} from "react-icons/ai";

const contactLinks = [
  {
    name: "GitHub",
    icon: <AiFillGithub />,
    link: "https://github.com/henrygodwin650",
    color: "group-hover:text-gray-900 dark:group-hover:text-white"
  },
  {
    name: "LinkedIn",
    icon: <AiFillLinkedin />,
    link: "https://linkedin.com/in/Henry-Godwin",
    color: "group-hover:text-blue-600"
  },
  {
    name: "WhatsApp",
    icon: <AiOutlineWhatsApp />,
    link: "https://wa.me/2349074229485",
    color: "group-hover:text-green-500"
  },
  {
    name: "Email",
    icon: <AiOutlineMail />,
    link: "mailto:henrygodwin650@gmail.com",
    color: "group-hover:text-red-500"
  }
];

const Contact = () => {
  return (
    <section
      id="contact"
      className="py-20 px-5 bg-gradient-to-b from-white to-slate-100 dark:from-slate-950 dark:to-slate-900"
    >
      <div className="max-w-6xl mx-auto">

        {/* Heading */}
        <div className="text-center mb-14">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-4">
            Contact Me
          </h2>

          <p className="text-gray-600 dark:text-gray-400 text-base md:text-lg max-w-2xl mx-auto">
            Let’s connect — I’m open to freelance work, collaborations,
            and frontend development opportunities.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">

          {contactLinks.map(({ name, icon, link, color }, index) => (
            <a
              key={index}
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="group"
            >
              <div
                className="
                  flex flex-col items-center justify-center
                  h-44 rounded-3xl
                  bg-white/70 dark:bg-slate-800/70
                  backdrop-blur-lg
                  border border-gray-200 dark:border-slate-700
                  shadow-md hover:shadow-2xl
                  transition-all duration-300
                  hover:-translate-y-3
                  hover:scale-105
                "
              >

                {/* Icon */}
                <div
                  className={`
                    text-5xl md:text-6xl
                    text-gray-700 dark:text-gray-200
                    transition-all duration-300
                    ${color}
                    group-hover:scale-125
                  `}
                >
                  {icon}
                </div>

                {/* Text */}
                <p
                  className={`
                    mt-5 text-lg font-semibold
                    text-gray-700 dark:text-gray-300
                    transition-colors duration-300
                    ${color}
                  `}
                >
                  {name}
                </p>
              </div>
            </a>
          ))}

        </div>
      </div>
    </section>
  );
};

export default Contact;