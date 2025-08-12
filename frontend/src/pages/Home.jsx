import React from "react";
import HeroSection from "../components/HeroSection";
import Card from "../components/Card";

const Home = () => {
  return (
    <>
      <HeroSection />
      <section className="grid grid-cols-1 md:grid-cols-3 gap-6 p-6">
        <Card
          title="Quality Education"
          description="We provide top-class education with experienced teachers."
          image="/images/education.jpg"
        />
        <Card
          title="Extracurricular Activities"
          description="Sports, arts, and clubs to help students grow holistically."
          image="/images/activities.jpg"
        />
        <Card
          title="Modern Facilities"
          description="Well-equipped classrooms, labs, and libraries."
          image="/images/facilities.jpg"
        />
      </section>
    </>
  );
};

export default Home;
