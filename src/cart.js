try {
    itemsInCart = JSON.parse(localStorage.getItem("cart"));
  } catch {
    itemsInCart = [];
  }
  
  function addToCart(item) {
    quantity = 1;
  
    product = {
      price: item.getAttribute("price"),
      title: item.getAttribute("title"),
      image: item.getAttribute("image"),
      quantity: quantity,
    };
    itemsInCart.push({ product });
  
    localStorage.setItem("cart", JSON.stringify(itemsInCart));
  
    var result = JSON.parse(localStorage.getItem("cart"));
    alert("Produsl a fost adaugat in cos !");
  }
  
  function emptyCart() {
    localStorage.setItem("cart", []);
    updateCart();
    alert("Toate produsele au fost sterse !");
  }
  
  function removeItem(id) {
    tempArray = [];
    for (var i = 0; i < JSON.parse(localStorage.getItem("cart")).length; i++) {
      if (i == id) {
        continue;
      }
      tempArray.push(JSON.parse(localStorage.getItem("cart"))[i]);
    }
    localStorage.setItem("cart", JSON.stringify(tempArray));
    alert("Produsul a fost sters !");
    updateCart();
  }
  
  function updateCart() {
    window.location.reload();
}