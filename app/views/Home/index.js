import React from 'react';
import { History } from 'react-router';
import Skills from './components/_skills';
import Experiences from './components/_experiences';
import Education from './components/_education';

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
          <br /><br />
          <a href='#'>Contact Me</a>
          <a href='#'>Resume</a>
          <a href='#'>Strengths Finder</a>
        </section>

        <Skills />
        <Experiences />
        <Education />

      </section>
    );
  }
});
