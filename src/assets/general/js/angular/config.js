
if (typeof jumplink === 'undefined') {
  var jumplink = {};
}

jumplink.cms = angular.module('jumplink.cms', [
  'ngRoute'
  , 'ngAnimate'
  , 'ngSanitize'
  , 'ngTouch'
  , 'mgcrea.ngStrap'
  , 'ngSails'
  // , 'colorpicker.module'
  , 'angular-underscore'
  , 'toggle-switch'
  , 'lrNotifier'
  // , 'snap'
  , 'angular-carousel'
  , 'contenteditable'
  , 'pascalprecht.translate'
  , 'Decorators' // WORKAROUND see workaround.js
  , 'angularSmoothscroll'
  //, 'btford.socket-io'
 // , 'jumplink.cms.SocketController' 
]);

jumplink.cms.run(function ($rootScope, ConfigService) {
    ConfigService.setConfigHttp();
});

jumplink.cms.config(function ($translateProvider) {
  $translateProvider.useUrlLoader('/translation');
  $translateProvider.preferredLanguage('en');
});