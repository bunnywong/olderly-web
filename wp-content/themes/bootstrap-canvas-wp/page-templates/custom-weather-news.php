<?php
/**
 * Template Name: Custom Weather & News
 */

	get_header(); ?>

    <div class="row">

      <div class="col-sm-12 blog-main">

        <?php get_template_part( 'loop', 'page' ); ?>
        <button class="js-voice-button voice-button"></button>

      </div><!-- /.blog-main -->

    </div><!-- /.row -->

	<?php get_footer(); ?>
