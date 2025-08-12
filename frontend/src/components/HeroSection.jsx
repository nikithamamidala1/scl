import React from "react";

const HeroSection = () => {
  return (
    <section
      className="bg-cover bg-center h-96 flex flex-col justify-center items-center text-white"
      style={{
        backgroundImage: "url('/images/school-hero.jpg')",
      }}
    >
      <h1 className="text-4xl font-bold drop-shadow-lg">Welcome to My School</h1>
      <p className="text-lg mt-2 drop-shadow-md">Learning for a Brighter Future</p>
    </section>
  );
};

export default HeroSection;
