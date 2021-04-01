class UI {
	constructor() {
		this.productsDiv = document.getElementById('products');
		this.id = document.getElementById('id');
		this.title = document.getElementById('title');
		this.price = document.getElementById('price');
		this.image = document.getElementById('image');
		this.description = document.getElementById('description');
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
				<button type="button" class="btn btn-full" href='details.html?id=${product.id}'>Details</button>
				<button type="button" class="btn btn-full" href='details.html?id=${product.description}'>Detalii</button>
			</div>
		</div>
         `;
			this.productsDiv.innerHTML += output;
		});
	}
}

export const ui = new UI();