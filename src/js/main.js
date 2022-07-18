const scrollHeader = () => {
	const header = document.getElementById('header');
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
			slidesPerView: 2,
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
// Theme Change
const themeButton = document.getElementById('theme-button');
const lightTheme = 'light-theme';
const iconTheme = 'bx-sun';

// Previously selected topic (if user selected)
const selectedTheme = localStorage.getItem('selected-theme');
const selectedIcon = localStorage.getItem('selected-icon');

const getCurrentTheme = () => (document.body.classList.contains(lightTheme) ? 'dark' : 'light');
const getCurrentIcon = () =>
	themeButton.classList.contains(iconTheme) ? 'bx bx-moon' : 'bx bx-sun';

if (selectedTheme) {
	document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](lightTheme);
	themeButton.classList[selectedIcon === 'bx bx-moon' ? 'add' : 'remove'](iconTheme);
}

themeButton.addEventListener('click', () => {
	document.body.classList.toggle(lightTheme);
	themeButton.classList.toggle(iconTheme);
	localStorage.setItem('selected-theme', getCurrentTheme());
	localStorage.setItem('selected-icon', getCurrentIcon());
});
