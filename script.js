import Swal from "https://cdn.jsdelivr.net/npm/sweetalert2@11/src/sweetalert2.js";
import { addCSS } from "https://cdn.jsdelivr.net/gh/jscroot/lib@0.0.9/element.js";

addCSS("https://cdn.jsdelivr.net/npm/sweetalert2@11/dist/sweetalert2.css");

// SweetAlert saat halaman dimuat
Swal.fire({
  icon: "info",
  title: "Selamat datang!",
  text: "Struk belanja Anda sedang diproses.",
  confirmButtonText: "Lanjutkan",
  timer: 3000,
});

document.addEventListener("DOMContentLoaded", function () {
  const cartItems = [
    { name: "Nasi Goreng", quantity: 5, price: 15000 },
    { name: "Ayam Bakar", quantity: 3, price: 25000 },
    { name: "Teh Botol", quantity: 4, price: 5000 },
  ];

  const itemListContainer = document.getElementById("itemList");
  const totalPriceElement = document.getElementById("totalPrice");
  const changeElement = document.getElementById("change");
  let total = 0;

  // Gaya item list container
  itemListContainer.style.display = "flex";
  itemListContainer.style.flexDirection = "column";
  itemListContainer.style.padding = "20px";
  itemListContainer.style.backgroundColor = "#f8f9fa";
  itemListContainer.style.borderRadius = "8px";
  itemListContainer.style.boxShadow = "0 4px 8px rgba(0, 0, 0, 0.1)";

  // Menambahkan animasi fade-in dan efek hover pada item belanja
  cartItems.forEach((item, index) => {
    const itemElement = document.createElement("div");
    itemElement.style.display = "flex";
    itemElement.style.justifyContent = "space-between";
    itemElement.style.padding = "10px";
    itemElement.style.marginBottom = "10px";
    itemElement.style.borderRadius = "5px";
    itemElement.style.backgroundColor = "#ffffff";
    itemElement.style.transition = "transform 0.2s, opacity 0.5s ease-in";

    itemElement.onmouseover = () => itemElement.style.transform = "scale(1.05)";
    itemElement.onmouseleave = () => itemElement.style.transform = "scale(1)";

    const totalPriceItem = item.price * item.quantity;
    itemElement.innerHTML = `
      <span style="font-weight: bold;">${item.name}</span>
      <span>${item.quantity} x Rp ${item.price.toLocaleString()} = <strong>Rp ${totalPriceItem.toLocaleString()}</strong></span>
    `;

    itemElement.style.opacity = 0;
    setTimeout(() => {
      itemElement.style.opacity = 1;
    }, index * 100);

    itemListContainer.appendChild(itemElement);
    total += totalPriceItem;
  });

  // Menampilkan total harga dengan gaya
  totalPriceElement.textContent = `Total: Rp ${total.toLocaleString()}`;
  totalPriceElement.style.color = "#4CAF50";
  totalPriceElement.style.fontSize = "1.5rem";
  totalPriceElement.style.fontWeight = "bold";
  totalPriceElement.style.marginTop = "15px";
  
  // Menghitung kembalian (asumsi pembayaran Rp 300.000)
  const cash = 300000;
  const change = cash - total;
  changeElement.textContent = `Kembalian: Rp ${change.toLocaleString()}`;
  changeElement.style.color = "#FF5733";
  changeElement.style.fontSize = "1.2rem";
  changeElement.style.fontWeight = "bold";

  // Menampilkan tanggal saat ini
  const currentDate = new Date().toLocaleDateString("id-ID");
  document.getElementById("date").textContent = currentDate;
  document.getElementById("date").style.fontStyle = "italic";
  document.getElementById("date").style.marginTop = "10px";

  // SweetAlert konfirmasi total
  Swal.fire({
    icon: "question",
    title: "Konfirmasi Total",
    text: `Total belanja Anda adalah Rp ${total.toLocaleString()}. Apakah ini sudah benar?`,
    showCancelButton: true,
    confirmButtonText: "Ya",
    cancelButtonText: "Tidak",
    confirmButtonColor: "#4CAF50",
    cancelButtonColor: "#FF5733",
  }).then((result) => {
    if (result.isConfirmed) {
      Swal.fire({
        icon: "success",
        title: "Struk Belanja Dibuat",
        text: "Terima kasih telah berbelanja!",
        confirmButtonText: "OK",
        timer: 3000,
        timerProgressBar: true,
      });
    } else {
      Swal.fire({
        icon: "error",
        title: "Dibatalkan",
        text: "Silakan periksa kembali belanja Anda.",
        confirmButtonText: "OK",
      });
    }
  });
});
