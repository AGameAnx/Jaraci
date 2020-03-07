
document.addEventListener("DOMContentLoaded", function() {
	console.log("ready");
	let attribTR = document.querySelectorAll("tr.unit_attributes");
	for (var i = 0; i < attribTR.length; ++i) {
		let tr = attribTR[i];
		if (this.nextElementSibling.classList.contains("weapon_attributes")
				|| this.nextElementSibling.nextElementSibling.classList.contains("weapon_attributes") ) {
			tr.style.cursor = "pointer";
			tr.addEventListener("click", function() {
				let wa = this.nextElementSibling;
				if (!wa.classList.contains("weapon_attributes"))
					wa = wa.nextElementSibling;
				if (wa.style.display == "none")
					wa.style.display = "table-row";
				else
					wa.style.display = "none";
			});
		}
	}
});
