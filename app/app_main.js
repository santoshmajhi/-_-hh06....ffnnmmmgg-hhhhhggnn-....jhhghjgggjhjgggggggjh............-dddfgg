// Define all your modules with no dependencies
angular.module('product', []);
angular.module('productCanvas', ['uiSlider']);
angular.module('plainText', []);
angular.module('textFX', []);
angular.module('cart', []);
angular.module('qrCode', []);
angular.module('curveText', []);
angular.module('nameNumber', []);
angular.module('textArt', []);
angular.module('design', []);
angular.module('handDrawing', []);
angular.module('webFonts', []);
angular.module('svgEditor', []);
angular.module('imageEdit',[]);
angular.module('quote', []);
angular.module('shape', []);
angular.module('myStuff', []);
angular.module('stanleygu.spinners', []);


// Lastly, define your "main" module and inject all other modules as dependencies
var AppRoot = angular.module('appMain',
  [
  	'ngSanitize',
  	'growlNotifications',
    'product',
    'ui.bootstrap',
	'productCanvas',
	'textFX',
	'cart',
	'gettext',
	'plainText',
	'qrCode',
	'curveText',
	'nameNumber',
	'textArt',
	'design',
	'handDrawing',
	'xeColorPicker',
	'FBAngular',
	'webFonts',
	'imageEdit',
	'svgEditor',
	'quote',
	'shape',
	'myStuff',
	'webStorageModule',
    'stanleygu.spinners'
  ]
);

AppRoot.run(function (gettextCatalog) {
    gettextCatalog.currentLanguage = 'en';
});

/* Directive for right click for context menu */
AppRoot.directive('ngRightClick', function($parse) {
    return function(scope, element, attrs) {
        var fn = $parse(attrs.ngRightClick);
        element.bind('contextmenu', function(event) {
            scope.$apply(function() {
                event.preventDefault();
                fn(scope, {$event:event});
            });
        });
    };
});