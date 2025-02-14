document.addEventListener("DOMContentLoaded", function() {
    paparkanUcapan();
    
    document.getElementById("ucapanForm")?.addEventListener("submit", function(e) {
        e.preventDefault();
        
        var nama = document.getElementById("nama").value;
        var pesanan = document.getElementById("pesanan").value;
        
        var ucapan = { nama: nama, pesanan: pesanan };
        var ucapanList = JSON.parse(localStorage.getItem("ucapanList")) || [];
        ucapanList.push(ucapan);
        localStorage.setItem("ucapanList", JSON.stringify(ucapanList));
        
        document.getElementById("ucapanForm").reset();
        paparkanUcapan();
    });
});

function paparkanUcapan() {
    var ucapanList = JSON.parse(localStorage.getItem("ucapanList")) || [];
    var senaraiUcapan = document.getElementById("senaraiUcapan");
    senaraiUcapan.innerHTML = "";
    
    ucapanList.forEach(function(ucapan) {
        var ucapanElement = document.createElement("p");
        ucapanElement.innerHTML = `<strong>${ucapan.nama}:</strong> ${ucapan.pesanan}`;
        senaraiUcapan.appendChild(ucapanElement);
    });
}
