import React from 'react';
import Default from '../../images/default.jpg';
import * as IoIcons from "react-icons/io";
import * as AiIcons from 'react-icons/ai';
import * as MdIcons from 'react-icons/md';

const Contact = ({ data, color }) => {
  const { name, photoUrl, location, phone, email, github } = data.contact;

  return (
    <>
      <div className='photo-container'>
        <img src={photoUrl.trim().length !== 0 ? photoUrl : Default} alt='' />
      </div>
      {name && (
        <div className='name' style={{ color: `${color.primary}` }}>
          {name}
        </div>
      )}
      <div className='contact'>
        
        {location && (
          <div className='item'>
            <p className='material-icons icon' style={{ color: `${color.primary}` }}>
             <IoIcons.IoLocation/>
            </p>
            <p className='text'>{location}</p>
          </div>
        )}
        {phone && (
          <div className='item'>
            <p className='material-icons icon' style={{ color: `${color.primary}` }}>
              <AiIcons.AiFillPhone/>
            </p>
            <p className='text'>
              <a href={'tel:' + phone}>{phone}</a>
            </p>
          </div>
        )}
        {email && (
          <div className='item'>
            <p className='material-icons icon' style={{ color: `${color.primary}` }}>
              <MdIcons.MdEmail/>

            </p>
            <p className='text'>
              <a href={'mailto:' + email}>{email}</a>
            </p>
          </div>
        )}

        {github && (
          <div className='item'>
            <i className='fab fa-github icon' style={{ color: `${color.primary}` }}></i>
            <AiIcons.AiFillGithub/>
            <p className='text'>
              <a href={'https://www.' + github} target='_blank' rel='noopener noreferrer'>
                {github}
              </a>
            </p>
          </div>
        )}
      </div>
    </>
  );
};

export default Contact;
