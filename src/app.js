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

      'intro/ts-ng2',
      'intro/ts-ng2-you',

      'intro/how-ts-hurdle',
      'intro/hands-on-hello-world',

      'features/overview',

      'features/types/title',
      'features/types/04-types',
      'features/types/why',
      'features/types/why-not',
      'features/types/why-2',
      'features/types/how',
      'features/types/05-type-annotations',
      'features/types/06-type-inferencing-and-any',
      'features/types/demo',

      'features/es6/title',
      'features/es6/08-var',
      'features/es6/09-let',
      'features/es6/10-const',
      'features/es6/11-this',
      'features/es6/12-arrow-function',
      'features/es6/13-for-in-loop',
      'features/es6/13-for-of-loop',
      'features/es6/18-rest',
      'features/es6/19-parameter-default-value',
      'features/es6/24-template-strings',

      'features/oop/title',
      'features/oop/04-interfaces',
      'features/oop/04-interfaces-methods',
      'features/oop/02-typing',
      'features/oop/03-structural-example',
      'features/oop/13-classes',
      'features/oop/14-classes-hands-on',
      'features/oop/15-constructor',
      'features/oop/16-constructor-hands-on',
      'features/oop/17-member-access',
      'features/oop/18-constructor-members',
      'features/oop/20-classes-interfaces',
      'features/oop/23-inheritance',
      'features/oop/25-abstract',

      'features/advanced/02-object-types',
      'features/advanced/03-union-types',

      'features/generics/title',
      'features/generics/why',
      'features/generics/16-generics',
      'features/generics/demo',

      'features/modules/title',
      'features/modules/why',
      'features/modules/es5',
      'features/modules/how',
      'features/modules/how-2',
      'features/modules/es6-modules-export-named',
      'features/modules/es6-modules-import',
      'features/modules/hands-on',
      'features/modules/es6-modules-hoisted-and-static',
      'features/modules/es6-modules-top-level',
      'features/modules/es6-modules-re-export',

      'features/decorators/title',
      'features/decorators/why',
      'features/decorators/how',
      'features/decorators/20-decorators',
      'features/decorators/demo',

      'features/strict-null/title',
      'features/strict-null/strict-null-1',
      'features/strict-null/strict-null-2',
      'features/strict-null/strict-null-3',
      'features/strict-null/strict-null-4',

      'features/async-await/title',
      'features/async-await/async-await-1',
      'features/async-await/async-await-2',

      'summary-title',
      'summary',
      'summary-ng',


      'end'
    ];

    slidesConfig.slideTemplatePrefix= '@@cacheBustingDir/slides/';
    slidesConfig.slideTemplateSuffix = '.html';

    slidesConfig.masters = {
      'regular': '@@cacheBustingDir/masters/regular.html',
      'section-title': '@@cacheBustingDir/masters/section-title.html',
      'hands-on': '@@cacheBustingDir/masters/hands-on.html',
      'es6-feature': '@@cacheBustingDir/masters/es6-feature.html',
      'ts-feature': '@@cacheBustingDir/masters/ts-feature.html'
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
