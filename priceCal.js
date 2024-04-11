function priceCalculate() {
  let ticknum = (document.getElementById("ticknum").value).trim();
  let selectObj = document.getElementById("event");
  let eventId = parseInt(selectObj.options[selectObj.selectedIndex].value);
  let ticketPrice = 0; 
  switch (eventId) {
    case 1:
      ticketPrice = 91.25; 
      break;
    case 2:
      ticketPrice = 79.88; 
      break;
    case 3:
      ticketPrice = 83.12; 
      break;
    case 4:
      ticketPrice = 100; 
      break;
    default:
      ticketPrice = 0; 
  }
  
  return ticknum * ticketPrice; 
}


