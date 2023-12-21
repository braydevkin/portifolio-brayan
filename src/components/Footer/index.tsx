"use client";

import React from "react";

import { Github, Linkedin, MailCheck, Phone } from "lucide-react";
import Link from "next/link";

const Footer = () => {
  return (
    <footer id="contact-me" className=" shadow-sm p-14  w-screen">
      <div className="flex flex-col lg:flex-row space-y-4 justify-between items-start">
        <div className="w-full h-full mb-4">
          <h1 className="font-bold mb-2">Brayan Quirino</h1>
          <p className="italic text-sm text-justify mb-2">
            Education requires the greatest care because it influences the whole
            of life. Sêneca
          </p>
          <div className="flex flex-row items-center space-x-2">
            <Link
              href="https://www.linkedin.com/in/brayanquirino/"
              target="_blank"
            >
              <Linkedin size={18} />
            </Link>
            <Link href="https://github.com/braydevkin" target="_blank">
              <Github size={18} />
            </Link>
          </div>
        </div>
        <div className="w-full h-full space-y-2 lg:flex lg:flex-col lg:items-end lg:justify-end ">
          <div className="flex flex-row items-center space-x-2">
            <Phone size={18} />
            <span className="font-medium">+55 12 99608-7514</span>
          </div>
          <div className="flex flex-row items-center space-x-2">
            <MailCheck size={18} />
            <span className="font-medium">job.brquirino@gmail.com</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
