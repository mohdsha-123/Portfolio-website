import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white "
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>

        <p className="text-xl mt-20">
           I'm a Full Stack Developer passionate about creating innovative and efficient web applications. With expertise in both front-end and back-end technologies, I design seamless user experiences and build robust server-side solutions. My skill set includes HTML, CSS, JavaScript frameworks, server-side languages, database management, and deployment practices. I thrive on solving complex problems and continuously learning to stay ahead in the tech landscape.
        </p>

        <br />

        <p className="text-xl pb-20 ">
          I’m passionate about building engaging and effective web applications. With a strong focus on problem-solving and delivering high-quality results, I thrive in collaborative environments and embrace new technologies with enthusiasm. My goal is to create impactful solutions that enhance user experiences and drive success.
        </p>
      </div>
    </div>
  );
};

export default About;
