import React from 'react';
import IMG1 from '../../assets/eco2.png';
import IMG2 from '../../assets/ClimaCheck1.png';
import IMG3 from '../../assets/33.png';

import './portfolio.css';

const Portfolio = () => {
  const soloProjects = [
    {
      id: 1,
      title: 'WanderWish E-ComApp',
      img: IMG1,
      description:
        'An E-Com site with React.js which allows users to browse, select, and purchase items and having features of product listings, login page and shopping carts.',
      technologies: 'React | JSX | CSS',
      link: 'https://wanderwish.netlify.app/',
      github: 'https://github.com/RajanPandey1311/Ecommerce_WebApp',
    },
    {
      id: 3,
      title: 'VoiceRecognition',
      img: IMG3,
      description: 'Designed and developed a fully responsive Voice Recognition web utilizing React , used Node packages such as react-speech-recognition and react-use-clipboard',
      technologies: 'React.js | SpeechRecognition Hook',
      link: 'https://voice22text.netlify.app/',
      github: 'https://github.com/RajanPandey1311/VoiceRecognition',
    },
    {
      id: 2,
      title: 'ClimaCheck Weather_App',
      img: IMG2,
      description:
        'Developed a weather webapp using React to display current weather conditions Globally using Open Weather API to fetch real-time weather data.',
      technologies: 'React | API | GeoLocation',
      link: 'https://climacheckk.netlify.app/',
      github: 'https://github.com/RajanPandey1311/ClimaCheck',
    },
  ];

  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {soloProjects.map((pro) => (
          <article className="portfolio__item" key={pro.id}>
            <div className="portfolio__item-image">
              <img src={pro.img} alt={pro.title} />
            </div>
            <div className="portfolio__item-content">
              <h3>{pro.title}</h3>
              <p>{pro.description}</p>
              <p>{pro.technologies}</p>
            </div>
            <div className="portfolio__item-cta">
              <a
                href={pro.github}
                target="_blank"
                className="btn"
                rel="noreferrer"
              >
                GitHub
              </a>
              <a
                href={pro.link}
                target="_blank"
                className="btn btn-primary"
                rel="noreferrer"
              >
                Visit Website
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
