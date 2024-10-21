const { log } = console;

const { documentElement, body } = document;

const nav = document.querySelector("nav");
const container = document.querySelector(".container");
const preloader = document.querySelector(".preloader");
const preloaderContainer = preloader.children[0];
const main = document.querySelector("main");
const end = document.querySelector(".sec.end");
const images = document.querySelectorAll(".img > img");
const bannerHeaderWrapper = document.querySelector(".banner-header-wrapper");
const bannerHeaderWrapperChildren = bannerHeaderWrapper.children;
const infoLocationHeaders = document.querySelector(".info-location-headers");
const infoLocationHeadersChildren = infoLocationHeaders.querySelectorAll("h1");
const services = document.querySelector(".services");
const servicesSticky = services.children[0];
const servicesChildren = servicesSticky.children;

const serviceContent = document.querySelectorAll(".service-info > li");

const bioHeaderTitle = document.querySelector(".bio-header-title");
const bioTitle  = document.querySelector(".bio-title");

const bio = document.querySelector(".bio");
const bioImage = document.querySelector(".bio-image");
const bioContent = document.querySelector(".bio-content");


const imageSlides= document.querySelectorAll(".img > img");


const navMenuToggle = document.querySelector(".nav-menu-toggle");
const navMenu = document.querySelector(".nav-menu");

const exitMenu = document.querySelector(".exit-menu");

// gsap.registerPlugin(ScrollTrigger);

window.onload = () => {
    window.scrollTo(
        {
            top: 0
        }
    )
}


// setTimeout(() => {
// Initialize Lenis
const lenis = new Lenis();

// Listen for the scroll event and log the event data
lenis.on('scroll', (e) => {
});

// Use requestAnimationFrame to continuously update the scroll
function raf(time) {
  lenis.raf(time);
  requestAnimationFrame(raf);
}

setTimeout(() => {
    requestAnimationFrame(raf);
    lenis.stop();
}, 6000)

setTimeout(() => {
    document.body.style.overflow = "scroll";

    lenis.start();

    main.style.transform = "scale(1)";
}, 6000)


document.addEventListener("DOMContentLoaded", (e) => {
    setTimeout(() => {
        let timeline = gsap.timeline();

        timeline.to(".nav-logo > h1", .3, {
            top: 0,
            ease:"power3.inOut",
            stagger: {
                amount: .2
            }
        })
        .to (".nav-state-icon > img", .3, {
            top: 0,
            ease: "power3.inOut"
        })
        .to (".nav-menu-toggle", .3, {
            opacity: 1,
            ease: "power3.inOut"
        })

        gsap.to(".slides > .img", .5, {
            top: 0,
            ease: "power3.inOut"
        })
        gsap.to(".sub-nav", .5, {
            top: 0,
            ease: "power3.inOut"
        })
        gsap.to(".intro > h1", .5, {
            top: 0,
            ease: "power2.inOut",
            stagger: {
                amount: .1
            }
        })
        gsap.to(".dd-arrow", 1, {
            opacity: 1,
            delay: 1
        })
    }, 6800)
    
})






const preload = () => {

    let tl = gsap.timeline();
    let bl = gsap.timeline();
    
    tl.to(preloader, {
        height: "100%",
        duration: 1.5,
        ease: "power3.inOut"
    })
    .to(preloaderContainer, { 
        translateZ: 0,
        duration: .8,
        ease: "power2.inOut"
    })
    .to(".box", {
        height: "50%",
        duration: 1,
        delay: 1.5,
        ease: "power3.inOut"
    })
    .to(".box", {
        scale: 6,
        duration: 1, 
        delay: .03,
        ease: "power4.inOut"
    })
    .to(preloader, {
        duration: .5,
        display: "none",
        delay: .1
    })
    .to(".box", {
        opacity: 0,
        duration: 1,
        // delay: .01,
        onUpdate:()=> {
            gsap.to(preloader, {
                opacity: 0,
                delay: 0
            })
        }
    })
    gsap.to (body, 1, {
        backgroundColor: "hsl(74, 91%, 75%)",
        ease: "power3.inOut",
        delay: 6.05,
    })
   



    gsap.from(".dd-arrow", 1, {
        y: 6,
        ease: "power2.inOut",
        // repeat: -1
    })
    gsap.to(".dd-arrow", 1, {
        y: 0,
        ease: "power2.inOut",
        repeat: -1,
        yoyo: true
    });

    window.addEventListener("scroll", (e) => {
        let y = window.pageYOffset;
        let height = window.innerHeight;

        let bannerTop = bannerHeaderWrapper.offsetTop;

        let bannerCalc = (y - bannerTop) / height;

        let servicesTop = services.offsetTop,
            servicesCalc = (y - servicesTop) / height;

        if (bannerCalc > 0.8) {
            for (let i = 0; i < bannerHeaderWrapperChildren.length; ++i) {
                bannerHeaderWrapperChildren[i].style.top =" 0rem";
            } 

            infoLocationHeadersChildren.forEach(child => {
                setTimeout(() => {
                    child.style.left = "0rem";
                }, 300);    
            })
        } else {
            for (let i = 0; i < bannerHeaderWrapperChildren.length; ++i) {
                if (i == 0) {
                    bannerHeaderWrapperChildren[i].style.top =" -5rem";

                } else {
                    bannerHeaderWrapperChildren[i].style.top =" 10rem";

                }
            } 

            for (let i = 0; i < infoLocationHeadersChildren.length; ++i) 
                {
                    if (i == 0) 
                        infoLocationHeadersChildren[i].style.left = "50rem";
                    else 
                        infoLocationHeadersChildren[i].style.left = "-50rem"; 
                }
        }

        // log (servicesCalc);
        if ((services.getBoundingClientRect().top + 200) < height) {
            document.body.style.background = "black";
            document.body.style.transition = "all 650ms ease";


            servicesChildren[0].style.opacity = "1";

            for (let i = 0; i < serviceContent.length; ++i)
                serviceContent[i].style.left = "0rem"
            
        } else {
            document.body.style.background = "hsl(74, 91%, 75%)";
            document.body.style.transition = "all 650ms ease";

            servicesChildren[0].style.opacity = "0";

            for (let i = 0; i < serviceContent.length; ++i)
                serviceContent[i].style.left = "100rem";


        }

        if ((bioHeaderTitle.getBoundingClientRect().top + 100) < height) {
            // let scale = (this.pageYOffset / bio.offsetTop - .5);
            bioTitle.style.transform = "scale(1)";
        } else {
            bioTitle.style.transform = "scale(0)";
        }
       


        if ((bio.getBoundingClientRect().top) < height) {
            bioImage.style.height = bioImage.style.width = "20rem";
            bioContent.style.opacity = "1";
        } else {
            bioImage.style.height = bioImage.style.width = "0rem";
            bioContent.style.opacity = "0";
        }

    })


    imageSlides[0].style.opacity = 1;
    function hideImage() {
        for(let i = 0; i < imageSlides.length; ++i) {
            imageSlides[i].style.display = "none";
            imageSlides[i].style.opacity = "0";
        }
    }

    function revealImage(img, index) {
        setTimeout(() => {
            img[index].style.opacity = "1";
        }, 350);
    }
    function imageSlideShow () {
        var count = 0;

        setInterval(() => {
            count = count + 1;

            if (count == 15) {
                count = 0;
                // hideImage();
                // imageSlides[1].style.display = "block";
                // revealImage(imageSlides, 1);
            }
            if (count == 5) {
                hideImage()
                imageSlides[1].style.display="block";
                revealImage(imageSlides, 1);
            }
            if (count == 12)
            {
                hideImage()
                imageSlides[0].style.display="block";
                revealImage(imageSlides, 0);
            }            
        }, 800);
    }


    function navMenuReveal() {
        
        let containerStyle = {
            //
        }

        navMenuToggle.addEventListener("click", (e) => {
            document.body.style.overflow = "hidden";

            lenis.stop();


            // document.body.style.overflow = document.documentElement.style.overflow =  "hidden";

            if (!navMenuToggle.classList.contains("menu-reveal")) {
                navMenuToggle.classList.add("menu-reveal");
            }


            let navMenuTimeline = gsap.timeline();

            if (navMenuToggle.classList.contains("menu-reveal")) {

                navMenuTimeline
                .to(".nav-menu-mobile", 1, {
                     height: "100%"
                })
               .to(".nav-menu-mobile-list", .4,{
                    display: "flex"
                })
                .to("#nav-mobile-title", .5, {
                    scale: 1
                })
                .to(".nav-menu-mobile-list > h1", .5, {
                    opacity: 1,
                    stagger: { 
                        amount: .5
                    }
                })
                // .to(".nav-menu-mobile-list > h1 > a", .5, {
                //     opacity: 1,
                //     stagger: {
                //         amount: .5
                //     }
                // })
                .to (".exit-menu",.5, {
                    scale: 1
                })
                .to (".exit-menu", .3, {
                    opacity: 1
                })
            }

            exitMenu.addEventListener("click", (e) => {
                navMenuToggle.classList.remove("menu-reveal");
                // main.style.opacity = 0;
                navMenuTimeline.reverse();

                setTimeout(() => {
                    document.body.style.overflow = "scroll";

                    lenis.start();
                }, 3500);
                // document.body.style.overflow = document.documentElement.style.overflow =  "scroll";
                // main.style.opacity = 1;

            })
        })
    }

    navMenuReveal();
   
//    setTimeout(imageSlideShow(), 6000)
   setTimeout(imageSlideShow, 8000);

    
};



preload();
