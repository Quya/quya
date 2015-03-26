
var AT_regist_login={
		regist: function(json){
			      
			return jQuery.sendSyn("userController","regist",json,window);
			
		}
};