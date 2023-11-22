const delay = 2,
	timeDuration = 1.6;
const childTwo = {
	translate: "65px",
	scale: 0.9,
	zIndex: 2,
};

const childOne = {
	translate: "0",
	scale: 1,
	zIndex: 3,
};

const childThird = {
	translate: "135",
	scale: 0.8,
	zIndex: 1,
};

const tl = gsap.timeline({ repeat: -1, dureation: 6 });

tl
	.add("two")
	.to(
		".slide-billers .card-slider:nth-child(2)",
		{
			zIndex: childOne.zIndex,
			y: childOne.translate,
			scale: childOne.scale,
		},
		timeDuration - 0.2,
	)
	.to(
		".slide-billers .card-slider:nth-child(1)",
		{
			zIndex: childTwo.zIndex,
			y: childTwo.translate,
			scale: childTwo.scale,
		},
		">-0.2",
	)
	.to(
		".slide-billers .card-slider:nth-child(3)",
		{
			zIndex: childTwo.zIndex,
			y: childTwo.translate,
			scale: childTwo.scale,
		},
		timeDuration + 0.8,
	)
	.to(
		".slide-billers .card-slider:nth-child(1)",
		{
			zIndex: childThird.zIndex,
			y: childThird.translate,
			scale: childThird.scale,
		},
		timeDuration + 0.9,
	)

	.to(
		".slide-billers .card-slider:nth-child(3)",
		{
			zIndex: childOne.zIndex,
			y: childOne.translate,
			scale: childOne.scale,
		},
		timeDuration + 2,
	)
	.add("three")
	.to(
		".slide-billers .card-slider:nth-child(2)",
		{
			zIndex: childTwo.zIndex,
			y: childTwo.translate,
			scale: childTwo.scale,
		},
		">-0.4",
	)
	.to(".slide-billers .card-slider:nth-child(1)", {
		zIndex: childTwo.zIndex,
		y: childTwo.translate,
		scale: childTwo.scale,
	})
	.to(".slide-billers .card-slider:nth-child(2)", {
		zIndex: childThird.zIndex,
		y: childThird.translate,
		scale: childThird.scale,
	})
	.add("one")
	.to(
		".slide-billers .card-slider:nth-child(1)",
		{
			zIndex: childOne.zIndex,
			y: childOne.translate,
			scale: childOne.scale,
		},
		timeDuration + 4.2,
	)
	.to(
		".slide-billers .card-slider:nth-child(3)",
		{
			zIndex: childTwo.zIndex,
			y: childTwo.translate,
			scale: childTwo.scale,
		},
		">-0.4",
	);

document
	.querySelector(".cards-biller")
	.addEventListener("mouseenter", () => {
		tl.pause();
	});

document
	.querySelector(".cards-biller")
	.addEventListener("mouseleave", () => {
		tl.resume();
	});

tl.pause();
