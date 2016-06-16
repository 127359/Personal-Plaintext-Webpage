import React from 'react';
import History from 'react-router';
import My from '../../stores/general';
import Skills from './components/_skills';
import Experiences from './components/_experiences';
import Education from './components/_education';

export default React.createClass({
  mixins: [ History ],

  render() {

    return (
      <section className="container home">

        <hgroup>
          <h1>{ My.name }</h1>
          <h2>{ My.title }</h2>
        </hgroup>

        <section title='summary'>
          <img src={ My.profile_image_url } alt={ My.name } className='profile-image'/>
          <p>{ My.description }</p>
          <p>{ My.mission }</p>
          <br /><br />
          <a href={ My.email }>Contact Me</a>
          <a href={ My.resume_url }>Resume</a>
          <a href={ My.strengths_finder_url }>Strengths Finder</a>
        </section>

        <Skills />
        <Experiences />
        <Education />

      </section>
    );
  }
});
