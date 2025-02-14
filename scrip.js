document.getElementById("ucapanForm")?.addEventListener("submit", function(e) {
    e.preventDefault();
    var nama = document.getElementById("nama").value;
    var pesanan = document.getElementById("pesanan").value;

    fetch("https://script.google.com/macros/s/AKfycbzCfMP8FAyH7JQmbBBhJ77I2iZvEBwVdzKVl5RKK361/dev", {
        method: "POST",
        body: JSON.stringify({ nama: nama, pesanan: pesanan }),
        headers: { "Content-Type": "application/json" }
    }).then(response => response.text())
    .then(data => {
        alert("Ucapan telah dihantar!");
        document.getElementById("ucapanForm").reset();
    }).catch(error => console.error("Error:", error));
});
