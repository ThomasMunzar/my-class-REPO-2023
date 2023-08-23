module.exports = {
  format_time: (date) => {

   return date.toLocaleTimeString()
  
  },
  
  // TODO: Create a custom helper 'format_date' that takes in a timestamp,
  // adds five years to the date, and formats it as M/D/YYYY

  format_date: (timestamp) => {
    const currentDate = new Date(timestamp);
    currentDate.setFullYear(currentDate.getFullYear()+5)
    const month = currentDate.getMonth()+1;
    const day = currentDate.getDay()+1;
    const year = currentDate.getFullYear();

    const formatDate= `${month}/${day}/${year}`;
    return formatDate;
  }
};
