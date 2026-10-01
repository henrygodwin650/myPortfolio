import React from "react";
import { ServicesBox } from "./ServicesBox";

export default function Services() {
  return (
    <section
      id="services"
      className="
        py-20 px-5
        bg-gradient-to-b
        from-slate-100 via-white to-slate-200
        dark:from-black dark:via-slate-950 dark:to-slate-900
      "
    >
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="text-center mb-16">

          <p
            className="
              uppercase tracking-[0.3em]
              text-orange-500
              text-sm font-semibold
            "
          >
            What I Do
          </p>

          <h2
            className="
              mt-4
              text-4xl md:text-5xl
              font-extrabold
              text-slate-900 dark:text-white
            "
          >
            Services
          </h2>

          <p
            className="
              mt-5
              max-w-2xl mx-auto
              text-lg
              text-gray-600 dark:text-gray-400
            "
          >
            I create modern responsive frontend experiences,
            interactive web applications, and creative UI designs.
          </p>
        </div>

        {/* Services */}
        <ServicesBox />
      </div>
    </section>
  );
}