import { realmeMobiles, pocoMobiles } from "../mobiles.js";

let exportData = [];

let jsonExport;


let clickStock = (className, id) => {
	setLoop(realmeMobiles, className, id)
	setLoop(pocoMobiles, className, id)
}

let setLoop = (dataSet, className, id) => {
	dataSet.forEach(zz => {
		if (className == zz.className && id == zz.id) {
			exportData.push(zz)
			console.log(zz);
			localStorage.setItem("singleProductDetails", JSON.stringify(zz))
			window.location = "../product_details.html"
		}
	})
}

// console.log(exportData);

export { clickStock }
