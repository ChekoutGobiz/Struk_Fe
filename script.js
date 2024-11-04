// script.js

document.addEventListener("DOMContentLoaded", function () {
    const statusElement = document.querySelector('.status');
    
    // Ubah kondisi pembayaran berdasarkan contoh ini
    const isPaid = true; // Ubah ini sesuai status pembayaran

    if (isPaid) {
        statusElement.textContent = "Lunas";
        statusElement.classList.add("lunas");
    } else {
        statusElement.textContent = "Belum Lunas";
        statusElement.classList.add("belum-lunas");
    }
});
