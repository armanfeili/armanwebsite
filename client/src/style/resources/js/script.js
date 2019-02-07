// $('.js--section-title').waypoint(
//     function (direction) {
//         if (direction == 'down') {
//             $('nav').addClass('sticky')
//         } else {
//             $('nav').removeClass('sticky')
//         }
//     }, {
//         offset: '60px;'
//     }
// )
// Get the modal
// When the user scrolls the page, execute myFunction 

function modal () {
  var modal = document.getElementById('myModal');

  // Get the button that opens the modal
  var btn = document.getElementById('myBtn1');

  // Get the <span> element that closes the modal
  var span = document.getElementsByClassName('close')[0];

  // When the user clicks the button, open the modal 
  btn.onclick = function () {
    modal.style.display = 'block';
    console.log('clicked modal');
  };

  // When the user clicks on <span> (x), close the modal
  span.onclick = function () {
    modal.style.display = 'none';
    console.log('clicked modal to close');
  };

  // When the user clicks anywhere outside of the modal, close it
  window.onclick = function (event) {
    if (event.target == modal) {
      modal.style.display = 'none';
    }
  };
}
modal();
$('.js--section-title').waypoint(function (direction) {
  if (direction == 'down') {
    $('#navOne').addClass('sticky');
  } else {
    $('#navOne').removeClass('sticky');
  }
}, {
  offset: '490px;'
});

function scrollSoft () {
  let prevScrollpos = window.pageYOffset;
  window.onscroll = function () {
    scrollIndicator();

    let currentScrollPos = window.pageYOffset;
    if ($('#navOne').hasClass('sticky')) {
      if (prevScrollpos > currentScrollPos) {
        document.querySelector('.sticky').style.top = '0';
      } else {
        document.querySelector('.sticky').style.top = '-50px';
      }
      prevScrollpos = currentScrollPos;
    // console.log('sticky runs')
    }
    if (!$('#navOne').hasClass('sticky')) {
      document.getElementById('navOne').style.top = '-50px';
    // console.log('nav runs')
    }
  };
}

scrollSoft();

function scrollIndicator () {
  var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  var scrolled = (winScroll / height) * 100;
  document.getElementById('myBar3').style.width = scrolled + '%';
}

/* Navigation scroll */

// Select all links with hashes
$('a[href*="#"]')
  // Remove links that don't actually link to anything
  .not('[href="#"]')
  .not('[href="#0"]')
  .click(function (event) {
    // On-page links
    if (
      location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') &&
      location.hostname == this.hostname
    ) {
      // Figure out element to scroll to
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      // Does a scroll target exist?
      if (target.length) {
        // Only prevent default if animation is actually gonna happen
        event.preventDefault();
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 800, function () {
          // Callback after animation
          // Must change focus!
          var $target = $(target);
          $target.focus();
          if ($target.is(':focus')) { // Checking if the target was focused
            return false;
          } else {
            $target.attr('tabindex', '-1'); // Adding tabindex for elements not focusable
            $target.focus(); // Set focus again
          }
        });
      }
    }
  });

/* Animations on scroll */

$('.js--wp-1').waypoint(function (direction) {
  $('.js--wp-1').addClass('animated fadeIn');
}, {
  offset: '100%'
});

$('.js--wp-2').waypoint(function (direction) {
  $('.js--wp-2').addClass('animated fadeInUp');
}, {
  offset: '70%'
});

$('.js--wp-3').waypoint(function (direction) {
  $('.js--wp-3').addClass('animated fadeIn');
}, {
  offset: '70%'
});

$('.js--wp-4').waypoint(function (direction) {
  $('.js--wp-4').addClass('animated pulse');
}, {
  offset: '70%'
});

/* Mobile navigation */
$('.js--nav-icon').click(function () {
  var nav = $('.js--main-nav');
  var icon = $('.js--nav-icon i');

  nav.slideToggle(200);

  if (icon.hasClass('ion-navicon-round')) {
    icon.addClass('ion-close-round');
    icon.removeClass('ion-navicon-round');
  } else {
    icon.addClass('ion-navicon-round');
    icon.removeClass('ion-close-round');
  }
});

// var hour = new Date().getFullYear()
// document.querySelector('.hour').textContent = hour

function displayTime () {
  let now, days, day, months, month, year, date, hour, minute, second, time;

  now = new Date();
  // var christmas = new Date(2016, 11, 25)

  months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  days = ['Sanuday', 'Monday', 'Tuseday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  month = now.getMonth();
  year = now.getFullYear();
  date = now.getDate();
  hour = now.getHours();
  minute = now.getMinutes();
  second = now.getSeconds();
  time = now.getTime();
  day = now.getDay();
  document.querySelector('.hour').textContent = days[day] + ' - ' + date + ' ' + months[month] + ' ' + year + ' - ' + hour + ':' + minute + ':' + second;
  setTimeout(displayTime, 1000);
}
displayTime();

// Update the count down every 1 second
setInterval(function () {
  // Set the date we're counting down to
  let countDownDate = new Date('June 22,2018 00:00:00').getTime();

  // Get todays date and time
  let now = new Date().getTime();

  // Find the distance between now an the count down date
  let distance = countDownDate - now;

  // Time calculations for days, hours, minutes and seconds
  let days = Math.floor(distance / (1000 * 60 * 60 * 24));
  let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  let seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Display the result in the element with id="demo"
  document.querySelector('.countDown').textContent = `Days to Summer : ${days} days :${hours} hours :${minutes} minutes :${seconds} seconds`;
  // If the count down is finished, write some text 
  if (distance < 0) {
    clearInterval(x);
    document.getElementById('demo').innerHTML = 'Time to began';
  }
}, 1000);

// setInterval()

// var map = new GMaps({
//   div: '.map',
//   lat: 29.6685769,
//   lng: 52.4641247,
//   zoom: 16
// })
// map.addMarker({
//   lat: 29.668706,
//   lng: 52.452607,
//   title: 'Shiraz',
//   infoWindow: {
//     content: '<p>Here is Shiraz</p>'
//   }
// })

function openNav () {
  document.getElementById('mySidenav').style.width = '250px';
}

function closeNav () {
  document.getElementById('mySidenav').style.width = '0';
}

$(function () {
  let btn = 0;

  $('#openNav').click(function () {
    if (btn === 0) {
      openNav();
      btn = 1;
      console.log('open clicked');
    } else {
      closeNav();
      btn = 0;
      console.log('close clicked');
    }
  });

  $('#closeNav').click(function () {
    closeNav();
    btn = 0;
    console.log('close clicked');
  });
});

function play () {
  let audio = document.getElementById('audio');
  audio.play();
}

function pause () {
  let audio = document.getElementById('audio');
  audio.pause();
}

// let isPlaying = false
// function togglePlay () {
//   let audio = document.getElementById('audio')
//   if (isPlaying) {
//     audio.pause()
//   } else {
//     audio.play()
//   }
//   return audio.paused ? audio.play() : audio.pause()
// }

// audio.onplaying = function () {
//     isPlaying = true
// }
// audio.onpause = function () {
//     isPlaying = false
// }

// $('#play').click(play)
// $('#pause').click(pause)

function togglePlay () {
  let audio = document.getElementById('audio');
  //   return audio.paused ? audio.play() : audio.pause()
  if (audio.paused) {
    document.getElementById('play').setAttribute('name', 'pause');
    console.log('song played');
    return audio.play();
  } else {
    document.getElementById('play').setAttribute('name', 'play');
    console.log('song paused');
    return audio.pause();
  }
}

// function nextSong () {
// }

$('#play').click(togglePlay);

// $('#openNav').click(
//   function () {
//     let name = document.getElementById('openNav').name
//     if (name === 'rocket') {
//       console.log('one')

//       return document.getElementById('openNav').setAttribute('name', 'ios-rocket')
//     }else {
//       console.log('two')

//       return document.getElementById('openNav').setAttribute('name', 'rocket')
//     }
//   }
// )

// another way:

$('#openNav').click(
  function () {
    document.getElementById('openNavIcon').classList.toggle('rotateIcon');
  // console.log('it worked')
  }
);

// tab bar

function openTab (evt, topTab) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName('tabContent');
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = 'none';
    console.log('display got none');
  }
  tablinks = document.getElementsByClassName('tabLinks');
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(' active', '');
    console.log('active class deleted');
  }
  document.getElementById(topTab).style.display = 'block';
  console.log('display got visible');
  evt.currentTarget.className += ' active';
  console.log('active class added');
}

document.getElementById('defaultOpen').click();

// function openCityreal (evt, cityName) {
//   let i,tabContents,tablinks
//   tabContents = document.querySelector('.tabContent')
//   for (i = 0;i < tabContents.length;i++) {
//     tabContents[i].style.display = 'none'
//   }
//   tablinks = document.querySelector('.tabLinks')
//   for (i = 0;i < tablinks.length;i++) {
//     tablinks[i].className = tablinks[i].className.replace(' active', '')
//   }
//   document.getElementById(cityName).style.display = 'block'
//   evt.currentTarget.className += ' active'
// }

//

function accordion () {
  var acc = document.getElementsByClassName('accordion');
  var i;
  console.log('reddddddddd');

  for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener('click', function () {
      this.classList.toggle('activeAccordion');
      var panel = this.nextElementSibling;
      if (panel.style.maxHeight) {
        panel.style.maxHeight = null;
      } else {
        panel.style.maxHeight = panel.scrollHeight + 'px';
      }
    });
  }
}
accordion();

// var slideIndex = 1
// showSlides(slideIndex)

// function plusSlides(n) {
//   showSlides(slideIndex += n)
// }

// function currentSlide(n) {
//   showSlides(slideIndex = n)
// }

// function showSlides(n) {
//   var i
//   var slides = document.querySelector('.mySlides')
//   var dots = document.querySelector('.dot')
//   if (n > slideIndex.length) {
//     slideIndex = 1
//   }
//   if (n < 1) {
//     slideIndex = slideIndex.length
//   }
//   for (i = 0; i < slides.length; i++) {
//     slides[i].style.display = 'none'
//   }
//   for (i = 0; i < dots.length; i++) {
//     dots[i].className = dots[i].className.replace(' active', '')
//   }
//   slides[slideIndex - 1].display = 'block'
//   dots[slideIndex - 1].className = ' active'
// }

var slideIndex = 1;
showSlides(slideIndex);

function plusSlides (n) {
  showSlides(slideIndex += n);
}

function currentSlide (n) {
  showSlides(slideIndex = n);
}

function showSlides (n) {
  var i;
  var slides = document.getElementsByClassName('mySlides');
  var dots = document.getElementsByClassName('dot');
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = 'none';
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(' activeDot ', '');
  }
  slides[slideIndex - 1].style.display = 'block';
  dots[slideIndex - 1].className += ' activeDot';
  slides[slideIndex - 1].style.fadeOut(1000);
  slides[slideIndex - 1].style.next();
  slides[slideIndex - 1].style.fadeIn(1000);
}

(function () {
  /**
   * Video element
   * @type {HTMLElement}
   */
  var video = document.getElementById('my-video');

  /**
   * Check if video can play, and play it
   */
  video.addEventListener('canplay', function () {
    video.play();
  });
})();

// $("#demo2").slider({
//   width: '1280px',
//   speed: 500,
//   autoplay: false,
//   responsive: false
// })

// EDIT ON
// $("#slideshow > div:gt(0)").hide()

// setInterval(function () {
//   $('#slideshow > div:first')
//     .fadeOut(1000)
//     .next()
//     .fadeIn(1000)
//     .end()
//     .appendTo('#slideshow')
// }, 3000)

function progressBar () {
  var elem = [];
  var elem = document.querySelectorAll('.myBar');
  el = Array.prototype.slice.call(elem);
  console.log(el);
  var width = [10, 10, 10, 10, 10, 10, 10, 10];
  var val = [80, 70, 10, 20, 30, 40, 100, 22];
  console.log('here');
  var id = setInterval(frame, 10); // 10 milisecond
  // console.log(width[i])
  function frame () {
    for (var i = 0; i < el.length; i++) {
      if (width[i] >= val[i]) {
        clearInterval(id);
        console.log('cancel');
      } else {
        console.log('there');
        // console.log(width[i])
        while (width[i] !== val[i]) {
          // console.log(width[0])
          width[i]++;
        }
        el[i].style.width = width[i] + '%';
        el[i].innerHTML = width[i] * 1 + '%';
        console.log('therelll');
      }
    }
  }
}
progressBar();
// function progressBar() {
//   var elem = []
//   var elem = document.querySelectorAll('.myBar')
//   el = Array.prototype.slice.call(elem)
//   var width = 10
//   var id = setInterval(frame, 10)
//   var val = [80, 70, 10, 20, 30, 40, 100]
//   console.log(el)
//   console.log('here')
//   function frame() {
//     for (var i = 0; i < el.length; i++) {
//       if (width >= val[i]) {
//         clearInterval(id)
//         console.log('cancel')
//       } else {
//         console.log('there')
//         width++
//         el[i].style.width = width + '%'
//         el[i].innerHTML = width * 1 + '%'
//       }
//     }
//   }
// }

// function frame () {
//   el.forEach(function (cur, i) {
//     if (width >= val[i]) {
//       clearInterval(id)
//     } else {
//       console.log('there')
//       width++
//       cur.style.width = width + '%'
//       cur.innerHTML = width * 1 + '%'
//     }
//   })
// }
// function frame () {
//   elem.forEach(el => {
//     if (width >= val[i]) {
//       clearInterval(id)
//     } else {
//       width++
//       el[i].style.width = width + '%'
//       el[i].innerHTML = width * 1 + '%'
//     }
// })

// function progressBar () {
//   let i
//   let el = []
//   let element
//   let number = []
//   let myBar = []
//   // el = document.getElementsByClassName('myProgress')
//   el = document.getElementsByClassName('myBar')
//   // for (let i = 0; i < el.length; i++) { console.log(el.children).parenNode.;}
//   // // console.log(el.childNodes.className)
//   // for (i = 0; i < el.length; i++) {
//   //   element = el[i].classList.split('-')
//   //   myBar = element[0]
//   //   number = element[1]
//   // }
//   // console.log('progressBar called')

//   // el = document.querySelector('.myBar-')
//   let val = [80, 70, 10, 20, 30, 40, 100]
//   let width = 10
//   let id = setInterval(frame, 10)
//   console.log('till this')

//   function frame () {
//     console.log('frame')

//     for (i = 0; i < el.length; i++) {
//       if (width >= val[i]) {
//         clearInterval(id)
//       } else {
//         width++
//         el[i].style.width = width + '%'
//         el[i].innerHTML = width * 1 + '%'
//       }
//     }
//   }

// function frameHTML() {
//   if (width >= 80) {
//     clearInterval(id)
//   } else {
//     width++
//     el.style.width = width + '%'
//     el.innerHTML = width * 1 + '%'
//   }
// }

// function frameJavaScript() {
//   if (width >= 40) {
//     clearInterval(id)
//   } else {
//     width++
//     el.style.width = width + '%'
//     el.innerHTML = width * 1 + '%'
//   }
// }

// function frameReact() {
//   if (width >= 5) {
//     clearInterval(id)
//   } else {
//     width++
//     el.style.width = width + '%'
//     el.innerHTML = width * 1 + '%'
//   }
// }

// function frameNodeJS() {
//   if (width >= 5) {
//     clearInterval(id)
//   } else {
//     width++
//     el.style.width = width + '%'
//     el.innerHTML = width * 1 + '%'
//   }
// }

// function framePHP() {
//   if (width >= 5) {
//     clearInterval(id)
//   } else {
//     width++
//     el.style.width = width + '%'
//     el.innerHTML = width * 1 + '%'
//   }
// }

// function frameHTML() {
//   if (width >= 2) {
//     clearInterval(id)
//   } else {
//     width++
//     el.style.width = width + '%'
//     el.innerHTML = width * 1 + '%'
//   }
// }

// function framePremiere() {
//   if (width >= 80) {
//     clearInterval(id)
//   } else {
//     width++
//     el.style.width = width + '%'
//     el.innerHTML = width * 1 + '%'
//   }
// }

// function framePhotoshop() {
//   if (width >= 10) {
//     clearInterval(id)
//   } else {
//     width++
//     el.style.width = width + '%'
//     el.innerHTML = width * 1 + '%'
//   }
// }

function snackbar () {
  var x = document.getElementById('snackbar');
  x.className = 'show';
  setTimeout(function () {
    x.className = x.className.replace('show', '');
  }, 3000);
}
