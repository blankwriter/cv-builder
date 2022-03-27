import React from 'react';
import * as MdIcons from "react-icons/md";
import * as FaIcons from "react-icons/fa";

const Experience = ({ data }) => {
  const experience = data.experience;
  return (
    <div className='experience'>
      <p className='heading'>
        <span className='material-icons'>
        <MdIcons.MdBusinessCenter/>
        </span>
        Experience
      </p>
      <hr/>
      {experience.map((item, index) => (
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
            <p className='position'>{item.position}</p>
            <p className='company'>{item.company}</p>
            <p className='description'>{item.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Experience;
