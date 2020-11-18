import React from 'react';
import Projects from '../projects/projects';
import './work.css';

function Work(props) {
    console.log(props);
    return (
      <div className="work-container">
          <h1>Work</h1>
          <div>
                {
                    props.projects.data.map(data => <Projects key={props.projects.data.id} data={data} />)
                }
          </div>
      </div>
    );
  }
  
  export default Work;
  