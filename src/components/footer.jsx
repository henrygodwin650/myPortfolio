import React from "react";

import {
  AiFillGithub,
  AiFillLinkedin,
  AiOutlineMail,
  AiOutlineWhatsApp,
} from "react-icons/ai";

export default function Footer() {

  const socials = [
    {
      icon: <AiFillGithub />,
      link: "https://github.com/henrygodwin650",
    },
    {
      icon: <AiFillLinkedin />,
      link: "https://linkedin.com/in/Henry-Godwin",
    },
    {
      icon: <AiOutlineWhatsApp />,
      link: "https://wa.me/2349074229485",
    },
    {
      icon: <AiOutlineMail />,
      link: "mailto:henrygodwin650@gmail.com",
    },
  ];

  return (
    <footer
      className="
        relative overflow-hidden
        py-14 px-5
        bg-slate-100 dark:bg-black
        border-t border-slate-200 dark:border-slate-800
      "
    >

      {/* Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-72 h-72 bg-orange-500/10 blur-3xl rounded-full"></div>

      <div className="max-w-6xl mx-auto relative z-10 text-center">

        {/* Name */}
        <h2
          className="
            text-3xl md:text-4xl
            font-extrabold
            text-slate-900 dark:text-white
          "
        >
          Henry <span className="text-orange-500">Godwin</span>
        </h2>

        {/* Subtitle */}
        <p
          className="
            mt-4
            text-gray-600 dark:text-gray-400
            max-w-xl mx-auto
          "
        >
          Frontend Developer passionate about building
          beautiful and responsive web applications.
        </p>

        {/* Socials */}
        <div
          className="
            flex justify-center
            gap-5
            mt-8
          "
        >

          {socials.map((social, index) => (
            <a
              key={index}
              href={social.link}
              target="_blank"
              rel="noopener noreferrer"
              className="
                w-14 h-14
                flex items-center justify-center
                rounded-2xl
                bg-white dark:bg-slate-900
                text-3xl
                text-slate-700 dark:text-white
                border border-slate-200 dark:border-slate-700
                hover:bg-orange-500
                hover:text-white
                hover:-translate-y-2
                transition-all duration-300
                shadow-lg
              "
            >
              {social.icon}
            </a>
          ))}
        </div>

        {/* Bottom */}
        <div
          className="
            mt-10 pt-6
            border-t border-slate-200 dark:border-slate-800
          "
        >
          <p
            className="
              text-sm
              text-gray-500 dark:text-gray-400
            "
          >
            © {new Date().getFullYear()} Henry Godwin.
            All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}