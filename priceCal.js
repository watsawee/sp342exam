function priceCalculate() {
  let ticknum = (document.getElementById("ticknum").value).trim();
  let selectObj = document.getElementById("event");
  let eventId = parseInt(selectObj.options[selectObj.selectedIndex].value);
  const eventPrices = {
    1: 91.25,
    2: 79.88,
    3: 83.12,
    4: 100
  };
  let totalPrice = ticknum * eventPrices[eventId];
  
  return totalPrice;
}


