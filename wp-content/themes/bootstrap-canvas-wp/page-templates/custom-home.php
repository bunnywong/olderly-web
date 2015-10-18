<?php
/**
 * Template Name: Custom Home
 */

	get_header(); ?>

  <style>
    h1.blog-title,
    h2.blog-post-title,
    .blog-post-meta,
    .blog-footer {
      display: none;
    }
  </style>

  <div class="row home">
    <?php get_template_part( 'loop', 'page' ); ?>
    <button class="js-voice-button voice-button"></button>
  </div>

	<?php get_footer(); ?>

