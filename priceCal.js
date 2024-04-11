function priceCalculate() {
  let ticknum = parseInt((document.getElementById("ticknum").value).trim());
  let selectObj = document.getElementById("event");
  let eventId = parseInt(selectObj.options[selectObj.selectedIndex].value);
  let price = 0;

  switch (eventId) {
    case 1:
      price = 91.25;
      break;
    case 2:
      price = 79.88;
      break;
    case 3:
      price = 83.12;
      break;
    case 4:
      price = 100;
      break;
    default:
      price = 0;
      break;
  }

  let totalPrice = price * ticknum;

  return {
    totalTicknum: ticknum,
    totalPrice: totalPrice
  };
}
