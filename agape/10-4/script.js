function Telefon(marka, cena, kolor) {
	this.marka = marka; 
	this.cena = cena;
	this.kolor = kolor;
}
Telefon.prototype.printInfo = function() {
		console.log('Marka telefonu to ' + this.marka + ', kolor to ' + this.kolor + ', a cena to ' + this.cena + '.');
}
var iPhone6S = new Telefon('Apple', 'srebrny', 2250);
var galaxy = new Telefon('Samsung', 'czarny', 3150);
var onePlus = new Telefon('One', 'biały', 1450);


iPhone6S.printInfo();
galaxy.printInfo();
onePlus.printInfo();