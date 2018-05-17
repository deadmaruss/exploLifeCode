var PortfolioApp = angular.module('PortfolioApp', [])
PortfolioApp.controller('PortfolioController', function($scope){
    $scope.works = 
    [
        {
            title: 'СОЗДАНИЕ ЛОГОТИПА FILEFISH',
            coverImage: 'portfolio_ng/FILEFISH-LOGO-1.png',
            cathegory: 'BRANDING'
        },
        {
            title: 'МОТИВАЦИОННОЕ ВИДЕО «РАБОТА КИЕВ»',
            coverImage: 'portfolio_ng/motivatsionnyj-rolik-rabota-kiev.png',
            cathegory: 'PRODUCTION'
        },
        {
            title: 'РАЗРАБОТКА ЛОГОТИПА ДЛЯ ELFANDA',
            coverImage: 'portfolio_ng/elfanda-logo-wordpress.jpg',
            cathegory: 'BRANDING'
        },
        {
            title: 'LANDING PAGE ДЛЯ LADY.EXPLOLIFE.COM',
            coverImage: 'portfolio_ng/lady-landing-page.jpg',
            cathegory: 'РАЗРАБОТКА САЙТОВ'
        },
        {
            title: 'ДИЗАЙН ЛОГОТИПА ELPARSO',
            coverImage: 'portfolio_ng/logo-elparso-for-site.png',
            cathegory: 'BRANDING'
        },
    ]
})

PortfolioApp.directive('portfolioItem', function() {
    return {
      templateUrl: './portfolio_ng/directives/portfolioInfo.html'
    };
  });