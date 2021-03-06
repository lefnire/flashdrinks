'use strict';

// Declare app level module which depends on filters, and services
angular.module('app.config', [])

  // Your Firebase data URL goes here, no trailing slash
  .constant('FBDATA', 'https://flashdrink.firebaseio.com')
  .constant('FBSITE', 'https://flashdrinksapp.com')

  // See https://github.com/lefnire/server-misc
  //.constant('SERVER', 'https://flashdrinks-server.herokuapp.com')
  .constant('SERVER', 'http://127.0.0.1:3000')

  //See https://assembly.com/flashdrinks/metrics/snippet
  .constant('ASM_METRICS', '48247aa736075991c0a88e67e7fc9257175ebc77')