function priceCalculate() {
  let ticknum = (document.getElementById("ticknum").value).trim();
  let eventId = parseInt(document.getElementById("event").value);
  
  if (ticknum === "" || isNaN(ticknum) || eventId === 0) {
    alert("Please fill in all required fields.");
    return;
  }

  let ticketPrice = eventId === 1 ? 91.25 : eventId === 2 ? 79.88 : eventId === 3 ? 83.12 : eventId === 4 ? 100 : 0;
  let totalPrice = ticketPrice * parseInt(ticknum);

  alert("Total price: " + totalPrice.toFixed(2) + " USD");
}
