const { log } = console;
const { documentElement } = document;

const navLightIcon = document.querySelector(".nav-light-icon");
const currDate = document.querySelector(".curr-date");
const arrowLeft = document.querySelector(".arrow-left");
const arrowRight = document.querySelector(".arrow-right");
const daysLiTag = document.querySelector(".days");
let phoneInput = document.querySelector("#phone"),
    timeInput = document.querySelector("#time"),
    dateInput = document.querySelector("#date");
    zipCodeInput = document.querySelector("#zipcode"),
    servicesList = document.querySelectorAll(".choice"),
    submitBtn = document.querySelector(".submit-btn")
;

const menuBtn = document.querySelector(".nav-menu-btn");
const menuList = document.querySelector(".menu");
const exitBtn = document.querySelector(".exit");


var arrowController = document.querySelectorAll(".arrow-control");


document.addEventListener("DOMContentLoaded", (e) => contact(e))


function contact(evt) {
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


    
    // TOGGLE DARK & LIGHT MODE
    function toggleDWMode() {
        const body = document.body;
        const docBody = document.documentElement;
        const headerContent = document.querySelector("header");

        let darkMode = localStorage.getItem("darkMode");
        let contentArr = [body, docBody, headerContent, navLightIcon, document.querySelector(".nav-icons")];
        if (darkMode) {
            for (let i = 0; i < (contentArr.length); ++i) 
            {
                let content = contentArr[i];
                content.classList.add("d-dark-mode");

            }
        }
        navLightIcon.addEventListener("click", (E) => {
            contentArr.forEach((content) => {
                content.classList.toggle("d-dark-mode");
            })

            if (docBody.classList.contains("d-dark-mode")) {
                localStorage.setItem("darkMode", "true");
            } else {
                localStorage.removeItem("darkMode");
            }

        })
    }
    // PHONE FORMAT
    function formatPhoneNum (val) {
        if (!val) return val;
        const phoneNum = val.replace(/[^\d]/g, '');
        const phoneNumLen = phoneNum.length;
        if (phoneNumLen < 4) return phoneNum;
        if (phoneNumLen < 7) {
            return `(${phoneNum.slice(0, 3)}) ${phoneNum.slice(3)}`;
        }
        return `(${phoneNum.slice(0, 3)}) ${phoneNum.slice(3, 6)}-${phoneNum.slice(6, 10)}`;
    }
   
    


    phoneInput.addEventListener("input", (e) => {
        let value = e.target.value;
        const formatInputVal = formatPhoneNum(value);
        e.target.value = formatInputVal;
    })

    

    function calendar() {
        let date = new Date();

        let currYear = date.getFullYear(),
            currMonth = date.getMonth();
        ;


        const months = ["January", "February", "March", "April", "May", 
            "June", "July", "August", "September", "October",
            "November", "December"]
            ;

       
        const render = () => {
            let firstDayOfMonth = new Date(currYear, currMonth, 1).getDay();
            let lastDateOfMonth = new Date(currYear, currMonth + 1, 0).getDate();
            let lastDayOfMonth = new Date(currYear, currMonth, lastDateOfMonth).getDay();
            let lastDateOfLastMonth = new Date(currYear, currMonth, 0).getDate();

            liTag = "";


            for (let i = firstDayOfMonth; i > 0; --i) {
                liTag += `<li class="inactive">${lastDateOfLastMonth - i + 1}</li>`;
            }

            for (let i = 1; i < lastDateOfMonth; ++i) {
                liTag += `<li>${i}</li>`
            }

            for (let i = lastDayOfMonth; i < 6; ++i) {
                liTag += `<li class="inactive">${i - lastDayOfMonth + 1}</li>`
            }

            currDate.innerText = `${months[currMonth]} ${currYear}`;
            daysLiTag.innerHTML = liTag;
        }


        function revealCalendar() {
            let date = dateInput;
            date.addEventListener("click", (e) => {
                let calendar = document.querySelector(".calendar");

                if (!calendar.classList.contains("reveal-calendar")) {
                    calendar.classList.add("reveal-calendar");

                    let cal = document.querySelector(".calendar");
                    let months = cal.children[0].getElementsByClassName("curr-month")[0];
                    let days = cal.children[3].querySelectorAll("li");
                
                    for (let i = 0; i < days.length; ++i) {
                        days[i].addEventListener("click", (E) => {
                            log(months.textContent);
                            cal.classList.remove("reveal-calendar")
                        })
                    }
                } else {
                    calendar.classList.remove("reveal-calendar");
                }
            })
        }


        render();
        revealCalendar();

        arrowController.forEach((chevron) => {
            chevron.addEventListener("click", (e) => {
                currMonth = chevron.id == "left" ? currMonth - 1 : currMonth + 1;

                if (currMonth < 0 || currMonth > 11) {
                    date = new Date(currYear, currMonth);
                    currYear = date.getFullYear();
                    currMonth = date.getMonth();

                }




                render();
            })
        })

    }


  


    function cal () {
        function setDate () {
            let date = document.querySelector("#date");
            if (!date || date == null) {
                return false;
            }
            return date;
        }

        function dateType(evt, min, val) {
            evt.addEventListener("click", (e) => {
                if (!evt.classList.contains("book")) {
                    evt.classList.add("book");
                    evt.setAttribute("type", "date");

                    let setTypes = ["min", "value"];
                    
                    setTypes.forEach(type => {
                        switch (type) {
                            case "min": 
                                evt.setAttribute(type, min);
                                break;
                            case "value":
                                evt.setAttribute(type, val);
                                break;
                            default:
                                break;
                        }
                    })
                }
            })
        }

        const months = () => {
            return [
                'Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'
            ]
        }
        if (typeof setDate() === "object") {
            let date = new Date(),
            dateInput = document.querySelector("#date");

            var DATE = date.toDateString(),
            dateIndex = ""
            ;

            let monthStr = DATE.split(" ")[1];
            let monthIndex;

            let monthLen = months().length;
            for (let i = 0; i < monthLen;++i)
            {
                if (months()[i] === monthStr) {
                    monthIndex = (i + 1);
                }
            }

            DATE = DATE.replace(DATE.split(" ")[1], monthIndex);
            
            let splitDateStr = DATE.split(" ");

            dateIndex += `${splitDateStr[1]}-${splitDateStr[2]}-${splitDateStr[3]}`;

            

            dateInput.setAttribute("min", dateIndex);

            dateInput.value = dateIndex;


            dateType(dateInput);

        
        } else {
            log ("false time & date")
        }


    

        
    }


    

    cal();
 
    function formatZip (value) {
        let zipVal = value.replace(/\D/g, "");
        let zipLen = zipVal.length;

        if (zipLen > 5) {
            zipVal =  zipVal.slice(0, 5);
        }

        return zipVal;


    }
    zipCodeInput.addEventListener("input", (E) => {
        let val = E.target.value;
        let formatZipCode = formatZip(val);

        E.target.value = formatZipCode;
    })




    function filterServiceList () {
        let choices = servicesList;
        let choiceList = [];
        choices.forEach(choice => {
            let choiceInput = choice.querySelector("input");

            choiceInput.addEventListener("click", (e) => {
                choiceInput.setAttribute("checked", true);
                let bool = false;
                let inputChecked = choiceInput.checked == true ? 
                choiceInput : "";

                let lastChoiceInput = choiceInput.id;


                if (inputChecked) {
                    inputChecked.name = `${inputChecked.name}.checked`;
                    choiceList.push(
                        {
                            id: inputChecked.id,
                            bool: !bool
                        }
                    )
                } else {
                
                    choiceInput.name = choiceInput.name.replace(choiceInput.name,
                        choiceInput.name.split(".")[0]
                    )

                    choiceInput.setAttribute("checked", false);
                    for (let i = 0; i < choiceList.length; ++i) {
                        if (choiceList[i].id == lastChoiceInput) {
                            choiceList[i].bool = !true;
                        }
                    }
                }                
            })
        
        }) 
    }
    

    function revealMenuController(btn, list) {
        let targetStr = "reveal";
        list.classList.add(targetStr);

        document.body.style.overflow = "hidden";
        lenis.stop();


        let ml = gsap.timeline({
            ease: "power3.inOut"
        });

        if (list.classList.contains(targetStr)) {
            ml.to(".menu", 1, {
                height: "100%",
            })
            .to(".menu-header", .6, {
                scale: 1
            })
            .to (".menu-list > li", .6, {
                opacity: 1,
                stagger: {
                    amount: .6
                }
            })
            .to(".exit > h1", .3, {
                bottom: 0
            })
        } 

        exitBtn.addEventListener("click", (E) => {
            ml.reverse();
            document.body.style.overflow = "scroll";
            lenis.start();
        })
    }

    function revealMenu(btn, list) {
        btn.addEventListener("click", (E) => {
            revealMenuController(btn, list);
        })
    }

    function exitMenu() {
        exitBtn.onclick = function() {
            menuList.classList.remove("reveal");
        }
    }

    function getElementsTop (ele) {
        typeof ele === "object" ? ele : null;

        let distance = 0;

        do {
            distance += ele.offsetTop;

            ele = ele.offsetParent;
            
        } while (ele);

        distance < 0 ? 0 : distance;

        return distance;
   }


    function animationReveal() {
        let nav = document.querySelector("nav"),
            navElements = nav.children;
        let subNav = document.querySelector(".sub-nav"), 
        subNavElements
        = subNav.querySelectorAll("h3");

        let navLeft = navElements[0].children;
        let navLogo = navElements[1];
        let heroHeader = document.querySelector(".hero-header"),
            heroHeaders = heroHeader.querySelector("h1"),
            heroHeaderInfo = document.querySelector(".hero-info"),
            heroHeaderInfoContent = heroHeaderInfo.querySelectorAll("h3");

    

        
        const al = gsap.timeline(
            {
                ease: "power3.inOut"
            }
        );


        if (al !== null) {
            al.to(navLeft[0], .1, {
                top: "0rem",
            })
            .to(navLeft[1], .1, {
                top: "0rem"
            })
            .to(navLogo, .8, {
                top: "0rem"
            })
            .to(".nav-menu-btn > h2", .01, {
                top: "0rem",
                ease: "power4.inOut"
            })
            .to (".nav-menu-btn", .1, {
                borderBottom: "2px solid",
                delay: .5
            })
        }

        gsap.to(subNav, 1, {
            width: "100%",
            ease: "power3.inOut",
        })

        subNavElements.forEach((ele, index, array) => {
            gsap.to(ele, 1,  {
                top: "0rem",
                delay: .2
            })
        })

        let heroTL = gsap.timeline(
            {
                ease: "power3.inOut"
            }
        );


        let dur = 0;
        for (let i = heroHeaderInfoContent.length; i >= 0; --i) {
            dur += .3
            gsap.to(heroHeaderInfoContent[i], 1, {
                top: "0rem",
                ease: "power3.inOut",
                delay: dur
            })
        }
        gsap.to(heroHeaders, 1, {
            top: "0rem",
            ease: "power3.inOut",
            delay: 1.5
        })



    

       
        // let b, m, 
      
    //    log (( window.innerHeight);

    
    

        let scrollEle = {
             nameEleTop: {
                element: document.querySelector(".name"),
                p: document.querySelector(".name > p"),
                input: document.querySelector(".name > input"),
                top: 0,
             }, emailEleTop: {
                element: document.querySelector(".email"),
                p: document.querySelector(".email > p"),
                input: document.querySelector(".email > input"),
                top: 0,
             }, phoneEleTop: {
                element: document.querySelector(".phone"),
                p: document.querySelector(".phone > p"),
                input: document.querySelector(".phone > input"),
                top: 0
             }, methodEleTop: {
                element: document.querySelector(".method"),
                p: document.querySelector(".method > p"),
                input: document.querySelector(".method > select"),
                top: 0
             }
        };
        

        for (const elem in scrollEle) {
            scrollEle[elem].top = getElementsTop(scrollEle[elem].element)
        }

        let scheduleEle = document.querySelector(".schedule");
        let scheduleEleH1 = scheduleEle.querySelector("h1");

        let scheduleEleH1Top = getElementsTop(scheduleEleH1);



        const planner = document.querySelector(".planner");
        let plannerChildren = planner.children;
    
        let services = document.querySelector(".services");
        let servicesTop = getElementsTop(services);

        let messageEle = document.querySelector(".message");
        let messageEleTop = getElementsTop(messageEle);

    


        window.addEventListener("scroll", (e) => {
            let y = window.scrollY;

            
            
            let distance = null;
            for (const elem in scrollEle) {
                distance = scrollEle[elem].top - y;

                if (distance < window.innerHeight) {
                    scrollEle[elem].input.style.width = "100%";
                    scrollEle[elem].p.style.opacity = 1;
                } 
                
                if (distance > window.innerHeight) {
                    scrollEle[elem].input.style.width = "0";
                    scrollEle[elem].p.style.opacity  = 0;
                }
            }


            let plannerChildrenLen = plannerChildren.length;

            for (let i = 0; i < plannerChildrenLen - 2; ++i) {
                let d = getElementsTop(plannerChildren[i]);

                
                let pTag = plannerChildren[i].querySelector("p");
                let inputTag = plannerChildren[i].querySelector("input");

                if ((d - y) < window.innerHeight) {
                    inputTag.style.width = "100%";
                    pTag.style.opacity = 1;
                }
                if ((d - y) > window.innerHeight) {
                    inputTag.style.width = "0";
                    pTag.style.opacity = 0;
                }
            }

            if ((scheduleEleH1Top - y) < window.innerHeight) {
                scheduleEleH1.style.left = "0rem";
            } else {
                scheduleEleH1.style.left = "-50rem";
            }

            (servicesTop - y) < window.innerHeight ? 
            services.style.opacity = 1 : services.style.opacity = 0 
            ;

            let messagePTag = messageEle.querySelector("p");
            let messageInputTag = messageEle.querySelector("textarea");

            if ((messageEleTop - y) < window.innerHeight) {

                messagePTag.style.opacity = 1;

                messageInputTag.style.width = "100%";
            } else {
                messagePTag.style.opacity = 0;

                messageInputTag.style.width = "0%";
            }
            
        })
    }

    function defaultStyle() {
        let form = document.querySelector("form");
        let formChildren = form.children;

        let schedule = document.querySelector(".schedule");
        let scheduleChildren = schedule.children;

        let scheduleH1 = scheduleChildren[0];

        let distanceFromTop = getElementsTop(form.offsetParent);
        
        let services = document.querySelector(".services");
        let servicesInfo = document.querySelector(".services-info");
        let messageInfo = document.querySelector(".message");
        let messageChildren = messageInfo.children;

        
        let { pageYOffset, scrollY, innerHeight } = window;


        if ((distanceFromTop - pageYOffset || scrollY) < innerHeight ) {
            for (let i = 0; i < formChildren.length; ++i) {

                let pTag = formChildren[i].querySelector("p"),
                     inputTag = formChildren[i].querySelector("input"),
                     selectTag = formChildren[i].querySelector("select")
                ;
                // if (pTag == null) pTag = 0;

                
            
                pTag == null ? 0 : pTag.style.opacity = 1;
                selectTag == null ? 0 : selectTag.style.width = "100%";
                inputTag == null ? 0 : inputTag.style.width = "100%";

                let schedulePTag = scheduleChildren[1].children[i].querySelector("p");
                let scheduleInputTag = scheduleChildren[1].children[i].querySelector("input");

                servicesInfo.style.opacity = services.style.opacity = 1;
                servicesInfo.querySelector(".choice").querySelector("input").style.width = "unset";
                

                schedulePTag.style.opacity = 1;

                scheduleInputTag == null ? 0 : scheduleInputTag.style.width = "100%";
                
            }
        }

        scheduleH1.style.left = "0rem";

        messageChildren[0].style.opacity = 1;
        messageChildren[1].style.width = "100%";


        
    }

    function inputController() {
        let form = document.querySelector("form");
        let formChildren = form.children;
        let scheduleFormPlanner = document.querySelector(".planner");
        let scheduleFormPlannerChildren = scheduleFormPlanner.children;

        
        let inputField = document.querySelectorAll("input");

        let selectField = document.querySelectorAll("select");

        let dateField = document.querySelector(".date > input");

        let selectInput = null;

        let errorList = [];

        for (let i = 0; i < inputField.length; ++i) {
            inputField[i].addEventListener("input", (e) => {
                let fname = inputField[i].classList.contains("name");
                let email = inputField[i].classList.contains("email");
                let phone = inputField[i].classList.contains("phone");

                if (fname) {
                    fname = document.querySelector(".name > input");

                    if (!fname.value || fname.value.length <= 0) {
                        fname.style.border = "1px solid red";
                        errorList.push("name is required.")
                    } else {
                        fname.style.border = "1px solid";
                    }

                }

                if (email) {
                    email = document.querySelector(".email > input");

                    if (!email || email.value.length <= 0) {
                        email.style.border = "1px solid red";
                        errorList.push("email is required.")
                    } else {
                        email.style.border = "1px solid";
                    }
                }

                if (phone) {
                    phone = document.querySelector(".phone > input");
                    
                    if (!phone || phone.value.length <= 0) {
                        phone.style.border = "1px solid red";
                        errorList.push("phone is required.")
                    } else {
                        phone.style.border = "1px solid";
                    }
                }                
            })
        }

        selectField[0].addEventListener("click", (e) => {
            selectInput = e.target.value;

            if (typeof selectInput === "string") {
                selectInput = selectInput;
            }

            if (selectInput == "Phone" || selectInput == "Email") {
                selectField[0].style.border = "1px solid";
            } else {
                selectField[0].style.border = "1px solid red";
            }
        })

        const date = new Date();

        let dateStr = "";        



        let str = new Date(2024, 12 - 1, 16);
        let a = "2024-12-16";

        log (Number.parseInt(a.split("-")[2]));

        

        dateField.addEventListener("change", (e) => {
            var inputDateYear = inputDateMonth = inputDateDay = null;
            let val = e.target.value;

            const dateInput = document.querySelector(".date > input");

            const dateInputStyleError = {
                border: "1px solid red"
            }
            

            let styleKey = Object.keys(dateInputStyleError),
                styleVal = Object.values(dateInputStyleError);

            log (styleKey[0])

            dateStr = val;

            inputDateMonth = Number.parseInt(dateStr.split("-")[1]);
            inputDateDay = dateStr.split("-")[2];
            inputDateYear = dateStr.split("-")[0];

            let expireDate = new Date(inputDateYear, inputDateMonth - 1, inputDateDay);

            let newDate = date;
            if (newDate < expireDate) {
                let defaultInputDate = "1px solid";
                dateInput.style[styleKey[0]] =  `${defaultInputDate }`;

            } else {
                let styleKey = Object.keys(dateInputStyleError);

                dateInput.style[styleKey[0]] =  `${styleVal}`;


            
            }
            
        })


        
        timeInput.addEventListener("input", (e) => {
            let val = e.target.value;

            if (val.length <= 0 || val == "") {
                timeInput.style.border = "1px solid red";
            } else {
                timeInput.style.border = "1px solid";
            }
        })


        let addressInput = document.querySelector("#address");

        function appendAddressErrorStr() {
        let addressErrorStr = ["We are located in SC only."];
        return addressErrorStr;
    }

    let addressClickCounter = 0;
    addressInput.addEventListener("click", (e) => {
        addressClickCounter = addressClickCounter + 1;

        log (addressClickCounter);

        let parentEle = e.target.parentElement,
            newEle = document.createElement("span")
        ;
        if (typeof addressClickCounter === "number" &&
            addressClickCounter == 1 ) {
                addressClickCounter = 2;
                newEle.classList.add("address-error");
                newEle.innerHTML = appendAddressErrorStr()[0];
                parentEle.appendChild(newEle);
            }


    })
    addressInput.addEventListener("input", (e) => {
        let target = e.target;
        let val = e.target.value;
        let len = val.length;
        let parentEle = e.target.parentElement;

        let addressErrorEle = document.querySelector(".address-error");


        if (len <= 0) {
            addressClickCounter = 0;
            parentEle.removeChild(addressErrorEle);
            
            target.style.border = "1px solid red";
            // addressErrorEle.style.display = "none";
        } else {
            target.style.border = "1px solid";
        }
    })


    const zipCodeInput = document.querySelector("#zipcode");
    zipCodeInput.addEventListener("input", async (e) => {
        let target = e.target;
        let val = e.target.value;
        let len = val.length;
        if (len <= 0) {
            target.style.border = "1px solid red";
        } else {
            target.style.border = "1px solid";
        }
    })
    // addressInput.removeChild("")


    let zipcodeData = async function() {

        let obj = [];
        // let reader = new FileReader();

        
        let data = await fetch("zip.json", {
            method: "GET",
            headers: { 
                "Content-Type": "application/json"
            }
        })

        let result = await data.json();

        for (const i in result) {
            let value = Object.values(result[i]);
            value.forEach(val => obj.push(val));
        }
        
        zipCodeInput.addEventListener("input", (e) => {
            let val = e.target.value,
                len = val.length,
                target = e.target
            ;
            if (len >= 5) {
                for (let i =0; i< obj.length; ++i) {
                    if (val !== obj[i]) 
                    {
                        target.style.border = "1px solid red";
                    }
                }

                obj.forEach((value, index, array) => {
                    if (val == array[index]) {
                        target.style.border = "1px solid";
                    }
                })
            }
        })
    }
    
    zipcodeData()
    }




    inputController();
    defaultStyle()
    animationReveal();

    revealMenu(menuBtn, menuList);
    exitMenu();

    filterServiceList()
    
    

    toggleDWMode();
    // calendar();
}

// log (Math.sin(90));
let deg = Math.cos(30);
let a, b, c, A, B, C;
a = 2,
b = 3,
c = 4;

A = 90;
B = 30;
C = (180 - A - B);

let fullSize = 250;
// fullSize == 100%;
let halfSize = (75/100)*fullSize;



/*            
       /  |
    a /   | c 
     /    |
    /_____|  
       b
     */

let sin = c / a;
let cos = b / a;
let tan = c / b;

// log (sin, cos, Math.ceil(tan))

let matdeg = (((Math.PI)) * (180/Math.PI));
// log (Math.ceil(matdeg) + "deg")