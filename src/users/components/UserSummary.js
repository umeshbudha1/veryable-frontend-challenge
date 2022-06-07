import React from 'react';
import { Grid } from '@mui/material';
import AccordionSummary from '@mui/material/AccordionSummary';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

import UserIcon from './Icons/UserIcon';

const user_color_map = {
    "Alexander": "#2081C3",
    "Madame Marie": "#2081C3",
    "R. K.": "#7E7E7E",
    "Duke of": "#7E7E7E",
    "Default": "#68AAAB"
}

export default function UserSummary ({user}) {
    const userIconColor = user.firstName in user_color_map ? 
        user_color_map[user.firstName] :
        user_color_map['Default'];

    return <AccordionSummary className='accordion-summary' elevation={0}
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel1a-content"
        id="panel1a-header">
        <div className='user-summary'>
            <Grid container style={{width:  "300px", height: "80px"}}>
                <Grid item xs={4}>
                    <div className='user-logo'>
                        <UserIcon fill={userIconColor} />
                    </div>
                </Grid>
                <Grid item xs={8}>
                    <div className='user'>
                        <p className='name'>{user.firstName} {user.lastName}</p>
                        <p className='role'>{user.role}</p>
                        <p className='email'>{user.email}</p>
                    </div>
                </Grid>
            </Grid>
        </div>
    </AccordionSummary>
}