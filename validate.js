function checkNID() {
  let nid = (document.getElementById("nid").value).trim();
  if (isNaN(nid) && nid.length == 13) { //<---number only
    return true;
  } else {
	return false;
  }
}

function checkTicketNo() {
  let num = (document.getElementById("ticknum").value).trim();
  if (isNaN(num) && num == [1, 2, 3, 4, 5]) { //limit ticket is number & = 1-5
    return true;
  } else {
	return false;
  }
}

function validateForm(){
	if(!checkNID){
	  alert("Invalid value for National ID!");
	  document.getElementById("nid").focus();
	  return false;
	}else{
		if(!checkTicketNo){
		  alert("Invalid value for No.of tickets!!");
		  document.getElementById("ticknum").focus();
		  return false;
		}else{
			total = priceCalculate();
			alert("Total price for this booking is "+total+" USD");
			return false;
		}
	}
}