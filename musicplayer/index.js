const btn = document.querySelector("#play")
const audio = document.querySelector("audio")
const pause = document.querySelector("#pause")


const tl = new gsap.timeline({paused: true,})

tl
.to("#para1", {
    x: -250,
    opacity: 0,
    duration: 1.2,
    ease: Expo.easeInOut
})

.to("#para2", {
    x: 250,
    opacity: 0,
    duration: 1.2,
    ease: Expo.easeInOut
}, '-=1.2')

.to("#navmain", {
    y: "-100",
    duration: 1.2,
    ease: Expo.easeInOut
},'-=.8')

.to("#buttons", {
    y: "100",
    duration: 1.2,
    ease: Expo.easeInOut
},'-=1.2')

.to("#violin img:nth-child(1)", {
    x: "160",
    opacity: 0,
    duration: 1.2,
    ease: Expo.easeInOut
},'-=1')

.to("#violin img:nth-child(3)", {
    x: "-160",
    opacity: 0,
    duration: 1.2,
    ease: Expo.easeInOut
},'-=1.2')

.to("#violin img:nth-child(2)", {
    y: "-70",
    duration: 1.4,
    ease: Expo.easeInOut
},'-=1')

.to("#para3, #stars", {
    y: "-70",
    duration: 1.4,
    ease: Expo.easeInOut
},'-=1.4')

.to("#navsecond", {
    y: "130",
    duration: 1.4,
    ease: Expo.easeInOut
})

.to("#musicplayer", {
    y: "-20vh",
    duration: 1.4,
    ease: Expo.easeInOut
}, '-=1.5')

.to( "#pause", {
    y: -20,
    opacity: 1,
    duration: 1.4,
    onComplete: function(){
        pause.style.opacity = "1"
    },
    ease: Expo.easeInOut
}, '-=.9')

btn.addEventListener("click", function(){
     tl.play();
     audio.play()
})

pause.addEventListener("click", function(){
    tl.reverse();
    audio.pause()
    audio.currentTime = 0;
})

audio.ontimeupdate = function(){
    var curtime = audio.currentTime;
    var duration = audio.duration;
    var prg = (curtime - .25)/duration*100 + "%";
    document.querySelector("#prg").style.width = prg;
}