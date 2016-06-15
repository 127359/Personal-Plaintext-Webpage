import React from 'react';
import SkillData from '../../../stores/skills'

export default React.createClass({
    render: function() {
        var skillsList = SkillData.map(function(skill){
          return <li>{skill}</li>;
        })

        return(
          <section title='skills'>
            <h1>Skills</h1>
            <ul className='skills-list'>
              { skillsList }
            </ul>
            <hr/>
          </section>
        )
    }
});
