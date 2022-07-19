<?php
namespace Shortcode\Controller\ShowPost;

use \Shortcode\Data\Model\ShortcodeQuery as ShortcodeQuery;
use \Shortcode\Data\GenerateShortcode\GenerateShortcodeQuery as GenerateShortcodeQuery;
use \Shortcode\View\LayoutView as LayoutView;

class ShowPostShortcodeController {


    function showPostShortcodeCallback( $attr ) {


        // var_dump($attr);
        $shortcodeQueryInstance = new GenerateShortcodeQuery();


        $result = $shortcodeQueryInstance -> generateShortcodeQuerywithoutCat( $attr, 1);

        $max_page_number = $result -> max_num_pages;

        $layout = esc_attr($attr[ 'layout' ]);

        $passQueryInstance = $shortcodeQueryInstance -> getQueryInstance();

        $queryArray = $shortcodeQueryInstance -> getQueryArray();
        $queryArray += array('maxPageNumber' => $max_page_number,
                            );
        if($attr['category_filter'] == "yes" ) {
          $queryArray += array(
            'category_filter' => esc_attr($attr['category_filter']),
            'taxonomy' => esc_attr($attr['taxonomy']),
          );
        }

        $this -> generateHTMlWithLayout( $result, $layout, $passQueryInstance, $queryArray);


    }

    function generateHTMLWithLayout( $data, $layout, $queryInstance, $queryArray ) {
        // $json_object = json_encode($data -> query) ;
        // echo $json_object;
        // var_dump($queryArray["post_type"]);

        $jsonQueryArray = json_encode($queryArray);
         var_dump($jsonQueryArray);

        $layoutView = new LayoutView($layout);
        if ($data->have_posts()):
          echo "<input type='hidden' id='myField' value= $jsonQueryArray />";
          echo "<div class = show-post-container >";
          echo "<div class = show-post-inner >";

          if( $queryInstance -> getCategoryFilter() == 'yes') {
              echo "<div class='filter-container'>";
              echo "<div class='filter-section category-filter'>";
              echo "<ul class='filter-list'>";
              echo "<div>Categories</div>";
              $terms = $queryInstance -> getTerms();
              // var_dump($terms);
              if( !empty($terms) ) {
                foreach( $terms as $category ) {
                  $category_data = array(
                    'category_slug' => $category -> slug,
                    'category_name' => $category -> name,
                  );
                  $layoutView -> getCategoryListTemplate( $category_data );
                }
            }
            echo "</ul>";//end of filter-list
            echo "</div>";//end of filter section
            echo "</div>";//end of fiter-container
          }
          echo "<div class='content-outer'>";
          echo "<div class= 'show-post-content $layout'>";

            while($data->have_posts()): $data->the_post();
              $layoutView->getTemplateView();
            endwhile;
        endif;
        echo "</div>";//end of content
        $layoutView -> getButtonTemplate();
        echo "</div>";//End of show post inner
        echo "</div>";//End of show post container
    
      }



}