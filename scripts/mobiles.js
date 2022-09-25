import { clickStock } from "./modules/stock_details.js";

// clickStocks(${e.className}, ${e.id})
const sid = (target, targetElement, data) => {
	try {
		data.forEach(e => {
			targetElement += `
					<div class="stocks ${e.className}">

						<div class="productImg">
							<img src="${e.img}" alt="${e.name}" />
						</div>

						<div class="productInfo">
							<h2>${e.name}</h2>
							<ul class="productDetails">
								<li>${e.storage}</li>
								<li>${e.display}</li>
								<li>${e.cammera}</li>
								<li>${e.battery}</li>
								<li>${e.processor}</li>
								<li>${e.warrenty}</li>
							</ul>
						</div>

						<div class="pricing">
							<p class="current_price">${e.price}</p>
						</div>

					</div>

					<div class="hr_2px bg_black_20" style="width: 100%;"></div>
				`
		})
		target.innerHTML = targetElement;
	} catch (error) {
		console.log("AN ERROR OCCURED");
	}

}


const realmeMobiles = [
	{
		id: "0",
		className: "realmeMobile",
		img: "../../img/mobiles/realme/01/01.webp",
		gallery: {
			img1: "../../img/mobiles/realme/01/02.webp",
			img2: "../../img/mobiles/realme/01/03.webp",
			img3: "../../img/mobiles/realme/01/04.webp"
		},
		name: "realme C31 (Light Silver)",
		storage: "3GB RAM | 32GB ROM | Expandable Upto 1TB",
		display: "16.56 cm (6.52 inch) HD Display",
		cammera: "13MP + 2MP + 0.3MP | 5MP Front Camera",
		battery: "5000 mAh Battery",
		processor: "Unisoc T612 Processor",
		warrenty: "1 Year Warranty for Phone and 6 Months Warranty for In-Box Accessories",
		price: "₹8,299",
		calc_price: 8299,
		other_details: {
			"In The Box": "Handset, Adapter, USB Cable, Sim Card Tool, Screen Protect Film, Case, Important Info Booklet with Warranty Card, Quick Guide",
			Color: "light Silver",
			"Model Name": "C31",
			"Model Number": "RMX3501",
			"Sim Type": "Dual Sim",
			"OTG Compatable": "Yes",
			"SAR Value": "Head: <2.0 W/kg, Body: <2.0 W/kg",
		}
	},

	{
		id: "1",
		className: "realmeMobile",
		img: "../../img/mobiles/realme/02/01.webp",
		gallery: {
			img1: "../../img/mobiles/realme/02/02.webp",
			img2: "../../img/mobiles/realme/02/03.webp",
			img3: "../../img/mobiles/realme/02/04.webp"
		},
		name: "realme C31 (Dark Green)",
		storage: "3GB RAM | 32GB ROM | Expandable Upto 1TB",
		display: "16.56 cm (6.52 inch) HD Display",
		cammera: "13MP + 2MP + 0.3MP | 5MP Front Camera",
		battery: "5000 mAh Battery",
		processor: "Unisoc T612 Processor",
		warrenty: "1 Year Warranty for Phone and 6 Months Warranty for In-Box Accessories",
		price: "₹8,299",
		calc_price: 8299,
		other_details: {
			"In The Box": "Handset, Adapter, USB Cable, Sim Card Tool, Screen Protect Film, Case, Important Info Booklet with Warranty Card, Quick Guide",
			Color: "light Silver",
			"Model Name": "C31",
			"Model Number": "RMX3501",
			"Sim Type": "Dual Sim",
			"OTG Compatable": "Yes",
			"SAR Value": "Head: <2.0 W/kg, Body: <2.0 W/kg",
		}
	},

	{
		id: "2",
		className: "realmeMobile",
		img: "../../img/mobiles/realme/03/01.webp",
		gallery: {
			img1: "../../img/mobiles/realme/03/02.webp",
			img2: "../../img/mobiles/realme/03/03.webp",
			img3: "../../img/mobiles/realme/03/04.webp"
		},
		name: "realme C30 (Bamboo Green)",
		storage: "3GB RAM | 32GB ROM | Expandable Upto 1TB",
		display: "16.51 cm (6.5 inch) HD+ Display",
		cammera: "8MP Rear Camera | 5MP Front Camera",
		battery: "5000 mAh Lithium Ion Battery",
		processor: "Unisoc T612 Processor",
		warrenty: "1 Year Manufacturer Warranty for Phone and 6 Months Warranty for In-Box Accessories",
		price: "₹7,999",
		calc_price: 7999,
		other_details: {
			"In The Box": "Handset, Adapter, USB Cable, Sim Card Tool, Screen Protect Film, Case, Important Info Booklet with Warranty Card, Quick Guide",
			Color: "light Silver",
			"Model Name": "C31",
			"Model Number": "RMX3501",
			"Sim Type": "Dual Sim",
			"OTG Compatable": "Yes",
			"SAR Value": "Head: <2.0 W/kg, Body: <2.0 W/kg",
		}
	},

	{
		id: "3",
		className: "realmeMobile",
		img: "../../img/mobiles/realme/04/01.webp",
		gallery: {
			img1: "../../img/mobiles/realme/04/02.webp",
			img2: "../../img/mobiles/realme/04/03.webp",
			img3: "../../img/mobiles/realme/04/04.webp"
		},
		name: "realme 9 (Sunburst Gold)",
		storage: "6 GB RAM | 128 GB ROM | Expandable Upto 256 GB",
		display: "16.26 cm (6.4 inch) Full HD+ AMOLED Display",
		cammera: "108MP + 8MP + 2MP | 16MP Front Camera",
		battery: "5000 mAh Lithium Ion Battery",
		processor: "Qualcomm Snapdragon 680 Processor",
		warrenty: "1 Year Manufacturer Warranty for Phone and 6 Months Warranty for In-Box Accessories",
		price: "₹14,499",
		calc_price: 14499,
		other_details: {
			"In The Box": "Handset, Adapter, USB Cable, Sim Card Tool, Screen Protect Film, Case, Important Info Booklet with Warranty Card, Quick Guide",
			Color: "light Silver",
			"Model Name": "C31",
			"Model Number": "RMX3501",
			"Sim Type": "Dual Sim",
			"OTG Compatable": "Yes",
			"SAR Value": "Head: <2.0 W/kg, Body: <2.0 W/kg",
		}
	},

	{
		id: "4",
		className: "realmeMobile",
		img: "../../img/mobiles/realme/05/01.webp",
		gallery: {
			img1: "../../img/mobiles/realme/05/02.webp",
			img2: "../../img/mobiles/realme/05/03.webp",
			img3: "../../img/mobiles/realme/05/04.webp"
		},
		name: "realme 9 Pro+ 5G (Aurora Green)",
		storage: "8 GB RAM | 256 GB ROM",
		display: "16.26 cm (6.4 inch) Full HD+ AMOLED Display",
		cammera: "50MP + 8MP + 2MP | 16MP Front Camera",
		battery: "4500 mAh Li-ion Battery",
		processor: "Mediatek Dimensity 920 Processor",
		warrenty: "1 Year Warranty for Phone and 6 Months Warranty for In-Box Accessories",
		price: "₹26,999",
		other_details: {
			"In The Box": "Handset, Adapter, USB Cable, Sim Card Tool, Screen Protect Film, Case, Important Info Booklet with Warranty Card, Quick Guide",
			Color: "light Silver",
			"Model Name": "C31",
			"Model Number": "RMX3501",
			"Sim Type": "Dual Sim",
			"OTG Compatable": "Yes",
			"SAR Value": "Head: <2.0 W/kg, Body: <2.0 W/kg",
		}
	}
]

const pocoMobiles = [
	{
		id: "0",
		className: "pocoMobile",
		img: "../../img/mobiles/poco/01/01.webp",
		gallery: {
			img1: "../../img/mobiles/poco/01/02.webp",
			img2: "../../img/mobiles/poco/01/03.webp",
			img3: "../../img/mobiles/poco/01/04.webp"
		},
		name: "POCO M3 Pro 5G (Black)",
		storage: "6 GB RAM | 128 GB ROM | Expandable Upto 1 TB",
		display: "16.51 cm (6.5 inch) Full HD+ Display",
		cammera: "48MP + 2MP + 2MP | 8MP Front Camera",
		battery: "5000 mAh Lithium-ion Polymer Battery",
		processor: "MediaTek Dimensity 700 Processor",
		warrenty: "1 Year Warranty for Handset, 6 Months for Accessories",
		price: "₹16,499",
		calc_price: 16499,
		other_details: {
			"In The Box": "Handset, Adapter, USB Cable, Sim Card Tool, Screen Protect Film, Case, Important Info Booklet with Warranty Card, Quick Guide",
			Color: "light Silver",
			"Model Name": "C31",
			"Model Number": "RMX3501",
			"Sim Type": "Dual Sim",
			"OTG Compatable": "Yes",
			"SAR Value": "Head: <2.0 W/kg, Body: <2.0 W/kg",
		}
	},

	{
		id: "1",
		className: "pocoMobile",
		img: "../../img/mobiles/poco/02/01.webp",
		name: "POCO M3 Pro 5G (Yellow)",
		gallery: {
			img1: "../../img/mobiles/poco/02/02.webp",
			img2: "../../img/mobiles/poco/02/03.webp",
			img3: "../../img/mobiles/poco/02/04.webp"
		},
		storage: "4 GB RAM | 64 GB ROM | Expandable Upto 1 TB",
		display: "16.51 cm (6.5 inch) Full HD+ Display",
		cammera: "48MP + 2MP + 2MP | 8MP Front Camera",
		battery: "5000 mAh Lithium-ion Polymer Battery",
		processor: "MediaTek Dimensity 700 Processor",
		warrenty: "1 Year Warranty for Handset, 6 Months for Accessories",
		price: "₹14,499",
		calc_price: 14499,
		other_details: {
			"In The Box": "Handset, Adapter, USB Cable, Sim Card Tool, Screen Protect Film, Case, Important Info Booklet with Warranty Card, Quick Guide",
			Color: "Yellow",
			"Model Name": "C31",
			"Model Number": "RMX3501",
			"Sim Type": "Dual Sim",
			"OTG Compatable": "Yes",
			"SAR Value": "Head: <2.0 W/kg, Body: <2.0 W/kg",
		}
	},

	{
		id: "2",
		className: "pocoMobile",
		img: "../../img/mobiles/poco/03/01.webp",
		gallery: {
			img1: "../../img/mobiles/poco/03/02.webp",
			img2: "../../img/mobiles/poco/03/03.webp",
			img3: "../../img/mobiles/poco/03/04.webp"
		},
		name: "POCO M3 Pro 5G (Cool Blue)",
		storage: "6 GB RAM | 128 GB ROM | Expandable Upto 1 TB",
		display: "16.51 cm (6.5 inch) Full HD+ Display",
		cammera: "48MP + 2MP + 2MP | 8MP Front Camera",
		battery: "5000 mAh Lithium-ion Polymer Battery",
		processor: "MediaTek Dimensity 700 Processor",
		warrenty: "1 Year Warranty for Handset, 6 Months for Accessories",
		price: "₹16,499",
		calc_price: 16499,
		other_details: {
			"In The Box": "Handset, Adapter, USB Cable, Sim Card Tool, Screen Protect Film, Case, Important Info Booklet with Warranty Card, Quick Guide",
			Color: "Yellow",
			"Model Name": "C31",
			"Model Number": "RMX3501",
			"Sim Type": "Dual Sim",
			"OTG Compatable": "Yes",
			"SAR Value": "Head: <2.0 W/kg, Body: <2.0 W/kg",
		}
	}
]

const realmeHolder = document.getElementById("realmeDiv")
let realmeHolderInnerHTML = ""

const pocoHolder = document.getElementById("pocoDiv")
let pocoHolderInnerHTML = ""

sid(realmeHolder, realmeHolderInnerHTML, realmeMobiles)

sid(pocoHolder, pocoHolderInnerHTML, pocoMobiles)


let stocks = document.getElementsByClassName("stocks")


for (let i = 0; i < stocks.length; i++) {
	const stock = stocks[i];
	console.log(stock, i);
	stock.addEventListener("click", () => {
		if (stock.classList.contains("realmeMobile")) {
			clickStock("realmeMobile", i)
		} else if (stock.classList.contains("pocoMobile")) {
			clickStock("pocoMobile", i)
		}
	})
}



export { realmeMobiles, pocoMobiles }