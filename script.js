document.addEventListener("DOMContentLoaded", () => {
    const cartButtons = document.querySelectorAll(".bx-cart-add");
  
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
  
    cartButtons.forEach((button) => {
      button.addEventListener("click", (event) => {
        const productCard = event.target.closest(".card-product");
        if (productCard) {
          const productName = productCard
            .querySelector(".fonts")
            .textContent.trim();
          const productPrice = productCard
            .querySelector("span.fonts")
            .textContent.trim();
          const productImage = productCard.querySelector(".top img").src;
  
          // Mahsulot obyektini yaratamiz
          const product = {
            name: productName,
            price: productPrice,
            image: productImage,
            quantity: 1,
          };
  
  
          let existingProduct = cart.find((item) => item.name === productName);
  
          if (existingProduct) {
            existingProduct.quantity += 1;
          } else {
            cart.push(product);
          }
  
          localStorage.setItem("cart", JSON.stringify(cart));
  
          console.log(cart);
          alert(
            `${productName} savatga qo‘shildi! Jami: ${
              existingProduct ? existingProduct.quantity : 1
            } dona`
          );
        }
      });
    });
  });
  