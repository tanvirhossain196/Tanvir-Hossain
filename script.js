/* About Section  */

const resumeBtns = document.querySelectorAll(".about-btn");
const resumeDetails = document.querySelectorAll(".about-detail");

resumeBtns.forEach((btn, idx) => {
  btn.addEventListener("click", () => {
    
    resumeBtns.forEach((button) => button.classList.remove("active"));
    
    btn.classList.add("active");

    resumeDetails.forEach((detail) => detail.classList.remove("active"));
    
    if (resumeDetails[idx]) resumeDetails[idx].classList.add("active");
  });
});



/* Portfolio Section */

document.addEventListener("DOMContentLoaded", () => {
  const leftArrow = document.querySelector(".arrow-left");
  const rightArrow = document.querySelector(".arrow-right");
  const imgSlide = document.querySelector(".img-slide");
  const portfolioDetails = document.querySelectorAll(".portfolio-detail");
  let currentSlide = 0;

  
  const updatePortfolio = () => {
    const totalSlides = imgSlide.children.length;
    
    imgSlide.style.transform = `translateX(${-100 * currentSlide}%)`;

    portfolioDetails.forEach((detail, index) => {
      if (index === currentSlide) {
        detail.classList.add("active");
      } else {
        detail.classList.remove("active");
      }
    });
  };

  
  rightArrow.addEventListener("click", () => {
    const totalSlides = imgSlide.children.length;
    currentSlide = (currentSlide + 1) % totalSlides; 
    updatePortfolio(); 
  });

  leftArrow.addEventListener("click", () => {
    const totalSlides = imgSlide.children.length;
    currentSlide = (currentSlide - 1 + totalSlides) % totalSlides; 
    updatePortfolio(); 
  });

  updatePortfolio();
});
