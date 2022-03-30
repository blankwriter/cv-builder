import React, { useState, useEffect } from 'react';
import Files from 'react-files';


import '../styles/Form.scss';

const Form = ({ data, setData}) => {
  let { name, role, photoUrl, location, phone, email, github } = data.contact;
  
  
  let objective = data.objective;
  let education = data.education;
  let experience = data.experience;
  let certifications = data.certifications;
  let perskills = data.perskills;
 
  // Handle photo upload
  const handlePhotoUpload = (files) => {
    setData({
      ...data,
      contact: {
        ...data.contact,
        photoUrl: URL.createObjectURL(files[files.length - 1]),
      },
    });
  };

  const [skills, setSkills] = useState('');
  useEffect(() => {
    let temp = '';
    data.skills.map((item) => (temp = temp + item + ','));
    temp = temp.slice(0, -1);
    setSkills(temp);
  }, [data]);

  // Contact
  const handleContactChange = (e) => {
    setData({
      ...data,
      contact: {
        ...data.contact,
        [e.target.name]: e.target.value,
      },
    });
  };

  // Skills
  const handleSkillsUpdate = () => {
    let array = skills.split(',');
    setData({
      ...data,
      skills: array,
    });
  };

  // Add Row
  const addRow = (section, structure) => {
    let temp = section;
    temp.push(structure);
    setData({
      ...data,
      section: temp,
    });
  };

  // Remove Row
  const removeRow = (section, index) => {
    let temp = section;
    temp[index] = {};
    temp.splice(index, 1);
    setData({
      ...data,
      section: temp,
    });
  };

  // Handle Change
  const handleChange = (e, index, section, type) => {
    let temp = section;
    temp[index][type] = e.target.value;

    if (section === perskills && type === 'level') {
      if (e.target.value > 5) {
        temp[index][type] = 5;
      } else if (e.target.value < 1) {
        temp[index][type] = 1;
      } else {
        temp[index][type] = e.target.value;
      }
    }

    setData({
      ...data,
      section: temp,
    });
  };
  return (
    <div className='form-container'>
      

      <div style={{ display: 'flex' }}>
        <div>
          <Files
            className='files-dropzone file-btn'
            onChange={(files) => handlePhotoUpload(files)}
            onError={(err) => console.log(err)}
            accepts={['image/jpeg', 'image/jpg', 'image/png', 'image/svg']}
            multiple
            maxFiles={100}
            maxFileSize={10000000}
            minFileSize={0}
            clickable
          >
            Upload Photo
          </Files>
        </div>
      </div>

      <div className='form'>
        <div className='section contact'>
          <hr />
          <h3 className='heading'>Contact</h3>
          <p className='label'>Name</p>
          <input type='text' name='name' value={name} onChange={handleContactChange} />
          <p className='label'>Role</p>
          <input type='text' name='role' value={role} onChange={handleContactChange} />
          <p className='label'>Photo URL</p>
          <input type='text' name='photoUrl' value={photoUrl} onChange={handleContactChange} />
          <p className='label'>Location</p>
          <input type='text' name='location' value={location} onChange={handleContactChange} />
          <p className='label'>Phone</p>
          <input type='text' name='phone' value={phone} onChange={handleContactChange} />
          <p className='label'>Email</p>
          <input type='text' name='email' value={email} onChange={handleContactChange} />
          <p className='label'>Github</p>
          <input type='text' name='github' value={github} onChange={handleContactChange} />
        </div>

        <div className='section skills'>
          <hr />
          <div style={{ display: 'flex' }}>
            <h3 className='heading'>Skills</h3>
            <button className='btn btn-sm btn-primary' onClick={handleSkillsUpdate}>
              Done
            </button>
          </div>
          <textarea
            name='skills'
            cols='50'
            rows='5'
            value={skills}
            onChange={(e) => setSkills(e.target.value)}
          ></textarea>
        </div>

        <div className='section perskills'>
          <hr />
          <h3 className='heading'>Personal Skills</h3>
          {perskills.map((item, index) => {
            return (
              <div className='row' key={index}>
                <input
                  type='text'
                  name='perskill'
                  placeholder='Skills'
                  value={item.perskill}
                  onChange={(e) => handleChange(e, index, perskills, 'perskill')}
                />
                <input
                  type='number'
                  name='level'
                  placeholder='Level'
                  value={item.level}
                  onChange={(e) => handleChange(e, index, perskills, 'level')}
                />
                <button
                  className='btn btn-sm btn-danger'
                  onClick={() => removeRow(perskills, index)}
                >
                  Remove
                </button>
              </div>
            );
          })}
          <button
            className='btn btn-sm btn-dark'
            onClick={() => addRow(perskills, { perskill: '', level: '' })}
          >
            Add
          </button>
        </div>

        <div className='section objective'>
          <hr />
          <h3 className='heading'>Objective</h3>
          <textarea
            name='objective'
            cols='50'
            rows='5'
            value={objective}
            onChange={(e) => setData({ ...data, objective: e.target.value })}
          ></textarea>
        </div>

        <div className='section education'>
          <hr />
          <h3 className='heading'>Education</h3>
          {education.map((item, index) => {
            return (
              <div className='row' key={index}>
                <div className='item'>
                  <input
                    type='text'
                    name='year'
                    placeholder='Year'
                    value={item.year}
                    onChange={(e) => handleChange(e, index, education, 'year')}
                  />
                  <input
                    type='text'
                    name='course'
                    placeholder='Course/Degree'
                    value={item.course}
                    onChange={(e) => handleChange(e, index, education, 'course')}
                  />
                  <input
                    type='text'
                    name='institution'
                    placeholder='School/College'
                    value={item.institution}
                    onChange={(e) => handleChange(e, index, education, 'institution')}
                  />

                </div>

                <button
                  className='btn btn-sm btn-danger'
                  onClick={() => removeRow(education, index)}
                >
                  Remove
                </button>
              </div>
            );
          })}

        </div>

      

        <div className='section experience'>
          <hr />
          <h3 className='heading'>Experience</h3>
          {experience.map((item, index) => {
            return (
              <div className='row' key={index}>
                <div className='item'>
                  <input
                    type='text'
                    name='year'
                    placeholder='Year'
                    value={item.year}
                    onChange={(e) => handleChange(e, index, experience, 'year')}
                  />
                  <input
                    type='text'
                    name='position'
                    placeholder='Role/Position'
                    value={item.position}
                    onChange={(e) => handleChange(e, index, experience, 'position')}
                  />
                  <input
                    type='text'
                    name='company'
                    placeholder='Company'
                    value={item.company}
                    onChange={(e) => handleChange(e, index, experience, 'company')}
                  />
                  <textarea
                    name='description'
                    cols='30'
                    rows='5'
                    placeholder='Description'
                    value={item.description}
                    onChange={(e) => handleChange(e, index, experience, 'description')}
                  />
                </div>

                <button
                  className='btn btn-sm btn-danger'
                  onClick={() => removeRow(experience, index)}
                >
                  Remove
                </button>
              </div>
            );
          })}

        </div>

        <div className='section certifications'>
          <hr />
          <h3 className='heading'>Certifications</h3>
          {certifications.map((item, index) => {
            return (
              <div className='row' key={index}>
                <div className='item'>
                  <input
                    type='text'
                    name='year'
                    placeholder='Year'
                    value={item.year}
                    onChange={(e) => handleChange(e, index, certifications, 'year')}
                  />
                  <input
                    type='text'
                    name='course'
                    placeholder='Course'
                    value={item.course}
                    onChange={(e) => handleChange(e, index, certifications, 'course')}
                  />
                  <input
                    type='text'
                    name='institution'
                    placeholder='Institution'
                    value={item.institution}
                    onChange={(e) => handleChange(e, index, certifications, 'institution')}
                  />
                  <input
                    type='text'
                    name='score'
                    placeholder='Score'
                    value={item.score}
                    onChange={(e) => handleChange(e, index, certifications, 'score')}
                  />
                  <textarea
                    name='description'
                    cols='30'
                    rows='5'
                    placeholder='Description'
                    value={item.description}
                    onChange={(e) => handleChange(e, index, certifications, 'description')}
                  />
                </div>

                <button
                  className='btn btn-sm btn-danger'
                  onClick={(e) => removeRow(certifications, index)}
                >
                  Remove
                </button>
              </div>
            );
          })}
          <button
            className='btn btn-sm btn-dark'
            onClick={() =>
              addRow(certifications, { year: '', institution: '', course: '', description: '' })
            }
          >
            Add
          </button>
        </div>
      </div>
    </div>
  );
};

export default Form;