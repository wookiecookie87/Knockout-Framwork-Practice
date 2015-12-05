var Cat = function(){
	var self = this;

	this.catImg = ko.observable("catClick.jpg");
	this.catName = ko.observable("Kat");
	this.clickCount = ko.observable(0);

	this.level = ko.computed(function(){
		var level = "";
		var count = self.clickCount();

		if(count>20){
			level = "Tiger";
		}else if(count>15){
			level = "Cougar";
		}else if(count > 10){
			level = "Leopard";
		}else if(count > 5){
			level = "kitty";
		}

		return level;
	});

}
var ViewModel = function(){
	this.currentCat = ko.observable(new Cat());

	this.catClicked = function(){
		this.currentCat().clickCount(this.currentCat().clickCount()+1);
	};

	
}

ko.applyBindings(new ViewModel());