const  { log } = console;

const { documentElement } = document;

const galleryImg = document.querySelectorAll(".gal");
const reachUsHeader = document.querySelector(".reach-us-wrapper");

const contactHeader = document.querySelectorAll(".contact-header");
const contactInfo = document.querySelectorAll(".info");


document.querySelector("DOMContentLoaded", gallery());

function gallery() {
    // Initiate Lenis
    const lenis = new Lenis();

    // Listen for the scroll event and log the event data
    lenis.on('scroll', (e) => {
    });

    // Use requestAnimationFrame to continuously update the scroll
    function raf(time) {
    lenis.raf(time);
    requestAnimationFrame(raf);
    }

    raf();


    function preloader() {
        let pl = gsap.timeline({
            ease: "power3.inOut"
        });

        pl.to(".preload-text-one", 1, {
            transform: "translateZ(0rem)",
        }).to(".preload-text-two", 1, {
            transform: "translateZ(0rem)",
        }).to(".preload-text-three", 1, {
            transform: "translateZ(0rem)",
        }) .to(".preload-sub-text",.1, {
            width: "100%",
        }).to(".cover", 1, {
            height: "100%",
            stagger: {
                amount:.3
            }
        })
        .to(".preloader", 1.3, {
            display: "none"
        })
        .to("main", 1, {
            display: "block",
            delay: .2
        })
       
    }

    function home() {

        gsap.defaults( {
            ease: "power3.inOut"
        })

        setTimeout(() => {
            gsap.to(".nav-logo > h1", .3, {
                    top: 0,
                    stagger: {
                        amount: .1
                    }
            })

            gsap.to(".nav-state-logo", .5, {
                top:0,
            })

            gsap.to(".nav-menu", .5, {
                top: 0
            })
            gsap.to(".sub-nav", .5, {
                width: "100%"
            })
            gsap.to(".video", .5, {
                height: "100%",
            })
            gsap.to("video", 1, {
                border: "1px solid"
            })
            
            gsap.to(".hero-right > p", 1, {
                top: 0,
                delay: 1
            })
            gsap.to(".hero-right > h1", 1, {
                top: 0,
                delay: 1.5
            })

        }, 6500);


        window.addEventListener("scroll", (e) => {
            let pageY = this.pageYOffset;
            let len = galleryImg.length;
            for (let i = 0; i < len;++i){
                let gal = galleryImg[i],
                galTop = gal.getBoundingClientRect().top;

                
                if ((galTop + 200) < window.innerHeight) {
                    gal.style.opacity = 1;
                } else {
                    gal.style.opacity = 0
                }
            }

            let reachHeadTop = reachUsHeader.getBoundingClientRect().top,
                contactHeadersLen = contactHeader.length;
            if ((reachHeadTop + 50) < window.innerHeight) {
                reachUsHeader.children[0].style.top = 0;
            } else {
                reachUsHeader.children[0].style.top = "25rem";
            }

            for (let i =0; i<contactHeadersLen; ++i) {
                let cTop,cITop = null;
                cTop = contactHeader[i].getBoundingClientRect().top;
                cITop = contactInfo[i].getBoundingClientRect().top;

                if (cTop < this.innerHeight) {
                    contactHeader[i].parentElement.style.width="100%";
                } else {
                    contactHeader[i].parentElement.style.width="0%";
                }


                if (cITop < this.innerHeight) {
                    contactInfo[i].style.left = "0"
                } else {
                    contactInfo[0].style.left = "80rem";
                    contactInfo[1].style.left = "-80rem";
                }
            }

        })

       
    }

    preloader();
    home();
    

};



