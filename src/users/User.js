import React from 'react';

import UserAccordion from './components/UserAccordion';
import GroupIcon from './components/Icons/GroupIcon';

export default function Users() {
  return (
    <div className='container has-shadow'>
        <div className='user-panel'>
            <div className='logo'>
                <GroupIcon />
            </div>
            <div className='title'>
                <p className='user-title'>Users</p>
            </div>
        </div>
        
        <UserAccordion/>
        
        <div className='custom-pad'></div>
    </div>    
  )
}
