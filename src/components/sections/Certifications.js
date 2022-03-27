import React from 'react';
import * as FaIcons from 'react-icons/fa';


const Certifications = ({ data }) => {
  const certifications = data.certifications;
  return (
    <div className='certifications'>
      <p className='heading' >
        <span className='material-icons' >
          <FaIcons.FaCertificate/>
        </span>
        Certifications
      </p>
      <hr />
      {certifications.map((item, index) => (
        <div key={index} className='row-table'>
          <div className='left-column'>
            {item.year && (
              <p className='year'>
                <span className='calendar-alt' />
                <FaIcons.FaCalendarAlt/> 
                <span/>
                {item.year}
              </p>
            )}
            {item.score && (
              <p className='score'>
                Score: {item.score}
              </p>
            )}
          </div>
          <div className='right-column'>
            <p className='course'>{item.course}</p>
            <p className='institution'>{item.institution}</p>
            <p className='description'>{item.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Certifications;
