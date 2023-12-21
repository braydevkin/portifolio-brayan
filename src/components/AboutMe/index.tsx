"use client";

import Image from "next/image";
import React from "react";

import ProfileImage from "../../assets/perfil.jpeg";

const AboutMe = () => {
  return (
    <section id="about-me" className="w-full h-auto px-4 py-6">
      <div className="w-full h-auto flex flex-col justify-center items-center space-y-4 md:flex-row">
        <Image
          src={ProfileImage}
          alt="Brayan's profile image"
          width={260}
          height={100}
          className="rounded-full shadow-xl "
        />
        <div className="text-normal italic text-justify md:w-1/2 md:px-12 space-y-3">
          <h1 className="font-bold">About me</h1>
          <p>
            {`
        Hello, my name is Brayan Quirino, I'm from Brazil, in love with my
        country and its riches. Today, at the age of 24, I have the honor of
        being a software engineer, a profession I've been carrying out with a
        lot of love and affection for 4 years. Throughout this journey, I've
        been through incredible and diverse projects and I've been able to get
        to know the needs of each client up close.
        `}
          </p>

          <p className="p-2 shadow-sm rounded-sm">{`Loyalty is a two-way street. If I'm asking for it from you,then you're getting it from me" H.Specter from Suits`}</p>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
