function checkNID() {
	let nid = (document.getElementById("nid").value).trim();
	if (!isNaN(nid) && nid.length == 13 ) {
	  return true;
	} else {
	  return false;
	}
  }
   
  function checkTicketNo() {
	let num = (document.getElementById("ticknum").value).trim();
	if (isNaN(num) | num < 1 , num > 5 ) {
	  return false;
	} else {
	  return true;
	}
  }
   
  function validateForm(){
	  if(!checkNID()){
		alert("Invalid value for National ID!");
		document.getElementById("nid").focus();
		return true;
	  }else{
		  if(!checkTicketNo()){
			alert("Invalid value for No.of tickets!!");
			document.getElementById("ticknum").focus();
			return true;
		  }else{
			  total = priceCalculate();
			  alert("Total price for this booking is "+total+" USD");
			  return false;
		  }
	  }
  }