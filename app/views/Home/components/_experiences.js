import React from 'react';
import ExperienceData from '../../../stores/experiences'

export default React.createClass({
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
