import React from 'react';
import Skills from './sections/Skills';
import Objective from './sections/Objective';
import Perskills from './sections/Perskills';


const RightContent = ({ data }) => {
  const check = (item) => {
    if (item && item.length > 0) {
      return true;
    } else {
      return false;
    }
  };

  return (
    <div className='right-content'>
      {check(data.objective) && <Objective data={data} />}
      {check(data.skills) && <Skills data={data}  />}
      {check(data.perskills) && <Perskills data={data} />}
    </div>
  );
};

export default RightContent;
