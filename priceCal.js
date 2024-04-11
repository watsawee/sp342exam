function priceCalculate() {
  let ticknum = parseInt(document.getElementById("ticknum").value.trim());
  let selectObj = document.getElementById("event");
  let eventId = parseInt(selectObj.options[selectObj.selectedIndex].value);

  

  let price = eventId * ticknum;
  
  
  return price;
}
