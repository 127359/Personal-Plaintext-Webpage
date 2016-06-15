import React from 'react';
import { History } from 'react-router';
import Skills from './components/_skills';
import Experiences from './components/_experiences';

export default React.createClass({
  mixins: [ History ],

  render() {
    return (
      <section className="container home">
        <hgroup>
          <h1>Joshua Stowers</h1>
          <h2>Software Engineer</h2>
        </hgroup>

        <section title='summary'>
          <img src={'app/assets/images/profile-image.jpg'} alt='Joshua Stowers' className='profile-image'/>
          <p>Full stack developer with nearly 4 years of development experience and an academic background in Economics and Finance.</p>
          <p>Currently seeking employment as a <b>Ruby on Rails</b> developer or financial analyst in the San Antonio/Austin area.</p>
          <a href='#'>Contact Me</a>
          <a href='#'>Resume</a>
          <a href='#'>Strengths Finder</a>
        </section>

        <Skills />

        <Experiences />

        <section title='education'>
          <h1>Education</h1>
          <ul>
            <li>Austin College, Sherman, Texas (2011 – 2015)</li>
            <li className='majors-list'>Majors: International Economics, Business Finance, German</li>
            <li>Philipps-Universität, Marburg, Germany (2014)</li>
            <li>Robert E. Lee High School, STEM Academy (2011)</li>
            <li>Homeschool (1998 - 2010)</li>
          </ul>
          <hr/>
        </section>

      </section>
    );
  }
});
