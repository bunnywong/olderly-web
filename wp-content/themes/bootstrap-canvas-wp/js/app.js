(function ($) {
  $(document).ready(function () {

    // Text Fit
    $(".text-fit").fitText(1.2, { minFontSize: '60px', maxFontSize: '200px' });


    // Weather
    $('body .js-page-weather').find('.hungryfeed_item_description').addClass('js-speak');

    // Text to speech
    $('.js-voice-button').on('click', function() {
      var content = $('.js-speak').text();
      responsiveVoice.speak(content, "UK English Male", {rate: 0.3});
    });






  });
}) (jQuery);
