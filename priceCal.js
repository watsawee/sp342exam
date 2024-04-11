function priceCalculate() {
    let ticknum = (document.getElementById("ticknum").value).trim();
    let selectObj = document.getElementById("event");
    let eventId = parseInt(selectObj.options[selectObj.selectedIndex].value);
        
    if (eventId == 1) {
        eventId = 91.25
        const sum = eventId* ticknum
        return sum;
    } else if (eventId == 2) {
        eventId = 79.88
        const sum = eventId* ticknum
        return sum;
    } else if (eventId == 3) {
        eventId = 83.12
        const sum = eventId* ticknum
        return sum
    } else if(eventId == 4){
        eventId = 100
        const sum = eventId* ticknum
        return sum
    }
}


