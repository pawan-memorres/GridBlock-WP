/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/CategoryFilter.js":
/*!*******************************!*\
  !*** ./src/CategoryFilter.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__);



class CategoryFilter extends React.Component {
  componentDidMount() {}

  render() {
    const {
      category_filter
    } = this.props.attributes;

    const setCategoryFilter = category_filter => {
      this.props.setAttributes({
        category_filter
      });
    };

    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.PanelBody, {
      title: "Category Filter"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.SelectControl, {
      label: "Select Category Filter",
      value: category_filter,
      options: [{
        label: 'Yes',
        value: 'yes'
      }, {
        label: 'No',
        value: 'no'
      }],
      onChange: setCategoryFilter,
      __nextHasNoMarginBottom: true
    }));
  }

}

;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CategoryFilter);

/***/ }),

/***/ "./src/NumberOfPosts.js":
/*!******************************!*\
  !*** ./src/NumberOfPosts.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__);



class NumberOfPosts extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {
      posts_per_page
    } = this.props.attributes;

    const setNumberOfPosts = posts_per_page => {
      this.props.setAttributes({
        posts_per_page
      });
    };

    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.PanelBody, {
      title: "Number of posts"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.__experimentalNumberControl, {
      isShiftStepEnabled: true,
      onChange: setNumberOfPosts,
      shiftStep: 1,
      value: posts_per_page
    })));
  }

}

;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (NumberOfPosts);

/***/ }),

/***/ "./src/PostCategory.js":
/*!*****************************!*\
  !*** ./src/PostCategory.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__);



class PostCategory extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      categorySelection: [{
        label: 'Select Category',
        value: 0
      }]
    };
  }

  componentDidMount() {
    fetch("/wp-json/wp/v2/categories").then(res => res.json()).then(json => {
      const categorySelection = Object.keys(json).map(key => ({
        label: json[key].name,
        value: json[key].slug
      }));
      this.setState({
        categorySelection
      });
    });
  }

  render() {
    const {
      categorySelection
    } = this.state;
    const {
      category_name
    } = this.props.attributes;

    const setCategory = category_name => {
      this.props.setAttributes({
        category_name
      });
    };

    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.PanelBody, {
      title: "Category"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.SelectControl, {
      label: "Select Category",
      value: category_name,
      options: categorySelection,
      onChange: setCategory,
      __nextHasNoMarginBottom: true
    }));
  }

}

;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PostCategory);

/***/ }),

/***/ "./src/PostLayout.js":
/*!***************************!*\
  !*** ./src/PostLayout.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__);



class PostLayout extends React.Component {
  // constructor(props){
  //     super(props);
  //     this.state = {
  //         postLayoutSelection : "Single",
  //       }
  // };
  componentDidMount() {}

  render() {
    //const { postLayoutSelection } = this.state;
    const {
      layout
    } = this.props.attributes;

    const setPostLayout = layout => {
      this.props.setAttributes({
        layout
      });
    };

    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.PanelBody, {
      title: "Post Layout"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.SelectControl, {
      label: "Select Post Layout",
      value: layout,
      options: [{
        label: 'Single',
        value: 'Single'
      }, {
        label: '2-Grid',
        value: 'two-post-layout'
      }, {
        label: '3-Grid',
        value: 'three-post-layout'
      }, {
        label: 'Masonry Grid',
        value: 'masonry-layout'
      }],
      onChange: setPostLayout,
      __nextHasNoMarginBottom: true
    }));
  }

}

;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PostLayout);

/***/ }),

/***/ "./src/PostTypeSelect.js":
/*!*******************************!*\
  !*** ./src/PostTypeSelect.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__);



class PostTypeSelect extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      postSelection: [{
        label: 'Select post',
        value: 0
      }],
      value: 0
    };
  }

  componentDidMount() {
    fetch("/wp-json/wp/v2/types").then(res => res.json()).then(json => {
      const postSelection = Object.keys(json).map(key => ({
        label: json[key].name,
        value: json[key].slug
      })); // console.log(postSelection);

      this.setState({
        postSelection
      });
    });
  }

  render() {
    const {
      postSelection,
      value
    } = this.state;
    const {
      post_type
    } = this.props.attributes;

    const setPostType = post_type => {
      this.props.setAttributes({
        post_type
      });
    };

    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.PanelBody, {
      title: "Post Type"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.SelectControl, {
      label: "Select Post Type",
      value: post_type,
      options: postSelection,
      onChange: setPostType,
      __nextHasNoMarginBottom: true
    }));
  }

}

;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PostTypeSelect);

/***/ }),

/***/ "./src/SelectTaxonomy.js":
/*!*******************************!*\
  !*** ./src/SelectTaxonomy.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__);



class SelectTaxonomy extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      taxonomySelection: [{
        label: 'Select Category',
        value: 0
      }]
    };
  }

  componentDidMount() {
    fetch("http://localhost:83/wp-json/wp/v2/taxonomies").then(res => res.json()).then(json => {
      const taxonomySelection = Object.keys(json).map(key => ({
        label: json[key].name,
        value: json[key].slug
      }));
      console.log(taxonomySelection);
      this.setState({
        taxonomySelection
      });
    });
  }

  render() {
    const {
      taxonomySelection
    } = this.state;
    const {
      taxonomy
    } = this.props.attributes;

    const setTaxonomy = taxonomy => {
      this.props.setAttributes({
        taxonomy
      });
    };

    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.PanelBody, {
      title: "Taxomony"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.SelectControl, {
      label: "Select Taxomony",
      value: taxonomy,
      options: taxonomySelection,
      onChange: setTaxonomy,
      __nextHasNoMarginBottom: true
    }));
  }

}

;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SelectTaxonomy);

/***/ }),

/***/ "./src/SortSelect.js":
/*!***************************!*\
  !*** ./src/SortSelect.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__);



class SortSelect extends React.Component {
  componentDidMount() {}

  render() {
    const {
      order
    } = this.props.attributes;

    const setSortSelect = order => {
      this.props.setAttributes({
        order
      });
    };

    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.PanelBody, {
      title: "Post Order"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.SelectControl, {
      label: "Select Order",
      value: order,
      options: [{
        label: 'Ascending',
        value: 'asc'
      }, {
        label: 'Descending',
        value: 'desc'
      }],
      onChange: setSortSelect,
      __nextHasNoMarginBottom: true
    }));
  }

}

;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SortSelect);

/***/ }),

/***/ "./src/edit.js":
/*!*********************!*\
  !*** ./src/edit.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Edit)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _PostTypeSelect_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./PostTypeSelect.js */ "./src/PostTypeSelect.js");
/* harmony import */ var _NumberOfPosts_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./NumberOfPosts.js */ "./src/NumberOfPosts.js");
/* harmony import */ var _PostLayout_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./PostLayout.js */ "./src/PostLayout.js");
/* harmony import */ var _PostCategory_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./PostCategory.js */ "./src/PostCategory.js");
/* harmony import */ var _SelectTaxonomy_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./SelectTaxonomy.js */ "./src/SelectTaxonomy.js");
/* harmony import */ var _CategoryFilter_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./CategoryFilter.js */ "./src/CategoryFilter.js");
/* harmony import */ var _SortSelect_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./SortSelect.js */ "./src/SortSelect.js");



/**
 * Retrieves the translation of text.
 *
 * @see https://developer.wordpress.org/block-editor/packages/packages-i18n/
 */

/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/packages/packages-block-editor/#useBlockProps
 */










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

function Edit(props) {
  const blockProps = (0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.useBlockProps)();
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.InspectorControls, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.Panel, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_PostTypeSelect_js__WEBPACK_IMPORTED_MODULE_5__["default"], props), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_NumberOfPosts_js__WEBPACK_IMPORTED_MODULE_6__["default"], props), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_PostLayout_js__WEBPACK_IMPORTED_MODULE_7__["default"], props), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_PostCategory_js__WEBPACK_IMPORTED_MODULE_8__["default"], props), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_SelectTaxonomy_js__WEBPACK_IMPORTED_MODULE_9__["default"], props), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_CategoryFilter_js__WEBPACK_IMPORTED_MODULE_10__["default"], props), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_SortSelect_js__WEBPACK_IMPORTED_MODULE_11__["default"], props))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", (0,_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    className: "WPGL__Container"
  }, blockProps), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("h1", {
    className: ""
  }, "WPGL POSTS"), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("h3", {
    className: ""
  }, "Post Type: ", props.attributes.post_type, "      "), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("h3", {
    className: ""
  }, "Number of Post Per Page:", props.attributes.posts_per_page, " "), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("h3", {
    className: ""
  }, "Post Layout:  ", props.attributes.layout, "    "), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("h3", {
    className: ""
  }, "Category: ", props.attributes.category_name, "      "), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("h3", {
    className: ""
  }, "Taxomony: ", props.attributes.taxonomy, "      "), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("h3", {
    className: ""
  }, "Show Filter: ", props.attributes.category_filter, "      "), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("h3", {
    className: ""
  }, "Order: ", props.attributes.order, "      ")));
}

/***/ }),

/***/ "./src/save.js":
/*!*********************!*\
  !*** ./src/save.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ save)
/* harmony export */ });
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__);
/**
 * Retrieves the translation of text.
 *
 * @see https://developer.wordpress.org/block-editor/packages/packages-i18n/
 */

/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/packages/packages-block-editor/#useBlockProps
 */


/**
 * The save function defines the way in which the different attributes should
 * be combined into the final markup, which is then serialized by the block
 * editor into `post_content`.
 *
 * @see https://developer.wordpress.org/block-editor/developers/block-api/block-edit-save/#save
 *
 * @return {WPElement} Element to render.
 */

function save() {
  return null;
}

/***/ }),

/***/ "./src/index.scss":
/*!************************!*\
  !*** ./src/index.scss ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "@wordpress/block-editor":
/*!*************************************!*\
  !*** external ["wp","blockEditor"] ***!
  \*************************************/
/***/ ((module) => {

module.exports = window["wp"]["blockEditor"];

/***/ }),

/***/ "@wordpress/blocks":
/*!********************************!*\
  !*** external ["wp","blocks"] ***!
  \********************************/
/***/ ((module) => {

module.exports = window["wp"]["blocks"];

/***/ }),

/***/ "@wordpress/components":
/*!************************************!*\
  !*** external ["wp","components"] ***!
  \************************************/
/***/ ((module) => {

module.exports = window["wp"]["components"];

/***/ }),

/***/ "@wordpress/element":
/*!*********************************!*\
  !*** external ["wp","element"] ***!
  \*********************************/
/***/ ((module) => {

module.exports = window["wp"]["element"];

/***/ }),

/***/ "@wordpress/i18n":
/*!******************************!*\
  !*** external ["wp","i18n"] ***!
  \******************************/
/***/ ((module) => {

module.exports = window["wp"]["i18n"];

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/extends.js":
/*!************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/extends.js ***!
  \************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _extends)
/* harmony export */ });
function _extends() {
  _extends = Object.assign ? Object.assign.bind() : function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };
  return _extends.apply(this, arguments);
}

/***/ }),

/***/ "./src/block.json":
/*!************************!*\
  !*** ./src/block.json ***!
  \************************/
/***/ ((module) => {

module.exports = JSON.parse('{"$schema":"https://schemas.wp.org/trunk/block.json","apiVersion":2,"name":"create-block/custom-grid","version":"0.1.0","title":"Custom Grid Block Plugin ","category":"common","attributes":{"post_type":{"type":"string","default":"posts"},"category_name":{"type":"string","default":"Uncategorized"},"posts_per_page":{"type":"number","default":1},"layout":{"type":"string","default":"Single"},"category_filter":{"type":"string","default":"no"},"order":{"type":"string","default":"ASC"},"taxonomy":{"type":"string","default":"category"}},"icon":"grid-view","description":"This blocks add an elegant way to show post types in grids, sliders, masonry and much more.","supports":{"html":false},"textdomain":"custom-grid","editorScript":"file:./index.js","editorStyle":"file:./index.css","style":"file:./style-index.css","script":"file:./frontend.js"}');

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.scss */ "./src/index.scss");
/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./edit */ "./src/edit.js");
/* harmony import */ var _save__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./save */ "./src/save.js");
/* harmony import */ var _block_json__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./block.json */ "./src/block.json");
/**
 * Registers a new block provided a unique name and an object defining its behavior.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-registration/
 */


/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * All files containing `style` keyword are bundled together. The code used
 * gets applied both to the front of your site and to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */
// import './style.scss';

/**
 * Internal dependencies
 */




/**
 * Every block starts by registering a new block type definition.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-registration/
 */

(0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__.registerBlockType)(_block_json__WEBPACK_IMPORTED_MODULE_4__.name, {
  /**
   * @see ./edit.js
   */
  edit: _edit__WEBPACK_IMPORTED_MODULE_2__["default"],

  /**
   * @see ./save.js
   */
  save: _save__WEBPACK_IMPORTED_MODULE_3__["default"]
});
})();

/******/ })()
;
//# sourceMappingURL=index.js.map