document.getElementById("rsvpForm").addEventListener("submit", function(e) {
    e.preventDefault();
    
    let nama = document.getElementById("nama").value;
    let kehadiran = document.querySelector('input[name="kehadiran"]:checked').value;
    let bilangan = document.getElementById("bilangan").value;
    let ucapan = document.getElementById("ucapan").value;

    let data = {
        nama: nama,
        kehadiran: kehadiran,
        bilangan: bilangan,
        ucapan: ucapan
    };

    fetch("https://script.google.com/macros/s/AKfycbzCfMP8FAyH7JQmbBBhJ77I2iZvEBwVdzKVl5RKK361/dev", {
        method: "POST",
        body: JSON.stringify(data),
        headers: { "Content-Type": "application/json" }
    })
    .then(response => response.text())
    .then(data => alert("RSVP Berjaya Dihantar!"))
    .catch(error => console.error("Error:", error));
});
