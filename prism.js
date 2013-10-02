/**
 * # Prism
 *
 * This directive will apply Prism highlighing to the element.  This must be applied on a ```<pre>`` tag that has a ```<code>``` block within it to work properly.
 *
 * ```html
 * <pre nag-prism><code>
 * //some code
 * </code></pre>
 * ```
 *
 * @todo: add proper classes to example above
 *
 * @module nag.prism
 * @ngdirective nagPrism
 *
 * @nghtmlattribute {null} nag-prism
 */
angular.module('nag.prism', [])
.directive('nagPrism', [
  '$timeout',
  function($timeout) {
    return {
      restrict: 'A',
      priority: 0,
      compile: function(tElement, tAttributes, transclude) {
        return {
          pre: function(scope, element, attributes) {},
          post: function(scope, element, attributes) {
            var $element = $(element);

            $timeout(function(){Prism.highlightElement($element.find('code')[0])}, 0);
          }
        }
      }
    }
  }
]);
