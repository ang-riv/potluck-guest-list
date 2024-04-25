// invite button
const addGuestButton = document.querySelector(".invite");
// label for the invite button
const guestInputLabel = document.querySelector(".add-guest label");
// text input box
const guestInput = document.querySelector(".add-guest input");
// unordered list (not yet visible)
const guestList = document.querySelector(".guest-list");
// span class for number of guests attending
const guestCount = document.querySelector(".attendance");
// alert when guest list is full (not yet visible)
const guestFull = document.querySelector(".alert");
// appears when the guest list is full
const assignButton = document.querySelector(".assign");
// unordered list that has the guests name and their assigned dish
const assignedItems = document.querySelector(".assigned-items");

addGuestButton.addEventListener("click", function () {
    // capture the value of the guest name in the textbox
    const guest = guestInput.value;
    if(guest !== ""){
        addToList(guest);
        updateGuestCount();
    }
    clearInput();
});

// clear the input box each time they add a guest 
const clearInput = function () {
    guestInput.value = "";
};

// add guest to the list
const addToList = function (guest) {
        // create a list item
        const listItem = document.createElement("li");
        // the list item's text will be the guest's name
        listItem.innerText = guest;
        guestList.append(listItem);
};

// number of guests
const updateGuestCount = function () {
    // select all of the guests
    let guests = document.querySelectorAll(".guest-list li");
    guestCount.innerText = guests.length;
    if(guests.length === 4){
        // if there are exactly 8 guests, hide the button and text box
        addGuestButton.classList.add("hide");
        guestInput.classList.add("hide");
        guestInputLabel.classList.add("hide");

        // show the guest full alert
        guestFull.classList.remove("hide");
    }
};

// give the guest an item to make
const assignItems = function () {
    // array of yummy items
    const potluckItems = ["pasta", "sandwiches", "pinwheels", "pizza", "cookies", "fruit", "salad", "mashed potatoes", "spaghetti", "deviled eggs", "nachos", "fried rice"];
    // all of the guests
    const allGuests = document.querySelectorAll(".guest-list li");
    for (let guest of allGuests) {
        // make a random number from 0 to the total number of potluck items
        let randomPotLuckIndex = Math.floor(Math.random() * potluckItems.length);
        // this is the item at the random index number that we generated
        let randomPotLuckItem = potluckItems[randomPotLuckIndex]
        // make a new list item
        let listItem = document.createElement("li");
        // you need to use guest.innerText to access the NAME inside of the li element. If you use just guest you end up with the LIST ELEMENT, not the text!
        listItem.innerText = `${guest.innerText} is bringing ${randomPotLuckItem}.`
        // add the listItem to the ul
        assignedItems.append(listItem);
        //remove the item so it won't be assigned to someone else
        potluckItems.splice(randomPotLuckIndex, 1);
    }
};

assignButton.addEventListener("click", function () {
    assignItems();
    // disable the button 
    assignButton.disabled = true;
});