import React, { useEffect, useState } from 'react';
import './Landing.scss';

const Landing = () => {

  return (
    <div className="landing">

      <div className="content">

        <h1 className="title">Hello there! I'm <b className="bold_title">Rishab</b></h1>

        <h2 className="subtitle">I'm a <a className="job-title" href="https://www.linkedin.com/in/rishab-r/" target="_blank" rel="noopener noreferrer">software engineer</a> who loves product, psychology, and AI.</h2>

        <p className="description">
          This page is a blank canvas, but not for long
        </p>
        

        <figure className="doodle-container">
          <img className="doodle" src="/assets/coffee_cup.png" alt="coffee cup doodle" />
          <figcaption className="doodle-caption">Code brewed to *almost* perfection.</figcaption>
        </figure>

      </div>

      <nav className="menu">
        <a className="menu-item" href="#work">Work</a>
        <a className="menu-item" href="#projects">Projects</a>
        <a className="menu-item" href="#sayhi">Say hi&nbsp;<span className="emoji">👋🏿</span></a>
      </nav>

    </div>
  );
};

export default Landing;
