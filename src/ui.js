class UI {
	constructor() {
		this.productsDiv = document.getElementById('products');
		this.details = document.getElementById('details');
		this.cartProducts = document.getElementById('cart');
		this.productsDivAdmin = document.getElementById("products-admin");
		this.cartProductsDiv = document.getElementById("cart-content");
		this.pricesDiv = document.getElementById("prices");
	}

	showProducts(products) {
		let output = '';
		products.forEach((product) => {
			output = `
         <div class="row" >
			<div class="col-4">
				<img src="${product.image}" class="card-img" alt="...">
				<h4>${product.title}</h4>
				<div class="rating">
                        <i class="fa fa-star"></i>
                        <i class="fa fa-star"></i>
                        <i class="fa fa-star"></i>
                        <i class="fa fa-star-half-o"></i>
                        <i class="fa fa-star-o"></i>
                </div>
				<p>${product.price} lei</p>
				<button onclick="window.location.href='details.html?id=${product.id}'" type="button" class="btn btn-full">Detalii</button>
				
			</div>
		</div>
         `;
		 try {
			this.productsDiv.innerHTML += output;
		  } catch {}
		});
	  }
	  
  showProductsAdmin(products) {
    let output = "";
    products.forEach((product) => {
      output = `
         <div class="row" >
			<div class="col-4">
				<img src="${product.image}" class="card-img" alt="...">
				<h4>${product.title}</h4>
				<p>${product.price} lei</p>
				<button onClick="reply_click(this)" idd=${product.id} id="button-delete" type="button" class="btn btn-full">Delete</button>			
			</div>
		</div>
         `;
      try {
        this.productsDivAdmin.innerHTML += output;
      } catch {}
    });
  }

  showCartProducts() {
    let output = "";
    try {
      for (
        var i = 0;
        i < JSON.parse(localStorage.getItem("cart")).length;
        i++
      ) {
        output += `
		<tr>
		<td>
			<div class="cart-info">
				<img src="${
          JSON.parse(localStorage.getItem("cart"))[i]["product"]["image"]
        }" width="15%" height="15%">
				<div class="info">
					<p>${JSON.parse(localStorage.getItem("cart"))[i]["product"]["title"]}</p>
					<small>${
            JSON.parse(localStorage.getItem("cart"))[i]["product"]["price"]
          } lei</small>
				</div>
			</div>
		</td>
    <div class="cart-details">
		<td><input type="number" value=${
      JSON.parse(localStorage.getItem("cart"))[i]["product"]["quantity"]
    }></td>
		<td>${
      parseInt(
        JSON.parse(localStorage.getItem("cart"))[i]["product"]["quantity"]
      ) *
      parseInt(JSON.parse(localStorage.getItem("cart"))[i]["product"]["price"])
    }lei</td>
		<td><button class="btn-danger" onClick="removeItem(${i})" type="button"><i class="fa fa-trash"></i></button></td>
		</tr>
    </div>`;
      }
    } catch {
      output += `<h1>Nici un produs in cos</h1>`;
    }
    this.cartProductsDiv.innerHTML += output;
  }

  showPrices() {
    let totalPrice = 0;
    try {
      for (
        var i = 0;
        i < JSON.parse(localStorage.getItem("cart")).length;
        i++
      ) {
        totalPrice += parseInt(
          JSON.parse(localStorage.getItem("cart"))[i]["product"]["price"]
        );
      }
      let output = "";
      let transport = parseInt(12);
      output += `
	<div class="total-price">
                        <table>
                            <div id="prices">
                            <tr>
                                <td>Subtotal</td>
                                <td>${totalPrice} lei</td>
                            </tr>
                            <tr>
                                <td>Transport</td>
                                <td>${transport} lei</td>
                            </tr>
                            <tr>
                                <td>Total</td>
                                <td>${transport + totalPrice} lei</td>
                            </tr> 
                        </div>`;
      this.pricesDiv.innerHTML += output;
    } catch {}
  }

	showDetails(product) {
		let output = '';
			output += `
		<div class="details_product">
			<div class="content">
				<h2>"${product.title}"</h2>
				<div class="rating">
					<i class="fa fa-star"></i>
					<i class="fa fa-star"></i>
					<i class="fa fa-star"></i>
					<i class="fa fa-star-half-o"></i>
					<i class="fa fa-star-o"></i>
				</div>
				<p>${product.description}</p>
				<strong class="price">${product.price} lei</strong>
				<a href="#" onClick='addToCart(this)' id="cumpara" image=${product.image} price=${product.price} title=${product.title} class="btn btn-full">Cumpără <i class="fa fa-shopping-cart"></i></a>
			</div>
			<div class="image-container">
                <img src="${product.image}">
            </div>
		</div>
		`;
		this.details.innerHTML += output;
	}
}

export const ui = new UI();