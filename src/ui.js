class UI {
	constructor() {
		this.productsDiv = document.getElementById('products');
		// this.id = document.getElementById('id');
		// this.title = document.getElementById('title');
		// this.price = document.getElementById('price');
		// this.image = document.getElementById('image');
		// this.description = document.getElementById('description');
		this.details = document.getElementById('details');
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
			this.productsDiv.innerHTML += output;
		});
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
				<a href="#" class="btn btn-full">Cumpără <i class="fa fa-shopping-cart"></i></a>
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