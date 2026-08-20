/* ==========================
   ELEMENTS
========================== */

const openBtn = document.getElementById("startJourneyBtn");
const giftPage=document.getElementById("giftPage");


const musicBtn = document.getElementById("musicBtn");
const music = document.getElementById("birthdayMusic");

/* ==========================
PAGE BUTTONS
========================== */

const startJourneyBtn = document.getElementById("startJourneyBtn");

const openGiftBtn = document.getElementById("openGiftBtn");

const openLetterBtn = document.getElementById("openLetterBtn");

const galleryBtn = document.getElementById("galleryBtn");

const timelineBtn = document.getElementById("timelineBtn");

const cakeBtn = document.getElementById("cakeBtn");

const musicPageBtn = document.getElementById("musicPageBtn");

const finalPageBtn = document.getElementById("finalPageBtn");

const replayBtn = document.getElementById("replayBtn");

const homeBtn = document.getElementById("homeBtn");

window.scrollTo(0, 0);

/* ==========================
   PAGE SYSTEM
========================== */

const pages = document.querySelectorAll("section.page");

function showPage(id){

    pages.forEach(page=>{

        page.classList.remove("active");

        page.classList.add("hidden");

    });

    const currentPage=document.getElementById(id);

    currentPage.classList.remove("hidden");

    currentPage.classList.add("active");

    window.scrollTo(0, 0);
document.documentElement.scrollTop = 0;
document.body.scrollTop = 0;

}

/* ==========================
LETTER PREVIEW
========================== */

openLetterBtn.addEventListener("click",()=>{

    showPage("letterPage");

});

/* ==========================
LETTER → GALLERY
========================== */

galleryBtn.addEventListener("click",()=>{

    showPage("galleryPage");

});

/* ==========================
GALLERY → TIMELINE
========================== */

timelineBtn.addEventListener("click",()=>{

    showPage("timelinePage");

});

/* ==========================
TIMELINE → CAKE
========================== */

cakeBtn.addEventListener("click",()=>{

    showPage("cakePage");

});

/* ==========================
CAKE → MUSIC
========================== */

musicPageBtn.addEventListener("click",()=>{

    showPage("musicPage");

});

/* ==========================
MUSIC → FINAL
========================== */

finalPageBtn.addEventListener("click",()=>{

    showPage("finalPage");

});

/* ==========================
FINAL → HOME
========================== */

homeBtn.addEventListener("click",()=>{

    showPage("welcomePage");

});

replayBtn.addEventListener("click",()=>{

    location.reload();

});

/* ==========================
WELCOME → GIFT
========================== */

openBtn.addEventListener("click",()=>{

    showPage("giftPage");

});


/* ==========================
PREMIUM MUSIC PLAYER
========================== */

let isPlaying=false;

musicBtn.addEventListener("click",()=>{

    if(isPlaying){

        music.pause();

        musicBtn.innerHTML="▶️ Play Music";

    }

    else{

        music.play();

        musicBtn.innerHTML="⏸ Pause Music";

    }

    isPlaying=!isPlaying;

});




/* ==========================
   PART 11
========================== */

const images = document.querySelectorAll(".gallery-grid img");

images.forEach((img)=>{

    img.addEventListener("click",()=>{

        img.classList.toggle("active");

    });

});

console.log("Part 11 Loaded Successfully ❤️");
/* ==========================
   PART 12 - HEARTS
========================== */

const hearts = document.createElement("div");

hearts.className = "hearts";

document.body.appendChild(hearts);

function createHeart(){

    const heart = document.createElement("div");

    heart.className = "heart";

    heart.innerHTML = "💙";

    heart.style.left = Math.random()*100 + "%";

    heart.style.fontSize = (18 + Math.random()*25) + "px";

    heart.style.animationDuration = (5 + Math.random()*5) + "s";

    hearts.appendChild(heart);

    setTimeout(()=>{

        heart.remove();

    },9000);

}

setInterval(createHeart,500);
/* ==========================
   PART 13
========================== */

function firework(x,y){

    const fw=document.createElement("div");

    fw.className="firework";

    fw.style.left=x+"px";

    fw.style.top=y+"px";

    document.body.appendChild(fw);

    setTimeout(()=>{

        fw.remove();

    },1000);

}

document.addEventListener("click",(e)=>{

    firework(e.clientX,e.clientY);

});

console.log("Part 13 Loaded ❤️");


/* ==========================
GIFT PAGE
========================== */

const giftBox = document.getElementById("giftBox");


function openGift(){

    giftBox.classList.add("gift-open");

    createConfetti();

    setTimeout(()=>{

        showPage("introVideoPage");

        document.getElementById("introVideo").play();

    },1200);

}

giftBox.addEventListener("click",openGift);

openGiftBtn.addEventListener("click",openGift);

/* ==========================
   PART 15
========================== */

const lightbox=document.createElement("div");

lightbox.className="lightbox";

lightbox.innerHTML="<img>";

document.body.appendChild(lightbox);

const lightboxImg=lightbox.querySelector("img");

document.querySelectorAll(".gallery-grid img").forEach(img=>{

    img.addEventListener("click",()=>{

        lightbox.classList.add("show");

        lightboxImg.src=img.src;

    });

});

lightbox.addEventListener("click",()=>{

    lightbox.classList.remove("show");

});
/* ==========================
   PART 16 - CONFETTI
========================== */

function createConfetti(){

    const colors = [
        "#38bdf8",
        "#0ea5e9",
        "#60a5fa",
        "#93c5fd",
        "#ffffff"
    ];

    for(let i=0;i<80;i++){

        const piece=document.createElement("div");

        piece.className="confetti";

        piece.style.left=Math.random()*100+"vw";

        piece.style.background=
        colors[Math.floor(Math.random()*colors.length)];

        piece.style.animationDuration=
        (3+Math.random()*2)+"s";

        piece.style.width=
        (6+Math.random()*8)+"px";

        piece.style.height=
        piece.style.width;

        document.body.appendChild(piece);

        setTimeout(()=>{

            piece.remove();

        },5000);

    }

}

/* Confetti when Surprise opens */

openBtn.addEventListener("click",createConfetti);

/* Confetti when Gift opens */

if(typeof giftBox!=="undefined"){

    giftBox.addEventListener("click",createConfetti);

}

const blowBtn = document.getElementById("blowBtn");
const flame = document.querySelector(".flame");

/* ==========================
BLOW CANDLE
========================== */

blowBtn.addEventListener("click",()=>{

    flame.style.display="none";

    createConfetti();

    blowBtn.innerHTML="🎉 Wish Completed";

});


/* ==========================
   PART 19
========================== */

document.addEventListener("mousemove",(e)=>{

    document.documentElement.style.setProperty(
        "--mouse-x",
        e.clientX + "px"
    );

    document.documentElement.style.setProperty(
        "--mouse-y",
        e.clientY + "px"
    );

});

console.log("✨ Premium Aurora Loaded");
/* ==========================
LOADER
========================== */

/* ==========================
LOADER
========================== */

window.addEventListener("load",()=>{

    const loader=document.getElementById("loader");

    const loadingText=document.getElementById("loadingText");

    let percent=0;

    const loading=setInterval(()=>{

        percent++;

        loadingText.innerHTML=percent+"%";

        if(percent>=100){

            clearInterval(loading);

            setTimeout(()=>{

                loader.style.opacity="0";

                setTimeout(()=>{

                    loader.style.display="none";

                },800);

            },300);

        }

    },20);

});

/* ==========================
INTRO VIDEO
========================== */

const introPlayer=document.getElementById("introVideo");

const skipVideoBtn=document.getElementById("skipVideoBtn");

introPlayer.addEventListener("ended",()=>{

    showPage("letterPreviewPage");

});

skipVideoBtn.addEventListener("click",()=>{

    introPlayer.pause();

    showPage("letterPreviewPage");

});




/* Birthday Greeting */



console.log("💙 Birthday Website V2 Loaded Successfully");

