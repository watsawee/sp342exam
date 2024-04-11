function priceCalculate() {
  let ticknum = (document.getElementById("ticknum").value).trim();
  let selectObj = document.getElementById("event");
  let eventId = parseInt(selectObj.options[selectObj.selectedIndex].value);
 
  if (eventId == 1)
    return 91.25 * ticknum ;
  if (eventId == 2)
    return 79.88 * ticknum ;
  if (eventId == 3)
    return 83.12 * ticknum ;
  if (eventId = 4)
    return 100 * ticknum ;
}