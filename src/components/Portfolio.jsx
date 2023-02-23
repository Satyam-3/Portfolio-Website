import React from "react";
import youtubeClone from '../images/portfolio_imgs/youtube_clone.png';
import cashRegister from '../images/portfolio_imgs/cash_register_manager.png';
import diceChallenge from '../images/portfolio_imgs/dice_challenge.png';
import naviSpeak from '../images/portfolio_imgs/speak_navi.png';
import luckyBirthday from '../images/portfolio_imgs/lucky_birthday.png';
import insideOut from '../images/portfolio_imgs/inside_out.png';


const Portfolio = () => {
  
    const portfolios = [
      
        {
            id: 1,
            src: youtubeClone,
            href: "https://youtubeclonesatyam.netlify.app/",
            link: "https://github.com/Satyam-3/youtube_clone",
            title:"YouTube Clone", 
            desc: "This is a youtube clone. A replica of main web application YouTube.com made this beautiful web application in my own way. I have build this project using ReactJs and Material UI Below is the link to live project and source code"
           
        },
        {
            id: 2,
            src: cashRegister,
            href: "https://cregister.netlify.app/",
            link: "https://github.com/Satyam-3/cash-register",
            title: "Cash Register manager",
            desc: "This is an app called cash register manager .This app shows how much cash you will receive from the shopkeeper. You can check the amount of cash you will receive back from shopkeeper by just adding bill amount and cash given. To build this project i have used HTML, CSS & JavaScript"
        },
        {
            id: 3,
            src: diceChallenge,
            href: "https://challengedice.netlify.app/",
            link: "https://github.com/Satyam-3/ChallengeDice/tree/main",
            title: "Dice Challenge",
            desc: " This is an app called dice challenge .This is a challenge between two players, the player who scores greater than the other player wins!. It has two dices which competes with each other To build this project i have used HTML, CSS & JavaScript. Here, is the link to a challenge"

        },
        {
            id: 4,
            src: naviSpeak,
            href: "https://speaknavi.netlify.app/",
            link: "https://github.com/Satyam-3/navi-speak",
            title: "Speak Navi",
            desc: "Do you want to speak in navi? The language which is spoken by the people of Pandora. The language which is used in the james cameron movie AVATAR To build this project i have used core fundamentals of web development which are HTML, CSS and VanillaJS If you wish to translate english to navi then click the below button."
        },
        {
            id: 5,
            src: luckyBirthday,
            href: "https://luckybash.netlify.app/",
            link: "https://github.com/Satyam-3/birthday-lucky",
            title: "Lucky Birthday",
            desc: "Do you want to know if your birthday is lucky or not? This is a webApp which can show you if your birthday is lucky or not, it's just a fun app nothing serious. By entering date of birth and lucky number you can check if your birthday is lucky or not I have build this project using HTML, CSS and JavaScript. Below is the link to live project and source code"
        },
        {
            id: 6,
            src: insideOut,
            href: "https://87cn5h.csb.app/",
            link: "https://github.com/Satyam-3/inside-Out",
            title: "Inside Out",
            desc: "This is my first React App This is an app called inside Out which is basically an emotion interpreter. I am often confused with the meanings and I keep going to emojipedia. Wanted to make something like for my use with different sets. To build this project i have used Here,ReactJs. Here, is the link to my first react app."
        },
        {
          id: 7,
          href: "https://satyamportfolio-sj.netlify.app/",
          link: "https://github.com/Satyam-3/Main-Portfolio",
          title: "Portfolio Website",
          desc: "This is my portfolio website build using core HTML5 & CSS3. This contains three pages first is home page which has some introduction about myself, second page is for projects which i have build and third one is the blogs page where i share my technical and non-technical blogs"
        }
        
    ];
  return (
    <div
      name="portfolio"
      className=" pt-25 bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-fit py-20"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500 text-orange-100 py-2">
            Portfolio
          </p>
          <p className="py-10 font-medium text-xl text-slate-300">Check out some of my work right here</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-2 gap-8 px-12 sm:px-0">
          {portfolios.map(({ id, src, href, link, desc, title }) => (
           
            <div key={id} className="px-4 py-1 hover:scale-105 duration-500 shadow-md shadow-gray-600 rounded-lg ">

              <p className="font-semibold font-colorduration-200 hover:scale-105 text-teal-300 text-center text-3xl">{title}</p>

              <p className="py-5 text-gray-400 font-medium content-center">{desc}</p>
              
              <div className="flex items-center justify-center gap-20">
                <a href={href}>

                <button  className="px-4 py-1 m-6 bottom  text-sm text-blue-100 font-semibold rounded-full border border-blue-200 hover:text-white hover:bg-cyan-600 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-cyan-600 focus:ring-offset-2">
                  Demo
                </button>
                </a>

                <a href={link}>
                <button className="px-4 py-1 m-6  text-sm text-blue-100 font-semibold rounded-full border border-blue-200 hover:text-white hover:bg-blue-600 hover:border-transparent focus:outline-none focus:ring-1 focus:ring-blue-600 focus:ring-offset-2">
                  Code
                </button>
                </a>
              
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;