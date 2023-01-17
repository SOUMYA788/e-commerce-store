const navController = document.querySelector("#navController");
const filterToggleBtn = document.querySelector("#filterToggleBtn");
const departmentList = document.querySelectorAll(".departmentLi");
const departments = document.querySelector("#departments")
const stockFilters = document.querySelector("#stockFilters");

const activeToggle = (btn, btnDash, slideBar, hideClass) => {
	btn.addEventListener("click", () => {
		btn.classList.toggle("justify_center")
		btn.classList.toggle("space_between")
		btnDash.forEach(element => {
			element.classList.toggle("pos_absolute")
		});
		departmentList.forEach(element => {
			
		})
		btnDash[0].classList.toggle("dash1")
		btnDash[1].classList.toggle("dash2")
		btnDash[2].classList.toggle("dash3")
		slideBar.classList.toggle(hideClass)
	})
}

if (navController) {
	let navDash = navController.querySelectorAll(".navDash");
	activeToggle(navController, navDash, departments, "hideDepartment")
}
if (filterToggleBtn) {
	let filterBtnSign = filterToggleBtn.querySelectorAll(".filterBtnSign")
	activeToggle(filterToggleBtn, filterBtnSign, stockFilters, "hideStockFilter")
}
