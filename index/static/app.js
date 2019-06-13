 $('.navbar1 a').on('click', function (e) {
   if (this.hash !== '') {
     e.preventDefault();

     const hash = this.hash;

     $('html, body').animate({
         scrollTop: $(hash).offset().top
       },1000);
   }
 });

 $('.button2').on('click', function (e) {
 console.log(this.hash)
   if (this.hash !== '') {
     e.preventDefault();

     const hash = this.hash;

     $('html, body').animate({
         scrollTop: $(hash).offset().top
       },1000);
   }
 });

 $('.button1').on('click', function (e) {
 console.log(this.hash)
   if (this.hash !== '') {
     e.preventDefault();

     const hash = this.hash;

     $('html, body').animate({
         scrollTop: $(hash).offset().top
       },1000);
   }
 });


 var controller = new ScrollMagic.Controller();
 var animateIn = new TimelineMax();

 animateIn
 .fromTo(".overlay", 3, {skewX:30, scale:1.5}, {skewX:0, xPercent:100, transformOrigin: "0% 100%", ease: Power4.easeOut})

 var scene = new ScrollMagic.Scene({
    triggerElement: ".box1"
 })

 .setTween(animateIn).addTo(controller)