PortfolioApp.directive('appInfo', function() { 
    return { 
      restrict: 'E', 
      scope: { 
        work: '=' 
      }, 
      templateUrl: './portfolio_ng/directives/portfolioInfo.html' 
    }; 
  });