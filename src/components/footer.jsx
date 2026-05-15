import React from "react";
import { AiFillGithub, AiFillLinkedin, AiOutlineMail, AiOutlineWhatsApp } from "react-icons/ai";

export default function Footer() {
  return (
    <footer className="bg-slate-100 dark:bg-slate-950 dark:text-white py-12 px-5">
      <div className="max-w-6xl mx-auto text-center space-y-6">
        <h2 className="text-2xl font-semibold">Henry Godwin</h2>

        <div className="flex justify-center gap-8 text-3xl">
          <a href="https://github.com/henrygodwin650" target="_blank" className="hover:text-orange-500 transition"><AiFillGithub /></a>
          <a href="https://linkedin.com/in/Henry-Godwin" target="_blank" className="hover:text-orange-500 transition"><AiFillLinkedin /></a>
          <a href="https://wa.me/2349074229485" target="_blank" className="hover:text-orange-500 transition"><AiOutlineWhatsApp /></a>
          <a href="mailto:henrygodwin650@gmail.com" className="hover:text-orange-500 transition"><AiOutlineMail /></a>
        </div>

        <p className="text-sm text-gray-500 dark:text-gray-400">
          © {new Date().getFullYear()} Henry Godwin. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}