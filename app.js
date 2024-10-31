const { log } = console;

const { documentElement } = document;

const bgOverlay = document.querySelector(".bg-overlay");
const heroMenuFooter = document.querySelector(".hero-menu-footer");
const menuTag = document.querySelector(".menu-tag");
const menuDownArrow = document.querySelector(".hero-menu-down-arrow > img");
// const footer = document.querySelector(".footer-wrapper");
// const menuOverlay = document.querySelector(".menu-overlay");
// const menuItem = document.querySelector(".menu-item");
// const menuTag = document.querySelector(".menu-tag");

const aboutUs = document.querySelector("#about_us");
const aboutUsHeader = aboutUs.querySelectorAll("h1");

const sectionDescription = document.querySelector(".section_description");

const area = document.querySelector(".area");
const areaTitle = document.querySelector(".area-title");
const areaTitleEle = areaTitle.children;

const areaCleanTitle = document.querySelector(".area-clean-wrapper > h3");
const areaSlider = document.querySelector(".area-slider");

const equipment = document.querySelector(".equipment");
const equipmentHeaderTitle = equipment.querySelectorAll("h1");


let equipSupplyImageContainer = document.querySelector(".equip-supply-icons");
let equipSupplyImageDivs = equipSupplyImageContainer.children.length;
let equipImages = equipSupplyImageContainer.querySelectorAll(".equip-icon > img");

let listHolder = document.querySelectorAll(".list-holder");

const rates = document.querySelector(".rates");
const ratesSticky = document.querySelector(".rates-sticky");
let ratesTitle = document.querySelector(".rates-title");

let ratesInfoHeader = document.querySelector(".rates-info-header");
let availableInfoHeader  = document.querySelector(".available-info-header");

let ratesUnorderedList = document.querySelector(".rates-info > ul"),
    availableUnorderedList = document.querySelector(".available-info > ul")
;

const showcase = document.querySelector(".showcase");
const showcaseReel = document.querySelector(".showcase-reel");

const showcaseGallery = document.querySelector(".showcase-gallery");

const video = document.querySelector("video");
const showcaseMore = document.querySelector(".showcase-more");
const showcaseMoreText = document.querySelector(".showcase-more-btn-text");

const cleaning = document.querySelector(".cleaning");


let cleaningHeaderTitle = document.querySelector(".cleaning-title");
let cleaningSubTitle = document.querySelector(".cleaning-service-subtitle > p");
const cleaningProcedureSpanTag = document.querySelectorAll(".cleaning-procedure-span");

const cards = document.querySelectorAll(".card");

const cardHeader = document.querySelectorAll(".card-header");

const reviews = document.querySelector(".reviews");


const lenis = new Lenis();

lenis.on('scroll', (e) => {
});

function raf(time) {
  lenis.raf(time);
  requestAnimationFrame(raf);
}

requestAnimationFrame(raf);

// document.body.style.overflow = "hidden";
lenis.stop();


// gsap.registerPlugin(ScrollTrigger);

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
let rl = gsap.timeline();

function controller() {

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



    heroMenuFooter.style.width = "100%";

    menuTag.style.top = menuDownArrow.style.top = "0";
    menuTag.style.opacity = 1;

    
    setTimeout(() => {
        menuDownArrow.classList.add("down-arrow-notify");
    }, 5300);
    if (menuDownArrow.classList.contains("down-arrow-notify")) {


        // gsap.to(menuDownArrow, 1, {
        //     y: 3,
        //     delay: 4,
        //     ease: "power3.inOut",
        //     yoyo: true,
        //     repeat: -1
        // })
    }




  
}
function home() {
   

    function wheel() {
        window.scrollTo({top: 0})
        controller();    
        setTimeout(() => {
            document.querySelector(".preloader").style.display="none";
        }, 1500)
        setTimeout(() => {
            document.body.style.overflow = "scroll";
            lenis.start();
        }, 6000);
    }

    function touchend() {
        window.scrollTo({top: 0})
        controller();    
        setTimeout(() => {
            document.querySelector(".preloader").style.display="none"
        }, 1500);
        setTimeout(() => {
            document.body.style.overflow = "scroll";
            lenis.start();
        }, 6000);
    }

    window.addEventListener("wheel", wheel);
    window.addEventListener("touchend", touchend);


    // log (area.offsetHeight + 100) 
    let p = ((window.scrollY - area.offsetTop) / window.innerHeight) * 100;

    // log (p);

    // log (window.scrollY);
    // log (document.documentElement.scrollHeight);
    // log (window.scrollY - area.offsetTop);

    
    // OFFSET TOP CALCULATION
    // log(document.documentElement.scrollHeight - area.offsetHeight)




    // log (rates.offsetHeight / 2)
    // log (rates.getBoundingClientRect().top);
    // log (area.offsetHeight);
  
    window.addEventListener("scroll", (e) => {

        // SCROLL TO MIDDLE OF TARGET ELEMENT
        // DIVIDE ELEMENT OFFSET HEIGHT BY 2 IN ORDER TO ACTIVATE ANIMATION, ETC.
        // log ((rates.getBoundingClientRect().top + (rates.offsetHeight / 2)) < window.innerHeight);

    


        let y = window.scrollY;
        let menuTl = gsap.timeline();
        let height = window.innerHeight;
        let areaChildrenLen = areaTitleEle.length;

        const aboutUsTop = aboutUs.getBoundingClientRect().top,
        areaTitleTop = areaTitle.getBoundingClientRect().top,
        areaCleanTop = areaCleanTitle.getBoundingClientRect().top,
        ratesTitleTop  = ratesTitle.getBoundingClientRect().top
        ;


        if (y >= 10) {
            window.removeEventListener("wheel", wheel);
            window.removeEventListener("touchend", touchend);

            rl.kill();

            heroMenuFooter.style.opacity= 0;

          
        } 

        if (y == 0) {
            menuTl.kill();
            heroMenuFooter.style.opacity = 1;
        }

        if ((aboutUsTop + 150) < height) {
            // aboutUsHeader.forEach(child => {
            //     child.style.top = "0rem";
            //     child.classList.remove("section_title_delay");
            // })

            for (let i = 0; i < aboutUsHeader.length; ++i) {
                aboutUsHeader[i].style.top = "0rem";
                aboutUsHeader[i].classList.remove("section_title_delay");
            }

            sectionDescription.style.opacity = "1";
            sectionDescription.style.transition = "opacity 750ms 750ms ease";
        } else {
               for (let i = 0; i < aboutUsHeader.length; ++i) {
                aboutUsHeader[i].style.top = "30rem";
                aboutUsHeader[i].classList.add("section_title_delay");
            }
            sectionDescription.style.opacity = "0";
            sectionDescription.style.transition = "unset";
        }


        if ((areaTitleTop + 250) < height) {
            for (let i = 0; i < areaChildrenLen; ++i) {
                // let lastEle = (areaChildrenLen - 1);

                areaTitleEle[i].style.left = "0rem";
            }
        } else {
            for (let i = 0; i < areaChildrenLen; ++i) {
                let lastEle = (areaChildrenLen - 1);

                if (i == 0) 
                { 
                    areaTitleEle[i].style.left = "-30rem";
                } else { areaTitleEle[lastEle].style.left = "30rem"; }

            }
        } 

        // if child reaches bottom of parent element on scroll
        // if (window.pageYOffset + areaTitle.offsetHeight >= area.offsetHeight) {
        //     areaSlider.style.transform = `translate3d(${-0}vw, 0, 0)`;   
        // } 



        let percent = ((window.scrollY - area.offsetTop) / height) * 100;   

        let offsetOne = area.offsetHeight / 2 + 1050;
        let offsetTwo = area.offsetHeight + 250;
        

        if (y < area.offsetHeight) {
            areaSlider.style.transform = `translate3d(${-0}vw, 0,0)`
        }
        if (y >= offsetOne && y < offsetTwo) {
            areaSlider.style.transform = `translate3d(${-100}vw, 0,0)`;
        } 
        if (y >= offsetTwo) {
            areaSlider.style.transform = `translate3d(${-200}vw, 0,0)`
        }

        

        // areaSlider.style.transform = `translate3d(${-percent}vw, 0, 0)`;

        if ((areaCleanTop) < height) {
            areaCleanTitle.style.opacity = "1";
            areaCleanTitle.style.transition = "opacity 850ms 350ms ease-in-out";
        } else {
            areaCleanTitle.style.opacity = "0";
            areaCleanTitle.style.transition = "unset";
        }



        let equiqmentHeaderLen = equipmentHeaderTitle.length;

        if ((equipment.getBoundingClientRect().top + 300) < window.innerHeight) {
            for (let i = 0; i < equiqmentHeaderLen; ++i) {
                if (i == 0) {
                    equipmentHeaderTitle[i].style.left = "0rem";
                    equipmentHeaderTitle[i].style.opacity = 1;
                    equipmentHeaderTitle[i].style.transition = "left 850ms ease, opacity 850ms ease";
                } else {
                    equipmentHeaderTitle[i].style.left = "0rem";
                    equipmentHeaderTitle[i].style.opacity = 1;
                    equipmentHeaderTitle[i].style.transition = "left 850ms ease, opacity 850ms ease";

                    // equipmentHeaderTitle[i].style.transition = "all 850ms ease";
                }

              for (let i = 0; i < equipSupplyImageDivs; ++i) {
                equipImages[i].style.top = "0rem"
              }

              if (equiqmentHeaderLen == listHolder.length) {
                listHolder[i].querySelector("h2").style.top="0";
            }
            }
        } else {
            for (let i = 0; i < equiqmentHeaderLen; ++i) {
                if (i == 0) {
                    equipmentHeaderTitle[i].style.left = "-50rem";
                    equipmentHeaderTitle[i].style.opacity = 0;
                    equipmentHeaderTitle[i].style.transition = "unset";
                } else {
                    equipmentHeaderTitle[i].style.left = "50rem";
                    equipmentHeaderTitle[i].style.opacity = 0;
                    equipmentHeaderTitle[i].style.transition = "unset";
                }
                if (equiqmentHeaderLen == listHolder.length) {
                    listHolder[i].querySelector("h2").style.top="20rem";
                }
            }

            for (let i = 0; i < equipSupplyImageDivs; ++i) {
                if (i % 2 == 0) {
                    equipImages[i].style.top = "-50rem";
                } else {
                    equipImages[i].style.top = "50rem";
                }
              }

        }

        let ratesTitleHeaderLen = ratesTitle.children.length;

        let ratesTitleHeader = ratesTitle.querySelectorAll("h1");

        let ratesSubHeader = availableSubHeader = null;

        // if ((ratesTitleTop + 300) < height) {
        if ((ratesTitleTop + 100) < height) {
            for (let i = 0; i < ratesTitleHeaderLen; ++i) {
                if (i == 0) {
                    ratesTitleHeader[i].style.top = "0";
                } else {
                    ratesTitleHeader[i].style.left = "0";
                }
            }

            ratesSubHeader = ratesInfoHeader,
            availableSubHeader = availableInfoHeader
            ;

            ratesSubHeader.querySelector("h1").style.top = availableSubHeader.querySelector("h1").style.top = "0"
        } else {
            for (let i = 0; i < ratesTitleHeaderLen; ++i) {
                if (i == 0) {
                    ratesTitleHeader[i].style.top = "-20rem";
                } else {
                    ratesTitleHeader[i].style.left = "100rem";
                }
            }

            ratesSubHeader = ratesInfoHeader,
            availableSubHeader = availableInfoHeader
            ;
            ratesSubHeader.querySelector("h1").style.top = availableSubHeader.querySelector("h1").style.top = "20rem";
        }

        if ((rates.getBoundingClientRect().top + (rates.offsetHeight / 2)) < window.innerHeight) {
            ratesUnorderedList.style.opacity = availableUnorderedList.style.opacity = 1;
        } else {
            ratesUnorderedList.style.opacity = availableUnorderedList.style.opacity = 0;
        }

        // important animation reveal

        let bodyStyleInitial = {
            backgroundColor: "black",
            transition: "background-color 150ms ease"
        }
        
       let bodyStyleUnset = {
            backgroundColor: "#237f8de5",
            transition: "background-color 50ms ease"
        }

        let showcaseTitle = document.querySelector(".showcase-title");
        let showcaseImageTitle = document.querySelectorAll(".showcase-img-title");
        let showcaseImgContainer = document.querySelectorAll(".showcase-img-wrapper");
        let showcaseImages = document.querySelectorAll(".showcase-img-wrapper > img");
        let showcaseGalleryTop = showcaseGallery.getBoundingClientRect().top;

        if((showcase.getBoundingClientRect().top + 100) < window.innerHeight) {
            ratesSticky.style.opacity = 0;

            for (let i in bodyStyleInitial) {
                document.documentElement.style[i] = bodyStyleInitial[i];
            }

            showcaseTitle.style.opacity = 1;
            showcaseTitle.style.top = "0";

        } else {
            bodyStyleUnset.backgroundColor ="initial";
            bodyStyleUnset.transition = "background-color 150ms ease";

            for (let i in bodyStyleUnset) {
                document.documentElement.style[i] = bodyStyleUnset[i];
            }
            ratesSticky.style.opacity = 1;
            showcaseTitle.style.opacity = "0";
            showcaseTitle.style.top = "-20rem";

        }

        if ((showcaseGalleryTop + 50) < height) {
            showcaseImageTitle.forEach(title => title.style.top = "0")
        } else {
            showcaseImageTitle.forEach(title => title.style.top = "-20rem")   
        }

        let showcaseGalleryBottom = showcase.getBoundingClientRect().bottom; 
        if ((showcaseGalleryBottom - 500) < height) {
            // showcaseImages[0].style.transform="scale(1)";
            for (let i = 0; i < showcaseImages.length; ++i) {
                if (showcaseImages[i].parentElement.parentElement.classList.contains("showcase-img-before")) {
                    showcaseImages[i].style.transform = "scale(1)";
                } else {
                    showcaseImages[i].style.transform="scale(1)";
                }
            }
        } else {
            for (let i = 0; i < showcaseImages.length; ++i) {
                showcaseImages[i].style.transform = "scale(0)";
            }

            // showcaseMore.style.width = "0%";
            // showcaseMoreText.style.opacity = 0;

        }
        

        // IF ELEMENTS TARGET BOTTOM IS REACHED
        if (showcase.getBoundingClientRect().bottom < window.innerHeight) {
            //
        } 


        let cleanTop = cleaning.getBoundingClientRect().top;

        if ((cleanTop + 500) < height) {
            for (let i in bodyStyleUnset) { 
                document.documentElement.style[i] = bodyStyleUnset[i];
            }
        }
        if ((cleanTop + 600) < height) { 
            bodyStyleUnset.transition = "background-color 10ms ease-in";


            bgOverlay.style.paddingTop = 0;

            
            // cleaningHeaderTitle
            // cleaningSubTitle
            // cleaningProcedureSpanTag

            let cleaningProcedureLen = cleaningProcedureSpanTag.length;

            cleaningHeaderTitle.style.top = cleaningSubTitle.style.top = "0";

            cleaningHeaderTitle.classList.add("cleaning-title-mask");

            typeof cleaningProcedureLen == "number" ? cleaningProcedureLen : 2 || 3;

            for (let i = 0; i < cleaningProcedureLen; ++i) {
                if (i == 0){
                        cleaningProcedureSpanTag[i].style.opacity = 1;

                        cleaningProcedureSpanTag[i].style.transitionDelay = "1s";
                    }
                    else {
                        cleaningProcedureSpanTag[i].style.opacity = 1;
                        cleaningProcedureSpanTag[i].style.transitionDelay = "1.5s";
                    }
            }
        } else {
            let cleaningTitleVal = -50;

            bgOverlay.style.paddingTop = ".5rem"


            cleaningHeaderTitle.style.top = `${Math.abs(cleaningTitleVal)}rem`;

            cleaningHeaderTitle.classList.remove("cleaning-title-mask");

            cleaningSubTitle.style.top = `${cleaningTitleVal}rem`;
            for (let i = 0; i < cleaningProcedureSpanTag.length; ++i) {
                cleaningProcedureSpanTag[i].style.opacity = 0;
                cleaningProcedureSpanTag[i].style.transitionDelay = "unset";
            }
        }

        // reveal card title header

        function cardTopObserver (top, height) {
            return (top < height);
        }

        const cardTitleStyle = {
            opacity: 1,
            transition: "opacity 1s 50ms ease"
        }

        for (let i = 0; i < cards.length; ++i) {
            let cardsTop = cards[i].getBoundingClientRect().top;
            if (cardTopObserver(cardsTop, height)) { 
                let cardTitle = cards[i].querySelector(".card-title");

               
                for (let i in cardTitleStyle) {
                    cardTitle.style[i] = cardTitleStyle[i]
                }
            } else {
                let cardTitle = cards[i].querySelector(".card-title");

                cardTitleStyle.opacity = 0;
                cardTitleStyle.transition = "unset";
            
                for (let i in cardTitleStyle) {
                    cardTitle.style[i] = cardTitleStyle[i];
                }
            }
        }
        

        let cardHeaderLen = cardHeader.length;

        let cardHeaderTop = null;

        var cardHeaderStyle = { 
            opacity: "1",
        }
        for (let i = 0; i < cardHeaderLen; ++i) 
        {
            cardHeader[i] == null ? 
            cardHeaderTop = cardHeader[i] :
            cardHeaderTop = document.querySelectorAll(".card-header")[i];


            typeof cardHeaderTop == "object" ? cardHeaderTop = cardHeaderTop.getBoundingClientRect().top :  false;

            // if (cardHeaderTop < docuemnt)
            let docHeight = document.documentElement.clientHeight;
            
            let cardHeaderStyleSpef = Object.entries(cardHeaderStyle)[0][0];

            if (cardHeaderTop < docHeight) {
                cardHeader[i].style[cardHeaderStyleSpef] = cardHeaderStyle.opacity;
            } else {
                let { opacity } = cardHeaderStyle;
                opacity = 0;
                cardHeader[i].style[cardHeaderStyleSpef] = opacity;
            }

        }

        // else {
        //     showcaseMore.style.width = "0%";

        //     showcaseMoreText.style.opacity = 0;
        //     showcaseMoreText.style.transition = "unset";
        // }
        // log (y, showcase.offsetHeight);


        let reviewsTop = reviews.getBoundingClientRect().top;
        if ((reviewsTop + 100) < height) {
            document.documentElement.style.backgroundColor = "white";
            document.documentElement.style.transition= "background-color 150ms ease"; 
        }


    })
}

log (document.documentElement.scrollHeight);


function cardsStack (deck) {
    let index = [];
    let bc = ['#151313', '#948a8a', '#739b73', '#d6a4ad'];
    typeof deck == "object" ? deck : index.push(deck !== null ? deck : []);

    let deckLength = deck.length;

    if (deckLength > 0) {
        for (let i = (deckLength - 1); i >= 0; --i)
            (deck[i].style.zIndex = i, 
        deck[i].style.backgroundColor = bc[i]
    ); 
  }   
}

log (cards.length);


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

cardsStack(cards)

document.querySelector(".menu-tag").addEventListener("click", () => {
    overlay();

});

// document.addEventListener("DOMContentLoaded", home);
