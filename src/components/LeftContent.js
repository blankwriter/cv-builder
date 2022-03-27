import React from 'react';
import Contact from './sections/Contact';
import Education from './sections/Education';
import Experience from './sections/Experience';
import Certifications from './sections/Certifications';


const LeftContent = ({ data }) => {
  const check = (item) => {
    if (item && item.length > 0) {
      return true;
    } else {
      return false;
    }
  };

  return (
    <div className='left-content' >
      <Contact data={data}  />
      {check(data.education) && <Education data={data}  />}
      {check(data.experience) && <Experience data={data}  />}
      {check(data.certifications) && <Certifications data={data} />}

    </div>
  );
};

export default LeftContent;