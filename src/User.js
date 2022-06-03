import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Moment from 'moment';
import Users from './users.json';
import GroupLogo from './GroupLogo';
import UserLogo from './UserLogo';
import './index.css';
import { Grid } from '@mui/material';

const user_color_map = {
    "Alexander": "#2081C3",
    "Madame Marie": "#2081C3",
    "R. K.": "#7E7E7E",
    "Duke of": "#7E7E7E",
    "Default": "#68AAAB"
}

function get_accordion_id(index) {
    return 'accordion-' + index;
}

export default function UserAccordion() {

    function formatDate(date) {
        return Moment(date).format('MM/DD/YY h:mm A');
    }

    function parsePhoneNumber(str){
        //Filter only numbers from the input
        let cleaned = ('' + str).replace(/\D/g, '');
        
        //Check if the input is of correct length
        let match = cleaned.match(/^(\d{3})(\d{3})(\d{4})$/);
      
        if (match) {
          return '(' + match[1] + ') ' + match[2] + '-' + match[3]
        };
      
        return null
    }

    function generateWeekAccordion() {
        const [expanded, setExpanded] = React.useState(get_accordion_id(0));

        const handleChange =
            (panel) => (event, newExpanded) => {
            setExpanded(newExpanded ? panel : false);
            };

        return Users.map((user, index) => (            
            <div className='wrapper' key={get_accordion_id(index)}>
                <Accordion className={'accordion no-border-radius ' + get_accordion_id(0)}
                    expanded={expanded === get_accordion_id(index)}
                    onChange={handleChange(get_accordion_id(index))}
                    elevation={3}>
                        <AccordionSummary className='accordion-summary' elevation={0}
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel1a-content"
                            id="panel1a-header">
                            <div className='user-summary'>
                                <Grid container style={{width:  "250px"}}>
                                    <Grid item xs={4}>
                                        <div className='user-logo'>
                                            {(() => {
                                                const color = user.firstName in user_color_map ? 
                                                    user_color_map[user.firstName] :
                                                    user_color_map['Default'];                                

                                                return <UserLogo fill={color} />
                                            })()}
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
                        <AccordionDetails className='accordion-details'>
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
                </Accordion>
            </div>
        ));
      }
  return (
    <div className='container has-shadow'>
        <div className='user-panel'>
            <div className='logo'>
                <GroupLogo />
            </div>
            <div className='title'>
                <p className='user-title'>Users</p>
            </div>
        </div>
        
        {generateWeekAccordion()}
        
        <div className='custom-pad'></div>
    </div>    
  )
}
