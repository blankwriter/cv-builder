import React from 'react';
import Default from '../../images/default.jpg';
import * as IoIcons from "react-icons/io";
import * as AiIcons from 'react-icons/ai';
import * as MdIcons from 'react-icons/md';

const Contact = ({ data }) => {
  const { name, role, photoUrl, location, phone, email, github } = data.contact;

  return (
    <>
    <div className='profile' >
      <div className='photo-container'>
        <img src={photoUrl.trim().length !== 0 ? photoUrl : Default} alt='' />
      </div>
      <div className='contact-container'>
      {name && (
        <div className='name'>
          {name}
        </div>
      )}

      {role && (
        <div className='title'>
          {role} 
          </div>
      )}
      <div className='contact'>
        
        {location && (
          <div className='item'>
            <i className='icon'  >
             <IoIcons.IoIosHome/>
            </i>
            <p className='text'>{location}</p>
          </div>
        )}
        {phone && (
          <div className='itemN'>
            <i className='icon' >
              <AiIcons.AiFillPhone/>
            </i>
            <p className='text'>
              <a href={'tel:' + phone}>{phone}</a>
            </p>
          </div>
        )}
        {email && (
          <div className='item'>
            <i className='icon' >
              <MdIcons.MdEmail/>

            </i>
            <p className='text'>
              <a href={'mailto:' + email}>{email}</a>
            </p>
          </div>
        )}

        {github && (
          <div className='itemG'>
            <i className='icon' >  <AiIcons.AiFillGithub/> </i>
            
            <p className='text'>
              <a href={'https://www.' + github} target='_blank' rel='noopener noreferrer'>
                {github}
              </a>
            </p>
          </div>
        )}
      </div>
      </div>
      </div>
    </>
  );
};

export default Contact;
