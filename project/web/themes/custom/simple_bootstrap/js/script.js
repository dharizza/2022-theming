(function ($, Drupal, once) {
    Drupal.behaviors.hello = {
        attach: function (context, settings) {
            once('hello', 'html', context).forEach(function (element) {
                alert("hello world");
            });
        }
    }
})(jQuery, Drupal, once);