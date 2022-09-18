// import { jsonExport } from "./modules/stock_details.js";
let data = JSON.parse(localStorage.getItem("singleProductDetails"))
console.log(data);

let dataHolder = document.getElementById("stockDetails");

let dataHolderInnerHTML = `

	<div class="stockDetailsCol col1">
		<div id="col1DisplayImg">
			<img id="mainDisplayImg" class="displayImg" src="${data.img}" alt="${data.name}">
		</div>
		
		<div class="gallery">
			<ul class="galleryImgList">
				<li>
					<img class = "galleryImg" src="${data.gallery.img1}" alt="${data.name}">
				</li>

				<li>
					<img class = "galleryImg" src="${data.gallery.img2}" alt="${data.name}">
				</li>
				<li>
				<img class = "galleryImg" src="${data.gallery.img3}" alt="${data.name}">
				</li>
			</ul>

		</div>
		<div id="payments">
			<span>
				<a id="add_to_cart" href="#"><i class="fa-solid fa-cart-shopping"></i> Add to Cart</a>
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
					<tr class="row">
						<td class="tdr1">${Object.keys(Object.values(data)[12])[0]}</td>
						<td class="tdr2">${Object.values(Object.values(data)[12])[0]}</td>
					</tr>

					<tr class="row">
						<td class="tdr1">${Object.keys(Object.values(data)[12])[1]}</td>
						<td class="tdr2">${Object.values(Object.values(data)[12])[1]}</td>
					</tr>

					<tr class="row">
						<td class="tdr1">${Object.keys(Object.values(data)[12])[2]}</td>
						<td class="tdr2">${Object.values(Object.values(data)[12])[2]}</td>
					</tr>

					<tr class="row">
						<td class="tdr1">${Object.keys(Object.values(data)[12])[3]}</td>
						<td class="tdr2">${Object.values(Object.values(data)[12])[3]}</td>
					</tr>

					<tr class="row">
						<td class="tdr1">${Object.keys(Object.values(data)[12])[4]}</td>
						<td class="tdr2">${Object.values(Object.values(data)[12])[4]}</td>
					</tr>

					<tr class="row">
						<td class="tdr1">${Object.keys(Object.values(data)[12])[5]}</td>
						<td class="tdr2">${Object.values(Object.values(data)[12])[5]}</td>
					</tr>

					<tr class="row">
						<td class="tdr1">${Object.keys(Object.values(data)[12])[6]}</td>
						<td class="tdr2">${Object.values(Object.values(data)[12])[6]}</td>
					</tr>
				</tbody>
			</table>
		</div>
	</div>
`

dataHolder.innerHTML = dataHolderInnerHTML;

let galleryImg = document.getElementsByClassName("galleryImg");
let displayImg = document.getElementById("mainDisplayImg");

for (let i = 0; i < galleryImg.length; i++) {
	const img = galleryImg[i];
	img.addEventListener("mouseover", (e) => {
		e.stopPropagation()
		console.log(img.src);
		displayImg.src = img.src
	})
}