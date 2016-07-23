var carouselList = $("#carousel ul");
var changeSlide = carouselList.animate({'marginLeft':-500}, 500, moveFirstSlide);


$(function(){
	$('carouselList').setInterval(changeSlide,3000);
	

});


