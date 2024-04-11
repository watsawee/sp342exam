function checkNID() {
	let nid = (document.getElementById("nid").value).trim();
	if (isNaN(nid) || nid.length !== 13) {
		return false;
	} else {
	  	return true;
	}
}

function checkTicketNo() {
	let num = parseInt((document.getElementById("ticknum").value).trim());
	if (isNaN(num) || num < 1 || num > 5) {
		return false;
	} else {
		return true;
	}
}
  

function validateForm(){
	if(!checkNID()){
	  alert("Invalid value for National ID! \nThe ID card number must contain only 13 digits.");
	  document.getElementById("nid").focus();
	  return false;
	}else{
		if(!checkTicketNo()){
		  alert("Invalid value for No.of tickets!! \nOnly 1-5 tickets can be purchased per person.");
		  document.getElementById("ticknum").focus();
		  return false;
		}else{
			let ticketInfo = priceCalculate();
			alert("Total number of tickets: " + ticketInfo.totalTicknum + " \nTotal price for this booking: " + ticketInfo.totalPrice + " USD");
			return false;
		}
	}
}
