import React from "react"
import { AiFillGithub, AiFillLinkedin, AiOutlineMail, AiOutlineWhatsApp,} from "react-icons/ai"

export const Footer = () => {
  return (
    <footer className="bg-slate-100 dark:bg-slate-950 dark:text-white py-10">
      <div className="container mx-auto px-4 text-center space-y-6">

        {/* Name */}
        <h2 className="text-xl font-semibold">Henry Godwin</h2>

        {/* Social Links */}
        <div className="flex justify-center gap-6 text-2xl">

          <a
            href="https://github.com/henrygodwin650"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-500 transition"
          >
            <AiFillGithub />
          </a>

          <a
            href="https://linkedIn.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-500 transition"
          >
            <AiFillLinkedin />
          </a>

          <a
            href="mailto:henrygodwin650@gmail.com"
            className="hover:text-green-500 transition"
          >
            <AiOutlineWhatsApp />
          </a>

          <a
            href="mailto:henrygodwin650@gmail.com"
            className="hover:text-red-500 transition"
          >
            <AiOutlineMail />
          </a>

        </div>

        {/* Copyright */}
        <p className="text-sm text-gray-600 dark:text-gray-400">
          &copy; {new Date().getFullYear()} Henry Godwin. All rights reserved.
        </p>

      </div>
    </footer>
  )
}