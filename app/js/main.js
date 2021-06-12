'use strict';


// Jquery



$(document).ready(function () {

  $('.slider').slick({
    arrows: true,
    dots: true,
    lazyLoad: true,
    autoplay: true,
    autoplaySpeed: 4000,
    responsive: [{
      breakpoint: 991,
      settings: {
        arrows: false,
      }
    }]
  });

  $('.hits-slider').slick({
    arrows: true,
    dots: true,
    lazyLoad: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    swipeToSlide: true,
    responsive: [{
        breakpoint: 1200,
        settings: {
          slidesToShow: 2,
        }

      },
      {
        breakpoint: 991,
        settings: {
          arrows: false,
          slidesToShow: 3,
          swipeToSlide: true,
        }
      },
      {
        breakpoint: 812,
        settings: {
          arrows: false,
          slidesToShow: 2,
          swipeToSlide: true,
        }
      },
      {
        breakpoint: 560,
        settings: {
          arrows: false,
          slidesToShow: 1,
          swipeToSlide: true,
        }
      },
    ]
  });

  $('.promotion-slider').slick({
    arrows: true,
    dots: true,
    lazyLoad: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    swipeToSlide: true,
    responsive: [{
        breakpoint: 1200,
        settings: {
          slidesToShow: 2,
        }

      },
      {
        breakpoint: 991,
        settings: {
          arrows: false,
          slidesToShow: 3,
          swipeToSlide: true,
        }
      },
      {
        breakpoint: 812,
        settings: {
          arrows: false,
          slidesToShow: 2,
          swipeToSlide: true,
        }
      },
      {
        breakpoint: 560,
        settings: {
          arrows: false,
          slidesToShow: 1,
          swipeToSlide: true,
        }
      },
    ]
  });


});



//Native JS




// Растягивает div под самый большой из них

if (document.querySelectorAll('.alignment-block')) {
  const alignmentBlocksToHight = function () {
    let maxHeight = 0;
    let alignmentBlocks = document.querySelectorAll('.alignment-block');
  
    if (alignmentBlocks) {
      for (let i = 0; i < alignmentBlocks.length; i++) {
        const el = alignmentBlocks[i];
        if (el.offsetHeight > maxHeight) {
          maxHeight = el.offsetHeight;
        }
      }
  
      for (let i = 0; i < alignmentBlocks.length; i++) {
        const el = alignmentBlocks[i];
        el.style.minHeight = `${maxHeight}px`;
      }
    }
  
  };
  window.addEventListener('load', alignmentBlocksToHight);
}





//menu burger

const iconMenu = document.querySelector('.menu__icon');
const menuBody = document.querySelector('.menu__body');
if (iconMenu) {
  iconMenu.addEventListener('click', function () {
    document.body.classList.toggle('_lock');
    iconMenu.classList.toggle('_active');
    menuBody.classList.toggle('_active');
  });
}

// card favorite button

const favoriteBtns = document.querySelectorAll('.card__favorite');

if (favoriteBtns) {
  for (let i = 0; i < favoriteBtns.length; i++) {
    const favoriteBtn = favoriteBtns[i];
    favoriteBtn.addEventListener('click', function () {
      favoriteBtn.classList.toggle('card__favorite_active');
    });
  }
}

// menu search

const search = document.querySelector('.menu__search svg');
const inputSearch = document.querySelector('.menu__input-search');
const menuLogo = document.querySelector('.menu__logo');

if (search) {
  search.addEventListener('click', function () {
    inputSearch.classList.toggle('_active');
    menuLogo.classList.toggle('_hide');
  });
}


// DropDown


const arrow = document.querySelectorAll('.arrow');

for (let i = 0; i < arrow.length; i++) {
  let thisLink = arrow[i].previousElementSibling;
  let subMenu = arrow[i].nextElementSibling;
  let thisArrow = arrow[i];


  // thisLink.classList.add('parent');
  thisLink.parentElement.addEventListener('click', function (e) {
    e.preventDefault();
    subMenu.classList.toggle('open');
    thisArrow.classList.toggle('active');
  });
}

// menu__item-catalog




// fixed catalog

if (document.querySelector('.sidebar')) {
  let fixedBlock = document.querySelector('.sidebar__body'),
    sidebar = document.querySelector('.sidebar'),
    container = document.querySelector('.page__container-sidebar'),
    gutter = 20,
    offsetLeft = container.offsetLeft + gutter,
    sidebarOffsetTop = sidebar.offsetTop,
    sidebarWidth = sidebar.offsetWidth,
    smallOffset = gutter;

  const fixedScrollBlock = () => {
    let scrollDistance = window.scrollY;

    if (scrollDistance > (sidebarOffsetTop - smallOffset) && scrollDistance <= (sidebar.offsetHeight + sidebarOffsetTop)) {
      fixedBlock.style.left = `${offsetLeft}px`;
      fixedBlock.style.width = `${sidebarWidth}px`;
      fixedBlock.classList.remove('absolute');
      fixedBlock.classList.add('fixed');
    } else {
      fixedBlock.style.left = '0px';
      fixedBlock.style.width = '100%';
      fixedBlock.classList.remove('fixed');
    }

    if (scrollDistance >= (sidebarOffsetTop - smallOffset) + sidebar.offsetHeight - fixedBlock.offsetHeight) {
      fixedBlock.classList.add('absolute');
      fixedBlock.style.left = `0px`;
      fixedBlock.style.width = `100%`;
      fixedBlock.classList.remove('fixed');
    }
  };

  window.addEventListener('scroll', fixedScrollBlock);
}




// filter mobile

const filterBtn = document.querySelector('.filter-btn');
const catalogFilters = document.querySelector('.catalog__left');
const catalogCloseBtn = document.querySelector('.catalog__close');
const overlay = document.querySelector('.overlay');

if (filterBtn) {
  filterBtn.addEventListener('click', () => {
    catalogFilters.classList.toggle('active');
    document.body.classList.toggle('_lock');
    overlay.style.display = "block";
  });

  catalogCloseBtn.addEventListener('click', () => {
    catalogFilters.classList.remove('active');
    document.body.classList.remove('_lock');
    overlay.style.display = "none";
  });

  overlay.addEventListener('click', () => {
    catalogFilters.classList.remove('active');
    document.body.classList.remove('_lock');
    overlay.style.display = "none";
  });
}

// scroll-up button

const buttonUp = document.querySelector('#buttonUp');

if (buttonUp) {
  
  const scrollSpacing = 500;

  buttonUp.addEventListener('click', () => {
    scrollToTop();
  });

  let scrollToTop = function () {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  let appearBtn = function () {
    if(document.body.scrollTop > scrollSpacing || document.documentElement.scrollTop > scrollSpacing) {
      buttonUp.classList.add('active');
    } else {
      buttonUp.classList.remove('active');
    }
  };

  window.addEventListener('scroll', appearBtn);
}


// modal windows

const popupBtns = document.querySelectorAll('.popup-btn');
const popupLinks = document.querySelectorAll('.popup-link');
const body = document.querySelector('body');
const lockPadding = document.querySelectorAll('.lock-padding');

let unlock = true;

const timeout = 500;

if (popupBtns.length > 0) {
  for (let i = 0; i < popupBtns.length; i++) {
    const popupBtn = popupBtns[i];
    popupBtn.addEventListener('click', function (e) {
      const popupName = popupBtn.dataset.popupBtnId;

      const currentPopup = document.getElementById(popupName);
      popupOpen(currentPopup);

    });
  }
}

if (popupLinks.length > 0) {
  for (let i = 0; i < popupLinks.length; i++) {
    const popupLink = popupLinks[i];
    popupLink.addEventListener('click', function (e) {
      const popupName = popupLink.getAttribute('href').replace('#', '');
      const curentPopup = document.getElementById(popupName);
      popupOpen(curentPopup);
      e.preventDefault();
    });
  } 
}

const popupCloseIcon = document.querySelectorAll('.close-popup');

if (popupCloseIcon.length > 0) {
  for (let i = 0; i < popupCloseIcon.length; i++) {
    const el = popupCloseIcon[i];
    el.addEventListener('click', function (e) {
      popupClose(el.closest('.popup'));
      e.preventDefault();
    });
  }
}

function popupOpen(currentPopup) {
  if (currentPopup && unlock) {
    const popupActive = document.querySelector('.popup.open');
    if (popupActive) {
      popupClose(popupActive, false);
    } else {
      bodyLock();
    }
    currentPopup.classList.add('open');
    currentPopup.addEventListener('click', function (e) {
      if (!e.target.closest('.popup__content')) {
        popupClose(e.target.closest('.popup'));
      }
    });
  }
}

function popupClose(popupActive, doUnlock = true) {
  if (unlock) {
    popupActive.classList.remove('open');
    if (doUnlock) {
      bodyUnLock();
    }
  }
}

function bodyLock() {
  const lockPaddingValue = window.innerWidth - document.querySelector('.wrapper').offsetWidth + 'px';

  if (lockPadding.length > 0) {
    for (let i = 0; i < lockPadding.length; i++) {
      const el = lockPadding[i];
      el.style.paddingRight = lockPaddingValue;
    }
  }

  body.style.paddingRight = lockPaddingValue;
  body.classList.add('lock');

  unlock = false;
  setTimeout(function () {
    unlock = true;
  }, timeout);

}

function bodyUnLock() {
  setTimeout(function () {
    if (lockPadding.length > 0) {
      for (let i = 0; i < lockPadding.length; i++) {
        const el = lockPadding[i];
        el.style.paddingRight = '0px';
      }
    }
    body.style.paddingRight = '0px';
    body.classList.remove('lock');
  }, timeout);

  unlock = false;
  setTimeout(function () {
    unlock = true;
  }, timeout);
}


document.addEventListener('keydown', function (e) {
  if (e.which === 27) {
    const popupActive = document.querySelector('.popup.open');
    popupClose(popupActive);
  }
});


// range-slider

const rangeSlider = document.getElementById('range-slider');

if (rangeSlider) {
	noUiSlider.create(rangeSlider, {
    start: [5000, 75000],
		connect: true,
		step: 1,
    range: {
			'min': [5000],
			'max': [75000]
    }
	});

	const input0 = document.getElementById('input-0');
	const input1 = document.getElementById('input-1');
	const inputs = [input0, input1];

	rangeSlider.noUiSlider.on('update', function(values, handle){
		inputs[handle].value = Math.round(values[handle]);
	});

	const setRangeSlider = (i, value) => {
		let arr = [null, null];
		arr[i] = value;

		rangeSlider.noUiSlider.set(arr);
	};

	inputs.forEach((el, index) => {
		el.addEventListener('change', (e) => {
			setRangeSlider(index, e.currentTarget.value);
		});
	});
}