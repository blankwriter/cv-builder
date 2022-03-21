import React from 'react';
import * as MdIcons from "react-icons/md";

const Skills = ({ data, color }) => {
  const skills = data.skills;
  return (
    <div className='skills'>
      <p className='heading' style={{ color: `${color.primary}` }}>
        
        <span className='material-icons' style={{ color: `${color.primary}` }}>
           <MdIcons.MdExtension/>
        </span>
        Skills
      </p>
      <hr style={{ borderColor: `${color.primary}` }} />
      <div className='skills-container'>
        {skills.map((item, index) => {
          if (item.trim().length > 0) {
            return (
              <div
                key={index}
                className='item'
                style={{
                  backgroundColor: `${color.skills}`,
                  boxShadow: `0 0 0 1px ${color.primary}`,
                }}
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
