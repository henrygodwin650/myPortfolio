import React from 'react'
import { AiFillGithub, AiFillLinkedin, AiFillMail, AiOutlineMail, AiOutlineWhatsApp, } from "react-icons/ai"

const Contact = () => {
  return (
    <div id='contact' className="mx-auto flex flex-col sm:columns-2 py-4  items-center justify-around">

      <h1 className="inline-block text-3xl font-bold mb-3 border-b-2 border-orange-500 pb-1">Contact</h1>
      <div className='grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-2 gap-6'>
        <div className="mt-5"><a
          href="https://linkedIn.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button className="text-gray-500 text-4xl px-8 border-3 transition rounded-xl py-1 hover:bg-gray-500 hover:text-white bg-white border-gray-500" type="button">
            <AiFillLinkedin />
          </button>
        </a>
          <p className="text-gray-600 text-center font-semibold">GitHub</p>
        </div>
        <div className="mt-5"><a
          href="https://linkedIn.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button className="text-blue-500 hover:bg-blue-500 rounded-xl text-4xl px-8 border-3 py-1 hover:text-white border-blue-500" type="button"><AiFillLinkedin /></button>
        </a>
          <p className="text-blue-600 text-center font-semibold">LinkedIn</p>
        </div>
        <div className="mt-5">
          <a
            href="mailto:henrygodwin650@gmail.com"
            className=""
          >
            <button className="text-green-500 cursor-pointer text-4xl px-8 border-3 rounded-xl hover:bg-green-500 py-1 hover:text-white transition border-green-500 bg-white" type="button">
              <AiOutlineWhatsApp />
            </button>
          </a>
          <p className="text-green-500 text-center font-semibold">WhatsApp</p>
        </div>
        <div className="mt-5">
          <a 
          href="mailto:henrygodwin650@gmail.com">
            <button className="text-red-500 text-4xl px-8 rounded-xl py-1 hover:bg-red-500 hover:text-white border-3 cursor-pointer border-red-500" type="button"><AiFillMail /></button>
          </a>
          <p className="text-center text-red-500 font-semibold">E-mail</p>
        </div>
      </div>
    </div>
  )
}

export default Contact