(function ($, Drupal, once) {
    Drupal.behaviors.dark_mode = {
        attach: function (context, settings) {
            once('darkMode', 'html', context).forEach(function (element) {
                $('.dark-mode').click(function() {
                    $('body').toggleClass('dark');

                    const body_element = document.querySelector('body');
                    const button = document.querySelector('.dark-mode');
                    if (body_element.classList.contains('dark')) {
                        button.innerHTML = '<i class="fa-solid fa-sun me-1"></i>' + drupalSettings.simple_bootstrap.dark_mode.text_when_dark;
                    }
                    else {
                        button.innerHTML = '<i class="fa-solid fa-moon me-1"></i>' + drupalSettings.simple_bootstrap.dark_mode.text_when_light;
                    }
                });
            });
        }
    }
})(jQuery, Drupal, once);
