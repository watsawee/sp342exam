function priceCalculate() {
  let ticknum = (document.getElementById("ticknum").value).trim();//จำนวนตั๋ว
  let selectObj = document.getElementById("event");
  let eventId = parseFloat(selectObj.options[selectObj.selectedIndex].value); 
  // การคำนวณค่าตั๋ว
  return parseFloat(ticknum * eventId).toFixed(2); 
}


