(function ($) {
  $(document).ready(function () {
    // --------------------------------------------------
    // Variable init
    var baseURL = location.protocol + '//' + location.host;
    var speed = localStorage.getItem('voice-speed');
    var background = localStorage.getItem('background');
    var font = localStorage.getItem('font');

    if (speed == undefined) {
      speed = 2;
      localStorage.setItem('voice-speed', speed);
    }

    if (background == undefined) {
      background = 'f0f8ff';
      localStorage.setItem("background", background);
    }
    updateBG(background);

    if (font == undefined) {
      font = 0;
      localStorage.setItem('font', font);
    }
    updateFont(font, 'init');

    // --------------------------------------------------
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
    //  Guest Book

    if ($('.js-page-guest').length)  {
      $('.blog-sidebar, .blog-post-meta').hide();
    }

    // --------------------------------------------------
    //  Call

    if ($('.js-page-guest').length) {
      $('.blog-sidebar').hide();
    }
    if ($('.js-page-call').length) {
      $('table').filterTable();
      $('table tr > td:last-child').each(function() {
        var tel = $.trim($(this).text());
        $(this).wrapInner('<a href="tel:'+ tel +'"></a>');
      })
    }

    //--------------------------------------------------
    // =Option
    if ($('.js-page-option').length) {
      // Option:Speaking speed
      $('form.speaking-speed')
        .each(function() {
          $('input.speed-' + speed).attr('checked', 'checked');
        })
        .find('input.js-speed').change(function() {
          var checked = $('input.js-speed:checked').val();
          localStorage.setItem("voice-speed", checked);
          updateAlert();
        });
        // Option:Background
        $('form.background')
          .each(function() {
            $('input.js-background[data-bg="'+ background +'"]')
              .attr('checked', 'checked');
          })
          .find('input.js-background').change(function() {
            var background = $('input.js-background:checked').data('bg');
            localStorage.setItem("background", background);
            updateBG(background);
            updateAlert();
            });
        }
        // Option:Font
        console.log(font);
        $('form.font')
          .each(function() {
            $('input.js-font[data-font="'+ font +'"]')
              .attr('checked', 'checked');
          })
          .find('input.js-font').change(function() {
            var font = $('input.js-font:checked').data('font');
            updateFont(font, 'update');
            localStorage.setItem("font", font);
            updateAlert();
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
  // --------------------------------------------------
  // Functions

  function updateBG(background) {
    $('body').css('background-color', '#' + background);
  }
  function updateFont(font, status) {
    var isBig = localStorage.getItem('font');
    jQuery('*').each(function() {
      $(this).css('font-size', function() {
        if ($('.js-page-option').length && localStorage.getItem('font') == 2 && status =='update') {
          font = -2;
          console.log('hi');
        }
        return parseInt($(this).css('font-size')) + parseInt(font)  + 'px';
      });
    });
  }

  function updateAlert() {
    var $alert = $('.alert.alert-success');
    if( $alert.hasClass('hidden') ) {
      $alert.removeClass('hidden').text('Option updated').fadeIn('slow');
    } else {
      $alert.fadeOut().fadeIn();
    }
  }

}) (jQuery);


