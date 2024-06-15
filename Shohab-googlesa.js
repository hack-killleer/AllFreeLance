// Create and append CSS styles
var styleElement = document.createElement("style");
styleElement.textContent = `
.bg-gray-50 {
    background-color: white;
}
[dir=rtl] salla-slider.photos-slider .swiper {
    padding-right: 0rem !important;
}
/* mover banner///////////////// */ 
[dir=rtl] .carousel-slider .swiper {
    padding-left: 0rem !important;
}
salla-slider.photos-slider .swiper-slide {
    position: relative;
    margin: 0px !important;
    padding: 0px;
    height: auto;
    width: 100%;
    overflow: hidden;
    border-radius: 0rem;
}
.rounded-md {
    border-radius: 0rem !important;
}
.swiper.s-slider-container.swiper-initialized.swiper-horizontal.swiper-pointer-events.swiper-rtl.swiper-backface-hidden {
    padding: 0px;
}
section:first-of-type.s-block.s-block--photos-slider {
    margin: 0px !important;
}
.store-footer__inner {
    background: #7297e8;
}
footer.store-footer {
    border-top-right-radius: 28px;
    border-top-left-radius: 28px;
    overflow: hidden;
}
@keyframes heartBeat {
    0%, 100% {
        transform: scale(1);
    }
    14% {
        transform: scale(1.3);
    }
    28% {
        transform: scale(1);
    }
    42% {
        transform: scale(1.3);
    }
    70% {
        transform: scale(1);
    }
}
.heart-bomb-animation {
    display: inline-block;
    animation: heartBeat 1.5s ease-in-out infinite;
}
/* cat1egoryyy//////////////// */ 
.grid.one-row.md\\:grid-cols-2.grid-flow-row.gap-3.sm\\:gap-8 {
    display: flex;
    flex-wrap: wrap;
}
.lazy__bg.lazy.entered.loaded {
    background-size: contain;
    background-repeat: no-repeat;
}
.banner--fixed img {
    background: #faebd700;
}
.banner-entry {
    width: 47%;
    height: 300px !important;
    background: #f9fafb00;
}
/* Media Query for Mobile Devices */ 
@media (max-width: 480px) { 
    .banner-entry {
        width: 48%;
        height: 130px !important;
        background: #f9fafb00;
    }
}
/* Media Query for low resolution  Tablets, Ipads */ 
@media (min-width: 481px) and (max-width: 767px) { 
    .banner-entry {
        width: 47%;
        height: 177px !important;
        background: #f9fafb00;
    }
}
`;
document.head.appendChild(styleElement);


var animateCSSLink = document.createElement("link");
animateCSSLink.rel = "stylesheet";
animateCSSLink.href = "https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css";
document.head.appendChild(animateCSSLink);

document.addEventListener("DOMContentLoaded", function() {
var sections = document.querySelectorAll('body.index section');
function handleScroll() {
    sections.forEach(function(section, index) {
        var bounding = section.getBoundingClientRect();

        if (bounding.top <= window.innerHeight && bounding.bottom >= 0) {
            if (!section.classList.contains("animate__animated")) {
                if (index % 2 === 0) {
                    section.classList.add("animate__animated", "animate__backInUp");
                } else {
                    section.classList.add("animate__animated", "animate__lightSpeedInRight");
                }
            }
        }
    });
}

handleScroll();
window.addEventListener('scroll', handleScroll);


                          
