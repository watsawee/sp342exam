function priceCalculate() {
    let ticknum = (document.getElementById("ticknum").value).trim();
    let selectObj = document.getElementById("event");
    let eventId = parseInt(selectObj.options[selectObj.selectedIndex].value);
    if(eventId == 1){
      return 70*ticknum;
    }else if(eventId == 2){
      return 60*ticknum;
    }else if(eventId == 3){
      return 50*ticknum;
    }else if(eventId == 4){
      return 40*ticknum;
    }else{
    return 0;
  }
  }