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