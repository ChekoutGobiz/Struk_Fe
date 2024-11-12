import Swal from "https://cdn.jsdelivr.net/npm/sweetalert2@11/src/sweetalert2.js";
import { addCSS } from "https://cdn.jsdelivr.net/gh/jscroot/lib@0.0.9/element.js";

addCSS("https://cdn.jsdelivr.net/npm/sweetalert2@11/dist/sweetalert2.css");
Swal.fire({
  icon: "error",
  title: "Testing",
  text: "Hi, from JSCroot",
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

  // Display product list with details
  cartItems.forEach((item) => {
    const itemElement = document.createElement("p");
    const totalPriceItem = item.price * item.quantity;

    itemElement.innerHTML = `
                <span>${item.name}</span>
                <span>${
                  item.quantity
                } x Rp ${item.price.toLocaleString()} = Rp ${totalPriceItem.toLocaleString()}</span>
            `;

    itemListContainer.appendChild(itemElement);
    total += totalPriceItem;
  });

  // Display total price
  totalPriceElement.textContent = `Rp ${total.toLocaleString()}`;

  // Calculate change (assuming payment of Rp 300,000)
  const cash = 300000;
  const change = cash - total;
  changeElement.textContent = `Rp ${change.toLocaleString()}`;

  // Display current date
  const currentDate = new Date().toLocaleDateString("id-ID");
  document.getElementById("date").textContent = currentDate;
});

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

  // Animasi fade-in
  itemListContainer.style.transition = "opacity 0.5s ease-in";

  // Menampilkan daftar produk beserta detail
  cartItems.forEach((item, index) => {
    const itemElement = document.createElement("p");
    const totalPriceItem = item.price * item.quantity;

    itemElement.innerHTML = `
                <span>${item.name}</span>
                <span>${
                  item.quantity
                } x Rp ${item.price.toLocaleString()} = Rp ${totalPriceItem.toLocaleString()}</span>
            `;

    itemElement.style.opacity = 0; // Untuk animasi fade-in
    itemListContainer.appendChild(itemElement);

    // Animasi fade-in delay per item
    setTimeout(() => {
      itemElement.style.opacity = 1;
    }, index * 100);

    total += totalPriceItem;
  });

  // Menampilkan total harga
  totalPriceElement.textContent = `Rp ${total.toLocaleString()}`;

  // Menghitung kembalian (asumsi pembayaran Rp 300.000)
  const cash = 300000;
  const change = cash - total;
  changeElement.textContent = `Rp ${change.toLocaleString()}`;

  // Menampilkan tanggal saat ini
  const currentDate = new Date().toLocaleDateString("id-ID");
  document.getElementById("date").textContent = currentDate;

  // SweetAlert konfirmasi total
  Swal.fire({
    icon: "question",
    title: "Konfirmasi Total",
    text: `Total belanja Anda adalah Rp ${total.toLocaleString()}. Apakah ini sudah benar?`,
    showCancelButton: true,
    confirmButtonText: "Ya",
    cancelButtonText: "Tidak",
  }).then((result) => {
    if (result.isConfirmed) {
      Swal.fire({
        icon: "success",
        title: "Struk Belanja Dibuat",
        text: "Terima kasih telah berbelanja!",
        confirmButtonText: "OK",
        timer: 3000,
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
