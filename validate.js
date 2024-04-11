function checkNID() {
  let nid = (document.getElementById("nid").value).trim();
  let nidcheck = /^\d{13}$/;
  return nidcheck.test(nid);
}

function checkTicketNo() {
  let num = (document.getElementById("ticknum").value).trim();
  if (num>=1 && num<=5) {
    return true;
  } else if (isNaN(num) ){
	return false;
  }
  else{
	return false;
  }
}

function validateForm(){
	if(!checkNID()){
	  alert("Invalid value for National ID!");
	  document.getElementById("nid").focus();
	  return false;
	}else{
		if(!checkTicketNo()){
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