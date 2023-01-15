// import { jsonExport } from "./modules/stock_details.js";
let data = JSON.parse(localStorage.getItem("singleProductDetails"))

if (Object.keys(data).length > 0 || localStorage.getItem("singleProductDetails") != null) {
	let dataName = data.name
	let dataImg = `../${data.img}`;
	let galleryArr = Object.entries(data.gallery);

	let details = null;
	if (data.basic_details) {
		details = Object.entries(data.basic_details);
	}
	let otherDetailsObj = null;

	let galleryStr = "";
	let otherDetailsTable = "";
	let detailsInfoList = "";

	// prepare gallery
	for (let [key, value] of galleryArr) {
		galleryStr += `
			<li class = "computer_img_gallery">
				<img class = "galleryImg" src="../${value}" alt="${data.name}">
			</li>
		`
	}

	// details info
	if (data.basic_details) {
		details = Object.entries(data.basic_details);
		details.forEach(detailsElement => {
			let detailsList = detailsElement[1];
			detailsInfoList += `
				<li> ${detailsList} </li>
			`
		});
		detailsInfoList += `<li>${data.warrenty}</li>`;
	}

	// prepare other details
	if (data.other_details) {
		otherDetailsObj = Object.entries(data.other_details);
		if (otherDetailsObj) {
			let tableRow = ""
			for (let [key, value] of otherDetailsObj) {
				tableRow += `
					<tr class="row">
						<td class="tdr1">${key}</td>
						<td class="tdr2">${value}</td>
					</tr>
				`
			}
			otherDetailsTable += `
				<table>
					<tbody>
						${tableRow}
					</tbody>
				</table>
			`
		}
	} else {
		otherDetailsObj = Object.entries(data.others)
		otherDetailsObj.forEach(otherDetailsElement => {
			let headding = otherDetailsElement[0]
			let detailsObj = Object.entries(otherDetailsElement[1])
			let detailTableRow = ""
			detailsObj.forEach(([key, value]) => {
				//console.log(key, value);
				detailTableRow += `
					<tr class="row">
						<td class="tdr1">${key}</td>
						<td class="tdr2">${value}</td>
					</tr>
				`
			});
			otherDetailsTable += `
			<div class="stockDetailsSections">
			<h3>${headding}</h3>
			<div class = "hr w_100 hr_black"></div>
			<table>
				<tbody>
					${detailTableRow}
				</tbody>
			</table>
			</div>
			`
		});
	}


	let dataHolder = document.getElementById("stockDetails");

	let dataHolderInnerHTML = `
	
		<div class="stockDetailsCol col1">
			<div id="col1DisplayImg">
				<img id="mainDisplayImg" class="displayImg" src="${dataImg}" alt="${dataName}">
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
					${detailsInfoList}
				</ul>
			</div>
	
			<div class="stockDetailsColDiv">
				<h3>Payment Mode</h3>
	
				<div class = "paymentDetailsDiv">
					<label for="COD">Cash on Delevery</label>
					<input type="radio" id="cash_on_delevery" name="COD">
				</div>
	
				<div class = "paymentDetailsDiv">
					<label for="lname">PAY WITH CARDS</label>
					<input type="radio" id="lname" name="COD" checked>
				</div>
			</div>
	
			<div class="stockDetailsColDiv">
				<h3>Specification</h3>
				<div class = "hr w_100 hr_black"></div>
				${otherDetailsTable}
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