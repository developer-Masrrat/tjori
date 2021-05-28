var t1 = new TimelineMax();

t1.fromTo('nav' , 1,{
    y: '-100px' ,
    opacity : 0,
    ease: Expo.easeOut 
},{
    y: 0 ,
    opacity : 1,
    ease: Expo.easeOut 

}).fromTo('#left',2,{
    width:0,
    ease: Expo.easeOut 
},{
    width:'35%',
    ease: Expo.easeOut 

}).fromTo('#overlay h1',1,{
    x: '-100px',
    opacity: 0,
    ease: Expo.easeOut 
},{
    x:0,
    opacity:1,
    ease: Expo.easeOut 
}).fromTo('#report',1,{
    x: '-100px',
    opacity: 0,
    ease: Expo.easeOut 
},{
    x:0,
    opacity:1,
    ease: Expo.easeOut
}).fromTo('#right',0.5,{
    width:0,
    opacity:0,
    ease: Expo.easeOut 
},{
    width:'65%',
    opacity:1,
    ease: Expo.easeOut  
},'-=2').fromTo('#rightContent',1,{
    y:'-100px',
    opacity:0,
    ease: Expo.easeOut 
},{
    y: 0,
    opacity:1,
    ease: Expo.easeOut 
}).fromTo('.story',1,{
    x: '-100px',
    opacity: 0,
    ease: Expo.easeOut 
},{
    x:0,
    opacity:1,
    ease: Expo.easeOut  
}).fromTo('#play',1,{
    y:'-100px',
    opacity:0,
    ease:Bounce.easeOut
},{
    y:0,
    opacity:1,
    ease:Bounce.easeOut 
})