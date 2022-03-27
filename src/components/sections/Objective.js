import React from 'react';


const Objective = ({ data }) => {
  const objective = data.objective;
  return (
    <div className='objective'>
        <span className='comma' >
        "
        </span>
      <div className='item'>{objective}</div>
    </div>
  );
};

export default Objective;
