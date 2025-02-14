document.getElementById("rsvp-form").addEventListener("submit", function(event) {
    event.preventDefault();
    
    let formData = new FormData(this);
    let data = new URLSearchParams(formData);
    
    fetch("https://script.google.com/macros/s/AKfycbwwCpo8HX7FxV0ITXK_uJRBnQ5SgoBGpXSpNnOMAaXDVxc-wzi9PiBvCvkDyvspTqVw6A/dev", {  
        method: "POST",
        body: data
    })
    .then(response => response.text())
    .then(data => {
        alert("Terima kasih! RSVP anda telah direkod.");
    })
    .catch(error => console.error("Error:", error));
});
