let manageCart = () => {
	let changePositiveQTY = document.getElementsByClassName("changePosQTY");
	let changeNegetiveQTY = document.getElementsByClassName("changeNegQTY");
	let cartProductQTY = document.getElementsByClassName("cartProductQTY");
	// SET ONE
	// add new products in bag and semountinusly update total value of product in cart.
	const cartProductList = document.querySelector("#cartProductList")

	let cartProductData = []

	let cartPaymentDetails = document.querySelector("#cartPaymentDetails")
	if (localStorage.getItem("cart_item").toString() !== "[]") {
		// console.log("data found");
		cartPaymentDetails.style.display = "block"
		cartProductData = JSON.parse(localStorage.getItem("cart_item"))
	} else {
		cartPaymentDetails.style.display = "none"
		// console.log("data not available");
	}

	let cartProductListInnerHTML = ""


	if (cartProductData.length != null || cartProductData.length != 0) {
		cartProductData.forEach((cpd) => {
			cartProductListInnerHTML += `
				<div class="cpl">
					<div class="cpl1">
						<div>
							<img src="../${cpd.img}" alt="image">
						</div>
						<ul>
							<li>
								<P class="changeNegQTY">-</P>
							</li>
							<li>
								<input type="text" name="qty" class="cartProductQTY" value="1">
							</li>
							<li>
								<P class="changePosQTY">+</P>
							</li>
						</ul>
					</div>

					<div class="cpl2">
						<p>${cpd.name}</p>
						<p>${cpd.price}</p>
						<p>Approximate one 4 working days after you place order</p>
						<p class="cartRemove">REMOVE</p>
					</div>
				</div>
				`
		});

	}

	cartProductList.innerHTML = cartProductListInnerHTML;


	// Maintain Total Amount
	let totalProductValue;

	const maintainTotalValue = () => {
		totalProductValue = "";
		if (cartProductData.length != 0) {
			cartProductData.forEach((cpd, cpdCount) => {
				for (let i = 0; i < cartProductQTY.length; i++) {
					if (i == cpdCount) {
						let price = cpd.calc_price;
						let qty = cartProductQTY[i].value;
						if (i < (cartProductQTY.length - 1)) {
							totalProductValue += `(${price} * ${qty}) + `
						} else {
							totalProductValue += `(${price} * ${qty})`
						}
					}
				}
			});
		}
		document.querySelector("#grossAmt").innerText = eval(totalProductValue)

		let payableAmt = document.querySelector("#payableAmt");
		let discount = document.querySelector("#discount");

		if (totalProductValue != null || totalProductValue != NaN || totalProductValue != "" || totalProductValue != undefined) {
			discount.innerText = ((eval(totalProductValue) * 30) / 100)
			payableAmt.innerText = Math.round(eval(totalProductValue) - discount.innerText - document.querySelector("#delCh").innerText);
		}

		if (discount.innerText == "NaN" || discount.innerText == "undefined") {
			discount.innerText = "0"
			payableAmt.innerText = "0"
		}
	}

	maintainTotalValue();


	// update products status which is inside of bag

	for (let i = 0; i < changePositiveQTY.length; i++) {
		const btn = changePositiveQTY[i];
		for (let k = 0; k < cartProductQTY.length; k++) {
			const qty = cartProductQTY[k];
			if (i == k) {
				btn.addEventListener("click", () => {
					changeValue("up", qty);
					maintainTotalValue();
				})
			}
		}
	}

	for (let j = 0; j < changeNegetiveQTY.length; j++) {
		const btn = changeNegetiveQTY[j];
		for (let k = 0; k < cartProductQTY.length; k++) {
			const qty = cartProductQTY[k];
			if (j == k) {
				btn.addEventListener("click", () => {
					changeValue("down", qty);
					maintainTotalValue();
				})
			}
		}
	}

	let changeValue = (where, which) => {
		if (where == "up") {
			if (parseInt(which.value) < 3) {
				which.value = parseInt(which.value) + 1;
			}
		} else if (where == "down") {
			if (parseInt(which.value) > 1) {
				which.value = parseInt(which.value) - 1;
			}
		}
	}

	// REMOVE FROM CART
	let removeCart = document.querySelectorAll(".cartRemove");
	removeCart.forEach((rc, rcCount) => {
		rc.addEventListener("click", () => {
			console.log(rc);
			cartProductData.splice(rcCount, 1)
			localStorage.setItem("cart_item", JSON.stringify(cartProductData))
			manageCart()
			window.location.reload()
		})
	});


	// ACTIVATE PAYMENT FULL INFO



	// ACTIVATE PAY NOW BTN
	let payNowBTN = document.querySelector("#payNowBtn");
	payNowBTN.addEventListener("mousedown", (e) => {
		e.stopPropagation()
		payNowBTN.style.backgroundColor = "#C72945";
	})

	payNowBTN.addEventListener("mouseup", (e) => {
		e.stopPropagation()
		payNowBTN.style.backgroundColor = "#FF0057";
	})

}

manageCart()
