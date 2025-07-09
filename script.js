const navLinks = document.querySelectorAll(".sidebar a");
const sections = Array.from(document.querySelectorAll(".container h2"));
function onScroll() {
	const scrollPos = window.scrollY + 80;
	let currentId = "";
	for (let i = 0; i < sections.length; i++) {
		if (sections[i].offsetTop <= scrollPos) {
			currentId = sections[i].id;
		}
	}
	navLinks.forEach((link) => {
		link.classList.toggle(
			"active",
			link.getAttribute("href") === "#" + currentId
		);
	});
}
window.addEventListener("scroll", onScroll);
navLinks.forEach((link) => {
	link.addEventListener("click", function (e) {
		e.preventDefault();
		const target = document.getElementById(
			this.getAttribute("href").substring(1)
		);
		if (target) {
			window.scrollTo({
				top: target.offsetTop - 20,
				behavior: "smooth",
			});
		}
	});
});
onScroll();
