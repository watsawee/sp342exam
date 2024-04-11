function priceCalculate() {
  let ticknum = parseInt(document.getElementById("ticknum").value.trim());

  let selectObj = document.getElementById("event");
  let eventPriceText = selectObj.options[selectObj.selectedIndex].text;
  let eventPrice = parseFloat(eventPriceText.match(/\d+\.\d+/)[0]);

  let totalPrice = eventPrice * ticknum;

  return totalPrice;
}


