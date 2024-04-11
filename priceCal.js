function priceCalculate() {
  let ticknum = (document.getElementById("ticknum").value).trim();
  let selectObj = document.getElementById("event");
  let eventId = parseInt(selectObj.options[selectObj.selectedIndex].value);
  
  switch (eventId) {
    case 1:
      total = ticknum * 91.25;
      break;
    case 2:
      total = ticknum * 79.88;
      break;
    case 3:
      total = ticknum * 83.12;
      break;
    case 4:
      total = ticknum * 100;
      break;
    default:
      alert("Please select an event.");
      return;
  }
  return total;
}


