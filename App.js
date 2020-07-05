
 //scroll spy
 $('body').scrollspy({target:'#navigation'});

 //smooth scrolling
 $("#navigation a").on('click', function (event) {
if (this.hash !== "") {
event.preventDefault();

const hash = this.hash;

$('html, body').animate({
  scrollTop: $(hash).offset().top
}, 700, function () {

  window.location.hash = hash;
});
}
});

//Hide navbar on scroll up and show on scroll down
 var prevScrollpos = window.pageYOffset;
 window.onscroll = function() {
 var currentScrollPos = window.pageYOffset;
   if (prevScrollpos > currentScrollPos) {
     document.querySelector('.navbar').style.top = "0";
   } else {
     document.querySelector('.navbar').style.top = "-100px";
   }
   prevScrollpos = currentScrollPos;
 }

