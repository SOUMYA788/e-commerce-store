const updateCartNo = () => {
	let cart_item_no = document.querySelector("#cart-item-no");
	let lscil = JSON.parse(localStorage.getItem("cart_item"))
	cart_item_no.innerText = lscil.length
}

updateCartNo()

