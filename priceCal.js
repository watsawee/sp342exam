function priceCalculate() {
  let ticknum = (document.getElementById("ticknum").value).trim();
  let selectObj = document.getElementById("event");
  let eventId = parseInt(selectObj.options[selectObj.selectedIndex].value);
  
  switch(eventId) {
    case 1:
      return (ticknum * 91.25);
      break;
    case 2:
      return (ticknum * 79.88);
      break;
    case 3:
      return (ticknum * 83.12);
      break;
    case 4:
      return (ticknum * 100);
      break;
    default:
      return 0;
      break;
  }
}


