import React from 'react';
import s from './aboute.module.css'

const About = () => {
  return (
      <div className={s.container}>
        <div className={s.text}>This is my new project that I spent 2 days on. Here I used all the main and frequently used cases and
          methods in practice.
        </div>
        <div className={s.text}>In this project, I did not devote enough time to styles, since the idea of creating it was precisely to
          apply the functional part of web development.
        </div>
        <div className={s.text}><b>Thank you for your time and have a great day everyone!</b></div>
      </div>
  );
};

export default About;