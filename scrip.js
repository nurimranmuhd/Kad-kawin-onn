document.getElementById("rsvp-form").addEventListener("submit", function(event) {
    event.preventDefault();
    
    let formData = new FormData(this);
    let data = new URLSearchParams(formData);
    
    fetch("https://script.google.com/macros/s/AKfycbzCfMP8FAyH7JQmbBBhJ77I2iZvEBwVdzKVl5RKK361/dev", {  
        method: "POST",
        body: data
    })
    .then(response => response.text())
    .then(data => {
        alert("Terima kasih! RSVP anda telah direkod.");
    })
    .catch(error => console.error("Error:", error));
});
