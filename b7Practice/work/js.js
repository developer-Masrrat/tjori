var a= new TimelineMax();

 a.fromTo('#loading img',2,{
   y: '-100px',
    opacity:0,
    ease: Expo.easeOut
},{
   y:'0px', 
   opacity:1,
    ease: Expo.easeOut 
}).fromTo('#one',2,{
   y:'-100px',
   opacity:0,
    ease: Expo.easeOut
},{
   y:'0px', 
   opacity:1,
    ease: Expo.easeOut 
}).fromTo('#two',2,{
    y:'-100px',
    opacity:0,
    ease: Expo.easeOut
},{
    y:'0px',
    opacity:1,
    ease: Expo.easeOut 
},'-=1')