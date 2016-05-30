(function() {
  'use strict';

  /* @ngInject */
  function configureSlides(slidesConfig) {
    slidesConfig.slides = [
      'title',

      'intro/about-me',
      'intro/about-us',

      'intro/why-ts',
      'intro/why-ts-errors',
      'intro/why-ts-growing',
      'intro/why-ts-next-today',

      'intro/how-ts',
      'intro/how-ts-superset',
      'intro/how-ts-es6',
      'intro/how-ts-hurdle',
      'intro/es-to-ts',
      'intro/es-to-ts-error',

      'intro/ts-ng2',
      'intro/ts-ng2-you',

      'features/overview',

      'features/types/title',
      'features/types/why',
      'features/types/why-not',
      'features/types/why-2',
      'features/types/how',
      'features/types/how-structural',
      'features/types/demo',

      'features/generics/title',
      'features/generics/why',
      'features/generics/how',
      'features/generics/demo',

      'features/modules/title',
      'features/modules/why',
      'features/modules/how',
      'features/modules/how-2',
      'features/modules/demo',

      'features/tooling/title',
      'features/tooling/why',
      'features/tooling/how',
      'features/tooling/how-tsconfig',

      'features/decorators/title',
      'features/decorators/why',
      'features/decorators/how',
      'features/decorators/demo',

      'summary-title',
      'summary',


      'end'
    ];

    slidesConfig.slideTemplatePrefix= '@@cacheBustingDir/slides/';
    slidesConfig.slideTemplateSuffix = '.html';

    slidesConfig.masters = {
      'regular': '@@cacheBustingDir/masters/regular.html',
      'section-title': '@@cacheBustingDir/masters/section-title.html'
    };
  }

  var module = angular.module('app', [
    'app.templates',
    'w11k.slides',
    'w11k.slides.template',
    'ngSanitize',
    'ui.bootstrap'
  ]);

  // set presentation mode on startup
  module.run(function (SlidesService) {
    SlidesService.setMode('screen');
  });

  module.config (configureSlides);
}());
