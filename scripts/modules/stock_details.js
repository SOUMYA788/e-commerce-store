import { realmeMobiles, pocoMobiles } from "../mobiles.js";

let exportData = [];

let jsonExport;


let clickStock = (className, id) => {
	if (className == "realmeMobile") {
		setLoop(realmeMobiles, className, id)
	}else if (className == "pocoMobile") {
		setLoop(pocoMobiles, className, id)
	}
}

let setLoop = (dataSet, className, id) => {
	dataSet.forEach(zz => {
		if (className == zz.className && id == zz.id) {
			exportData.push(zz)
			localStorage.setItem("singleProductDetails", JSON.stringify(zz))
			window.location = "../product_details.html"
		}
	})
}

// console.log(exportData);

export { clickStock }
