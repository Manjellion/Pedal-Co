// Const vlaue allows us too asign objects with properties
// document.querySelector identifies and locates the variable or objects its being assigned too
const backgroundimg = document.querySelector('.backgroundimg');
const slider = document.querySelector('.slider');
const logo  = document.querySelector('.h2');
const headline = document.querySelector('.headline');
const bgimg = document.querySelector('.bg-img');
const contactimg = document.querySelector('.contactimg');
const container = document.querySelector('container');

//TimeLineMax is a tool from the TweenBix libary and is allowing us too use its tools
const tl = new TimelineMax();

// Assigned to const backgroundimg
tl.fromTo(
    backgroundimg,
    1,  //Transition time
    {height: '0%'}, // No image Height
    {height: '80%', // Image is then going from default size to then 80% causing the animation
    ease: Power2.easeInOut } // Libary tool that causes the transition to ease in at Power 2
)
.fromTo(
    backgroundimg,
    1.2,
    {width: '100%'}, // Image starts at default or set size
    {width: '80%', // Image width on the x axis goes from 100% too 80% making the animation
    ease: Power2.easeInOut} // Libary tool that causes the transition to ease in at Power 2
)
.fromTo(
    slider, // Asigned too const slider 
    1, // Transition time 1
    {x:'-100%'}, /* The slider animation to occur it needs too start from one point too another
                    for the animation too occur, the tool is pre set to be from right, so -100% is 
                    the left and 0 is right, so its going from -100% which is left.
                */
    {x:'0%', // The slider finsihed to the right at 0%
    ease: Power2.easeInOut}, // Libary tool that causes the transition to ease in at Power 2
    '-=1' // Dealy timmer, we dont want delay so we place a negative value of the transtion time
)
.fromTo(
    logo,
    0.5,
    {opacity: 0, x:30}, // Hides our Logo in the beginning
    {opacity: 1, x:0},  // And trnasitons in 
    '-=0.5'
)
.fromTo(
    headline,
    0.5,
    {opacity: 0, x:30},// Hides our headline in the beginning
    {opacity: 1, x:0}, // And trnasitons in 
    '-=0.5'
)
.fromTo(
    bgimg,
    0.5,
    {opacity: 0, x:30},// Hides our bgimg in the beginning
    {opacity: 1, x:0},// And trnasitons in 
    '-=0.5'
)
.fromTo(
    contactimg,
    0.5,
    {opacity: 0, x:30},// Hides our contactimg in the beginning
    {opacity: 1, x:0},// And trnasitons in 
    '-=0.5'
)