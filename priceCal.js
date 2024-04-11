function priceCalculate() {
  let ticknum = parseInt((document.getElementById("ticknum").value).trim());
  let selectObj = document.getElementById("event");
  let eventId = parseInt(selectObj.options[selectObj.selectedIndex].value);
  let eventPriceText = selectObj.options[selectObj.selectedIndex].text;
  let eventPrice = parseFloat(eventPriceText.match(/\d+\.\d+/)[0]);

  let totalPrice = eventPrice * ticknum;

  // แสดง Popup message แสดงราคาค่าตั๋วทั้งหมด
  alert("ราคารวมทั้งหมด: " + totalPrice.toFixed(2) + " USD"); 

  // คืนค่า false เพื่อป้องกันการส่งค่าไปยัง action ของฟอร์ม
  return false;
}
