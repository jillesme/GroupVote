function RouterConfig ($routeProvider) {
  $routeProvider
  .when('/', {
    templateUrl: 'views/home-view.html',
    controller: 'HomeCtrl',
    controllerAs: 'vm'
  })
  .when('/login', {
    templateUrl: 'views/login-view.html',
    controller: 'LoginCtrl',
    controllerAs: 'vm'
  })
  .when('/new', {
    templateUrl: 'views/post-view.html',
    controller: 'PostCtrl',
    controllerAs: 'vm'
  })
  .when('/:voteid', {
    templateUrl: 'views/login-view.html',
    controller: 'LoginCtrl',
    controllerAs: 'vm',
      resolve: {
        on: function ($route) {
          var id = $route.current.params.id;
          return true;
          // TODO: resolve on get post
        }
    }
  })
  .otherwise({
    redirectTo: '/'
  });
}

angular.module('app', ['ui.router'])
  .config(RouterConfig);

