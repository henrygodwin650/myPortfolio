import UserImage from "../assets/2026-02-07 (5).jpg"

export default function Hero() {
  return (
    <>
      <div className="w-full px-2 sm:p-7.5 bg-gray-300 dark:bg-gray-900 mx-auto dark:text-white">
        <div className="container grid grid-cols-1 sm:grid-cols-2 items-center space-y-2 py-12 sm:py-0 sm:h-150">
          <div>
            <div className="space-y-2 lg:me-4 grid justify-items-center sm:justify-items-start">
              <p className="uppercase">Hello</p>
              <p className="text-4xl md:text-6xl font-bold text-orange-500">I'm Henry Godwin</p>
              <p className="text-3xl md:text-xl text-gray-700 dark:text-white">
                Freelance web & <br /> FrontEnd Developer
              </p>
              <p className="card text-black/75 dark:text-white/70 text-center sm:text-left">
                I'm a passionate frontend developer with a knack for crafting visually stunning and user-friendly websites. With a strong foundation in HTML, CSS, and JavaScript, I specialize in creating responsive and interactive web applications that leave a lasting impression. My dedication to clean code and attention to detail ensures that every project I work on is not only functional but also aesthetically pleasing. Let's collaborate to bring your web ideas to life!
              </p>
              <a href="mailto:henrygodwin650@gmail.com" className="primary-btn inline-block my-6 mr-6">
                Hire Me
              </a>
              
            </div>
          </div>
          {/* image container */}
          <div>
            <img src={UserImage} alt="Not found" className="w-full md:max-w-lg sm:w-[70%]" />
          </div>
        </div>
      </div>
    </>
  )
}