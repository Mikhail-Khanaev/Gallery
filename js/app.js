const sliderMain = new Swiper(".slider_main", {
	freeMode: true,
	centeredSlides: true,
	slidesPerView: 3.5,
	mousewheel: true,
	parallax: true,

	breakpoints: {
		0: {
			slidesPerView: 2.5,
			spaceBetween: 20,
		},
		680: {
			slidesPerView: 3.5,
			spaceBetween: 60,
		}
	}
})

const sliderBg = new Swiper(".slider_bg", {
	centeredSlides: true,
	slidesPerView: 3.5,
	parallax: true,
	spaceBetween: 60,
})

sliderMain.controller.control = sliderBg;

document.querySelectorAll(".slider__item").forEach(item => {
	item.addEventListener("click", event => {
		item.classList.toggle("open");
	})
})

let desc = document.querySelector(".description");
sliderMain.on("slideChange", e => {
	sliderMain.activeIndex > 0 ? desc.classList.add("hidden") : desc.classList.remove("hidden");
})