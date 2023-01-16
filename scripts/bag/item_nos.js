const updateCartNo = () => {
	let cart_item_no = document.querySelectorAll(".cart-item-no");
	let lscil = JSON.parse(localStorage.getItem("cart_item"))
	cart_item_no.forEach(element => {
		element.innerText = lscil.length
		if (lscil.length < 1) {
			element.style.display = "none"
		}
	});

}

updateCartNo()

