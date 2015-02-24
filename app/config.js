AppRoot.constant('AppConfig',(function(){
	var _moduleviewpath = 'modules/[module_Name]/views/view.html',
		_moduleiconpath = 'modules/[module_Name]/assets/images/icon.svg',
		_loginCheckApi = 'http://magento-designer.riaxe.com/magento/ms1.php',
		_serviceApi = 'http://magento-designer.riaxe.com/tshirtws/api.php?',
		_productHistoryApp = 'http://magento-designer.riaxe.com/tshirtws/savedProductDetails.php?',
		//_serviceApi1 = "http://localhost/service/api.php?",
		_serviceApi1 = 'http://magento-designer.riaxe.com/tshirtws/api.php?',
		_refId = 0,
		_apiKey = 'A610^Gx{!=3l##i*905Q';

		_modulelist = [{name: 'product', side:"L"},
						{name: 'design', side:"L"},
						{name: 'imageEdit', side:"L"},
						{name: 'qrCode', side:"L"},
						{name: 'handDrawing', side:"L"},
						{name: 'myStuff', side:"L"},
						{name: 'svgEditor', side:"L"},
						{name: 'plainText', side:"R"},
						{name: 'webFonts', side:""},
						{name: 'curveText', side:"R"},
						{name: 'shape', side:"R"},
						{name: 'textFX', side:"R"},
						{name: 'textArt', side:"R"},
						{name: 'nameNumber', side:"R"},
						{name: 'quote', side:"R"}],
		_history_length = 5;
	return{
	  MAIN_MODULE_VIEW: _moduleviewpath,
	  MAIN_MODULE_ICON: _moduleiconpath,
	  MAIN_MODULE_MODULELIST: _modulelist,
	  MAIN_MODULE_LANGUAGE: 'en',
	  IMAGE_EDIT_SERVICE_API: _serviceApi,
	  SVG_EDIT_SERVICE_API: _serviceApi1,
	  IMAGE_EDIT_SERVICE_CHECK_LOGIN: _loginCheckApi,
	  SAVED_PRODUCT_HISTORY: _productHistoryApp,
	  MAIN_APP_REFID: _refId,
	  MAIN_APP_APIKEY: _apiKey,
	  HISTORY_LENGTH: _history_length
	}
})());