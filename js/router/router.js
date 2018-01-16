
(function() {
  // This is the most basic solution
  // More optimal solution would utilize a prefix-tree to store routes
  function Router() {
    this._notFoundHandler = null;
    this._routes = [];
  }

  Router.prototype.notFound = function(handler) {
    this._notFoundHandler = handler;
  };

  Router.prototype.route = function(name, route, handler) {
    // If the method is called with two parameters (without name), reassign parameters
    if (!handler) {
      handler = route;
      route = name;
      name = null;
    }

    // Use for loop instead of .forEach to "return" early if route is already defined
    for (var i = 0; i < this._routes.length; i++) {
      if (this._routes[i].route == route) {
        // Add new handler to the list of already registered route
        this._routes[i].handlers.push(handler);
        return;
      }
    }

    // Define the new route if it wasn't found
    var newRoute = {
      name: name,
      route: route,
      handlers: [handler],
    };

    // Generate a regular expression to match against, by replacing parameters with regexp parts
    var routeRegexpString = route.replace(/:[\w]+/, '([\\w\\-]+)');
    newRoute.regexp = new RegExp('^' + routeRegexpString + '$', 'i');

    this._routes.push(newRoute);
  };

  Router.prototype.reverse = function(name, params) {
    if (!params) {
      params = {};
    }

    for (var i = 0; i < this._routes.length; i++) {
      if (this._routes[i].name != name) {
        continue;
      }

      // Find all parameters in route and replace them with given values
      var constructedPath = this._routes[i].route.replace(/:[\w]+/, function(parameter) {
        // Replace with a value from passed object or an empty string if no value is given
        return params[parameter.slice(1)] || '';
      });

      return constructedPath;
    }

    // Return an empty string if route with given name wasn't found
    return '';
  };

  Router.prototype.toPath = function(path) {
    for (var i = 0; i < this._routes.length; i++) {
      // Use generated regexp to test the path and extract parameter values from it
      var matchedRoute = path.match(this._routes[i].regexp);

      // If the path doesn't match route regexp, skip it
      if (!matchedRoute) {
        continue;
      }

      // Update the location
      window.location.hash = '#!' + path;

      // Remove the first value of array, which holds the whole regexp match
      matchedRoute.shift();
      // Call the registered handlers with parameters
      this._routes[i].handlers.forEach(function(handler) {
        handler.apply(null, matchedRoute);
      });

      // Return early after correct route is found
      return;
    }

    if (this._notFoundHandler) {
      this._notFoundHandler();
    }
  };

  Router.prototype.toRoute = function(name, params) {
    this.toPath(this.reverse(name, params));
  }

  window.Router = Router;
})();
