function checkNID() {
  let nid = (document.getElementById("nid").value).trim();
  // แก้ไขให้กรอกได้เฉพาะตัวเลข และไม่เกิน 13 หลักเท่านั้น
  if (nid.length != 13 || isNaN(nid)) {
    return false;
  } else {
	return true;
  }
}

function checkTicketNo() {
  let num = (document.getElementById("ticknum").value).trim();
  // แก้ไขข้อมูลให้จองตั๋วได้ไม่เกิน 5 ใบเท่านั้น
  if (isNaN(num) || num > 5 || num < 1 ) {
    return false;
  } else {
	return true;
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