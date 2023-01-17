let navController = document.querySelector("#navController");
let navDash = navController.querySelectorAll(".navDash");
let departmentList = document.querySelectorAll(".departmentLi");

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

activeToggle(navController, navDash, document.querySelector("#departments"), "hideDepartment")

activeToggle(document.querySelector("#filterToggleBtn"), document.querySelectorAll(".filterBtnSign"), document.querySelector("#stockFilters"), "hideStockFilter")