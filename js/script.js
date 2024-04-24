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


addGuestButton.addEventListener("click", function () {
    // capture the value of the guest name in the textbox
    const guest = guestInput.value;
    if(guest !== ""){
        // create a list item
        let listItem = document.createElement("li");
        // the list item's text will be the guest's name
        listItem.innerText = guest;
        guestList.append(listItem);
    }
    clearInput();
});

// clear the input box each time they add a guest 
const clearInput = function () {
    guestInput.value = "";
}