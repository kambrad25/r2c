const { log } = console;

const { documentElement, body } = document;

const nav = document.querySelector("nav");
const preloader = document.querySelector(".preloader");
const preloaderContainer = preloader.children[0];
const end = document.querySelector(".sec.end");

gsap.registerPlugin(ScrollTrigger);


setTimeout(() => {
    const lenis = new Lenis();

    lenis.on("scroll", ScrollTrigger.update);

    gsap.ticker.add((time) => {
        lenis.raf(time * 1000);
    }) 


    gsap.ticker.lagSmoothing(0);
}, 15000)


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
    .to("nav", .5, {
        maxWidth: "50%",
        ease: "power3.inOut"
    })
    gsap.to (body, 1, {
        backgroundColor: "hsl(74, 91%, 75%)",
        ease: "power3.inOut",
        delay: 6.05,
    })
    gsap.to("#name", 1, {
        display: "none", 
        delay: .5,
    })

    bl.to(".nav-logo-title", 1, {
        top: 0,
        delay: 8,
        ease: "power3.inOut",
        onUpdate: () => {
            gsap.to(".img", 1,{
                top: 0,
                ease: "power3.inOut",
                stagger: {
                    amount: .5
                }
            })

            gsap.to(".scroll-down-tag", 1, {
                top: 0,
                ease: "power3.inOut",
                delay: .6
            })
            
            gsap.to ("body", 1, {
                overflow: "scroll",
                ease: "power3.inOut",
                delay: 2.5
            })
        }
    })

    // ScrollTrigger.defaults(
    //     {
    //         markers: true
    //     }
    // )
    gsap.to(".container.sec",
        {
            scrollTrigger: {
                trigger: ".container.sec",
                start: "top+=5 top",
                end: "bottom top",
                onUpdate: (self) => {
                    let scale = 1 - 12 * self.progress * 0.5;
                    let top = self.progress - 5;
                    // log (scale);
                    gsap.to(".container.sec", {
                        scale: scale < 0 ? 0 : scale
                    })
                }

            }
        }
    );

    

    // move element up and down on scroll
    // MOVE ELEMENT UP AND DOWN ON SCROLL
    let blackOffsetTop = document.querySelector(".black").offsetTop;

    gsap.to(".black", {
        scrollTrigger: {
            trigger: ".container.sec",
            start: "top+=5 top",
            end: "bottom top",
            scrub: 1,
        },
        y: document.body.scrollTop - blackOffsetTop
    })


    gsap.to("main", {
        scrollTrigger: {
            trigger: ".black",
            start: "top top",
            end: "bottom top",
            markers: true,
            onLeaveBack: () => {
                gsap.to("main", {
                    backgroundColor: "rgb(222, 249, 133)"
                }) 
                // gsap.set(".black-sec-header", {
                //     filter: "blur(6px)"
                // }) 
            },
            onEnter: () => {
                gsap.to("main", {
                    backgroundColor: "black",
                })
                // gsap.to(".black-sec-header > p", 2, {
                //     top: "0"
                // })
            },
            onLeave: () => {
                lenis = null;
                document.documentElement.style.overflow = "hidden";
                document.documentElement.className = "";
                document.querySelector(".info-wrapper").style.height = "100%";
                document.querySelector(".info-wrapper").style.top = "0";           
                
                
                document.querySelector(".sec").style.display = "none";
            }
            // onUpdate: (self) => {
            //     let blur = self.progress - 2;
            //     log (Math.floor(blur));
            //     gsap.to(".black-sec-header > h1", 1, {
            //         filter: `blur(${blur}px)`
            //     })
            // },
        },
     
        backgroundColor: "black"
    });


    gsap.to(".black-sec-header", {
        scrollTrigger: {
            trigger: "main",
            start: `top+=${document.body.scrollTop} top`,
            end: "bottom top",
            id: "black",
            markers: true,
            pin: true
        }
    });


    // MEASURE FROM 6px to 0px
    // CALC DOCUMENT SCROLL TOP / RANDOM VALUE SUBTRACTED BY BLUR VALUE SET IN CSS.
    window.addEventListener("scroll", (e) => {
        let docTop = document.documentElement.scrollTop;
        let blurEle = document.querySelector(".black-sec-header > h1");
        let infoBasedHeader = document.querySelector(".info-based > h1");

        let stateImg = document.querySelector("#scale-img");
        
        const blurTop = blurEle.offsetTop;

        let blurCalc = (15 - (docTop / 50));

        blurEle.style.filter = `blur(${blurCalc}px)`;


        // FIND DISTANCE BETWEEN SCROLL TOP TO DIV ELEMENT -> 0 to 1 -> if (x == 1) true else (x == 0) false.
        let pTag = ((window.pageYOffset - document.querySelector(".black-sec-header > p").offsetTop) / window.innerHeight);

        if (pTag >= 1) {
            document.querySelector(".black-sec-header > p").style.top = "0rem";   
        } else {
            document.querySelector(".black-sec-header > p").style.top = "-10rem";   
        }

        let basedHeaderMarker = (window.pageYOffset - infoBasedHeader.scrollTop) / window.innerHeight;


        if (basedHeaderMarker >= 2) {
            infoBasedHeader.style.top = "0rem";
            stateImg.style.transform = 'scale(1)';
        } else {
            infoBasedHeader.style.top = "-5rem";
            stateImg.style.transform = 'scale(0)';
        }
    })

};

preload();
