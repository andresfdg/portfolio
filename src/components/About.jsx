import React from "react";
import profile from "../assets/images/profile2.png";
import cv from "../assets/cv.pdf";
const About = () => {
  const info = [];
  return (
    <section id="about" className="py-10 text-white">
      <div className="text-center mt-8">
        <h3 className="text-4xl font-semibold">
          About <span className="text-cyan-600">Me</span>
        </h3>

        <div className="flex md:flex-row flex-col-reverse items-center md:gap-6 gap-12 px-10 max-w-6xl mx-auto">
          <div className="p-2">
            <div className="text-gray-300 my-3">
              <p className="text-justify leading-7 w-11/12 mx-auto">
                Highly motivated and skilled software engineer with 1.5 years of
                experience with extensive knowledge in designing, developing and
                deploying software solutions, as well as a proven track record
                of delivering projects on time and within budget. My expertise
                encompasses a wide range of programming languages, including Vue
                js, React, SQL and Python-fastapi.
              </p>
              <div className="flex mt-10 items-center gap-7">
                {info.map((content) => (
                  <div key={content.text}>
                    <h3 className="md:text-4xl text-2xl font-semibold text-white">
                      {content.count}
                      <span className="text-cyan-600">+</span>{" "}
                    </h3>
                    <span className="md:text-base text-xs">{content.text}</span>
                  </div>
                ))}
              </div>
              <br />
              <br />
              <a href={cv} download>
                <button className=" bg-cyan-600 font-semibold text-white py-3 px-6 rounded-full hover:bg-cyan-800 cursor-pointer">
                  Download CV
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
