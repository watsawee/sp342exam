function checkNID() {
    let nid = (document.getElementById("nid").value).trim();
    if (!isNaN(nid)) {
        if (nid.length != 13) {
            return false;
        } else {
            return true;
        }
    }
}

function checkTicketNo() {
    let num = (document.getElementById("ticknum").value).trim();
    if (!isNaN(num)) {
        if (num <= 0 || num > 5) {
            return false;
        } else {
            return true;
        }
    }
}


function validateForm() {
    if (!checknid2()) {
        alert("please input!");
        document.getElementById("nid").focus();
        return false;
    } else if (!checkname()) {
        alert("please input!");
        document.getElementById("fname").focus();
        return false;
    } else if (!checklname()) {
        alert("please input!");
        document.getElementById("lname").focus();
        return false;
    } else if (!checkNID()) {
        alert("Invalid value for National ID!");
        document.getElementById("nid").focus();
        return false;
    } else {
        if (!checkTicketNo()) {
            alert("Invalid value for No.of tickets!!");
            document.getElementById("ticknum").focus();
            return false;
        } else {
            total = priceCalculate();
            alert("Total price for this booking is " + total + " USD");
            return false;
        }
    }

}

function checkname() {
    let fname = (document.getElementById("fname").value).trim();
    if (fname.length <= 0) {
        return false;
    } else {
        return true;
    }
}

function checklname() {
    let lname = (document.getElementById("lname").value).trim();
    if (lname.length <= 0) {
        return false;
    } else {
        return true;
    }
}

function checknid2() {
    let nid = (document.getElementById("nid").value).trim();
    if (nid.length <= 0) {
        return false;
    } else {
        return true;
    }
}