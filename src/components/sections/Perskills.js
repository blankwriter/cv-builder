import React from 'react';
import * as MdIcons from "react-icons/md";

const Perskills = ({ data }) => {
  const perskills = data.perskills;
  const loop = [1, 2, 3, 4, 5];

  return (
    <div className='perskills'>
      <p className='heading' >
        <span className='icons' >
        <MdIcons.MdExtension/>
        </span>
        Personal Skills
      </p>
      <hr />
      <div className='perskills-container'>
        {perskills.map((item, index) => {
          return (
            <div key={index} className='item'>
              <div className='perskill'>{item.perskill}</div>
              <div className='level'>
                {loop.map((num, i) => {
                 
                  if (num <= item.level) {
                    return (
                      <div
                        key={i}
                        className='star'
                      >
                       <MdIcons.MdStar/>
                      </div>
                    );
                  } else {
                    return (
                      <div
                        key={i}
                        className=' star'
                      >
                      <MdIcons.MdStarOutline/>
                      </div>
                    );
                  }
                })}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Perskills;
