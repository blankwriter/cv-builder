import React, { useState, useEffect, useRef} from 'react';
import { useReactToPrint } from 'react-to-print';

import './ResumePage.scss'
import Form from '../components/Form';
import Resume from '../components/Resume';

import jsonData from '../data.json';

const ResumePage = () => {
  const [data, setData] = useState();

  useEffect(() => {
    setData(jsonData);
  }, []);

  const componentRef = useRef();

  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });

  return (
    <div className='mainContent'>
     { data !== undefined && (
        <>
          <div className='left'>
            <Form data = {data} setData= {setData}  />
          </div>

          <div className='right'>
            <Resume ref={componentRef} data={data}  />
          </div>

          <button className='printBtn' onClick={handlePrint}>
            Download / Print
          </button>
        </>
     )}
    </div>
  );
};

export default ResumePage;
