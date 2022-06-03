import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
// import Typography from '@mui/material/Typography';
// import { makeStyles } from "@mui/core/styles";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Moment from 'moment';
import Users from './users.json';
import GroupLogo from './GroupLogo';
import UserLogo from './UserLogo';
import './index.css';


// const useStyles = makeStyles((theme) => ({
//     root: {
//       width: "100%"
//     },
//     heading: {
//       fontSize: theme.typography.pxToRem(15),
//       fontWeight: theme.typography.fontWeightRegular
//     },
//     test: {
//       fontSize: theme.typography.pxToRem(15),
//       fontWeight: theme.typography.fontWeightRegular
//     },
//     MuiAccordionroot: {
//       "&.MuiAccordion-root:before": {
//         backgroundColor: "white"
//       }
//     }
//   }));

export default function UserAccordion() {
    // const classes = useStyles();

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
        
        return Users.map((user) => (
            <div className='wrapper'>
          <Accordion className='accordion'
        elevation={0}
        sx={{
            boxShadow: "none"
        }}>
            <AccordionSummary className='accordion-summary' elevation={0}
        // classes={{
        //   root: classes.MuiAccordionroot
        // }}
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
            ><div className='user-summary'>
            <div className='user-logo'>
                {/* <UserLogo fill="#2081C3" /> */}
                {(() => {

                    if (user.role === 'Administrator') {

                    return (

                        <UserLogo fill="#2081C3" />

                    )

                    } else if (user.role === 'Viewer') {

                    return (

                        <UserLogo fill="#7E7E7E" />

                    )

                    } else {

                    return (

                        <UserLogo fill="#68AAAB" />

                    )

                    }

                    })()}
            </div>
            <div className='user'>
          <p className='name'>{user.firstName} {user.lastName}</p>
          <p className='role'>{user.role}</p>
          <p className='email'>{user.email}</p>
         </div>
         </div></AccordionSummary>
            <AccordionDetails className='accordion-details'>
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
                </AccordionDetails>
          </Accordion>
             </div>
        ));
      }
  return (
    <div className='container'>
        <div className='user-panel'>
        {/* <img className='fill-color' src={user_group} alt='' /> */}
        <div className='logo'>
        <GroupLogo />
        </div>
        {/* <UserGroup style={{ fill: '#262626'}} /> */}
        <div className='title'>
        <p className='user-title'>Users</p>
        </div>
        </div>
        {generateWeekAccordion()}
        <div className='custom-pad'></div>
    </div>    
  )
}