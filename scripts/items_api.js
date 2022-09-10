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
		image: "../img/storages/pendrives/01.jpg",
		name: "STORAGES",
		id: "storages",
		link:"./storage.html"
	},
	{
		image: "../img/smart wear/01.jpg",
		name: "SMART WEAR",
		id: "smart_wear",
		link:"./smart_wear.html"
	}
]

const clothing = [
	{
		image: "../img/clothing/man's wear/01/01.webp",
		name: "MEN'S WEAR",
		id: "mens_wear"
	},
	{
		image: "../img/clothing/women's wear/01/01.jpeg",
		name: "WOMEN'S WEAR",
		id: "womens_wear"
	},
	{
		image: "../img/clothing/kid's wear/boy/01/01.webp",
		name: "KID'S WEAR",
		id: "kids_wear"
	}
]

const appliance = [
	{
		image: "../img/appliances/kichen/oven/01.webp",
		name: "KITCHEN APPLIANCE",
		id: "kitchen_appliance"
	},
	{
		image: "../img/appliances/home/fan/bajaj/01.webp",
		name: "HOME APPLIANCE",
		id: "home_applianace"
	},
	{
		image: "../img/appliances/bathroom accessories/towel hanger/01.webp",
		name: "BATHROOM APPLIANCE",
		id: "bathroom_appliance"
	}
]

let mobiles = [
	{

	}
]



let setProduct = (locationID, productContainerInnerHTML, list) => {
	if (locationID == null || productContainerInnerHTML == null || list == null) return
	list.forEach(e => {
		productContainerInnerHTML += `	
		<a href = "${e.link}">
			<div id="${e.id}" class="stockCard">
				<img class="stockImg" src="${e.image}" alt="${e.name}">
				<p class="stockName">${e.name}</p>
			</div>
		</a>
		`
	})

	if (productContainerInnerHTML != "") {
		locationID.innerHTML = productContainerInnerHTML;
	} else {
		locationID.innerHTML = "<h3> NOT AVAILABLE </h3>"
	}
}


let electronic_items_container = document.getElementById("electronicItems");
let textile_items_container = document.getElementById("textileItems");
let appliances_container = document.getElementById("appliances");
let electronics_innerHTML = "";
let textile_innerHTML = "";
let appliance_innerHTML = "";


setProduct(electronic_items_container, electronics_innerHTML, electronic_items)

setProduct(textile_items_container, textile_innerHTML, clothing)

setProduct(appliances_container, appliance_innerHTML, appliance)



