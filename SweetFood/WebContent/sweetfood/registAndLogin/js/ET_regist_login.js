
var ET_regist_login={
		init : function() {
			ET_regist_login.register();
		},
		register : function() {
			
			$("#loginDlg").bind("click",BS_regist_login.showLoginDlg);
			$("#Cregist").bind("click",BS_regist_login.regist2);
			$("#Bregist").bind("click",BS_regist_login.regist1);
			$("#businessRegist").bind("click",BS_regist_login.showBusinessRegst);
			$("#customerRegist").bind("click",BS_regist_login.showCustomerRegist);
			} 
		
};