// import { jsonExport } from "./modules/stock_details.js";
let data = JSON.parse(localStorage.getItem("singleProductDetails"))


if (Object.keys(data).length != 0 || localStorage.getItem("singleProductDetails") != null) {

	let dataImg = `../${data.img}`;
	let galleryArr = Object.entries(data.gallery);
	let otherDetailsObj = Object.entries(data.other_details);

	let galleryStr = "";
	let otherDetailsStr = "";

	for (let [key, value] of galleryArr) {
		galleryStr += `
			<li>
				<img class = "galleryImg" src="../${value}" alt="${data.name}">
			</li>
		`
	}

	for (let [key, value] of otherDetailsObj) {
		otherDetailsStr += `
			<tr class="row">
				<td class="tdr1">${key}</td>
				<td class="tdr2">${value}</td>
			</tr>
		`
	}	

	let dataHolder = document.getElementById("stockDetails");

	let dataHolderInnerHTML = `
	
		<div class="stockDetailsCol col1">
			<div id="col1DisplayImg">
				<img id="mainDisplayImg" class="displayImg" src="../${dataImg}" alt="${data.name}">
			</div>
			
			<div class="gallery">
				<ul class="galleryImgList">
					${galleryStr}
				</ul>
			</div>
	
			<div id="payments">
				<span>
					<a id="add_to_cart" href="#">
						<i class="fa-solid fa-cart-shopping"></i> Add to Cart
					</a>
				</span>
	
				<span>
					<a id="Buy_Now" href="#"><i class="fa-solid fa-credit-card"></i> Pay Now</a>
				</span>
			</div>
		</div>
	
		<div class="stockDetailsCol col2">
			<h3>${data.name}</h3>
			<h4>${data.price}</h4>
	
			<div class="stockDetailsColDiv">
				<h3>Details</h3>
				<ul>
					<li>${data.warrenty}</li>
					<li>${data.storage}</li>
					<li>${data.display}</li>
					<li>${data.cammera}</li>
					<li>${data.battery}</li>
					<li>${data.processor}</li>
				</ul>
			</div>
	
			<div class="stockDetailsColDiv">
				<h3>Payment Mode</h3>
	
				<div>
					<label for="COD">Cash on Delevery</label>
					<input type="radio" id="cash_on_delevery" name="COD">
				</div>
	
				<div>
					<label for="lname">PAY WITH CARDS</label>
					<input type="radio" id="lname" name="COD" checked>
				</div>
			</div>
	
			<div class="stockDetailsColDiv">
				<h3>Specification</h3>
	
				<table>
					<tbody>
						${otherDetailsStr}
					</tbody>
				</table>
			</div>
		</div>
	`

	dataHolder.innerHTML = dataHolderInnerHTML;
}




let galleryImg = document.getElementsByClassName("galleryImg");
let displayImg = document.getElementById("mainDisplayImg");
localStorage.setItem("defaultImg", displayImg.src)

for (let i = 0; i < galleryImg.length; i++) {
	const img = galleryImg[i];
	img.addEventListener("mouseover", (e) => {
		e.stopPropagation()
		document.getElementById("col1DisplayImg").style.borderColor = "#ff0057"
		displayImg.src = img.src
	})

	img.addEventListener("mouseout", (e) => {
		e.stopPropagation()
		document.getElementById("col1DisplayImg").style.borderColor = "transparent"
		displayImg.src = localStorage.getItem("defaultImg")
	})
}

let cartData = []

let add_to_cart = document.getElementById("add_to_cart");
add_to_cart.addEventListener("click", (e) => {
	e.stopPropagation();

	if (localStorage.getItem("cart_item") == undefined || localStorage.getItem("cart_item") == '') {
		cartData.push(data)
		localStorage.setItem("cart_item", JSON.stringify(cartData))
		cartData.forEach(curData => {
			if (curData) {
				cartData.pop()
			}
		});

	} else {
		let prevData = JSON.parse(localStorage.getItem("cart_item"))

		let dataPresent = false;
		prevData.forEach(pd => {
			cartData.push(pd)
		});
		cartData.forEach(curData => {
			if (curData.name !== data.name) {
				dataPresent = false
			} else {
				dataPresent = true
			}
		});

		if (!dataPresent) {
			cartData.push(data)
			console.log("Data Not Present, So its updated");
		} else {
			console.log("Sorry can't add, its already present");
		}
		localStorage.setItem("cart_item", JSON.stringify(cartData))
	}

	window.location.reload()
})