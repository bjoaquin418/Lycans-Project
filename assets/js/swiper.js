
const swiper1 = new Swiper('.teams-swiper', { 
    setWrapperSize: true,
    slidesPerView: 3,
    spaceBetween: 20,
    loop: true,
    pagination: {
        el: '#teams-pagination',
        type: 'bullets',
      },
    breakpoints:{
        320: {
            slidesPerView: 1,
            spaceBetween: 20,
            effect: 'coverflow',
          },
          800: {
            slidesPerView: 3,
            spaceBetween: 20
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 20
          },

          1440: {
            slidesPerView: 3,
            spaceBetween: 20
          },
}
  
  }
  
  );
  const progressCircle = document.querySelector(".autoplay-progress svg");
  const progressContent = document.querySelector(".autoplay-progress span");
  const swiper2 = new Swiper('.result-swiper',{
    setWrapperSize: true,
    slidesPerView: 1,
    spaceBetween: 20,
    pagination: {
      el: "#result-pagination",
      clickable: true
    },
    loop: true,
    autoplay: {
    delay: 5000,
    },
    on: {
      autoplayTimeLeft(s, time, progress) {
        progressCircle.style.setProperty("--progress", 1 - progress);
        progressContent.textContent = `${Math.ceil(time / 1000)}`;
      }
    }

    
    
  });

  const swiper3 = new Swiper('.latest-game-swiper', { 
    slidesPerView: 1,
    
    loop: true,
    pagination: {
        el: '#games-pagination',
        type: 'bullets',
      },
    
  
  })
