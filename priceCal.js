function priceCalculate() {
  let ticknum = (document.getElementById("ticknum").value).trim();
  if (isNaN(ticknum)){
    ticknum = 0;
  }
  ticknum = Math.min(ticknum,5);
  let selectObj = document.getElementById("event");
  let eventId = parseInt(selectObj.options[selectObj.selectedIndex].value);
  let eventPrice =0;
  switch(eventId){
    case 1:
      eventPrice = 91.25;
      break;
      case 2:
      eventPrice = 79.88;
      break;
      case 3:
      eventPrice = 83.12;
      break;
      case 4:
      eventPrice = 100.00;
      break;
      default:
        eventPrice =0;
  }
  let totalPrice = ticknum * eventPrice;

  return totalPrice
}


