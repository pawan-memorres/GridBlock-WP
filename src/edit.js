/**
 * Retrieves the translation of text.
 *
 * @see https://developer.wordpress.org/block-editor/packages/packages-i18n/
 */
import { __ } from '@wordpress/i18n';

/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/packages/packages-block-editor/#useBlockProps
 */
import { useBlockProps } from '@wordpress/block-editor';

import {InspectorControls} from '@wordpress/block-editor';
import {Panel, PanelBody, Dropdown, Button, SelectControl} from '@wordpress/components';
import PostTypeSelect from './PostTypeSelect.js';
import NumberOfPosts from './NumberOfPosts.js';
import PostLayout from './PostLayout.js';
import PostCategory from './PostCategory.js';
import SelectTaxonomy from './SelectTaxonomy.js';
import CategoryFilter from './CategoryFilter.js';
import SortSelect from './SortSelect.js';


// const { RichText, MediaUpload, PlainText } = wp.editor;

/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * Those files can contain any CSS code that gets applied to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */
// import './editor.scss';

/**
 * The edit function describes the structure of your block in the context of the
 * editor. This represents what the editor will render when the block is used.
 *
 * @see https://developer.wordpress.org/block-editor/developers/block-api/block-edit-save/#edit
 *
 * @return {WPElement} Element to render.
 */
export default function Edit( props ) {

  const blockProps = useBlockProps();
	return (
		<>
    
    <InspectorControls>
      <Panel>
        
        <PostTypeSelect {...props} />
        <NumberOfPosts {...props} />
        <PostLayout {...props} />
        <PostCategory {...props}/>
        <SelectTaxonomy {...props}/>
        <CategoryFilter {...props}/>
        <SortSelect {...props}/>
      
      </Panel>
    </InspectorControls>
    <div className="WPGL__Container" { ...blockProps }>
      <h1 className="">WPGL POSTS</h1>
      <h3 className="">Post Type: {props.attributes.post_type}      </h3>
      <h3 className="">Number of Post Per Page:{props.attributes.posts_per_page} </h3>
      <h3 className="">Post Layout:  {props.attributes.layout}    </h3>
      <h3 className="">Category: {props.attributes.category_name}      </h3>
      <h3 className="">Taxomony: {props.attributes.taxonomy}      </h3>
      <h3 className="">Show Filter: {props.attributes.category_filter}      </h3>
      <h3 className="">Order: {props.attributes.order}      </h3>
    </div>
    </>
	);
}
