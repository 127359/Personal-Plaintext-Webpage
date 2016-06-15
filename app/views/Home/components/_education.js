import React from 'react';
import EducationData from '../../../stores/education'

export default React.createClass({
    render: function() {
        var educationList = EducationData.map(function(institution){
          if (institution.majors_list) {
            return(
              <li>
                {institution.description}
                <ul className='majors-list'>
                  <li>{institution.majors_list}</li>
                </ul>
              </li>
            );
          } else {
            return(
              <li>
                {institution.description}
              </li>
            );
          }
        });

        return(
          <section title='education'>
            <h1>Education</h1>
            <ul className='education-list'>
              { educationList }
            </ul>
            <hr/>
          </section>
        )
    }
});
