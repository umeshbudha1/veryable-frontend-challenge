import Moment from 'moment';

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

export {
    formatDate,
    parsePhoneNumber
}
