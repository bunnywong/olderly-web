(function ($) {
  $(document).ready(function () {
    var speed = localStorage.getItem("voice-speed");
    var baseURL = location.protocol + '//' + location.host;

    if (speed == undefined)
      speed = 2;

    // Text Fit
    $(".text-fit").fitText(1.2, { minFontSize: '60px', maxFontSize: '200px' });

    $('body .js-page-home .menu').on('click', function() {
      var href = $(this).find('a').attr('href');
      window.location = href;
    });

    // --------------------------------------------------
    // =Weather
    $('body .js-page-weather').find('.hungryfeed_item_description').addClass('js-speak');

    // News hungryfeed_feed_description
    var selector = '.hungryfeed_feed_title,';
     selector    += '.hungryfeed_feed_description,';
     selector    += '.hungryfeed_item_description';
    $('body .js-page-news').find(selector).addClass('js-speak');

    // --------------------------------------------------
    // =Option
    $('body .js-page-option form')
      .each(function() {
        $('input.speed-' + speed).attr('checked', 'checked');
      })
      .find('input.js-speed').change(function() {
        var checked = $('input:checked').val();
        localStorage.setItem("voice-speed", checked);
        var $alert = $('.alert.alert-success');
        if( $alert.hasClass('hidden') ) {
          $alert.removeClass('hidden').text('Speaking speed updated').fadeIn('slow');
        } else {
          $alert.fadeOut().fadeIn();
        }
      });

    // --------------------------------------------------
    var speakIcon = '<img src="/wp-content/uploads/2015/10/icon-speaker.png" class="js-speak-article ico-speak-article" alt="click to speak this article" />';

    // =News
    // Speak for article
    if ($('.js-page-news').length) {
      // Prepare speak icon
      $('.hungryfeed_item_title').append(speakIcon);
      // SpeakArticle
      $('.js-speak-article').on('click', function() {
        var content = $(this).closest('.hungryfeed_item').text();
        var speedIndex = speed / 3;
        responsiveVoice.speak(content, "UK English Male", {rate: speedIndex});
      });
    }
    // =News
    // Speak for location
    if ($('.js-page-weather').length) {
      // Prepare speak icon
      $('table tr > td:first-child').prepend(speakIcon);
      // SpeakArticle
      $('.js-speak-article').on('click', function() {
        var content = $(this).parent().parent().text();
        var speedIndex = speed / 3;
        responsiveVoice.speak(content, "UK English Male", {rate: speedIndex});
      });
      // Remove last char in degree column
      $('table tr > td:last-child').each(function() {
        var origString = $(this).text();
        var trimmedString = origString.substring(0, origString.length-1);
        $(this).text(trimmedString);
      })
    }





    // --------------------------------------------------
    // =Text to speech
    $('.js-voice-button').on('click', function() {
      var content = $('.js-speak').text();
      console.log(content);

      var speedIndex = speed / 3;
      responsiveVoice.speak(content, "UK English Male", {rate: speedIndex});
    });

    // --------------------------------------------------
    // Add home redirect
    $('.blog-header')
    $('h1.blog-title')
      .prepend('<img src="' + baseURL + '/wp-content/uploads/2015/10/logo.jpg">')
      .on('click', function() {
        window.location = baseURL;
      });
  });
}) (jQuery);

function pageNews() {

}
