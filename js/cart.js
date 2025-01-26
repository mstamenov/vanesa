const cartIdentifier = "cart";

function addToCart(productId) {
    const product = products.find((product) => product.id === productId);
    if (!product) {
      return;
    }
    const cart = JSON.parse(localStorage.getItem(cartIdentifier)) || [];
    cart.push({productId: productId, quantity: 1});
    localStorage.setItem(cartIdentifier, JSON.stringify(cart));
    alert("Продуктът беше добавен в количката");
    updateCartBadge();
  }

function updateCartBadge(){
    const cart = JSON.parse(localStorage.getItem(cartIdentifier)) || [];
    const cartBadgePlaceholder = document.getElementById("cartBadge");
    cartBadgePlaceholder.innerText = cart.length;
    cartBadgePlaceholder.style.display = cart.length > 0 ? "block" : "none";
}

function renderCart(){
    const cart = JSON.parse(localStorage.getItem(cartIdentifier)) || [];
    const cartPlaceholder = document.getElementById("cartProducts");

    const result = cart.reduce((acc, item) => {
        if (acc[item.productId]) {
          // If the id already exists in the accumulator, add the quantity
          acc[item.productId] += item.quantity;
        } else {
          // Otherwise, initialize it with the item's quantity
          acc[item.productId] = item.quantity;
        }
        return acc;
      }, {});

    let totalPrice = 0;
    Object.keys(result).forEach((cartItem) => {
        cartItemNumber = parseInt(cartItem);
        const product = products.find((product) => product.id === cartItemNumber);
        if (!product) {
            return;
        }
        totalPrice += product.price * result[cartItem];
        const productElement = `
        <div style="padding: 10px; padding 10px">
          <span style="display:flex; space-between; align-items:center;">
            <img src="${product.image}" alt="${product.name}" style="width:60px;"/>
            <div style="margin-left: 20px; margin-right: 20px;">
                <h3>${product.name}</h3>
                <p>Цена: ${product.price} лв.</p>
                <p>Количество: ${result[cartItem]}</p>
            </div>
            <a onclick="removeFromCart(${product.id})" style="color:red; font-weight:bold; cursor:pointer">X</a>
        </span>
        </div>
        `;
        cartPlaceholder.innerHTML += productElement;
    });
    
    cartPlaceholder.innerHTML += `<h3>Обща сума: ${totalPrice} лв.</h3>`;
}

function removeFromCart(productId){

    const cart = JSON.parse(localStorage.getItem(cartIdentifier)) || [];
    const newCart = cart.filter((item) => item.productId !== productId);
    localStorage.setItem(cartIdentifier, JSON.stringify(newCart));

    const cartPlaceholder = document.getElementById("cartProducts");
    cartPlaceholder.innerHTML = "";
    renderCart();
    updateCartBadge();
}
