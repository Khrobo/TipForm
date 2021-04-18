// Variables 
const calcBtn = document.querySelector(".submit");
const priceInput = document.getElementById("bill");
const peopleInput = document.getElementById("people");
const qualityInput = document.getElementById("quality");
const notifications = document.querySelector(".notifications");
const billNotify = document.querySelector(".bill-notif");
const peopleNotify = document.querySelector(".people-notif");
const qualityNotify = document.querySelector(".quality-notif");

// Event Listeners
calcBtn.addEventListener("click", calculateSum) // Button click for submit

// Functions
function calculateSum(e) {
    e.preventDefault() // Prevents from submitting form
    let product = priceInput.value * qualityInput.value; // Calculates the tip
    let sumOfP = +priceInput.value + +product; // Adds the tip to the amount due
    let quotient = sumOfP / peopleInput.value; // Divides by the amount of people present

    if (priceInput.value == "" && peopleInput.value == "" && qualityInput.value == "Choose...") {
        hideBill();
        hidePersons();
        hideFeedBack();
    } else if (priceInput.value == "") {
        hideBill();
    } else if (peopleInput.value == "") {
        hidePersons();
    } else if (qualityInput.value == "Choose...") {
        hideFeedBack();
    } else {
        document.querySelector(".loading").style.display = "block";
        document.querySelector(".contain-sum").style.display = "block";
        setTimeout(() => {
            document.querySelector(".loading").style.display = "none";
            console.log("Calculated!")
            document.querySelector(".contain-sum").style.background = "#61982F";
            document.querySelector(".total").innerText = `Total: $${sumOfP.toFixed(2)}`;
            document.querySelector(".tip").innerText = `Tip: $${product.toFixed(2)}`;
            document.querySelector(".amount").innerText = `Individual(s) owes: $${quotient.toFixed(2)}`;
            
        }, 3500);
        setTimeout(() => {
            let text = document.getElementsByClassName("appear");
            for (let i=0; i<text.length; i++) {
                text[i].innerText = "";
            }
            priceInput.value = ""; // Resets the values to nothing
            peopleInput.value = "";
            qualityInput.value = "";
            document.querySelector(".contain-sum").style.background = "transparent";
            document.querySelector(".contain-sum").style.display = "";
        }, 12000)
    }
}
function hideBill() { // Shows bill notification if input is missing
        console.log("Price is missing!");
        notifications.style.display = "block";
        billNotify.style.display = "block";
        setTimeout(() => {
        notifications.style.display = "";
        billNotify.style.display = "";
        }, 4000);
}
function hidePersons() { // Shows people notification if input is missing
    console.log("Persons are missing!");
    notifications.style.display = "block";
    peopleNotify.style.display = "block";
    setTimeout(() => {
        notifications.style.display = "";
        peopleNotify.style.display = "";
    }, 4000);
}
function hideFeedBack() { // Shows quality notification if input is missing
    console.log("Feedback is missing!");
    notifications.style.display = "block";
    qualityNotify.style.display = "block";
    setTimeout(() => {
        notifications.style.display = "";
        qualityNotify.style.display = "";
    }, 4000);
}




