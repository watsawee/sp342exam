function priceCalculate() {
  const ticknum = parseInt(document.getElementById("ticknum").value);
  const eventId = parseInt(document.getElementById("event").value);
  const ticketPrices = [91.25, 79.88, 83.12, 100];
  
  return ticknum * ticketPrices[eventId - 1] || 0;
}
