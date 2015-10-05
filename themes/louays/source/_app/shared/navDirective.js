app.directive('navMenu', ['$location', function($location) {
	return function(scope, element, attrs) {
		var links = element.find('a'),
			currentLink,
			urlMap = {},
			activeClass = attrs.navMenu || 'active',
            sidebar = attrs.sidebar || 'sidebar';

		for (var i = links.length - 1; i >= 0; i--) {
			var link = angular.element(links[i]);
			var url = link.attr('href');

			if (url.substring(0,1) === '#') {
				urlMap[url.substring(1)] = link;
			} else {
				urlMap[url] = link;
			}
		}

		scope.$on('$routeChangeStart', function() {
			var path = urlMap[$location.path()];

			links.parent('li').removeClass(activeClass);
			
			if (path) {
				path.parent('li').addClass(activeClass);
                $(sidebar).prop('checked',false);
			}
		});
      
        var close = element.find('#aside-close');
        close.on('click', function(){
          $(sidebar).prop('checked',false);
        });
	};
}]);