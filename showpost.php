<?php
/**
 * Plugin Name: Custom Grid Block
 * Version: 0.1.0
 * Author: Memoress Digital Pvt. Ltd.
 * Author URI: https://memorres.com
 * Plugin Name:       Showpost
 * Description:       This blocks add an elegant way to show post types in grids, sliders, masonry and much more.
 * Requires at least: 5.9
 * Requires PHP:      7.0
 * License:           GPL-2.0-or-later
 * License URI:       https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain:       showpost
 *
 * @package           create-block
 */

 

/**
 * Registers the block using the metadata loaded from the `block.json` file.
 * Behind the scenes, it registers also all assets so they can be enqueued
 * through the block editor in the corresponding context.
 *
 * @see https://developer.wordpress.org/reference/functions/register_block_type/
 */
if(file_exists( dirname(__FILE__) . '/inc/ShowPostWp/index.php')) {
	require_once(dirname(__FILE__) . '/inc/ShowPostWp/index.php');
}
use \Shortcode\Controller\ShowPost\ShowPostShortcodeController as ShowPostShortcodeController;


class GridBlock {
	function __construct() {
	  add_action('init', array($this, 'onInit'));
	}
  
	function onInit() {
		wp_enqueue_script( 'custom-script', plugin_dir_url(__FILE__) . '/inc/ShowPostWp/js/load_more.js', array('jquery'), time(), true );
    wp_enqueue_script( 'images-loaded', plugin_dir_url(__FILE__) . '/inc/ShowPostWp/js/imagesloaded.pkgd.min.js', array(), time(), true);
    wp_enqueue_script( 'masnory-grid', plugin_dir_url(__FILE__) . '/inc/ShowPostWp/js/masonry.pkgd.min.js', array('images-loaded'), time(), true);
        $script_data_array = array(
        	  	'ajaxurl' => admin_url( 'admin-ajax.php' ),
        	 	'security' => wp_create_nonce( 'load_more_posts' ),
        	   );
           
    wp_localize_script( 'custom-script', 'products', $script_data_array );
           
    wp_enqueue_style( 'load_more_style', plugin_dir_url(__FILE__) . '/inc/ShowPostWp/css/show-post.css', false, rand(111, 9999));

		register_block_type(  __DIR__ . '/build', array(
			'render_callback' => array($this, 'renderCallback'),
		)
		);
	}
  
	
  
	function renderCallback($attributes) {
		ob_start();
		//var_dump($attributes)
		$gridInstance = new ShowPostShortcodeController();
		$gridInstance->showPostShortcodeCallback($attributes);
		return ob_get_clean();
	}
  
  }


  $GridBlock = new GridBlock();