function priceCalculate() {
  let ticknum = (document.getElementById("ticknum").value);
  let selectObj = document.getElementById("event");
  let eventId = parseFloat(selectObj.options[selectObj.selectedIndex].value);
  
  price = ticknum * eventId;
  return price.toFixed(2);
}


