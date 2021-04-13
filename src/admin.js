// Add product to db


class UI {
    constructor() {
        document.getElementById('add-product').addEventListener('click', addNewProduct);
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
                <button class="add_btn" id="${product.id}">Delete</button>
            </div>
        </div>
         `;
            this.productsDiv.innerHTML += output;
        });
    };
}

export const ui = new UI();





function addNewProduct() {
	const titleValue = document.getElementById('title').value;
	const priceValue = document.getElementById('price').value;
	const imageValue = document.getElementById('image').value;
	const descriptionValue = document.getElementById('description').value;

	let product = {
		title: titleValue,
		price: priceValue,
		image: imageValue,
		description: descriptionValue,
	};

	http
		.post('http://localhost:3000/products', product)
		.then((data) => getProducts());
}

document.getElementById('products').addEventListener('click', deleteProduct);

function deleteProduct(e) {
	if (e.target.classList.contains('delete')) {
		const id = e.target.id;
		http
			.delete(`http://localhost:3000/products/${id}`)
			.then((data) => getProducts())
			.catch('Error on delete!');
	}
}