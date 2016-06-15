import React from 'react';
import { History } from 'react-router';
import SkillData from '../../stores/skills'
import ExperienceData from '../../stores/experiences'

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

        <section title='skills'>
          <h1>Skills</h1>
          <Skills />
          <hr/>
        </section>

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


var Skills = React.createClass({
    render: function() {
        var skillsList = SkillData.map(function(skill){
          return <li>{skill}</li>;
        })

        return(
          <ul className='skills-list'>
            { skillsList }
          </ul>
        )
    }
});


var Experiences = React.createClass({
  render: function() {
      var experienceList = ExperienceData.map(function(experience){
        return(
          <div className={experience.name}>
            <h2>{experience.name}</h2>
            <ul>
              {experience.details.map(function(detail){
                return(<li dangerouslySetInnerHTML={{__html: detail}}></li>);
              })}
            </ul>
          </div>
        );
      })

      return(
        <section title='experience'>
          <h1>Experience</h1>
          { experienceList }
          <hr/>
        </section>
      );
  }
});
