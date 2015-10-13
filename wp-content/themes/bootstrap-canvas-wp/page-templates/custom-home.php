<?php
/**
 * Template Name: Custom Home
 */

	get_header(); ?>
  <style>
    h1.blog-title,
    h2.blog-post-title,
    .blog-header,
    .blog-post-meta,
    .blog-footer {
      display: none;
    }
  </style>
      <div class="row home">
        <?php get_template_part( 'loop', 'page' ); ?>
        <button class="js-voice-button voice-button"></button>
      </div>
  <script>
    jQuery(document).ready(function($) {
      $('.js-voice-button').on('click', function() {
        var content = $('.content').text();
        responsiveVoice.speak(content, "UK English Male", {rate: 0.3});
      });

    });
  </script>


	<?php get_footer(); ?>

