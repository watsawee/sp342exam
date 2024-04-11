function priceCalculate() {
  let ticknum = (document.getElementById("ticknum").value).trim();
  let selectObj = document.getElementById("event");
  let eventId = parseInt(selectObj.options[selectObj.selectedIndex].value);
  
  let totalPrice = 0;

  if(eventId ==1){
    totalPrice = ticknum * 91.25;
  }else if (eventId ==2){
    totalPrice = ticknum * 79.88;
  }else if(eventId ==3){
    totalPrice = ticknum * 83.12;
  }else if(eventId ==4){
    totalPrice = ticknum * 100;
  }else{
    totalPrice = 0;
  }
  return totalPrice;
}


