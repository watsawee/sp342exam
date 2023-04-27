function priceCalculate() {
  let ticknum = (document.getElementById("ticknum").value).trim();
  let selectObj = document.getElementById("event");
  let eventId = parseFloat(selectObj.options[selectObj.selectedIndex].value);
  // แก้ไข้ให้คำนวณราคาของต่าตั๋วที่จองไว้
  return parseFloat(ticknum * eventId).toFixed(2);
}


