import Swal from "https://cdn.jsdelivr.net/npm/sweetalert2@11/src/sweetalert2.js";
import {addCSS} from "https://cdn.jsdelivr.net/gh/jscroot/lib@0.0.9/element.js";

addCSS("https://cdn.jsdelivr.net/npm/sweetalert2@11/dist/sweetalert2.css");
Swal.fire({
      icon: "error",
      title: "Testing",
      text: "Hi, from JSCroot",
    });

    document.addEventListener("DOMContentLoaded", function () {
        const cartItems = [
            { name: 'Nasi Goreng', quantity: 5, price: 15000 },
            { name: 'Ayam Bakar', quantity: 3, price: 25000 },
            { name: 'Teh Botol', quantity: 4, price: 5000 }
        ];
    
        const itemListContainer = document.getElementById("itemList");
        const totalPriceElement = document.getElementById("totalPrice");
        const changeElement = document.getElementById("change");
    
        let total = 0;
    
        // Display product list with details
        cartItems.forEach(item => {
            const itemElement = document.createElement("p");
            const totalPriceItem = item.price * item.quantity;
    
            itemElement.innerHTML = `
                <span>${item.name}</span>
                <span>${item.quantity} x Rp ${item.price.toLocaleString()} = Rp ${totalPriceItem.toLocaleString()}</span>
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
    
