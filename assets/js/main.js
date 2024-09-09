document.addEventListener("DOMContentLoaded", (event) => {

  gsap.registerPlugin(ScrollTrigger, ScrollToPlugin)
  



let preloader = gsap.timeline({onStart: () =>{disableScroll()}, onComplete: () => {enableScroll()}})
preloader.to(".preloader-img img",{autoAlpha:1, y:0, duration: 1, delay:0.3, ease: "power2.inOut"})
preloader.to(".preloader-img img",{autoAlpha: 0, duration: 1, ease: "power2.inOut"})
preloader.fromTo(".bar", {autoAlpha:1, xPercent:0}, {autoAlpha:0, xPercent:-100, duration: 1, stagger:0.1, ease: "power4.inOut",}, "<")
preloader.to(".preloader-black",{autoAlpha:0, duration:1, ease: "power4.inOut"},"<")
preloader.to(".page-overlay",{yPercent:-100, duration:0.3, ease: "power4.inOut" })


function showPreLoader() {
  disableScroll();
  let showPreLoader = gsap.timeline({})
  showPreLoader.to(".page-overlay",{yPercent:0, duration:0.3, ease: "power4.inOut"})
  showPreLoader.from(".preloader-black",{autoAlpha:0, duration:1, ease: "power4.inOut"},"<")
  showPreLoader.fromTo(".bar", {autoAlpha:0, xPercent:-100}, {autoAlpha:1, xPercent:0, duration: 1, stagger:0.1, ease: "power4.inOut",})
  showPreLoader.to(".preloader-img img",{autoAlpha: 1, y:0, duration: 1, ease: "power2.inOut"})
  showPreLoader.to(".preloader-img img",{autoAlpha: 0, y:20, duration: 1, ease: "power2.inOut"},">")
}
document.querySelectorAll('.page-tt').forEach(link => {
  link.addEventListener('click', (e) => {
      e.preventDefault();
      
      // Get the href from the clicked link, not from e.target
      const target = link.getAttribute('href');
      
      if (target) {
          showPreLoader();

          // Navigate to the new page after transition
          setTimeout(() => {
              window.location.href = target;
          }, 6000); // Adjust timing based on your transition duration
      } else {
          console.error('No href found on the clicked element');
      }
  });
});

document.querySelectorAll('.menu-link').forEach(link => {
  link.addEventListener('click', (e) => {
      e.preventDefault();
      
      // Get the href from the clicked link, not from e.target
      const target = link.getAttribute('href');
      
      if (target) {
          menuLinkclick();
          showPreLoader();

          // Navigate to the new page after transition
          setTimeout(() => {
              window.location.href = target;
          }, 6000); // Adjust timing based on your transition duration
      } else {
          console.error('No href found on the clicked element');
      }
  });
});

 //overlay menu animation//

 gsap.set
 (".overlay-menu", { autoAlpha:0, y:-1000 });
 gsap.set
 (".dropdown", {autoAlpha:0, y:120});
 gsap.set
 (".menu-header", {autoAlpha:0, y:90});
 gsap.set
 (".black-overlay", {autoAlpha:0,});
 

const menureveal = document.getElementById('menu');
const body = document.body;
let scrollPosition;

function disableScroll() {
  body.style.overflow = 'hidden';
  lenis.stop()
}

function enableScroll() {
  body.style.overflow = '';
  lenis.start()
}
 menureveal.addEventListener('click', function() {
  if (this.classList.contains('toggle')) {
 
    this.classList.toggle('opened'),
    this.classList.add('no-toggle'),
    this.classList.remove('toggle'),
    disableScroll(); 
    var entry=gsap.timeline({ onComplete: () => {this.classList.remove('no-toggle')}})
    entry.to(".black-overlay", {autoAlpha:1, duration: 0.3})
    entry.to(".overlay-menu", {autoAlpha:1, y:0, ease: "power1.inOut", duration: 0.8})
    entry.to(".menu-header", {autoAlpha:1, y:0, duration: 0.4,})
    entry.to(".dropdown", {autoAlpha:1, y:0, duration: 0.8, stagger:0.1})
    
} else {
  this.classList.toggle('opened'),
  this.classList.add('no-toggle')
  var exit=gsap.timeline({ onComplete: () => {this.classList.add('toggle'),this.classList.remove('no-toggle'), enableScroll();}})
  exit.to(".menu-header", {autoAlpha:0, y:-90, duration: 0.4})
  exit.to(".dropdown", {autoAlpha:0, y:-120, duration: 0.8, stagger:0.1})
  exit.to(".overlay-menu", {autoAlpha:1, y:-1000, ease: "power1.inOut", duration: 0.8})
  exit.to(".black-overlay", {autoAlpha:0, duration: 0.3})

}
 });

 function menuLinkclick (){

  let menuLinkclick=gsap.timeline({ onComplete: () => {this.classList.add('toggle'),this.classList.remove('no-toggle'), enableScroll();}})
  menuLinkclick.to(".menu-header", {autoAlpha:0, y:-90, duration: 0.4})
  menuLinkclick.to(".dropdown", {autoAlpha:0, y:-120, duration: 0.8, stagger:0.1})
  menuLinkclick.to(".overlay-menu", {autoAlpha:1, y:-1000, ease: "power1.inOut", duration: 0.8})
  menuLinkclick.to(".black-overlay", {autoAlpha:0, duration: 0.3})
 }


//landing page animation//

gsap.set
(".hero", {autoAlpha:0, y:120});
gsap.set
(".hero-img", {autoAlpha:0, y:120});
gsap.set
(".desktop-menu-link", {autoAlpha:0});

 var herotl = gsap.timeline({delay: 2})
 herotl.to(".hero",{autoAlpha:1, y:0, ease:"expo.out", duration: 1})
 herotl.to(".desktop-menu-link",{autoAlpha:1, y:0, ease:"expo.out", stagger:0.1, duration: 1},"<")
 herotl.to(".hero-img",{autoAlpha:1, y:0, ease:"expo.out", duration: 1},"<")



 const secondaryMenu = document.querySelector('.desktop-menu');

 // Create a GSAP timeline for the animation
 const tl = gsap.timeline({
   scrollTrigger: {
     start: 'top top', // Start at the top of the viewport
     end: 99999, // A large number to keep the animation going throughout the page
     onUpdate: (self) => {
       // Check scroll direction
       if (self.direction === -1 && self.progress === 0) {
         // Scrolling up and at the top
         gsap.to(secondaryMenu, {
           y: 0,
           duration: 0.3,
           
         });
       } else if (self.direction === 1) {
         // Scrolling down
         gsap.to(secondaryMenu, {
           y: -120,
           duration: 0.3,
           
         });
       }
     }
   }
 });


let mm = gsap.matchMedia();

mm.add("(min-width: 1024px)", () => {
  //games-section animation//
  var gamessct = gsap.timeline({
    scrollTrigger: {
      id:"games-sct",
      trigger: '.games-section',
      start: "25% 75%",
      scrub: 3,
      end: () => "+-" + document.querySelector(".games-section").offsetWidth,
      once: true,
      ease:"expo.out",
      
    }
  });
  gamessct.fromTo('.games-section', {autoAlpha:0}, { autoAlpha:1, duration: 0.6 },">")
  gamessct.fromTo('.games-header', {autoAlpha:0, y:30}, { autoAlpha:1, y:0, duration: 0.6 })
  gamessct.fromTo('.latest-game', {autoAlpha:0, y:30},{ autoAlpha:1, y:0, duration: 0.8, stagger:0.1 })
  gamessct.fromTo('.result-header', {autoAlpha:0, y:30}, { autoAlpha:1, y:0, duration: 0.6 })
  gamessct.fromTo('.result-swiper', {autoAlpha:0, y:30}, { autoAlpha:1, y:0, duration: 0.8 })

  //news-section animation//
var newssct = gsap.timeline({
  scrollTrigger: {
    id:"news-sct",
    trigger: '.news-section',
    start: "25% 50%",
    scrub: 3,
    end: () => "+-" + document.querySelector(".news-section").offsetWidth,
    once: true,
    
  }
});
newssct.fromTo('.news-header', {autoAlpha:0, y:30}, { autoAlpha:1, y:0, duration: 0.6 })
newssct.fromTo('.news-tab', {autoAlpha:0, y:30},{ autoAlpha:1, y:0, duration: 0.6, stagger:0.3 })

//newsletter animation//
var lettersct = gsap.timeline({
  scrollTrigger: {
    id:"newsletter-sct",
    trigger: '.newsletter',
    start: "top 50%",
    scrub: 1,
    end: "50% 50%",
    once: true,
    
  }
});
lettersct.fromTo('.newsletter', {autoAlpha:0,}, { autoAlpha:1, duration: 0.3 })
lettersct.fromTo('.newsletter-container', {autoAlpha:0, y:30},{ autoAlpha:1, y:0, duration: 0.4})

//teams-section animation//

let teamssct = gsap.timeline({
  scrollTrigger: {
    id:"teams-sct",
    trigger: '.teams-section',
    start: "5% 50%",
    once: true,
   
    
  }
});
teamssct.fromTo('.teams-header', {autoAlpha:0, y:30}, { autoAlpha:1, y:0, duration: 0.3 })
teamssct.fromTo('.team-tab', {autoAlpha:0, y:30},{ autoAlpha:1, y:0, duration: 0.5, stagger:0.3})

//shop-section animation//
var shopsct = gsap.timeline({
  scrollTrigger: {
    id:"shop-sct",
    trigger: '.shop-section',
    start: "25% 50%",
    scrub: 3,
    end: () => "+-" + document.querySelector(".shop-section").offsetWidth,
    once: true,
    
  }
});
shopsct.fromTo('.shop-section', {autoAlpha:0}, { autoAlpha:1, duration: 0.6 })
shopsct.fromTo('.shop-header', {autoAlpha:0, y:30}, { autoAlpha:1, y:0, duration: 0.6 })
shopsct.fromTo('.item', {autoAlpha:0, y:30},{ autoAlpha:1, y:0, duration: 0.8, stagger:0.3 })

//sponsor-section animation//
var sponssct = gsap.timeline({
  scrollTrigger: {
    id:"spons-sct",
    trigger: '.sponsor-section',
    start: "top 50%",
    end: () => "+-" + document.querySelector(".sponsor-section").offsetWidth,
    once: true,
    
  }
});
sponssct.fromTo('.sponsor-section', {autoAlpha:0}, { autoAlpha:1, duration: 0.6 })
sponssct.fromTo('.sponsor-header', {autoAlpha:0, y:30}, { autoAlpha:1, y:0, duration: 0.6 })
sponssct.fromTo('.sponsor-logo', {autoAlpha:0, y:30},{ autoAlpha:1, y:0, duration: 0.8, stagger:0.1 })

//footer-animation//
var footersct = gsap.timeline({
  scrollTrigger: {
    id:"footer-sct",
    trigger: '.footer-section',
    start: "top 80%",
    end: () => "+-" + document.querySelector(".footer-section").offsetWidth,
    once: true,
    
  }
});
footersct.fromTo('.logo-footer', {autoAlpha:0, y:30}, { autoAlpha:1, y:0, duration: 0.5 })
footersct.fromTo('.footer-group', {autoAlpha:0, y:30},{ autoAlpha:1, y:0, duration: 0.5, stagger:0.1 })
footersct.fromTo('.border', {autoAlpha:0,}, { autoAlpha:1, duration: 0.3 })
footersct.fromTo('.copyright', {autoAlpha:0, y:30}, { autoAlpha:1, y:0, duration: 0.5 })

});

mm.add("(max-width: 1023px)", () => {

  let mgamessct=gsap.timeline({
    scrollTrigger: {
      id:"mgames-sct",
      trigger: '.games-section',
      start: "5% center",
      once: true,
      ease:"expo.out",
    }
  });
  mgamessct.fromTo('.games-section', {autoAlpha:0}, { autoAlpha:1, duration: 0.3 },">")
  mgamessct.fromTo('.games-header', {autoAlpha:0, y:30}, { autoAlpha:1, y:0, duration: 0.3 })
  mgamessct.fromTo('.latest-game', {autoAlpha:0, y:30},{ autoAlpha:1, y:0, duration: 0.5, stagger:0.1 })
  mgamessct.fromTo('.result-header', {autoAlpha:0, y:30}, { autoAlpha:1, y:0, duration: 0.3 })
  mgamessct.fromTo('.result-swiper', {autoAlpha:0, y:30}, { autoAlpha:1, y:0, duration: 0.5 })

  let mnewssct = gsap.timeline({
    scrollTrigger: {
      id:"mnews-sct",
      trigger: '.news-section',
      start: "5% center",
      once: true,

      
    }
  });
  mnewssct.fromTo('.news-header', {autoAlpha:0, y:30}, { autoAlpha:1, y:0, duration: 0.3 })
  mnewssct.fromTo('.news-tab', {autoAlpha:0, y:30},{ autoAlpha:1, y:0, duration: 1.5, stagger:1 })

  //newsletter animation//
let mlettersct = gsap.timeline({
  scrollTrigger: {
    id:"newsletter-sct",
    trigger: '.newsletter',
    start: "top 50%",
    end: "50% 50%",
    once: true,

    
  }
});
mlettersct.fromTo('.newsletter', {autoAlpha:0,}, { autoAlpha:1, duration: 0.3 })
mlettersct.fromTo('.newsletter-container', {autoAlpha:0, y:30},{ autoAlpha:1, y:0, duration: 0.4})

//teams-section animation//
let mteamssct = gsap.timeline({
  scrollTrigger: {
    id:"teams-sct",
    trigger: '.teams-section',
    start: "5% 50%",
    once: true,

    
  }
});
mteamssct.fromTo('.teams-section', {autoAlpha:0}, { autoAlpha:1, duration: 0.3 })
mteamssct.fromTo('.teams-header', {autoAlpha:0, y:30}, { autoAlpha:1, y:0, duration: 0.3 })
mteamssct.fromTo('.team-tab', {autoAlpha:0, y:30},{ autoAlpha:1, y:0, duration: 0.5})

//shop-section animation//
var mshopsct = gsap.timeline({
  scrollTrigger: {
    id:"shop-sct",
    trigger: '.shop-section',
    start: "top 50%",
    once: true,

    
  }
});
mshopsct.fromTo('.shop-section', {autoAlpha:0}, { autoAlpha:1, duration: 0.3 })
mshopsct.fromTo('.shop-header', {autoAlpha:0, y:30}, { autoAlpha:1, y:0, duration: 0.3 })
mshopsct.fromTo('.item', {autoAlpha:0, y:30},{ autoAlpha:1, y:0, duration: 0.5, stagger:0.8 })

//sponsor-section animation//
var msponssct = gsap.timeline({
  scrollTrigger: {
    id:"spons-sct",
    trigger: '.sponsor-section',
    start: "top 50%",
    end: () => "+-" + document.querySelector(".sponsor-section").offsetWidth,
    once: true,
    
  }
});
msponssct.fromTo('.sponsor-section', {autoAlpha:0}, { autoAlpha:1, duration: 0.3 })
msponssct.fromTo('.sponsor-header', {autoAlpha:0, y:30}, { autoAlpha:1, y:0, duration: 0.3 })
msponssct.fromTo('.sponsor-logo', {autoAlpha:0, y:30},{ autoAlpha:1, y:0, duration: 0.5, stagger:0.1 })

//footer-animation//
var mfootersct = gsap.timeline({
  scrollTrigger: {
    id:"footer-sct",
    trigger: '.footer-section',
    start: "top 80%",
    once: true,

    
  }
});
mfootersct.fromTo('.logo-footer', {autoAlpha:0, y:30}, { autoAlpha:1, y:0, duration: 0.5 })
mfootersct.fromTo('.footer-group', {autoAlpha:0, y:30},{ autoAlpha:1, y:0, duration: 0.5, stagger:0.1 })
mfootersct.fromTo('.border', {autoAlpha:0,}, { autoAlpha:1, duration: 0.3 })
mfootersct.fromTo('.copyright', {autoAlpha:0, y:30}, { autoAlpha:1, y:0, duration: 0.5 })

});






const ssmm = gsap.matchMedia();

function scrollToSecondSection() {
  const secondSection = document.getElementById("gamessct");
  
  if (!secondSection) {
    console.error("Element with ID 'gamessct' not found");
    return;
  }

  ssmm.add("(min-width: 1024px)", () => {
    gsap.to(window, {
      duration: 2,
      scrollTo: {
        y: "#gamessct",
        autoKill: false,
        offsetY: 5
      },
      ease: "power2.inOut",
    });
  });

  ssmm.add("(max-width: 1023px)", () => {
    gsap.to(window, {
      duration: 2,
      scrollTo: {
        y: "#gamessct",
        autoKill: false,
        offsetY: 100
      },
      ease: "power2.inOut",
    });
  });
}

// Add this line to attach the function to a button click
document.getElementById("scrollbtn").addEventListener("click", scrollToSecondSection);

function scrollToTop() {
  gsap.to(window, {
    duration: 3,
    scrollTo: {
      y: 0,
      autoKill: false
    },
    ease: "power2.inOut"
  });
}

const scrollTopButton = document.getElementById('scrollTopButton');
scrollTopButton.addEventListener('click', scrollToTop);


const navbar = document.getElementById('sidebar');
const placeholder = document.querySelector('.sidebar-placeholder');
let lastScrollTop = 0;
const scrollThreshold = 5;

function handleScroll() {
  const scrollPosition = window.scrollY;
  const screenWidth = window.innerWidth;

  if (screenWidth >= 320 && screenWidth <= 425) {
    if (Math.abs(scrollPosition - lastScrollTop) > scrollThreshold) {
      if (scrollPosition > lastScrollTop && scrollPosition > navbar.offsetHeight) {
        // Scrolling down
        navbar.classList.add('fix');
        placeholder.classList.add('active');
      } else if (scrollPosition <= 0) {
        // At the top
        navbar.classList.remove('fix');
        placeholder.classList.remove('active');
      }
      lastScrollTop = scrollPosition;
    }
  } else {
    // Ensure normal behavior outside the specified range
    navbar.classList.remove('fix');
    placeholder.classList.remove('active');
  }
}

window.addEventListener('scroll', handleScroll);
window.addEventListener('resize', handleScroll);




function scrollToTopOnRefresh() {
  if (history.scrollRestoration) {
    history.scrollRestoration = 'manual';
  }
  window.scrollTo(0, 0);
}

// Call the function when the page loads
window.onload = scrollToTopOnRefresh;


document.addEventListener("DOMContentLoaded", function() {
  var lazyloadImages;    

  if ("IntersectionObserver" in window) {
    lazyloadImages = document.querySelectorAll(".lazy");
    var imageObserver = new IntersectionObserver(function(entries, observer) {
      entries.forEach(function(entry) {
        if (entry.isIntersecting) {
          var image = entry.target;
          image.classList.remove("lazy");
          imageObserver.unobserve(image);
        }
      });
    });

    lazyloadImages.forEach(function(image) {
      imageObserver.observe(image);
    });
  } else {  
    var lazyloadThrottleTimeout;
    lazyloadImages = document.querySelectorAll(".lazy");
    
    function lazyload () {
      if(lazyloadThrottleTimeout) {
        clearTimeout(lazyloadThrottleTimeout);
      }    

      lazyloadThrottleTimeout = setTimeout(function() {
        var scrollTop = window.pageYOffset;
        lazyloadImages.forEach(function(img) {
            if(img.offsetTop < (window.innerHeight + scrollTop)) {
              img.src = img.dataset.src;
              img.classList.remove('lazy');
            }
        });
        if(lazyloadImages.length == 0) { 
          document.removeEventListener("scroll", lazyload);
          window.removeEventListener("resize", lazyload);
          window.removeEventListener("orientationChange", lazyload);
        }
      }, 20);
    }

    document.addEventListener("scroll", lazyload);
    window.addEventListener("resize", lazyload);
    window.addEventListener("orientationChange", lazyload);
  }
})


});







