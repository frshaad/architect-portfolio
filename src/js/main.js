const scrollHeader = () => {
	const header = document.getElementById('header');
	// When the scroll is greater than 50 viewport height, add the scroll-header class to the header tag
	this.scrollY >= 50
		? header.classList.add('scroll-header')
		: header.classList.remove('scroll-header');
};
window.addEventListener('scroll', scrollHeader);

// **************
// Services Modal
const modalViews = document.querySelectorAll('.services__modal');
const modalBtns = document.querySelectorAll('.services__button');
const modalClose = document.querySelectorAll('.services__modal-close');

let modal = function (modalClick) {
	modalViews[modalClick].classList.add('active-modal');
};

modalBtns.forEach((modalBtn, i) => {
	modalBtn.addEventListener('click', () => {
		modal(i);
	});
});

modalClose.forEach(modalClose => {
	modalClose.addEventListener('click', () => {
		modalViews.forEach(modalView => {
			modalView.classList.remove('active-modal');
		});
	});
});
// Services Modal
// **************

// **************
// Work MixItUp

let mixerPortfolio = mixitup('.work__container', {
	selectors: {
		target: '.work__card',
	},
	animation: {
		duration: 300,
	},
});

// Link active work
const linkWork = document.querySelectorAll('.work__item');

function activeWork() {
	linkWork.forEach(link => link.classList.remove('active-work'));
	this.classList.add('active-work');
}

linkWork.forEach(link => link.addEventListener('click', activeWork));

// Work MixItUp
// **************

// **************
// Swiper Testimonial

let swiperTestimonial = new Swiper('.testimonial__container', {
	spaceBetween: 24,
	loop: true,
	grabCursor: true,
	pagination: {
		el: '.swiper-pagination',
		clickable: true,
	},
	breakpoints: {
		576: {
			slidesPerView: 2,
		},
		768: {
			slidesPerView: 2,
			spaceBetween: 48,
		},
	},
});

// Swiper Testimonial
// **************
