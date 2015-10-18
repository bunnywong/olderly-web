<?php
/**
 * Template Name: Custom Option
 */

  get_header(); ?>

    <div class="row js-page-option">

      <div class="col-sm-12 blog-main">

      <h3>Options</h3>
      <form role="form">
        <div class="alert alert-info">
            <div class="form-inline">
                <label class="control-label">Select speaking speed</label>
                <label class="radio">
                    <input value="1" type="radio" name="speed" class="js-speed speed-1"> slow
                </label>
                <label class="radio">
                    <input value="2" type="radio" name="speed" class="js-speed speed-2"> normal
                </label>
                <label class="radio">
                    <input value="3" type="radio" name="speed" class="js-speed speed-3"> fast
                </label>
            </div>
        </div>


      </form>


      <div class="alert alert-success hidden" role="alert"></div>



      </div><!-- /.blog-main -->

    </div><!-- /.row -->

  <?php get_footer(); ?>
