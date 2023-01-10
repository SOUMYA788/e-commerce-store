const electronic_items = [
	{
		image: "../img/mobiles/01.jpg",
		name: "MOBILE AND ACCESORIES",
		id: "mobile_&_accesories",
		link: "./mobiles.html"
	},
	{
		image: "../img/desktop/01.jpg",
		name: "DESKTOP AND LAPTOP",
		id: "desktop_&_laptop",
		link: "./desktop.html"
	},
	{
		image: "../img/smart wear/01.jpg",
		name: "SMART WEAR",
		id: "smart_wear",
		link: "./smart_wear.html"
	}
]


let setProduct = (locationID, list) => {
	let productContainerInnerHTML = "";
	if (locationID == null || list == null) return
	list.forEach(e => {
		productContainerInnerHTML += `	
			<div class = "productStockCards">
				<a href = "${e.link}">
					<div id="${e.id}" class="stockCard">
						<img class="stockImg" src="${e.image}" alt="${e.name}">
						<p class="stockName">${e.name}</p>
					</div>
				</a>
			</div>
		`
	})

	if (productContainerInnerHTML != "") {
		locationID.innerHTML = productContainerInnerHTML;
	} else {
		locationID.innerHTML = "<h3> NOT AVAILABLE </h3>"
	}
}


let electronic_items_container = document.getElementById("electronicItems");

setProduct(electronic_items_container, electronic_items)




