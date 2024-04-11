function priceCalculate() {
  let ticknum = (document.getElementById("ticknum").value).trim();
  let selectObj = document.getElementById("event");
  let eventId = parseInt(selectObj.options[selectObj.selectedIndex].value);

  let price = 0;

  if (eventId === 1) {
    price = 91.25 * ticknum; 
  } else if (eventId === 2) {
    price = 79.88 * ticknum; 
  } else if (eventId === 3) {
    price = 83.12 * ticknum; 
  } else if (eventId === 4) {
    price = 100 * ticknum; 
  }else{ 
    price = 0 * ticknum; // Event ID out of range
  }
  
  return price;
}


