import React from "react"
import { Grid } from '@mui/material';
import AccordionDetails from '@mui/material/AccordionDetails';

import { formatDate, parsePhoneNumber } from "../../utils/utils"

export default function UserDetails({user}) {
    return <AccordionDetails className='accordion-details'>
        <Grid container style={{width:  "250px"}}>
            <Grid item xs={4}/>
            <Grid item xs={8}>
                <div className='userDetails'>
                    <div className='details'>
                        <label>Address</label>
                        <p>{user.street}, {user.city}, {user.state} {user.zip}</p>
                    </div>
                    <div className='details'>
                        <label>Phone</label>
                        <p>{parsePhoneNumber(user.phone)}</p>
                    </div>
                    <div className='details'>
                        <label>Created At</label>
                        <p>{formatDate(user.createdAt)}</p>
                    </div>
                    <div className='details'>
                        <label>Last Logged In</label>
                        <p>{formatDate(user.lastLoggedIn)}</p>
                    </div>
                </div>            
            </Grid>
        </Grid>                            
    </AccordionDetails>
}
