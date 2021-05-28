var tl = new TimelineMax();

tl.fromTo('#elem', 2, {
    y: 100,
    opacity: 0,
    ease: Expo.easeInOut
}, {
    y: 0,
    opacity: 1,
    ease: Expo.easeInOut
}).fromTo('#elem p', 1,{
    opacity:0,
    y: 30,
    ease:  Power2.easeInOut
}, {
    opacity: 1,
    y: 0,
    ease:  Power2.easeInOut
}).fromTo('#khamba', 1.5, {
    x: 50,
    opacity: 0,
    ease:  Expo.easeInOut    
}, {
    x: 0,
    opacity: 1,
    ease:  Expo.easeInOut    
}, '-=.5')
.fromTo('#dadaji', 1.5, {
    x: 50,
    opacity: 0,
    ease:  Expo.easeInOut    
}, {
    x: 0,
    opacity: 1,
    ease:  Expo.easeInOut    
}, '-=1.2')





