import React from 'react';
import { History } from 'react-router';

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
          <ul className='skills-list'>
            <li>Ruby/Rails/Sinatra</li>
            <li>CSS/LESS/SASS</li>
            <li>Node/React</li>
            <li>Networking</li>

            <li>PHP</li>
            <li>Python</li>
            <li>Linux/Shell</li>
            <li>Production deployment</li>

            <li>Relational Databases</li>
            <li>Dev Ops/Ansible</li>
            <li>Relational Databases</li>
            <li>Stripe/Brain Tree</li>

            <li>VMs/Docker</li>
            <li>APIs</li>
            <li>Git/Git Workflow</li>
            <li>JS/jQuery/CoffeeScript</li>

            <li>Active Directory</li>
            <li>HTML/HAML/ERB</li>
            <li>Agile/SCRUM</li>
            <li>Windows Server</li>

            <li>LAMP Stack</li>
            <li>ELK Stack</li>
            <li>Lets Encrypt</li>
          </ul>
          <hr/>
        </section>

        <section title='experience'>
          <h1>Experience</h1>
          <h2>MissionSpree (January - Present)</h2>
          <ul>
            <li>Licenced and co-founded MissionSpree, a Charitable Ecommerce</li>
          </ul>

          <h2>Pressable (August 2014 - Yesterday)</h2>
          <ul>
            <li>Developed and maintained <b>Rails 3</b> web app to help customers manage <b>Wordpress</b> sites</li>
            <li>Used <b>Rspec+Capybara</b> to achive full test coverage of the code base</li>
            <li>Developed proprietary, <b>server-side</b> tools and <b>APIs</b> in <b>PHP</b></li>
          </ul>

          <h2>HipStu (May - August 2014)</h2>
          <ul>
            <li>Worked with small team to rebuild full social Ecommerce platform in <b>Rails 4</b></li>
            <li>Improved application performance by over 5 times over original design</li>
          </ul>

          <h2>Stowers Solutions (2012 - Present)</h2>
          <ul>
            <li>Developed and licensed “Stowers Solutions” for custom software consultancy</li>
            <li>Automated deployment of PHP and Rails Ecommerce sites with <b>Ansible</b></li>
          </ul>

          <h2>Elevate Systems (May – August 2013)</h2>
          <ul>
            <li>Assisted clients in server and workstation maintenance and upgrades</li>
            <li>Configured networked printers, stamp machines, and other devices</li>
          </ul>

          <h2>Tombstone Texas USA (May – November 2012)</h2>
          <ul>
            <li>Set up and configured POS system to handle transactions and order placements</li>
            <li>Built custom PHP website to handle reservations, news, and newsletter</li>
            <li>Handled communications with food and service providers, Groupon, and LivingSocial</li>
          </ul>
          <hr/>
        </section>

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

        <p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.</p>
      </section>
    );
  }
});
