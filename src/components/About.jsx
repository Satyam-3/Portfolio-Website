import React from "react";


const About = () => {
  return (
    <div
      name="about"
      className="w-full h-fit bg-gradient-to-b from-gray-800 to-black text-white py-20"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500 text-orange-100">
            About
          </p>
        </div>

        <p className="text-xl mt-2 text-slate-300">
        Welcome to my portfolio website! My name is Satyam Joshi, and I'm a web developer with a passion for creating beautiful and functional websites. I specialize in using HTML5, CSS3, ReactJS, Tailwind CSS, JavaScript, SQL and Node.js to bring ideas to life on the web.
        I discovered my love for web development while studying computer science in college. Since then, I've been honing my skills through personal projects and academic work. I'm always striving to improve my craft and stay up-to-date with the latest web development trends and technologies.
        </p>

        <br />

        <p className="text-xl text-slate-300">
        In addition to web development, I'm also interested in travelling and listening to music. I believe that a well-rounded life outside of work is just as important as professional        development, and I try to balance both as best I can. If you're interested in working with me on a project or just want to say hello, please don't hesitate to get in touch. You can reach me by clicking Contact at top right corner. <br /><br />

        Thank you for visiting my website, and I hope you enjoy browsing my portfolio!
        </p>
      </div>
    </div>
  );
};

export default About;