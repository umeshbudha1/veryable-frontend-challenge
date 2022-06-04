import React from 'react';
import Accordion from '@mui/material/Accordion';

import UserSummary from './UserSummary';
import UserDetails from './UserDetails';

import userData from '../data/users.json';

function get_accordion_id(index) {
    return 'accordion-' + index;
}

export default function UserAccordion() {
    const [expanded, setExpanded] = React.useState(get_accordion_id(0));

    function handleChange(panel) {
        return function(event, newExpanded) {
            setExpanded(newExpanded ? panel : false);
        }
    }

    return userData.map((user, index) => (            
        <div className='wrapper' key={get_accordion_id(index)}>
            <Accordion className={'accordion no-border-radius ' + get_accordion_id(0)}
                expanded={expanded === get_accordion_id(index)}
                onChange={handleChange(get_accordion_id(index))}
                elevation={3}>
                    <UserSummary user={user}/>
                    <UserDetails user={user}/>
            </Accordion>
        </div>
    ));
}
