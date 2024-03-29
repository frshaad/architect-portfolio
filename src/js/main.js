// **************
// Services Modal
const modalViews = document.querySelectorAll('.services__modal');
const modalBtns = document.querySelectorAll('.services__button');
const modalClose = document.querySelectorAll('.services__modal-close');
const modalContents = document.querySelectorAll('.services__modal-content');

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

window.onclick = function (event) {
	modalViews.forEach(modalView => {
		if (event.target == modalView) {
			modalView.classList.remove('active-modal');
		}
	});
	galleryViews.forEach(galleryView => {
		if (event.target == galleryView) {
			galleryView.classList.remove('active-modal');
		}
	});
};

// Services Modal
// **************

// **************
// Gallery Modal
const galleryViews = document.querySelectorAll('.gallery__modal');
const galleryBtns = document.querySelectorAll('.work__button');
const galleryClose = document.querySelectorAll('.gallery__modal-close');

let galleryModal = function (modalClick) {
	galleryViews[modalClick].classList.add('active-modal');
};

galleryBtns.forEach((galleryBtn, i) => {
	galleryBtn.addEventListener('click', () => {
		galleryModal(i);
	});
});

galleryClose.forEach(galleryClose => {
	galleryClose.addEventListener('click', () => {
		galleryViews.forEach(galleryView => {
			galleryView.classList.remove('active-modal');
		});
	});
});

// Gallery Modal
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
	linkWork.forEach(l => l.classList.remove('active-work'));
	this.classList.add('active-work');
}

linkWork.forEach(l => l.addEventListener('click', activeWork));

// // Work MixItUp
// // **************

// // **************
// // Swiper Testimonial

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
			slidesPerView: 3,
			spaceBetween: 48,
		},
	},
});

// // Swiper Testimonial
// // **************

// // **************
// // Scroll Sections Active Link
const sections = document.querySelectorAll('section[id]');

const scrollActive = () => {
	const scrollY = window.pageYOffset;

	sections.forEach(current => {
		const sectionHeight = current.offsetHeight,
			sectionTop = current.offsetTop - 58,
			sectionId = current.getAttribute('id'),
			sectionsClass = document.querySelector('.nav__menu a[href*=' + sectionId + ']');

		if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
			sectionsClass.classList.add('active-link');
		} else {
			sectionsClass.classList.remove('active-link');
		}
	});
};
window.addEventListener('scroll', scrollActive);

// Scroll Sections Active Link
// **************

// **************
// Scroll Reveal Animation

const sr = ScrollReveal({
	origin: 'top',
	distance: '60px',
	duration: '2500',
	delay: '400',
	// reset: true,
});

sr.reveal(`.home__data`);
sr.reveal(`.home__handle`, { delay: 700 });
sr.reveal(`.home__social, .home__scroll`, { delay: 900, origin: 'bottom' });

// Scroll Reveal Animation
// **************

// **************
// See more skills

const moreBtn = document.querySelector('.skills__more');
const arrowBtn = document.querySelector('.skills__more-icon');
const moreItems = document.querySelectorAll('.skills__data.more-item');
const upArrow = document.querySelector('.up-icon');
const downArrow = document.querySelector('.down-icon');

moreBtn.addEventListener('click', () => {
	moreItems.forEach(item => {
		item.classList.toggle('hidden-item');
		if (!item.classList.contains('hidden-item')) {
			moreBtn.innerHTML = 'See less';
			upArrow.style.display = 'block';
			downArrow.style.display = 'none';
		} else {
			moreBtn.innerHTML = 'See more';
			upArrow.style.display = 'none';
			downArrow.style.display = 'block';
		}
	});
});
