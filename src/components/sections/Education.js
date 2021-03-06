import React from 'react';
import * as FaIcons from "react-icons/fa";

const Education = ({ data }) => {
  const education = data.education;
  return (
    <div className='education'>
      <p className='heading' >
        <span className='material-icons' >
          <FaIcons.FaSchool/>
        </span>
        Education
      </p>
      <hr />
      {education.map((item, index) => (
        <div key={index} className='row-table'>
          <div className='left-column'>
            {item.year && (
              <p className='year'>
                <span className='calendar-alt' />
                <FaIcons.FaCalendarAlt/> <span/>
                {item.year}
              </p>
            )}
           
           
          </div>
          <div className='right-column'>
            <p className='course'>{item.course}</p>
            <p className='institution'>{item.institution}</p>
            
          </div>
        </div>
      ))}
    </div>
  );
};

export default Education;
