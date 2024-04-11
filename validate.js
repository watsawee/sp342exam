function checkNID() {
  let nid = (document.getElementById("nid").value).trim();
  if (/^\d{13}$/.test(nid)) {
    return true;
  } else {
    return false;
}
}

function checkTicketNo() {
  let num = (document.getElementById("ticknum").value).trim();
  if (!isNaN(num) && num >= 1 && num <= 5) {
    return true;
  } else {
    return false;
  }
}

function validateForm(){
    let nid = document.getElementById("nid").value.trim();
    let fname = document.getElementById("fname").value.trim();
    let lname = document.getElementById("lname").value.trim();
    let ticknum = document.getElementById("ticknum").value.trim();

    if (nid === "" || fname === "" || lname === "" || ticknum === "") {
        alert("Please fill in all fields!");
        return false;
    }//ถ้ากรอกไม่ครบจะขึ้นค่ะ

    if (!checkNID()){
        alert("Invalid value for National ID!");
        document.getElementById("nid").focus();
        return false;
    }

    if (!checkTicketNo()){
        alert("Invalid value for No.of tickets!!");
        document.getElementById("ticknum").focus();
        return false;
    }

    total = priceCalculate();
    alert("Total price for this booking is "+total+" USD");
    return false;
}
