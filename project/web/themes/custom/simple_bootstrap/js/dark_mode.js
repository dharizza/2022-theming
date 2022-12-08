(function ($, Drupal, once) {
    Drupal.behaviors.dark_mode = {
        attach: function (context, settings) {
            once('darkMode', 'html', context).forEach(function (element) {
                alert("dark mode");
            });
        }
    }
})(jQuery, Drupal, once);