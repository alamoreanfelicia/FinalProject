// Add product to db

import { http } from "./http.js";
document.getElementById('add-product').addEventListener('click', addNewProduct);

function addNewProduct() {
	
	const titleValue = document.getElementById('title').value;
	const priceValue = document.getElementById('price').value;
	const imageValue = document.getElementById('image').value;
	const descriptionValue = document.getElementById('description').value;
	const id = generateId();

	let product = {
		id: id,
		title: titleValue,
		image: imageValue,
		price: priceValue,
		description: descriptionValue,
		stock: "100"
	};

	http.post('http://localhost:3000/products/', product).then(window.location.reload())
}

function generateId() {
	let characters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

	let id = "";
	for (let i = 0; i < 60; i++) {
		id += characters[Math.floor(Math.random() * characters.length)];
	}
	return id;
}

// document.getElementById('products').addEventListener('click', deleteProduct);

// function deleteProduct(e) {
// 	if (e.target.classList.contains('delete')) {
// 		const id = e.target.id;
// 		http
// 			.delete(`http://localhost:3000/products/${id}`)
// 			.then((data) => getProducts())
// 			.catch('Error on delete!');
// 	}
// }