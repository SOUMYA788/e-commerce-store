let navBtn = document.getElementById("navController");
// let navUl = document.getElementById("navUl");
// let navBox = document.getElementById("navBox");
let navDash = document.getElementsByClassName("navDash");
let navDashOne = document.getElementsByClassName("navDash")[0];
let navDashTwo = document.getElementsByClassName("navDash")[1];
let navDashThree = document.getElementsByClassName("navDash")[2];

let navDashParent = undefined;

if (document.getElementsByClassName("navDash").length != 0) {
    navDashParent = document.getElementsByClassName("navDash")[1].parentElement;
}

// if (navDashParent!=undefined) {
    
// }


navBtn.addEventListener('click', (e) => {
    e.stopPropagation();
	navBtn.classList.toggle("pos_rel")
    // navBox.classList.toggle("displayHide");
    // navBox.classList.toggle("displayFlex");
    // navBox.classList.toggle("flexBox");
    // navBox.classList.toggle("displayShow");
	for (let i = 0; i < navDash.length; i++) {
		const dash = navDash[i];
		dash.classList.toggle("pos_absolute")
	}
    navDashOne.classList.toggle("dash1")
    navDashTwo.classList.toggle("dash2")
    navDashThree.classList.toggle("dash3")
})