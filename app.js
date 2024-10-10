const { log } = console;

const { documentElement } = document;

const bgOverlay = document.querySelector(".bg-overlay");
const menuOverlay = document.querySelector(".menu-overlay");

gsap.registerPlugin(ScrollTrigger);

const tl = gsap.timeline();
const digits = gsap.timeline();

function index () {
    // const { from } = tl;
    tl
    .from(".nav-preload-logo", .5, {
        width: 0,
        ease: "power3.inOut"
    })
    .from(".nav-logo-top", .6, {
        left: "-15rem",
        ease: "poweri.inOut",
        delay: .5
        // duration: 
    }).from(".nav-logo-bottom", 1, {
        opacity: "0",
        ease: "poweri.inOut",
        delay: .5
    })
    

    gsap.from(".preload-header", 1.3, {
        top: "10rem",
        ease: "power4.inOut",
        // delay: 2,
        stagger: {
            amount: 0.5
        }
    })
    gsap.to(".preload-header", 1.3, {
        top: 0,
        ease: "power3.inOut",
        // delay: 2,
        stagger: {
            amount: 0.5
        }
    })

    gsap.from(".social-icons", 1.5, {
        scale: 0,
        ease: "power3.inOut",
    })
    gsap.to(".social-icons", 1.5, {
        scale: 1,
        ease: "power3.inOut",
    })

    digits.from(".digit-one", 0.5, {
        top: "-5rem",
        ease: "power3.inOut",
        stagger: {
            amount: 0.3
        }
    })
    .from(".digit-two", 0.5, {
        top: "5rem",
        ease: "power3.inOut",
        stagger: {
            amount: 0.3
        }
    })
    .from(".digit-three", 0.5, {
        top: "5rem",
        ease: "power3.inOut",
        stagger: {
            amount: 0.3
        }
    })


    gsap.from(".preload-msg", 1, {
        width: 0,
        opacity: 0, 
        ease: "power2.inOut"
    })
  
}
function controller() {
    const rl = gsap.timeline();

    rl.to(".preloader", 1, {
        opacity: 0,
        ease: "power3.inOut"
    }).to("main", 1.2, { 
        opacity: 1,
        ease: "power3.inOut"
    })
    .to (".nav-links ul", .2, {
        top: "0rem",
        ease: "poweri.inOut"
    })
    .to(".nav-logo", .2, {
        top: "0rem",
        ease: "poweri.inOut"
    }).to(".hero-area", .3, {
        top: "0rem",
        ease: "power3.inOut"
    }).to(".hero-img-wrapper", .6, {
        opacity: 1,
        ease: "power3.inOut"
    })
    .to(".hero-qt", 1, {
        top: "0",
        ease: "power3.inOut",
        stagger: {
            amount: .2
        }
    })
    .to(".footer-wrapper", 1, {
        width: "100%",
        ease: "power3.inOut",
    })
    .to(".footer-wrapper h1", 1, {
        opacity: "1",
        ease: "power3.inOut",
    })
}
function home() {
   
    window.addEventListener("wheel", (e) => {
        controller();    
        setTimeout(() => {
            document.querySelector(".preloader").style.display="none"
        }, 1500)
    })

    window.addEventListener("touchend", (e) => {
        controller();    
        setTimeout(() => {
            document.querySelector(".preloader").style.display="none"
        }, 1500)
    })
}


function overlay() {
    let mediaM = gsap.matchMedia();
    const ol = gsap.timeline();
    mediaM.add("(min-width: 300px)", () => { 
        ol.
        to(".bg-overlay", 1, {
            height: "100vh",
            paddingTop: "2rem",
            ease: "power3.inOut",
        }).
        to("#exit", 0.4, {
            width: "100%",
            ease: "power3.inOut"
        }).
        to(".exit-tag", 0.45, {
            top: "0rem",
            ease: "power3.inOut"
        })
        .to(".menu-content > a", 0.5, {
            width: "10rem",
            height: "10rem",
            opacity: 1,
            ease: "power3.inOut",
            stagger: {
                amount: .3
            }
        })
        .to(".menu-content > a > span", 1, {
            opacity: 1,
            ease: "power3.inOut",
            stagger: {
                amount: .3
            },
            delay: .3
        
        })
        .to(".menu-title", 1, {
            opacity: 1,
            ease: "poweri.inOut",
            // delay: .1
        })
});
        mediaM.add("(min-width: 380px)", () => { 
            const ol = gsap.timeline();
            
            ol.
            to(".bg-overlay", 1, {
                height: "100vh",
                paddingTop: "2rem",
                ease: "power3.inOut",
            }).
            to("#exit", 0.4, {
                width: "100%",
                ease: "power3.inOut"
            }).
            to(".exit-tag", 0.45, {
                top: "0rem",
                ease: "power3.inOut"
            })
            .to(".menu-content > a", 0.5, {
                width: "13rem",
                height: "13rem",
                opacity: 1,
                ease: "power3.inOut",
                stagger: {
                    amount: .3
                }
            })
            .to(".menu-content > a > span", 1, {
                opacity: 1,
                ease: "power3.inOut",
                stagger: {
                    amount: .3
                },
                delay: .3
            
            })
            .to(".menu-title", 1, {
                opacity: 1,
                ease: "poweri.inOut",
                // delay: .1
            })
        });
    

    document.querySelector(".exit-tag").addEventListener("click", () => 
        {
            ol.reverse();
        });
};



index();


home();

document.querySelector(".menu-tag").addEventListener("click", () => {
    overlay();

});

// document.addEventListener("DOMContentLoaded", home);