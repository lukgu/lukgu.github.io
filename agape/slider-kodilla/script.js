var carouselList = $("#carousel ul");
var sumMargin = 0;
var changeSlide = function() {
sumMargin =500;
console.log(sumMargin);
carouselList.animate({'marginLeft':-sumMargin}, 500, moveFirstSlide);
}
function moveFirstSlide(){
var firstItem = carouselList.find("li:first");
var lastItem = carouselList.find("li:last");
$(lastItem.after(firstItem));
$(carouselList.css({marginLeft:0}));

};

$(function(){
setInterval(changeSlide, 3000);


});






/*var carouselList = $("#carousel ul");
var changeSlide = carouselList.animate({'marginLeft':-500}, 500, moveFirstSlide);
function moveFirstSlide(){
	var firstItem = carouselList.find("li:first");
	var lastItem = carouselList.find("li:last");
	$(lastItem.after(firstItem));
	$(carouselList.css({marginLeft:0}));

};

$(function(){
	setInterval(changeSlide, 3000);
	

});


*/