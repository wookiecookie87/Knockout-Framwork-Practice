var ViewModel = function(){
	var self = this

	self.catImg = ko.observable("catClick.jpg");
	self.catName = ko.observable("Kat");
	self.clickCount = ko.observable(0);

	self.level = ko.computed(function(){
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

	self.catClicked = function(){
		self.clickCount(this.clickCount()+1);
	};

	
}

ko.applyBindings(new ViewModel());