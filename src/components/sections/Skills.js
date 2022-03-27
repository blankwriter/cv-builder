import React from 'react';
import * as MdIcons from "react-icons/md";

const Skills = ({ data }) => {
  const skills = data.skills;
  return (
    <div className='skills'>
      <p className='heading' >
        
        <span className='material-icons' >
           <MdIcons.MdExtension/>
        </span>
        Skills
      </p>
      <hr />
      <div className='skills-container'>
        {skills.map((item, index) => {
          if (item.trim().length > 0) {
            return (
              <div
                key={index}
                className='item'
                
              >
                {item}
              </div>
            );
          } else {
            return false;
          }
        })}
      </div>
    </div>
  );
};

export default Skills;
