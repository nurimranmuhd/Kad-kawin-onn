document.getElementById("rsvp-form").addEventListener("submit", function(event) {
    event.preventDefault();
    
    let formData = new FormData(this);
    let data = new URLSearchParams(formData);
    
    fetch("https://script.google.com/macros/s/AKfycbxAVmoKNjVMPZRINLMCBIiyL_xj8GgGRddHZPUM1gfQQfYjm2KCKEkAUq_-sP4t47KJFw/dev", {  
        method: "POST",
        body: data
    })
    .then(response => response.text())
    .then(data => {
        alert("Terima kasih! RSVP anda telah direkod.");
    })
    .catch(error => console.error("Error:", error));
});
