<?php
/**
 * Template Name: Custom Option
 */

  get_header(); ?>

    <div class="row js-page-option">

      <div class="col-sm-12 blog-main">

      <h2 class="blog-post-title">Options</h2>
      <div class="cleanfix" style="margin-top: 50px;"></div>
      <form role="form">
        <div class="alert alert-info">
            <div class="form-inline">
                <label class="control-label">Select speaking speed</label>
                <label class="radio">
                    <input value="1" type="radio" name="speed" class="js-speed speed-1"> Slow
                </label>
                <label class="radio">
                    <input value="2" type="radio" name="speed" class="js-speed speed-2"> Normal
                </label>
                <label class="radio">
                    <input value="3" type="radio" name="speed" class="js-speed speed-3"> Fast
                </label>
            </div>
        </div>


      </form>


      <div class="alert alert-success hidden" role="alert"></div>



      </div><!-- /.blog-main -->

    </div><!-- /.row -->

  <?php get_footer(); ?>
