const setProduct = (target, data) => {
	if (!data.length > 0) {
		target.innerHTML = `<h2 class = "alertInfo"> NOTHING TO SHOW! </h2>`
	}
	if (target != null && data != null && data.length > 0) {
		try {
			let compileHTML = ""
			data.forEach((dataElement) => {
				let img = dataElement.img;
				let name = dataElement.name;
				let className = dataElement.className;
				let price = `₹${dataElement.price}`;

				let otherDetails = "";

				let basic_details = Object.entries(dataElement.basic_details);
				basic_details.forEach((basic_details_element) => {
					let basic_elements = basic_details_element[1]
					otherDetails += `<li>${basic_elements}</li>`
				});

				compileHTML += `
					<div class="hr_2px bg_black_20" style="width: 100%;"></div>
					<div class="stocks ${className}">
						<div class="productImg">
							<img src="../${img}" alt="${name}" />
						</div>
						<div class="productInfo computer_product_info">
							<h2>${name}</h2>
							<ul class="productDetails">
								${otherDetails}
							</ul>
						</div>
						<div class="pricing">
							<p class="current_price">${price}</p>
						</div>
					</div>
				`
			});
			target.innerHTML = compileHTML
		} catch (error) {
			console.log(error);
			console.log("AN ERROR OCCURED");
		}
	}
}

const lenovoComputers = [
	{
		id: "0",
		brand: "lenovoComputers",
		className: "lenovoComputers",
		"img": "img/desktop/lenovo/01/01.webp", // 1
		"name": "Lenovo Ideacentre 320 Celeron", // 1

		"basic_details": {
			"storage_info": "1 x 4GB DDR4 RAM | 1TB Hard Drive",
			"display_info": "19.5 inch HD+ LED Backlit Display | 1440 x 900 Pixel",
			"processor_info": "Intel Core i3 (10th Gen) | 2.1 GHz with Turbo Frequency Upto 4.1 GHz"
		},

		warrenty: "1 Year Lenovo Warranty and Free Transit Insurance.",
		gallery: {
			img1: "img/desktop/lenovo/01/02.webp",
			img2: "img/desktop/lenovo/01/03.webp",
			img3: "img/desktop/lenovo/01/04.webp"
		},
		"others": {
			"general": {
				"MODEL NAME": "AIO 330 20IGM",
				"SERIES": "Ideacentre 320",
				"PART NUMBER": "F0D7001AIN",
				"COLOR": "Black",
				"BRAND": "Lenovo"
			},

			"memory": {
				"MEMORY SLOT": "1",
				"SYSTEM MEMORY": "4 GB DDR4",
				"HARD DRIVE": "1TB",
				"MEMORY DETAILS": "1 x 4GB",
			},

			"display": {
				"TOUCH SUPPORT": "No",
				"DISPLAY SIZE": "19.5 inch",
				"HD SUPPORT": "Yes",
				"3D SUPPORT": "No",
				"DISPLAY RESOLUTION": "1440 x 900 Pixel",
				"DISPLAY TYPE": "HD+ LED Backlit Display"
			},

			"graphics": {
				"DEDICATED GRAPHICS MEMORY": "No",
				"INTEGRATED GRAPHICS PROCESSOR": "Intel UHD Graphics 600"
			},

			"cammera": {
				"BUILT-IN-WEBCAM": "Yes"
			},

			"connectivity": {
				"USB": "2 x USB 2.0, 1 x USB 3.0",
				"BLUETOOTH": "V4.0",
				"HEADPHONE JACK": "Yes",
				"HDMI": "Yes",
				"CARD READER": "3-in-1 Card Reader",
				"OTHER PORTS": "DC Power In"
			}
		},
		price: "23,990",
		calc_price: 23990,
	},

	{
		"id": "1",
		"brand": "lenovoComputers",
		"className": "lenovoComputers",
		"img": "img/desktop/lenovo/02/01.webp",
		"name": "Lenovo ideacentre Core i3 (10th Gen)",
		"basic_details": {
			"storage_info": "1 x 8GB DDR4 | 512GB SSD",
			"display_info": "19.5 inch HD+ LED Backlit Display | 1440 x 900 Pixel",
			"processor_info": "Intel Core i3 (10th Gen) | 2.1 GHz with Turbo Frequency Upto 4.1 GHz",
		},
		"gallery": {
			img1: "img/desktop/lenovo/02/02.webp",
			img2: "img/desktop/lenovo/02/03.webp",
			img3: "img/desktop/lenovo/02/04.webp"
		},
		"others": {
			"general": {
				"MODEL NAME": "A340-24IWL",
				"SERIES": "Ideacentre",
				"PART NUMBER": "F0E800U0IN | F0E800UFIN | F0E800W3IN | F0E800Y3IN",
				"COLOR": "Black",
				"BRAND": "Lenovo"
			},
			"system feature": {
				"PROCESSOR NAME": "Core i3 (10th Gen)",
				"CHIPSET": "Intel SoC Platform",
				"PROCESSOR BRAND": "Intel",
				"PROCESSOR FREQUENCY": "2.1 GHz with Turbo Frequency Upto 4.1 GHz",
				"OPERATING SYSTEM": "Windows 10 Home",
				"PROCESSOR MODEL": "10110U"
			},
			"memory": {
				"SYSTEM MEMORY": "8GB DDR4",
				"SSD CAPACITY": "512GB"
			},
			"display": {
				"TOUCH SUPPORT": "No",
				"DISPLAY SIZE": "23.8 inch",
				"HD SUPPORT": "Yes",
				"DISPLAY RESOLUTION": "1920 x 1080 Pixels",
				"DISPLAY TYPE": "Full HD Display (250nits Brightness, IPS Level Panel, 90% Screen to Body Ratio)"
			},

			"graphics": {
				"DEDICATED GRAPHICS MEMORY": "No",
				"INTEGRATED GRAPHICS PROCESSOR": "Intel UHD Graphics"
			},

			"audio": {
				"BUILT-IN MICROPHONE": "Built-in Mono Microphone",
				"OTHER AUDIO FEATURE": "BUILT-IN SPEAKER",
				"SPEAKER OUTPUT": "3W x 2 W"
			},

			"cammera": {
				"BUILT-IN-WEBCAM": "Yes"
			},

			"connectivity": {
				"USB": "Rear Ports: 2 x USB 2.0, 1 x USB 3.1 Gen 2 (USB 3.1 Gen 1 for Celeron and Pentium Models), Left Ports:1 x USB 3.1 Gen 2 (USB 3.1 Gen 1 for Celeron and Pentium Models)",
				"BLUETOOTH": "V4.0",
				"HEADPHONE JACK": "Yes",
				"HDMI": "1 x HDMI 1.4 Out	",
				"CARD READER": "3-in-1 Card Reader",
				"OTHER PORTS": "1 x Power Connector, 1 x Ethernet (RJ-45), 1 x Headphone / Microphone Combo Jack (3.5mm)",
				"POWER CONSUPTION": "65 W"
			},
		},
		"warrenty": "1 Year Onsite Warranty",
		price: "56,490",
		calc_price: 56490,
	},
]

const asusComputers = [
	{
		id: "0",
		brand: "asusComputers",
		className: "asusComputers",
		"name": "ASUS Ryzen 3 Dual Core (4 GB DDR4/1 TB)",
		"img": "img/desktop/asus/01/01.webp",
		"basic_details": {
			"storage_info": "4 GB DDR4 RAM | 1TB Hard Drive",
			"display_info": "23.8 Inch Full HD LED | 1920 x 1080 Pixels",
			"processor_info": "AMD Ryzen 3 Dual Core | 2.6 GHz with Turbo Boost Upto 3.5 GHz",
		},
		"gallery": {
			img1: "img/desktop/asus/01/02.webp",
			img2: "img/desktop/asus/01/03.webp",
			img3: "img/desktop/asus/01/04.webp"
		},
		"others": {
			"GENERAL": {
				"MODEL NAME": "M241DAK-WA150T",
				"SERIES": "NA",
				"PART NUMBER": "90PT02P1-M06670",
				"COLOR": "WHITE",
				"BRAND": "ASUS"
			},
			"SYSTEM FEATURE": {
				"PROCESSOR NAME": "Ryzen 3 Dual Core",
				"PROCESSOR BRAND": "AMD",
				"PROCESSOR FREQUENCY": "2.6 GHz with Turbo Boost Upto 3.5 GHz",
				"OPERATING SYSTEM": "Windows 10 Home",
				"PROCESSOR MODEL": "3250U"
			},
			"STORAGE": {
				"SYSTEM MEMORY": "4 GB DDR4",
				"STORAGE INTERFACE": "SATA",
				"READING SPEED": "5400 RPM",
				"HARD DRIVE": "1TB"
			},
			"DISPLAY": {
				"TOUCH SUPPORT": "No",
				"DISPLAY SIZE": "23.8 Inch",
				"HD": "Yes",
				"DISPLAY RESOLUTION": "1920 x 1080 Pixels",
				"DISPLAY TYPE": "Full HD LED Backlit Anti-glare IPS Display (250 nits Brightness, 100% sRGB, 88% Screen-to-body Ratio)"
			},
			"GRAPHICS": {
				"DEDICATED GRAPHICS MEMORY": "No",
				"INTEGRATED GRAPHICS PROCESSOR": "AMD Radeon Graphics"
			},
			"AUDIO": {
				"BUILT-IN MICROPHONE": "Yes",
				"OTHER AUDIO FEATURE": "Built-in Speakers, Sonic Master",
			},
			"CAMMERA": {
				"BUILT-IN-WEBCAM": "Yes"
			},
			"POWER": {
				"POWER-INPUT": "100 - 240 V AC",
				"POWER CONSUPTION": "90 W"
			},
			"connectivity": {
				"USB": "1 x USB 2.0 Type A, 4 x USB 3.2 (1st Gen 1) Type A",
				"BLUETOOTH": "V5.0",
				"HEADPHONE JACK": "Yes",
				"HDMI": "1 x HDMI In (v1.4), 1 x HDMI Out (v1.4)",
				"OTHER PORTS": "1 x 3.5 mm Combo Audio Jack",
			},
		},

		"warrenty": "1 Year Warranty for Handset, 6 Months for Accessories",
		"IN THE BOX": "AIO Desktop, Wireless Keyboard, Wireless Mouse, Power Adaptor, User Manuals, Warranty Documents",
		price: "16,499",
		calc_price: 16499,
	},

	{
		id: "1",
		brand: "asusComputers",
		className: "asusComputers",
		"img": "img/desktop/asus/02/01.webp",
		"name": "ASUS Vivo AiO V222 Core i3",

		"basic_details": {
			"storage_info": "8GB DDR4 RAM | 1TB Hard Drive | 256GB SSD",
			"display_info": "21.5 Inch Full HD | 1920 x 1080 Pixels | No Touch Support",
			"processor_info": "Intel Core i3 | 2.1 GHz upto max turbo frequency 4.1 GHz",
		},
		"gallery": {
			img1: "img/desktop/asus/02/02.webp",
			img2: "img/desktop/asus/02/03.webp",
			img3: "img/desktop/asus/02/04.webp"
		},
		"others": {
			"GENERAL": {
				"MODEL NAME": "V222FAK-BA022WS",
				"SERIES": "Vivo AiO V222",
				"PART NUMBER": "90PT02G1-M00EB0",
				"COLOR": "Black",
				"BRAND": "ASUS"
			},
			"SYSTEM FEATURE": {
				"PROCESSOR NAME": "Core i3",
				"PROCESSOR BRAND": "Intel",
				"PROCESSOR FREQUENCY": "2.1 GHz upto max turbo frequency 4.1 GHz",
				"OPERATING SYSTEM": "Windows 11 Home",
				"PROCESSOR MODEL": "Intel Core i3 10110U"
			},
			"STORAGE": {
				"SYSTEM MEMORY": "8GB DDR4",
				"STORAGE INTERFACE": "SATA",
				"READING SPEED": "5400 RPM",
				"HARD DRIVE": "1TB",
				"SSD": "256GB"
			},
			"DISPLAY": {
				"TOUCH SUPPORT": "No",
				"DISPLAY SIZE": "21.5 Inch",
				"HD": "Yes",
				"DISPLAY RESOLUTION": "1920 x 1080 Pixels",
				"DISPLAY TYPE": "Full HD"
			},
			"GRAPHICS": {
				"DEDICATED GRAPHICS MEMORY": "No",
				"INTEGRATED GRAPHICS PROCESSOR": "AMD Radeon Graphics"
			},
			"connectivity": {
				"USB": "1 x USB 2.0 Type-A, 4 x USB 3.2 Gen 1 Type-A",
				"BLUETOOTH": "V5.0",
				"HDMI": "1 x HDMI 1.4",
				"OTHER PORTS": "1 x 3.5 mm Combo Audio Jack",
			},
		},

		"IN THE BOX": "All-in-One Desktop, Wireless Keyboard, Wireless Mouse, Power Adapter, User Manual",
		"warrenty": "1 Year Warranty for Handset, 6 Months for Accessories",
		price: "16,499",
		calc_price: 16499,
	}
]

let allComputers = [...lenovoComputers, ...asusComputers];

allComputers.forEach(element => {
	element.className = "computerDivRow";
});

const computers = document.getElementById("computers")
setProduct(computers, allComputers)

// process after item select....
let setSelectedItem = (itemDataArr) => {
	let stocks = document.querySelectorAll(".stocks")
	stocks.forEach((element, elementIndex) => {
		element.addEventListener("click", () => {
			localStorage.setItem("singleProductDetails", JSON.stringify(itemDataArr[elementIndex]))
			window.open("./product_details.html", "_blank")
		})
	});
}


// FILTER BY PRICE
let filterByPrice = (listDevice) => {
	let priceScale = document.querySelector("#priceScale")
	let endingPrice = document.querySelector("#ending_price");
	endingPrice.disabled = true
	priceScale.value = "50000"
	endingPrice.value = `₹${priceScale.value}`

	const inputManage = (value) => {
		endingPrice.value = `₹${value}`
		priceScale.value = value
	}
	
	const priceScaleManage = () => {
		let priceFilteredStock = listDevice.filter((stockItems, index) => {
			let computerPricestr = stockItems.price;
			let computerPrice = parseInt(`${computerPricestr.split(",")[0]}${computerPricestr.split(",")[1]}`);
			if (computerPrice <= parseInt(priceScale.value)) {
				return stockItems
			}
		});
		setProduct(computers, priceFilteredStock)
		setSelectedItem(priceFilteredStock)
	}

	priceScaleManage();
	
	priceScale.addEventListener("change", () => { 
		inputManage(priceScale.value)
		priceScaleManage()
	});
	priceScale.addEventListener("mousemove", () => { 
		inputManage(priceScale.value)
		priceScaleManage()
	});
}


// FILTER BY NAME 


let filterByName = () => {
	const lenovoFilterCheckbox = document.querySelector("#lenovoFilterCheckbox");
	const asusFilterCheckbox = document.querySelector("#asusFilterCheckbox");
	const allCheckBox = [lenovoFilterCheckbox, asusFilterCheckbox]

	let filterProcess = () => {
		let nameFilterStock = [];
		let setStock = (checkBoxName, stockName) => {
			if (checkBoxName.checked) {
				nameFilterStock = nameFilterStock.concat(stockName)
			}
		}
		setStock(lenovoFilterCheckbox, lenovoComputers)
		setStock(asusFilterCheckbox, asusComputers)

		if (nameFilterStock.length > 0) {
			nameFilterStock.forEach(element => {
				element.className = "computerDivRow";
			});
			setProduct(computers, nameFilterStock)
			filterByPrice(nameFilterStock)
		} else {
			setProduct(computers, allComputers)
			filterByPrice(allComputers)
		}
	}
	lenovoFilterCheckbox.addEventListener("change", () => {
		filterProcess();
	})

	asusFilterCheckbox.addEventListener("change", () => {
		filterProcess();
	})
}

filterByPrice(allComputers)
filterByName()
setSelectedItem(allComputers)
