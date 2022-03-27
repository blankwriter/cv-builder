import React, { Component } from 'react';
import LeftContent from './LeftContent';
import RightContent from './RightContent';
import '../styles/Resume.scss';

class Resume extends Component {
  render() {
    return (
      <div className='resume' id='resume'>
        <LeftContent data={this.props.data}  />
        <RightContent data={this.props.data}  />
      </div>
    );
  }
}

export default Resume;
