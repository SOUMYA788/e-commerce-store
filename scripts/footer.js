const about = [
	{
		id:1,
		name:"ABOUT",
	},
	{
		id:2,
		name: "Contact Us",
		link: ""
	},
	{
		id:3,
		name: "About Us",
		link: ""
	},
	{
		id:4,
		name: "Careers",
		link: ""
	},
	{
		id:5,
		name: "Corporate Information",
		link: ""
	}
]

const help = [
	{
		id:1,
		name:"HELP",
	},
	{
		id:2,
		name: "Payments",
		link: ""
	},
	{
		id:3,
		name: "Shipping",
		link: ""
	},
	{
		id:4,
		name: "FAQ",
		link: ""
	}
]

const policy = [
	{
		id:1,
		name:"POLICY",
	},
	{
		id:2,
		name: "Return Policy",
		link: ""
	},
	{
		id:3,
		name: "Terms of Use",
		link: ""
	},
	{
		id:4,
		name: "Privacy",
		link: ""
	}
]

const social = [
	{
		id:1,
		name:"SOCIAL",
	},
	{
		id:2,
		name: "Facebook",
		link: ""
	},
	{
		id:3,
		name: "Twitter",
		link: ""
	},
	{
		id:4,
		name: "Youtube",
		link: ""
	},
	{
		id:5,
		name: "Linkdin",
		link: ""
	}
]

const office_address = [
	{
		id:1,
		name:"OFFICIAL ADDRESS",
	},
	{
		id:2,
		r1: "letsPURCHASE Internet Private Limited,",
		r2: "Buildings Alyssa, Begonia &",
		r3: "Clove Embassy Tech Village,",
		r4: "Outer Ring Road, Devarabeesanahalli Village,",
		r5: "Karnataka, India",
		r6: "CIN : U51109KA2012PTC066107"
	}
]

let footer = document.getElementById("footer");
let footerData1 = ``
let footerData2 = ``
let footerData3 = ``
let footerData4 = ``
let footerData5 = ``

about.forEach(e => {
	if (e.id == 1) {
		footerData1 += `
			<h3>${e.name}</h3>
		`
	}else{
		footerData1 += `
			<p><a href="${e.link}">${e.name}</a></p>
		`
	}
});

help.forEach(e => {
	if (e.id == 1) {
		footerData2 += `
			<h3>${e.name}</h3>
		`
	}else{
		footerData2 += `
			<p><a href="${e.link}">${e.name}</a></p>
		`
	}
});

policy.forEach(e => {
	if (e.id == 1) {
		footerData3 += `
			<h3>${e.name}</h3>
		`
	}else{
		footerData3 += `
			<p><a href="${e.link}">${e.name}</a></p>
		`
	}
});

social.forEach(e => {
	if (e.id == 1) {
		footerData4 += `
			<h3>${e.name}</h3>
		`
	}else{
		footerData4 += `
			<p><a href="${e.link}">${e.name}</a></p>
		`
	}
});

office_address.forEach(e => {
	if (e.id == 1) {
		footerData5 += `
			<h3>${e.name}</h3>
		`
	}else{
		footerData5 += `
			<p>${e.r1}</p>
			<p>${e.r2}</p>
			<p>${e.r3}</p>
			<p>${e.r4}</p>
			<p>${e.r5}</p>
			<p>${e.r6}</p>
		`
	}
});


let footerInnerHTML = `
	<div>
		${footerData1}
	</div>
	<div>
		${footerData2}
	</div>
	<div>
		${footerData3}
	</div>
	<div>
		${footerData4}
	</div>

	<div>
		${footerData5}
	</div>
`;


footer.innerHTML = footerInnerHTML;