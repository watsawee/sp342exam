function priceCalculate() {
  let ticknum = parseInt(document.getElementById("ticknum").value.trim());
  let selectObj = document.getElementById("event");
  let eventId = parseInt(selectObj.options[selectObj.selectedIndex].value);
  let eventPrice;

  switch (eventId) {
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
      eventPrice = 100;
      break;
    default:
      eventPrice = 0;
  }

  let total = eventPrice * ticknum;

  alert("Total price for this booking is " + total.toFixed(2) + " USD");

  return total; 
}