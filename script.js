// Hitta formuläret och dess fält
var form = document.getElementById("contactForm");
var nameInput = document.getElementById("name");
var emailInput = document.getElementById("email");
var messageInput = document.getElementById("message");

// Lägg till en händelselyssnare för formuläret när det skickas
form.addEventListener("submit", function(event) {
    // Kontrollera om namn, e-post och meddelande är giltiga
    if (nameInput.value === "" || emailInput.value === "" || messageInput.value === "") {
        alert("Fyll i alla fält!");
        event.preventDefault(); // Förhindra att formuläret skickas om något fält är tomt
    }
});